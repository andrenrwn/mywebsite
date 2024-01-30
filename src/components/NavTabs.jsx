import { Link, useLocation } from "react-router-dom";

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs() {
  const currentPage = useLocation().pathname;

  const menuItems = [
    { link: "/", name: "Home" },
    { link: "/About", name: "About" },
    { link: "/Tinkerings", name: "Tinkerings" },
    { link: "/Blog", name: "Blog" },
    { link: "/Contact", name: "Contact" },
  ];

  return (
      <div>
        <ul role="tablist" className="tabs tabs-lifted tabs-lg font-bold bg-base-200">
          {menuItems.map((menuItem) => {
            console.log(currentPage);
            return (
              <li role="tab" className={"tab " + (menuItem.link == currentPage ? "tab-active" : "")}>
                <Link to={menuItem.link}>{menuItem.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
  );
}

export default NavTabs;
