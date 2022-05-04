import { Fragment, useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import ShareButton from "../components/ShareButton";

export default function Home() {
  const router = useRouter();

  const [query, setQuery] = useState({
    a: "",
    b: "",
  });

  const btnDisabled = query.a === "" || query.b === "";

  function handleChange(e) {
    setQuery({ ...query, [e.target.name]: e.target.value });
  }

  function gamijvna() {
    router.push(`/success?a=${query.a}&b=${query.b}`);
  }

  return (
    <Fragment>
      <Head>
        <title>გამიჯნე ყველაფერი</title>
        <meta property="og:title" content="გამიჯნე ყველაფერი" />
        <meta property="og:description" content="რაც შენს გულს გაუხარდება" />
        <meta property="og:url" content="https://gamijne.netlify.app/" />
        <meta
          property="og:image"
          content="https://i.postimg.cc/cLgKyhvV/mijn.png"
        />
        <meta property="og:image:alt" content="mijna" />
        <meta property="og:type" content="website" />
      </Head>
      <main className="grid h-screen w-screen place-items-center bg-gradient-to-tr from-rose-500 to-yellow-400">
        <section className="flex w-3/4 flex-col items-center justify-start space-y-4 rounded-xl bg-white  px-6 py-6 shadow-xl sm:w-2/3 md:w-1/3">
          <p>უნდა გავმიჯნოთ</p>
          <input
            type="text"
            name="a"
            value={query.a}
            onChange={handleChange}
            className="input"
            placeholder="სპორტი"
          />
          <p>და</p>
          <input
            type="text"
            name="b"
            value={query.b}
            onChange={handleChange}
            className="input"
            placeholder="პოლიტიკა"
          />
          <div className="pt-8">
            <button
              className="btn bg-emerald-500 hover:bg-emerald-600  disabled:bg-teal-400 disabled:opacity-30 disabled:shadow-none"
              onClick={gamijvna}
              disabled={btnDisabled}
            >
              გამიჯნე
            </button>
          </div>
        </section>
      </main>
    </Fragment>
  );
}
