import { Fragment } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import ShareButton from "../components/ShareButton";
import ConfettiRain from "../components/ConfettiRain";

export async function getServerSideProps(context) {
  const { a, b } = context.query;
  const ogtitle = `მე გავმიჯნე ${a} და ${b}`;
  const ogurl = `https://gamijne.netlify.app/success?a=${a}&b=${b}`;

  return {
    props: {
      a,
      b,
      ogtitle,
      ogurl,
    },
  };
}

export default function Gamijnuli({ a, b, ogtitle, ogurl }) {
  const router = useRouter();

  return (
    <Fragment>
      <Head>
        <title>{ogtitle}</title>
        <meta property="og:title" content={ogtitle} />
        <meta property="og:url" content={ogurl} />
        <meta property="og:description" content="შენც შეგიძლია, გამიჯნო!" />
        <meta
          property="og:image"
          content="https://pbs.twimg.com/profile_images/672684217/notequalsymbol3.jpg"
        />
        <meta property="og:image:alt" content="mijna" />
        <meta property="og:type" content="website" />
      </Head>
      <ConfettiRain />
      <main className="w-screen h-screen grid place-items-center bg-sky-50">
        <section className="flex flex-col justify-start items-center w-3/4 sm:w-1/3  py-6 space-y-20 font-nusx">
          <div className="flex flex-col justify-start items-center space-y-6">
            <p className="text-lg">გილოცავ!</p>
            <div className="text-xl text-center flex flex-col items-center justify-start space-y-4">
              <p>შენ წარმატებით გამიჯნე</p>
              <span className="font-bold">
                {a} და {b}!
              </span>
            </div>
          </div>
          <div className="flex flex-col justify-start items-center space-y-5">
            <ShareButton url={ogurl} />
            <button
              className="btn bg-cyan-500 hover:bg-cyan-600 hover:shadow-xl"
              onClick={() => router.push("/")}
            >
              გამიჯნე თავიდან
            </button>
          </div>
        </section>
      </main>
    </Fragment>
  );
}
