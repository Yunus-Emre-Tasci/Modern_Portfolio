import { FunctionComponent } from "react";
import { Category } from "../types";

export const NavItem: FunctionComponent<{
  category: Category | "all";
  handlerFilterCategory: Function;
  active: string;
}> = ({ category, handlerFilterCategory, active }) => {
  let className = "capitalize cursor-pointer hover:text-green";
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
    <div className="flex px-3 py-2 space-x-3 overflow-x-auto list-none">
      <NavItem category="all" {...props} />
      <NavItem category="react" {...props} />
      <NavItem category="mongo" {...props} />
      <NavItem category="django" {...props} />
      <NavItem category="node" {...props} />
    </div>
  );
};

export default ProjectsNavbar;
