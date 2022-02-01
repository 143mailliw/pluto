import { IconProp } from "@fortawesome/fontawesome-svg-core";
import IViewComponent from "./IViewComponent";
import IViewComponentAdditive from "./IViewComponentAdditive";

/* eslint-disable semi */
interface IViewComponentMetadata {
  /* The name of the component. */
  name: string
  /* The additives supported by the component. */
  additives: IViewComponentAdditive[]
  /* The description of the component. */
  description: string
  /* The component's icon. */
  icon: IconProp
  /* A function for creating a new instance of the component. If this value is missing, assume the component is unconstructable. */
  componentConstructor?: () => IViewComponent;
}

export default IViewComponentMetadata;
