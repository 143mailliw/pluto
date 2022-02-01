import IViewComponentAdditive from "./IViewComponentAdditive";
import IViewComponentMetadata from "./IViewComponentMetadata";

/* eslint-disable semi */
export default interface IViewComponent {
  /* The component's UUID. */
  id: string
  /* The component's metadata. */
  metadata: IViewComponentMetadata
  /* The component's React component. */
  component: (component: IViewComponent) => JSX.Element
  /* The component's accepted values. */
  values: Record<string, any>
  /* The component's children. */
  children: IViewComponent[]
  /* The component's current additives. */
  additives: IViewComponentAdditive[]
  /* The component's tags. */
  tags?: string[]
}
