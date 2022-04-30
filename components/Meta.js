import Head from "next/head";

import thumbnail from "../public/thumb.png";

export default function Meta({ title, url, ogtitle }) {
  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={ogtitle} />

      <meta property="og:description" content={title} />
      <meta property="og:image" content={thumbnail} />
      <meta property="og:image:alt" content="mijna" />

      <meta property="og:url" content={url} />
    </Head>
  );
}
