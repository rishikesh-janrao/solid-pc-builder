import { useContext } from "solid-js";
import { A, useLocation } from "solid-start";
import {
  NavigationContext,
} from "~/contexts/ConfigContext";
import "./Navigation.css";

function Navigation() {
  const { pathname } = useLocation();
  const isPathActive = (path) =>
    path == pathname
      ? "border-gray-100"
      : "border-transparent hover:border-sky-300";

  const { MainNavigation: mainMenu } = useContext(NavigationContext);
  return (
    <nav class="bg-primary flex portrait:hidden justify-between">
      <ul class="container flex justify-center p-3 text-gray-200 main-menu">
        {[...mainMenu].map(({ guid, route, route_alt, route_name }) => (
          <li
            key={guid}
            className={`border-b-2 ${isPathActive(
              route
            )} flex mx-4 justify-center items-center uppercase main-menu__${guid}`}
          >
            <A href={route}>{route_name}</A>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
