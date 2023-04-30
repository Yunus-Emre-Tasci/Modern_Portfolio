import { FunctionComponent } from "react";
import { Category } from "../types";

export const NavItem: FunctionComponent<{
  category: Category | "all";
  handlerFilterCategory: Function;
  active: string;
}> = ({ category, handlerFilterCategory, active }) => {
  let className = "font-semibold capitalize cursor-pointer hover:text-orange";
  if (active === category) className += " text-orange";

  return (
    <li className={className} onClick={() => handlerFilterCategory(category)}>
      {category}
    </li>
  );
};

const ProjectsNavbar: FunctionComponent<{
  handlerFilterCategory: Function;
  active: string;
}> = (props) => {
  return (
    <div className="flex px-3 pt-3 pb-1 space-x-3 overflow-x-auto tracking-wide list-none border-b-2 shadow mt-7 ms-3">
      <NavItem category="all" {...props} />
      <NavItem category="react" {...props} />
      <NavItem category="mongo" {...props} />
      <NavItem category="django" {...props} />
      <NavItem category="node" {...props} />
    </div>
  );
};

export default ProjectsNavbar;
