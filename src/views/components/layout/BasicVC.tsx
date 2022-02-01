import { faBorderNone } from "@fortawesome/free-solid-svg-icons";
import { v4 } from "uuid";
import ContextMenu from "../../../components/controls/ContextMenu";
import MenuItem from "../../../components/menu/MenuItem";
import TreeContext from "../../../TreeContext";
import IViewComponent from "../../../types/IViewComponent";
import IViewComponentAdditive from "../../../types/IViewComponentAdditive";
import IViewComponentMetadata from "../../../types/IViewComponentMetadata";
import IViewComponentProps from "../../../types/IViewComponentProps";
import ComponentChildren from "../../ComponentChildren";
import ComponentClickHandler from "../../ComponentClickHandler";

const BasicVC: IViewComponentMetadata = {
  name: "Basic",
  additives: [],
  description: "A basic view component.",
  icon: faBorderNone,
  componentConstructor: () => new BasicVCInstance()
};

class BasicVCInstance implements IViewComponent {
  public id = v4();
  public metadata = BasicVC;
  public additives: IViewComponentAdditive[] = [];
  public children: IViewComponent[] = [];
  public values = {};

  public component(props: IViewComponentProps): JSX.Element {
    return (
      <ComponentClickHandler component={props.component} parent={props.parent}>
        <div className="p-4 bg-red-200 border-2 border-red-600 flex flex-col flex-shrink-0 flex-grow-0 h-max">
          <ComponentChildren
            parent={props.parent}
            component={props.component}
            allowDrop
          />
        </div>
      </ComponentClickHandler>
    );
  }

  constructor() {
    this.component.bind(this);
  }
}

export default BasicVC;
