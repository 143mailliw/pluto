import MenuCollapsed from "../components/menu/MenuCollapsed";
import MenuHeader from "../components/menu/MenuHeader";
import MenuItem from "../components/menu/MenuItem";
import ViewComponentIndex from "../views/components/ViewComponentIndex";

function EditorComponents(): JSX.Element {
  return (
    <div className="w-72 h-full border-r border-gray-200 dark:border-gray-700 pt-1 flex-shrink-0 overflow-y-auto">
      <MenuHeader>Components</MenuHeader>
      {ViewComponentIndex.map((category) => (
        <MenuCollapsed
          key={category.name}
          icon={category.icon}
          title={category.name}
          intent={category.intent}
          openByDefault
        >
          {Object.values(category.components).map((component) => (
            <MenuItem
              key={component.name}
              icon={component.icon}
              intent={category.intent}
              draggable
              onDragStart={(e) => {
                e.dataTransfer.setData("text/plain", category.name + "." + component.name);
              }}
            >{component.name}</MenuItem>
          ))}
        </MenuCollapsed>
      ))}
      {/*
      TO BE IMPLEMENTED:

      <MenuCollapsed
        title="Layout"
        icon={faThLarge}
        intent={Intent.PRIMARY}
        openByDefault={true}
      >
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
      </MenuCollapsed> */}
    </div>
  );
}

export default EditorComponents;
