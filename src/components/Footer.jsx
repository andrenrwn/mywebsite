import { Link, useLocation } from "react-router-dom";

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Footer() {
  const currentPage = useLocation().pathname;

  const menuItems = [
    { link: "/About", name: "About" },
    { link: "/Tinkerings", name: "Tinkerings" },
    { link: "/Contact", name: "Contact" },
    { link: "/Resume", name: "Resume" },
  ];

  return (
    <div className="w-full justify-center">
      <div className="join bg-base-200 w-full justify-center gap-2 py-2 rounded-b-none">
        <a className="badge badge-info" href="https://github.com/andrenrwn">
          Github
        </a>
        <a className="badge badge-info" href="https://www.linkedin.com/in/andre-nurwono-31762bb/">
          LinkedIn
        </a>
        <a className="badge badge-info" href="https://stackoverflow.com/users/22595101/andre-n">
          StackOverflow
        </a>
      </div>
      <ul className="join bg-base-200 w-full justify-center rounded-t-none">
        {menuItems.map((menuItem, index) => {
          return (
            <li key={"f" + index} className={"join-item btn " + (menuItem.link == currentPage ? "btn-active" : "")}>
              <Link to={menuItem.link}>{menuItem.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Footer;
