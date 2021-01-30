import Head from "next/head";
import "prismjs/themes/prism-tomorrow.css";
import React from "react";
import "react-notion/src/styles.css";
import PageRenderer from "../../notion-page/PageRenderer";
import { getPage, getProjects } from "../../shared/api";

export default function Project({ page, blockMap }) {
  return (
    <div>
      <Head>
        <title>Project - {page.Name}</title>
      </Head>
      <PageRenderer page={page} blockMap={blockMap} />
    </div>
  );
}

export async function getStaticPaths() {
  const data = await getProjects();

  return {
    paths: data.map((project) => {
      return {
        params: { slug: project.Slug },
      };
    }),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { page, blockMap } = await getPage(context.params.slug);

  return {
    props: {
      page,
      blockMap,
    },
  };
}
