import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faMousePointer, faPaintRoller, faThLarge } from "@fortawesome/free-solid-svg-icons";
import Intent from "../../components/Intent";
import IViewComponentMetadata from "../../types/IViewComponentMetadata";
import BasicVC from "./layout/BasicVC";

export interface IViewComponentIndex {
  name: string,
  intent: Intent,
  icon: IconProp,
  components: Record<string, IViewComponentMetadata>
}

const ViewComponentIndex: IViewComponentIndex[] = [
  {
    name: 'Layout',
    intent: Intent.PRIMARY,
    icon: faThLarge,
    components: {
      "Basic": BasicVC
    }
  },
  {
    name: 'Display',
    intent: Intent.DANGER,
    icon: faPaintRoller,
    components: {}
  },
  {
    name: 'Interactivity',
    intent: Intent.SUCCESS,
    icon: faMousePointer,
    components: {}
  }
];

export default ViewComponentIndex;
