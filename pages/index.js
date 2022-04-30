import { Fragment, useState } from "react";
import { useRouter } from "next/router";

import Meta from "../components/Meta";
import ShareButton from "../components/ShareButton";

export default function Home() {
  const [query, setQuery] = useState({
    a: "",
    b: "",
  });

  function handleChange(e) {
    setQuery({ ...query, [e.target.name]: e.target.value });
  }

  const pageTitle = `მე გავმიჯნე ${query.a} და ${query.b}`;
  const pageUrl = "http://www.gamijne.netlify.app";

  return (
    <Fragment>
      <Meta title={pageTitle} url={pageUrl} />
      <main className="w-screen h-screen grid place-items-center">
        <section className="flex flex-col justify-start items-center border w-1/2 py-6 space-y-4">
          <p>უნდა გავმიჯნოთ</p>
          <input
            type="text"
            name="a"
            value={query.a}
            onChange={handleChange}
            className="samijni"
          />
          <p>და</p>
          <input
            type="text"
            name="b"
            value={query.b}
            onChange={handleChange}
            className="samijni"
          />
          {/* <div className="pt-8">
            <button className="btn">გამიჯნე!</button>
          </div> */}
          <ShareButton url={pageUrl} />
        </section>
      </main>
    </Fragment>
  );
}
