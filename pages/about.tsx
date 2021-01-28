import Head from "next/head";

export default function Home({ tableData }) {
  return (
    <div>
      <Head>
        <title>About John Kueh</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>About John Kueh</h1>

      <p>
        I am a self-taught engineer and started programming around 10 years ago.
        My currently preferred stack is TypeScript and React.
      </p>

      <p>
        Outside work, I love cooking and hosting dinner parties at home. I write
        about these a lot on my blog.
      </p>

      <p>
        Find me on <a href="https://twitter.com/johnkueh">Twitter</a> (DMs are
        open), or on <a href="https://github.com/johnkueh">GitHub</a>
      </p>
    </div>
  );
}
