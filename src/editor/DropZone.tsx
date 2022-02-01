import { HTMLProps, useState } from "react";
import IViewComponentMetadata from "../types/IViewComponentMetadata";
import ViewComponentIndex from "../views/components/ViewComponentIndex";

interface IDropZoneProps extends HTMLProps<HTMLDivElement> {
  onDropComponent: (component: IViewComponentMetadata) => void;
  fullSize?: boolean;
}

function DropZone(props: IDropZoneProps): JSX.Element {
  const [dragging, setDragging] = useState(false);
  
  return (
    <div
      {...props}
      className={props.fullSize ? "w-full h-full flex" : ""}
      onDragOver={(e) => e.preventDefault()}
      onDragEnter={() => setDragging(true)}
      onDragExit={() => setDragging(false)}
      onDrop={(e) => {
        e.preventDefault();
        setDragging(false);

        const data = e.dataTransfer.getData("text/plain");

        if(data) {
          const split = data.split(".");

          if(split.length === 2) {
            console.log(split); 
            const component = ViewComponentIndex.filter(c => c.name === split[0])[0].components[split[1]];
            props.onDropComponent(component);
          }
        }
      }}
    >
      {props.fullSize ? <div className={`w-full h-full border-2 border-dashed p-2 text-center rounded flex ${dragging ? "text-blue-600 dark:text-blue-400 border-blue-600 dark:border-blue-400" : ""}`}>
        <div className="text-xl font-extrabold m-auto">
          Drop a component here to add it to the page.
        </div>
      </div> : <div className={`${dragging ? "border-2 border-blue-600 dark:border-blue-400 rounded z-50 -mt-3 -mb-2.5 px-1.5 pb-6 h-8 bg-blue-400 dark:bg-blue-600" : "-mt-2.5 -mb-2 px-2 h-4"} py-2 transition opacity-0`}>
        <div className="border-t border-r border-transparent"/>
      </div>}
    </div>
  );
}

export default DropZone;
