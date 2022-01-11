import { faBolt, faBorderAll, faBorderNone, faBug, faCheckSquare, faCog, faDotCircle, faEdit, faExclamationCircle, faExclamationTriangle, faFile, faFont, faHome, faImage, faLightbulb, faLink, faList, faMousePointer, faPaintRoller, faPause, faPlay, faPlayCircle, faProjectDiagram, faSlash, faSpinner, faStop, faTag, faThLarge, faThList, faWindowRestore, faWrench } from "@fortawesome/free-solid-svg-icons";
import Button from "../components/controls/Button";
import Divider from "../components/display/Divider";
import Intent from "../components/Intent";
import MenuCollapsed from "../components/menu/MenuCollapsed";
import MenuHeader from "../components/menu/MenuHeader";
import MenuItem from "../components/menu/MenuItem";

function Editor(): JSX.Element {
  return (
    <div
      className="w-full h-full flex flex-col bg-gray-50 dark:bg-gray-900 dark:text-white"
    > 
      <div
        className="grid grid-cols-3 grid-rows-1 border-b border-gray-200 dark:border-gray-700 w-full"
      >
        <div className="flex text-3xl font-extrabold leading-none ml-1.5 space-x-2">
          <Button
            icon={faHome}
            minimal
            className="inline-block my-auto"
          />
          <Button
            icon={faProjectDiagram}
            minimal
            className="inline-block my-auto"
          />
          <Divider />
          <Button
            icon={faBolt}
            minimal
            className="inline-block my-auto"
          >Actions</Button>
          <Button
            icon={faWindowRestore}
            minimal
            className="inline-block my-auto"
          >Views</Button>
          <Button
            icon={faList}
            minimal
            className="inline-block my-auto cote"
          >Types</Button>
        </div>
        <div className="ml-auto mr-auto flex h-full px-1.5 py-1.5 border-x border-gray-200 dark:border-slate-700 bg-gray-100 dark:bg-slate-800 w-96">
          <Button
            icon={faPlayCircle}
            intent={Intent.SUCCESS}
          />
          <div className="m-auto text-center">
            <div className="font-bold text-sm leading-none">
              Example View
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-300">
              0 errors
            </div>
          </div>
          <Button
            icon={faCog}
          />
        </div>
        <div className="ml-auto my-auto mr-1.5">
          <Button
            icon={faWrench}
            minimal
          />
          <Button
            icon={faExclamationCircle}
            minimal
          />
          <Button
            icon={faBug}
            minimal
          />
        </div>
      </div>
      <div
        className="flex w-full h-full overflow-hidden"
      >
        <div className="w-72 h-full border-r border-gray-200 dark:border-gray-700 pt-1 flex-shrink-0">
          <MenuHeader>Components</MenuHeader>
          <MenuCollapsed
            title="Layout"
            icon={faThLarge}
            intent={Intent.PRIMARY}
            openByDefault={true}
          >
            <MenuItem
              icon={faBorderNone}
              intent={Intent.PRIMARY}
            >Basic</MenuItem>
            <MenuItem
              icon={faThList}
              intent={Intent.PRIMARY}
            >List</MenuItem>
            <MenuItem
              icon={faThLarge}
              intent={Intent.PRIMARY}
            >Grid</MenuItem>
            <MenuItem
              icon={faPause}
              intent={Intent.PRIMARY}
            >Flex</MenuItem>
            <MenuItem
              icon={faBorderAll}
              intent={Intent.PRIMARY}
            >Table</MenuItem>
            <MenuItem
              icon={faFile}
              intent={Intent.PRIMARY}
            >Page</MenuItem>
          </MenuCollapsed>
          <MenuCollapsed
            title="Display"
            icon={faPaintRoller}
            intent={Intent.DANGER}
            openByDefault
          >
            <MenuItem
              icon={faFont}
              intent={Intent.DANGER}
            >Text</MenuItem>
            <MenuItem
              icon={faFont}
              intent={Intent.DANGER}
            >Markdown</MenuItem>
            <MenuItem
              icon={faFont}
              intent={Intent.DANGER}
            >Label</MenuItem>
            <MenuItem
              icon={faFile}
              intent={Intent.DANGER}
            >File Preview</MenuItem>
            <MenuItem
              icon={faImage}
              intent={Intent.DANGER}
            >Image</MenuItem>
            <MenuItem
              icon={faLink}
              intent={Intent.DANGER}
            >Breadcrumbs</MenuItem>
            <MenuItem
              icon={faExclamationTriangle}
              intent={Intent.DANGER}
            >Notice</MenuItem>
            <MenuItem
              icon={faSlash}
              intent={Intent.DANGER}
            >Divider</MenuItem>
            <MenuItem
              icon={faSpinner}
              intent={Intent.DANGER}
            >Progress Bar</MenuItem>
            <MenuItem
              icon={faTag}
              intent={Intent.DANGER}
            >Tag</MenuItem>
            <MenuItem
              icon={faExclamationCircle}
              intent={Intent.DANGER}
            >Callout</MenuItem>
          </MenuCollapsed>
          <MenuCollapsed
            title="Interactivity"
            intent={Intent.WARNING}
            icon={faMousePointer}
            openByDefault
          >
            <MenuItem
              icon={faStop}
              intent={Intent.WARNING}
            >Button</MenuItem>
            <MenuItem
              icon={faCheckSquare}
              intent={Intent.WARNING}
            >Checkbox</MenuItem>
            <MenuItem
              icon={faDotCircle}
              intent={Intent.WARNING}
            >Option</MenuItem>
            <MenuItem
              icon={faEdit}
              intent={Intent.WARNING}
            >Textbox</MenuItem>
            <MenuItem
              icon={faEdit}
              intent={Intent.WARNING}
            >Text Area</MenuItem>
            <MenuItem
              icon={faFont}
              intent={Intent.WARNING}
            >Markdown</MenuItem>
          </MenuCollapsed>
        </div>
        <div className="flex flex-col mx-8 w-full h-full flex-shrink flex-grow-0 overflow-hidden">
          <div className="aspect-video w-full bg-gray-100 dark:bg-gray-800 m-auto rounded border border-gray-200 dark:border-gray-700 shadow-lg flex-shrink">

          </div>
        </div>
        <div className="w-72 h-full border-l border-gray-200 dark:border-gray-700 pt-1 flex-shrink-0">
          <MenuHeader>Properties</MenuHeader>
        </div>
      </div>
    </div>
  );
}

export default Editor;
