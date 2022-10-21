import type { NextPage } from "next";
import Head from "next/head";

import { RouterConfig } from "@constants";

const DownloadPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>{RouterConfig.title.download}</title>
      </Head>
      <main></main>
    </>
  );
};

export default DownloadPage;
