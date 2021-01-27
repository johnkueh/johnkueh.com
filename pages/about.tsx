import Head from "next/head";

export default function Home({ tableData }) {
  return (
    <div>
      <Head>
        <title>About John Kueh</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>About me</h1>

      <p>
        I am a design-focused software engineer living in Sydney, Australia 🇦🇺.
        Programming is my craft, and I have been doing it for more than 10
        years. I build my own startups, and occasionally consult for others.
      </p>
      <p>
        JavaScript (TypeScript) is my favourite programming language and I
        particularly enjoy working with these technologies:
      </p>

      <ul>
        <li>React and React Native</li>
        <li>GraphQL</li>
        <li>Node</li>
      </ul>

      <p>
        If I am not coding or working, I enjoy spending my free time thinking
        about interior design and cooking
      </p>

      <p>
        I live in Sydney with my wife{" "}
        <a href="https://www.mishwong.com">Michele</a> and our 🐶 Perry. We both
        love the Japanese culture and regularly travel to Japan for food,
        shopping and design inspiration.
      </p>

      <p>
        You can find me on <a href="https://twitter.com/johnkueh">Twitter</a>{" "}
        where I talk about startups and development, or on{" "}
        <a href="https://github.com/johnkueh">GitHub</a> to check out my
        projects.
      </p>
    </div>
  );
}
