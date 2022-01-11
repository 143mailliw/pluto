import { IconProp } from "@fortawesome/fontawesome-svg-core";

/* eslint-disable semi */
export default interface IViewComponentAdditive {
  /** The additive's name. */ 
  name: string
  /** The additive's icon. */
  icon: IconProp
  /** The additive's friendly name. */
  friendlyName: string
}
