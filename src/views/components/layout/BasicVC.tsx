import { faBorderNone } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { v4 } from "uuid";
import DropZone from "../../../editor/DropZone";
import TreeContext from "../../../TreeContext";
import IViewComponent from "../../../types/IViewComponent";
import IViewComponentAdditive from "../../../types/IViewComponentAdditive";
import IViewComponentMetadata from "../../../types/IViewComponentMetadata";

const BasicVC: IViewComponentMetadata = {
  name: "Basic",
  additives: [],
  description: "A basic view component.",
  icon: faBorderNone,
  componentConstructor: () => new BasicVCInstance()
};

class BasicVCInstance implements IViewComponent {
  public id = v4();
  public metadata = BasicVC;
  public additives: IViewComponentAdditive[] = [];
  public children: IViewComponent[] = [];
  public values: Record<string, any> = [];

  public component(component: IViewComponent): JSX.Element {
    return (
      <div className="p-4 bg-red-200 border-2 border-red-600 flex flex-col flex-shrink-0 flex-grow-0 h-max">
        <TreeContext.Consumer>
          {(context) => (<>
            {component.children.map((value, index) => (<>
              <DropZone 
                onDropComponent={(newComponent: IViewComponentMetadata) => {
                  if(newComponent.componentConstructor) {
                    // i don't understand why this is necessary
                    // eslint-disable-next-line
                    component.children.splice(index, 0, newComponent.componentConstructor());
                    console.log(component.children);
                    context.incrementCounter();
                  }
                }}
              />

              {React.createElement(value.component, value)}
            </>))}

            <DropZone 
              fullSize={component.children.length === 0}
              onDropComponent={(newComponent: IViewComponentMetadata) => {
                if(newComponent.componentConstructor) {
                  // i don't understand why this is necessary
                  // eslint-disable-next-line
                  component.children.push(newComponent.componentConstructor());
                  console.log(component.children);
                  context.incrementCounter();
                }
              }}
            />
          </>)}
        </TreeContext.Consumer>
      </div>
    );
  }

  constructor() {
    this.component.bind(this);
  }
}

export default BasicVC;
