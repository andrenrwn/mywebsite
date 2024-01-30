// Bringing in the required import from 'react-router-dom'
import { Outlet } from "react-router-dom";
import Nav from "./components/NavTabs";
import Footer from "./components/Footer";


function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <div className="flex flex-col h-full">
      <header className="justify-between">
        <h1 className="text-5xl font-bold fg-primary m-9 p-2">andrenrwn</h1>
        <Nav />
      </header>
      <section className="hero"><h3 className="text-3xl font-bold">let's build web pages!</h3></section>
      <main className="mx-3 flex flex-col min-h-screen">
        <Outlet />
      </main>
      <footer clasName="mt-auto">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
