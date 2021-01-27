import Head from "next/head";
import "prismjs/themes/prism-tomorrow.css";
import { NotionRenderer } from "react-notion";
import "react-notion/src/styles.css";
import { getPage, getProjects } from "../../shared/api";

export default function Home({ page, blockMap }) {
  return (
    <div>
      <Head>
        <title>Project - {page.Name}</title>
      </Head>

      <h1>{page.Name}</h1>
      <p>{page.Caption}</p>
      <NotionRenderer blockMap={blockMap} />
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
