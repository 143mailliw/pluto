import { IconProp } from "@fortawesome/fontawesome-svg-core";
import IViewComponentAdditive from "./IViewComponentAdditive";

/* eslint-disable semi */
export default interface IViewComponent {
  /** The name of the component. */
  name: string
  /** The additives supported by the component. */
  additives: IViewComponentAdditive[]
  /** The description of the component. */
  description: string
  /** The component's icon. */
  icon: IconProp
}
