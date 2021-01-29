import Head from "next/head";
import React from "react";
import { getTestimonials } from "../shared/api";

export default function About({ tableData }) {
  return (
    <div>
      <Head>
        <title>About John Kueh</title>
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

      <h2>Kind words from other people ❤️</h2>
      {tableData.map(({ id, Name, Position, Comment }) => {
        return (
          <div key={id}>
            <h3>{Name}</h3>
            <h4>{Position}</h4>
            <p>{Comment}</p>
          </div>
        );
      })}
    </div>
  );
}

export async function getStaticProps() {
  const data = await getTestimonials();

  return {
    props: {
      tableData: data,
    },
  };
}
