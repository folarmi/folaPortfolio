import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && message) {
      const form = e.target;
      const data = new FormData(form);
      const xhr = new XMLHttpRequest();
      xhr.open(form.method, form.action);
      xhr.setRequestHeader("Accept", "application/json");
      xhr.onreadystatechange = () => {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
          setName("");
          setEmail("");
          setMessage("");
        }
      };
      xhr.send(data);
      form.reset();
    }
  };
  return (
    <div>
      <Header />
      <div>
        <div className="grid min-h-screen place-items-center">
          <div className="w-12/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12 -mt-8 lg:-mt-40 bg-image">
            <h1 className="text-xl font-semibold">
              Hello there 👋,{" "}
              <span className="font-normal">i would love to hear from you</span>
            </h1>
            <form
              onSubmit={handleSubmit}
              action="https://formspree.io/f/mwkwwkpd"
              method="post"
              className="mt-6"
              id="myForm"
            >
              <div className="flex justify-between gap-3">
                <span className="">
                  <label
                    htmlFor="Name"
                    className="block text-xs font-semibold text-gray-600 uppercase lg:w-96"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="firstname"
                    placeholder="John"
                    autoComplete="given-name"
                    className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </span>
              </div>
              <label
                htmlFor="email"
                className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
              >
                E-mail
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="john.doe@company.com"
                autoComplete="email"
                className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label
                htmlFor="message"
                className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
              >
                Message
              </label>
              <textarea
                id="message"
                type="password"
                name="password"
                cols="50"
                rows="4"
                placeholder="Please leave a message..."
                className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>

              <button
                type="submit"
                className="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none"
              >
                Send a Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
