import { Fragment } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import ShareButton from "../components/ShareButton";

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
          content="https://drive.google.com/file/d/1s5c0AvkWmF0KmrqHCyhH7KZgJL-niWkB/view?usp=sharing"
        />
        <meta property="og:image:alt" content="mijna" />
        <meta property="og:type" content="website" />
      </Head>
      <h1>{a}</h1>
      <h1>{b}</h1>
      <ShareButton url={ogurl} />
    </Fragment>
  );
}
