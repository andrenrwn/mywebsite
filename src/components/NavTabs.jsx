import { Link, useLocation } from "react-router-dom";

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs() {
  const currentPage = useLocation().pathname;

  const menuItems = [
    { link: "/About", name: "About" },
    { link: "/Tinkerings", name: "Tinkerings" },
    { link: "/Contact", name: "Contact" },
    { link: "/Resume", name: "Resume" },
  ];

  return (
    <ul role="tablist" className="mymenu bg-transparent fg-base-100 tabs tabs-bordered tabs-lg font-bold bg-base-200">
      {menuItems.map((menuItem, index) => {
        return (
          <li key={index} role="tab" className={"mymenu hover:bg-base-300/50 tab " + (menuItem.link == currentPage ? "tab-active" : "")}>
            <Link to={menuItem.link}>{menuItem.name}</Link>
          </li>
        );
      })}
    </ul>
  );
}

export default NavTabs;
