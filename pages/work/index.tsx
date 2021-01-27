import Head from "next/head";
import { getProjects } from "../../shared/api";
import LetsBuildSomethingTogether from "../../shared/LetsBuildSomethingTogether";
import ListOfCards from "../../shared/ListOfCards";

export default function Work({ tableData }) {
  return (
    <div>
      <Head>
        <title>John Kueh - Work</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Work</h1>
      <p>
        Here's a list of everything I've worked on. They range from small tools
        to software for large companies.
      </p>
      <ListOfCards
        cards={tableData.map((project) => ({
          title: project.Name,
          caption: project.Caption,
          href: `/work/${project.Slug}`,
        }))}
      />
      <LetsBuildSomethingTogether />
    </div>
  );
}

export async function getStaticProps() {
  const data = await getProjects();

  return {
    props: {
      tableData: data,
    },
  };
}
