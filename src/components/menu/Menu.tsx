import { HTMLProps } from "react";

function Menu(props: HTMLProps<HTMLDivElement>) {
  return (
    <div {...props} className={`py-1 rounded bg-gray-200 dark:bg-gray-800 shadow-lg ${props.className ?? ""}`}/>
  );
}

export default Menu;
