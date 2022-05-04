import { Fragment, useState } from "react";
import { isMobile } from "react-device-detect";

import { useRouter } from "next/router";
import Head from "next/head";

import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/material.css";

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

  async function shareMobile() {
    const data = {
      title: "გამიჯნე ყველაფერი",
      text: ogtitle,
      url: ogurl,
    };
    try {
      await navigator.share(data);
    } catch (err) {
      alert(
        "დაფიქსირდა ხარვეზი გაზიარებასთან დაკავშირებით. მყისიერად შეიქმნება კომისია და დაიწყება მიზეზების მოკვლევა"
      );
    }
  }

  const [linkCopied, setLinkCopied] = useState(false);

  function copyLink() {
    setLinkCopied(true);
    navigator.clipboard.writeText(ogurl);
    setTimeout(() => setLinkCopied(false), 1500);
  }

  return (
    <Fragment>
      <Head>
        <title>{ogtitle}</title>
        <meta property="og:title" content={ogtitle} />
        <meta property="og:url" content={ogurl} />
        <meta
          property="og:description"
          content="გამიჯნე ყველაფერი, რაც გასამიჯნია"
        />
        <meta
          property="og:image"
          content="https://i.postimg.cc/cLgKyhvV/mijn.png"
        />
        <meta property="og:image:alt" content="mijna" />
        <meta property="og:type" content="website" />
      </Head>
      <ConfettiRain />
      <main className="grid h-screen w-screen place-items-center bg-gradient-to-tr from-blue-600 to-emerald-300">
        <section className="flex w-3/4 max-w-[430px] flex-col items-center justify-start space-y-10 rounded-xl bg-white py-6 font-nusx shadow-xl sm:w-2/3">
          <div className="flex flex-col items-center justify-start space-y-6 px-4">
            <p className="font-caps text-3xl">გილოცავ!</p>
            <div className="flex w-full flex-col items-center justify-start space-y-2 break-words text-center text-xl">
              <p className="max-w-full break-all font-bold">
                {a} და {b}
              </p>
              <p>წარმატებით გაიმიჯნა!</p>
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-start space-y-8">
            <div className="flex w-full flex-col items-center justify-start space-y-3 md:flex-row md:items-center md:justify-evenly md:space-y-0">
              {!isMobile && <ShareButton url={ogurl} />}
              {isMobile && (
                <button
                  className="btn bg-blue-400 hover:bg-blue-500"
                  onClick={shareMobile}
                >
                  გააზიარე
                </button>
              )}
              <Tippy
                content="ლინკი დაკოპირდა"
                visible={linkCopied}
                placement="top"
                theme="material"
                arrow={false}
              >
                <button
                  id="copybtn"
                  className="btn border-2 border-green-600 bg-white text-green-600 duration-150 hover:bg-green-600 hover:text-white"
                  onClick={copyLink}
                >
                  დააკოპირე ლინკი
                </button>
              </Tippy>
            </div>
            <button
              className="btn bg-amber-400 hover:bg-amber-500"
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
