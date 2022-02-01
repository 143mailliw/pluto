import EditorToolbar from "./EditorToolbar";
import EditorComponents from "./EditorComponents";
import EditorBody from "./EditorBody";
import EditorProperties from "./EditorProperties";
import IViewComponent from "../types/IViewComponent";
import { useState } from "react";
import { faVectorSquare } from "@fortawesome/free-solid-svg-icons";
import Callout from "../components/text/Callout";
import TreeContext from "../TreeContext";


function Editor(): JSX.Element {
  // we don't ever set the state for this object, we just need it to not change between renders
  const [tree] = useState<IViewComponent>({
    id: "root",
    metadata: {
      name: "root",
      additives: [],
      description: "",
      icon: faVectorSquare
    },
    children: [],
    values: {},
    additives: [],
    component: () => <Callout>layout error: root component was rendered</Callout>,
    tags: ["root", "readonly", "unrenderable", "unselectable"]
  });
  // React doesn't re-render if the content of an object changes, so we need to use a different method to force a re-render
  const [treeUpdateCount, setTreeUpdateCount] = useState(0);

  return (
    <div className="w-full h-full flex flex-col bg-gray-50 dark:bg-gray-900 dark:text-white"> 
      <EditorToolbar/>
      <div className="flex w-full h-full overflow-hidden">
        <TreeContext.Provider
          value={{
            tree,
            incrementCounter: () => {
              console.log("tree children", tree.children);
              setTreeUpdateCount(treeUpdateCount + 1);
            },
            isEditing: true
          }}
        >
          <EditorComponents/>
          <EditorBody rootComponent={tree} treeUpdateCount={treeUpdateCount}/>
          <EditorProperties/>
        </TreeContext.Provider>

      </div>
    </div>
  );
}

export default Editor;
