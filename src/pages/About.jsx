import useDocumentTitle from "../utils/useDocumentTitle";

export default function About() {
  useDocumentTitle("andrenrwn");

  return (
    <div className="">
      <div>
        <aside className="mt-3">
          <h1 className="text-5xl">About</h1>
        </aside>
        <section className="content m-2">
          <article className="max-md:flex-wrap">
            <div className="m-2">
              <h2>Welcome to my website</h2>
              <p className="mt-3">
                I am a tech enthusiast who loves to tinker and make things work. I am currently having fun dabbling in
                full stack app development. This site links to web applications that I have worked on. Any feedback and
                ideas are greatly appreciated.
              </p>
            </div>
            <img src="./assets/images/photo_avatar.png" className="photoavatar" alt="my profile photo" />
          </article>
        </section>
      </div>
    </div>
  );
}
