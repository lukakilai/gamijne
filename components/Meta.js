import Head from "next/head";

export default function Meta({ title, url }) {
  return (
    <Head>
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:title" content="blabla" />
      <meta
        property="og:description"
        content="How much does culture influence creative thinking?"
      />
      <meta
        property="og:image"
        content="http://static01.nyt.com/images/2015/02/19/arts/international/19iht-btnumbers19A/19iht-btnumbers19A-facebookJumbo-v2.jpg"
      />
    </Head>
  );
}
