export default function Tinkerings() {
  const myworks = [
    {
      name: "accessibility",
      technology: "w3c accessibility",
      description:
        "Accessibility Insights helps website builders to followW3C accessibility standards, ensuring those with vision impairment and motor impairment can use high contrast, screen readers, and keypresses when using your web application",
      image: "work1_card3.png",
      altimage: "image of a website",
      link: "https://andrenrwn.github.io/urban-octo-telegram/Develop/",
    },
    {
      name: "movies",
      technology: "html/css",
      description: "This is a fan movie website that showcases a handcrafted CSS fixed box model and transitions",
      image: "work2_card.png",
      altimage: "ghibli movies website image",
      link: "https://andrenrwn.github.io/movies-website/publish/",
    },
    {
      name: "password generator",
      technology: "html/css/javascript",
      description:
        "This random string password generator uses JavaScript and the DOM API to present an easy user interface",
      image: "work3_card.png",
      altimage: "password generator website",
    },
    {
      name: "day planner",
      technology: "bootstrap, dayjs, localstore",
      description:
        "This day planner saves its data on the browser's localstore. Uses bootstrap and dayjs client APIs, and JavaScript controls",
      image: "work4_card_dayplanner.png",
      altimage: "day planner website",
      link: "https://andrenrwn.github.io/dayplanner/",
    },
    {
      name: "place crawler",
      technology: "google places+maps api, unsplash",
      description:
        "This team project uses the Google maps and places API and other resources to build a travel plan for a place crawl",
      image: "work5_card_placecrawler.png",
      altimage: "place crawler website",
      link: "https://acantu9.github.io/team-5-project/",
    },
    {
      name: "ui frameworks",
      technology: "daisyUI, tailwind CSS",
      description:
        "A weather dashboard using different timezones and the openweather API. Runs entirely from the clientside/browser.",
      image: "work6_card_weatherdashboard.png",
      altimage: "weather dashboard",
      link: "https://andrenrwn.github.io/weatherdashboard/",
    },
    {
      name: "readme generator",
      technology: "terminal ui, blessed library",
      description: "readme markdown editor using the blessed library terminal windows / user interface",
      image: "work7_card_readmegenerator.png",
      altimage: "readme generator text user interface",
      link: "https://github.com/andrenrwn/readme-generator",
    },
    {
      name: "oop",
      technology: "terminal libraries, object classes, promises (parallel threads)",
      description: "an svg logo maker which uses object oriented programming concepts (classes, inheritance)",
      image: "work8_card_svglogomaker.png",
      altimage: "svg logo maker",
      link: "https://github.com/andrenrwn/svglogomaker",
    },
    {
      name: "notetaker",
      technology: "client & server",
      description: "a template note taking clientside web app that stores data on the serverside in a file",
      image: "work9_card_notetaker.png",
      altimage: "notetaker web page",
      link: "https://github.com/andrenrwn/notetaker",
    },
    {
      name: "employee tracker",
      technology: "nodeJS, inquirer, mysql api",
      description: "terminal application to manage an employee database using mysql and sequelize",
      image: "work10_card_employeetracker.png",
      altimage: "employee tracker",
      link: "https://github.com/andrenrwn/employeetracker",
    },
    {
      name: "mvc",
      technology: "model-view controller, handlebar templates",
      description:
        "This is a posting/blogging application where different authenticated users can post articles and add comments to the articles",
      image: "work12_card_techblog.png",
      altimage: "the tech blog",
      link: "https://github.com/andrenrwn/techblog",
    },
    {
      name: "orm, mvc",
      technology: "expressJS, sequelize, auth & sessions, templates",
      description: "This application aims to aid a user to do plan travel destinations",
      image: "work13_card_travelboard.png",
      altimage: "never travel board",
      link: "https://github.com/andrenrwn/Never-Travel-Board",
    },
    {
      name: "regex tutorial",
      technology: "markdown, regex, gist",
      description: "a simple, yet another regex tutorial, rendered as a gist in markdown format",
      image: "work14_card_regextutorial.png",
      altimage: "regex tutorial",
      link: "https://gist.github.com/andrenrwn/3f57e3a5ae18dac93baf97460606148f",
    },
    {
      name: "nosql",
      technology: "mongodb, mongoose odm, expressJS",
      description: "a backend API built using mongodb and the mongoose object data modeller",
      image: "work15_card_nosqlodm.png",
      altimage: "mongodb backend",
      link: "https://github.com/andrenrwn/sharedthoughts",
    },
    {
      name: "react, graphql",
      technology: "react, graphql, vite",
      description: "save book search results, migrate an express routes API to graphQL/Apollo client/server",
      image: "work18_card_gbooks.png",
      altimage: "mongodb backend",
      link: "https://github.com/andrenrwn/gbooks_gql",
    },
    {
      name: "coming soon",
      technology: "",
      description: "This is a placeholder for future works.",
      image: "o365_opening_soon_1_2.jpg",
      altimage: "sign: opening soon",
      link: "/",
    },
    // {
    //   name: "",
    //   technology: "",
    //   description: "",
    //   image: "",
    //   altimage: "",
    //   link: "",
    // },
  ];

  return (
    <div className="fg-primary text-primary">
      <div>
        <aside className="mt-3">
          <h1 className="text-5xl">Tinkerings</h1>
          <h2 className="text-3xl">(my works)</h2>
        </aside>
        <div className="grid grid-cols-2">
          {myworks.map((item) => {
            return (
              <section className="m-2">
                <a className="card" alt="coming soon" href={item.link} target="_blank">
                  <label className="cardlabel">
                    <h3 className="text-2xl font-bold">{item.name}</h3>
                    <details>
                      <summary className="">{item.technology}</summary>
                      <p className="text-sm">{item.description}</p>
                    </details>
                  </label>
                  <img src={"../assets/images/" + item.image} className="cardimage" alt={item.altimage} />
                </a>{" "}
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}
