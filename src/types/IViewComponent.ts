import { CSSProperties } from "react";
import IViewComponentAdditive from "./IViewComponentAdditive";
import IViewComponentMetadata from "./IViewComponentMetadata";
import IViewComponentProps from "./IViewComponentProps";

/* eslint-disable semi */
export default interface IViewComponent {
  /* The component's UUID. */
  id: string
  /* The component's metadata. */
  metadata: IViewComponentMetadata
  /* The component's React component. */
  component: (props: IViewComponentProps) => JSX.Element
  /* The component's accepted values. */
  values: {
    /* The commponent's style. */
    style?: CSSProperties
    /* If the compoent contains text, this is the text. */
    content?: string
  }
  /* The component's children. */
  children: IViewComponent[]
  /* The component's current additives. */
  additives: IViewComponentAdditive[]
  /* The component's tags. */
  tags?: string[]
}
