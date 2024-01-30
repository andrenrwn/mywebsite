export default function Contact() {
  return (
    <div className="">
      <div>
        <aside className="mt-3">
          <h1 className="text-5xl">Contact</h1>
        </aside>
        <section className="content m-2">
          <article className="">
            <div className="m-2">
              <h2>Contact Me</h2>
              <p>
                Contact: <a href="tel:+6512345678">+65 12345678</a>
              </p>
              <p>
                E-mail:{" "}
                <a href="mailto: 141073152+andrenrwn@users.noreply.github.com">
                  141073152+andrenrwn@users.noreply.github.com
                </a>
              </p>
            </div>
            <img src="./assets/images/photo_avatar.png" className="photoavatar" alt="my profile photo" target="_blank" />
          </article>
        </section>
      </div>
    </div>
  );
}
