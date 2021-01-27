import Head from "next/head";
import Link from "next/link";
import { getProjects } from "../../shared/api";
import Card from "../../shared/Card";
import LetsBuildSomethingTogether from "../../shared/LetsBuildSomethingTogether";

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
      <div>
        {tableData.map(({ id, Name, Caption, Slug }) => {
          return (
            <Link key={id} href={`/work/${Slug}`}>
              <a>
                <Card title={Name} caption={Caption} />
              </a>
            </Link>
          );
        })}
      </div>
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
