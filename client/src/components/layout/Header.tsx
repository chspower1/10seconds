import { useSelector } from "react-redux";
import { Menu, selectCurrentMenu } from "../../store/slice/currentMenuSlice";
import { Link } from "react-router-dom";

const MENUS = Object.values(Menu);

const Header = () => {
  const currentMenu = useSelector(selectCurrentMenu);
  const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  console.log(currentMenu);
  console.log(MENUS);
  return (
    <header className="flex justify-between px-10">
      <h1>10challenge</h1>

      <div>
        <li className="text-white text-lg flex gap-5">
          {MENUS.map((menu) => (
            <Link to="/">
              <ul className="cursor-pointer">{capitalizeFirstLetter(menu)}</ul>
            </Link>
          ))}
        </li>
      </div>
    </header>
  );
};
export default Header;
