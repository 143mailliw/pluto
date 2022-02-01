import { createContext } from "react";
import IViewComponent from "./types/IViewComponent";

interface ITreeContext {
  tree?: IViewComponent;
  incrementCounter: () => void;
  isEditing: boolean;
}

export default createContext<ITreeContext>({
  incrementCounter: () => {return null;},
  isEditing: false
});
