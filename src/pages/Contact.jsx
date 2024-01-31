import { useState } from "react";
import validateEmail from "../utils/utils.js";

export default function Contact() {
  // Set state variables for name, email and message using `useState`
  const [guestname, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = e.target;

    // return a set state value result based on input field
    let res;
    if (name === "guestname") {
      res = setName(value);
    } else if (name === "email") {
      res = setEmail(value);
    } else if (name === "message") {
      res = setMessage(value);
    }
    return res;
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // Alert the user their first and last name, clear the inputs
    alert(`Hello ${guestname}, your email is: ${email} and your message is: ${message}`);
    setName("");
    setEmail("");
    setMessage("");
  };

  const handleEmailValidation = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // Getting the value and name of the input which triggered the change
    const { name, value } = e.target;


    // return a set state value result based on input field
    let res;
    if (name === "email") {
      if (!validateEmail(value)) {
        alert(`Warning: Your email ${email} seems invalid, please recheck`);
      }
    }
  };

  return (
    <div className="">
      <div>
        <aside className="mt-3">
          <h1 className="text-5xl">Contact</h1>
        </aside>
        <section className="content m-2">
          <article className="flex flex-wrap">
            <div className="m-2">
              <h2>Contact Me</h2>
              <p>
                Contact: <a href="tel:+6512345678">+65 12345678</a>
              </p>
              <p>
                E-mail:{" "}
                <a
                  href={
                    "mailto:141073152+andrenrwn@users.noreply.github.com?subject=Contact form&from=" +
                    email +
                    "&body=Hello, this is " +
                    guestname +
                    "\n\n" +
                    message
                  }
                >
                  141073152+andrenrwn@users.noreply.github.com
                </a>
              </p>
            </div>
            <img
              src="./assets/images/photo_avatar.png"
              className="photoavatar"
              alt="my profile photo"
              target="_blank"
            />
            <div className="container gap-2">
              <h1>Hello {guestname}, please enter your contact information:</h1>
              <form className="form flex flex-col w-full justify-center gap-2" onSubmit={handleFormSubmit}>
                <input
                  className="input input-bordered input-info w-full"
                  value={guestname}
                  name="guestname"
                  onChange={handleInputChange}
                  type="text"
                  placeholder="Name"
                />
                <input
                  className="input input-bordered input-info w-full"
                  value={email}
                  name="email"
                  onChange={handleInputChange}
                  onBlur={handleEmailValidation}
                  type="text"
                  placeholder="email"
                />
                <input
                  className="input input-bordered input-info w-full"
                  value={message}
                  name="message"
                  onChange={handleInputChange}
                  type="text"
                  placeholder="type a message"
                />
                <a
                  className="btn btn-primary"
                  type="submit"
                  href={
                    "mailto:141073152+andrenrwn@users.noreply.github.com?subject=Contact form&from=" +
                    email +
                    "&body=Hello, this is " +
                    guestname +
                    "" +
                    message
                  }
                >
                  Send to 141073152+andrenrwn@users.noreply.github.com
                </a>
              </form>
            </div>
          </article>
        </section>
      </div>
    </div>
  );
}
