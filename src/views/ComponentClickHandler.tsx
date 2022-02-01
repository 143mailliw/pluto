import { ReactNode } from "react";
import ContextMenu from "../components/controls/ContextMenu";
import MenuItem from "../components/menu/MenuItem";
import TreeContext from "../TreeContext";
import IViewComponent from "../types/IViewComponent";

interface IComponentClickHandlerProps {
  component: IViewComponent;
  parent: IViewComponent;
  children: ReactNode
}

function ComponentClickHandler(props: IComponentClickHandlerProps) {
  return (
    <TreeContext.Consumer>
      {(context) => (<>
        <ContextMenu
          menu={<div>
            <MenuItem
              onClick={() => {
                for(let i = 0; i < props.parent.children.length; i++) {
                  if(props.parent.children[i].id === props.component.id) {
                    props.parent.children.splice(i, 1);
                    context.incrementCounter();

                    break;
                  }
                }
              }}
            >Remove</MenuItem>
          </div>}
        >
          <div className="contents">
            {props.children}
          </div>
        </ContextMenu>
      </>)}
    </TreeContext.Consumer>
  );
}

export default ComponentClickHandler;
