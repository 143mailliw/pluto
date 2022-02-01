import { faBolt, faBug, faCog, faExclamationCircle, faHome, faList, faPlayCircle, faProjectDiagram, faWindowRestore, faWrench } from "@fortawesome/free-solid-svg-icons";
import Button from "../components/controls/Button";
import Divider from "../components/display/Divider";
import Intent from "../components/Intent";

function EditorToolbar(): JSX.Element {
  return (
    <div className="grid grid-cols-3 grid-rows-1 border-b border-gray-200 dark:border-gray-700 w-full">
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
      <div className="ml-auto mr-auto flex h-full py-1.5 w-96">
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
  );
} 

export default EditorToolbar;
