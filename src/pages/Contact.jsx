import { useState } from "react";
import { validateEmail } from "../utils/utils.js";
import useDocumentTitle from "../utils/useDocumentTitle";

export default function Contact() {
  useDocumentTitle("andrenrwn");

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

  const handleValidation = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // Getting the value and name of the input which triggered the change
    const { name, value } = e.target;

    // return a set state value result based on input field
    let res;
    if (name === "guestname") {
      const nameElement = document.getElementById("namewarning");
      if (!value) {
        nameElement.textContent = `It would be nice to know your name`;
        nameElement.classList.add("bg-warning");
      } else {
        nameElement.textContent = `Your name is: ${guestname}`;
        nameElement.classList.remove("bg-warning");
      }
    } else if (name === "email") {
      const emailElement = document.getElementById("emailwarning");
      if (!value) {
        emailElement.textContent = `Don't forget to enter your e-mail address`;
        emailElement.classList.add("bg-warning");
      } else if (!validateEmail(value)) {
        emailElement.textContent = `Warning: Your email "${email}" seems invalid, please recheck`;
        emailElement.classList.add("bg-warning");
      } else {
        emailElement.textContent = `your email: ${email}`;
        emailElement.classList.remove("bg-warning");
      }
    } else if (name === "message") {
      const messageElement = document.getElementById("messagewarning");
      if (!value) {
        messageElement.textContent = `It would be great if you could add a message`;
        messageElement.classList.add("bg-warning");
      } else {
        messageElement.textContent = `Your message: ${message}`;
        messageElement.classList.remove("bg-warning");
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
                    ", %0A%0A" +
                    message
                  }
                >
                  141073152+andrenrwn@users.noreply.github.com
                </a>
              </p>
              <p>or, you can post questions on my Github repository: <a className="font-bold" href="https://github.com/andrenrwn/mywebsite/issues">https://github.com/andrenrwn/mywebsite/issues</a></p>
            </div>
            <img
              src="./assets/images/photo_avatar.png"
              className="photoavatar"
              alt="my profile photo"
              target="_blank"
            />
            <div className="container gap-2">
              <h1 className="my-2">Hello {guestname}, please enter your contact information:</h1>
              <form className="form flex flex-col w-full justify-center gap-2" onSubmit={handleFormSubmit}>
                <p id="namewarning" className="rounded-box bg-transparent">enter your name</p>
                <input
                  className="input input-bordered input-info w-full"
                  value={guestname}
                  name="guestname"
                  onChange={handleInputChange}
                  onBlur={handleValidation}
                  type="text"
                  placeholder="Name"
                />
                <p id="emailwarning" className="rounded-box bg-transparent">enter your email</p>
                <input
                  className="input input-bordered input-info w-full"
                  value={email}
                  name="email"
                  onChange={handleInputChange}
                  onBlur={handleValidation}
                  type="text"
                  placeholder="email"
                />
                <p id="messagewarning" className="rounded-box bg-transparent">add your message here</p>
                <input
                  className="input input-bordered input-info w-full"
                  value={message}
                  name="message"
                  onChange={handleInputChange}
                  onBlur={handleValidation}
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
                    ",\n\n" +
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
