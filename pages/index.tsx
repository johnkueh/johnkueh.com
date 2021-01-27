import Head from "next/head";
import Link from "next/link";
import { getProjects } from "../shared/api";
import Card from "../shared/Card";
import LetsBuildSomethingTogether from "../shared/LetsBuildSomethingTogether";

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
        <Link href="/about">
          <a>More about me</a>
        </Link>
      </div>
      <h2>My work</h2>
      <p>
        Here's a small selection of my latest work. They range from small tools
        to software for large companies.
      </p>
      <div>
        <Link href="/work">
          <a>View all</a>
        </Link>
      </div>
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
