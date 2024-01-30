import { Link, useLocation } from "react-router-dom";

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Footer() {
  const currentPage = useLocation().pathname;

  const menuItems = [
    { link: "/", name: "Home" },
    { link: "/About", name: "About" },
    { link: "/Tinkerings", name: "Tinkerings" },
    { link: "/Blog", name: "Blog" },
    { link: "/Contact", name: "Contact" },
  ];

  return (
    <div className="w-full justify-center">
      <ul className="join bg-base-200 w-full justify-center">
        {menuItems.map((menuItem) => {
          console.log(currentPage);
          return (
            <li className={"join-item btn " + (menuItem.link == currentPage ? "btn-active" : "")}>
              <Link to={menuItem.link}>{menuItem.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Footer;
