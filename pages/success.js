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
          content="https://i.postimg.cc/VLWbVqRB/thumb.png"
        />
        <meta property="og:image:alt" content="mijna" />
        <meta property="og:type" content="website" />
      </Head>
      <ConfettiRain />
      <main className="grid h-screen w-screen place-items-center bg-gradient-to-tr from-blue-600 to-emerald-300">
        <section className="flex w-3/4 flex-col items-center justify-start space-y-10 rounded-xl bg-white py-6 font-nusx shadow-xl sm:w-1/3">
          <div className="flex flex-col items-center justify-start space-y-6 px-4">
            <p className="font-caps text-3xl">გილოცავ!</p>
            <div className="flex w-full flex-col items-center justify-start space-y-2 break-words text-center text-xl">
              <p className="max-w-full break-all font-bold">
                {a} და {b}
              </p>
              <p>წარმატებით გაიმიჯნა!</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start space-y-5">
            <ShareButton url={ogurl} />
            <button
              className="btn bg-amber-400 hover:bg-amber-500 hover:shadow-xl"
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
