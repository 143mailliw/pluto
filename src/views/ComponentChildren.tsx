import React from "react";
import DropZone from "../editor/DropZone";
import TreeContext from "../TreeContext";
import IViewComponent from "../types/IViewComponent";
import IViewComponentMetadata from "../types/IViewComponentMetadata";

interface IComponentChildrenProps { 
  component: IViewComponent
  parent: IViewComponent
  allowDrop: boolean
}

function ComponentChildren(props: IComponentChildrenProps) {
  return (
    <TreeContext.Consumer>
      {(context) => (<>
        {props.component.children.map((value, index) => (<>
          {props.allowDrop && <DropZone 
            onDropComponent={(newComponent: IViewComponentMetadata) => {
              if(newComponent.componentConstructor) {
                // i don't understand why this is necessary
                // eslint-disable-next-line
                props.component.children.splice(index, 0, newComponent.componentConstructor());
                context.incrementCounter();
              }
            }}
          />}

          {React.createElement(value.component, {component: value, parent: props.component})}
        </>))}

        {props.allowDrop && <DropZone
          fullSize={props.component.children.length === 0}
          onDropComponent={(newComponent: IViewComponentMetadata) => {
            if(newComponent.componentConstructor) {
              // i don't understand why this is necessary
              // eslint-disable-next-line
              props.component.children.push(newComponent.componentConstructor());
              context.incrementCounter();
            }
          }}
        />}
      </>)}
    </TreeContext.Consumer>
  );
}

export default ComponentChildren;
