import { Fragment, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import ShareButton from "../components/ShareButton";

export default function Home() {
  const router = useRouter();

  const [query, setQuery] = useState({
    a: "",
    b: "",
  });

  function handleChange(e) {
    setQuery({ ...query, [e.target.name]: e.target.value });
  }

  function gamijvna() {
    router.push(`/success?a=${query.a}&b=${query.b}`);
  }

  return (
    <Fragment>
      <Head>
        <title>გამიჯნე რაც გინდა!</title>
        <meta
          property="og:image"
          content="https://drive.google.com/file/d/1s5c0AvkWmF0KmrqHCyhH7KZgJL-niWkB/view?usp=sharing"
        />
        <meta property="og:image:alt" content="mijna" />
        <meta property="og:type" content="website" />
      </Head>
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
          <div className="pt-8">
            <button className="btn" onClick={gamijvna}>
              გამიჯნე!
            </button>
          </div>
          {/* <ShareButton title={title} url={url} /> */}
        </section>
      </main>
    </Fragment>
  );
}
