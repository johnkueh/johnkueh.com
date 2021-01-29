import Head from "next/head";
import { getProjects } from "../../shared/api";
import ListOfCards from "../../shared/ListOfCards";

export default function Projects({ tableData }) {
  return (
    <div>
      <Head>
        <title>John Kueh - Projects</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Projects</h1>
      <p>A list of everything I've worked on in the last few years.</p>
      <ListOfCards
        cards={tableData.map((project) => ({
          id: project.id,
          title: project.Name,
          caption: project.Caption,
          href: `/projects/${project.Slug}`,
        }))}
      />
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
