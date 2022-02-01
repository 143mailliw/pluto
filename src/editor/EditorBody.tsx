import React from "react";
import TreeContext from "../TreeContext";
import IViewComponent from "../types/IViewComponent";
import IViewComponentMetadata from "../types/IViewComponentMetadata";
import DropZone from "./DropZone";

interface IEditorBodyProps {
  rootComponent: IViewComponent;
  treeUpdateCount: number;
}


function EditorBody(props: IEditorBodyProps): JSX.Element {
  console.log(props.rootComponent);
  return (
    <div className="flex flex-col px-8 w-full h-full flex-shrink flex-grow-0 overflow-hidden bg-white dark:bg-gray-900">
      <div className="aspect-video w-full bg-gray-50 dark:bg-gray-900 m-auto rounded border border-gray-200 dark:border-gray-700 shadow-lg flex-shrink flex flex-col overflow-auto">
        <TreeContext.Consumer>
          {(context) => (<>
            {props.rootComponent.children.map((value, index) => {
              return (<>
               <DropZone
                  onDropComponent={(component: IViewComponentMetadata) => {
                    if(component.componentConstructor) {
                      // i don't understand why this is necessary
                      // eslint-disable-next-line
                      props.rootComponent.children.splice(index, 0, component.componentConstructor());
                      context.incrementCounter();
                    }
                  }}
                />
                {React.createElement(value.component, value)}
              </>);
            })}

            <DropZone 
              fullSize={props.rootComponent.children.length === 0}
              onDropComponent={(component: IViewComponentMetadata) => {
                if(component.componentConstructor) {
                  // i don't understand why this is necessary
                  // eslint-disable-next-line
                  props.rootComponent.children.push(component.componentConstructor());
                  context.incrementCounter();
                }
              }}
            />
         </>)}
        </TreeContext.Consumer>
      </div>
    </div>
  );
}

export default EditorBody;
