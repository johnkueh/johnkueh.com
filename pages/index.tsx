import Head from "next/head";
import Link from "next/link";
import { getProjects } from "../shared/api";
import Card from "../shared/Card";

export default function Home({ tableData }) {
  return (
    <div>
      <Head>
        <title>John Kueh - React and TypeScript Engineer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>John Kueh</h1>
      <p>
        👋 I'm a JavaScript engineer living in Sydney, Australia. I love
        creating useful products using React and Node.
      </p>
      <div>
        {tableData.map(({ id, Name, Caption, Slug }) => {
          return (
            <Link key={id} href={`/projects/${Slug}`}>
              <a>
                <Card title={Name} caption={Caption} />
              </a>
            </Link>
          );
        })}
      </div>
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
