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

  const title = "გამიჯნე რაც გინდა";
  const ogtitle = `მე გავმიჯნე ${query.a} და ${query.b}`;
  const url = "https://gamijne.netlify.app/";

  return (
    <Fragment>
      <Meta title={title} url={url} ogtitle={ogtitle} />
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
          <ShareButton title={title} url={url} />
        </section>
      </main>
    </Fragment>
  );
}
