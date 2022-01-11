import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faCaretDown, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HTMLProps, useState } from "react";
import Intent from "../Intent";
import MenuItem from "./MenuItem";

interface IMenuItemProps extends HTMLProps<HTMLDivElement> {
  icon?: IconProp;
  description?: string;
  title: string;
  intent?: Intent;
  openByDefault?: boolean;
}

function MenuCollapsed(props: IMenuItemProps): JSX.Element {
  const [open, setOpen] = useState(props.openByDefault ?? false);

  return (
    <>
      <MenuItem 
        icon={props.icon} 
        rightElement={<FontAwesomeIcon icon={open ? faCaretDown : faCaretRight}/>} 
        description={props.description}
        onClick={() => setOpen(!open)}
        intent={props.intent}
      >
        {props.title}
      </MenuItem>
      <div className={`bg-gray-100 shadow-inner dark:bg-gray-800 ${!open ? "max-h-0 py-0 overflow-hidden" : ""}`}>
        {props.children}
      </div>
    </>
  );
}

export default MenuCollapsed;
