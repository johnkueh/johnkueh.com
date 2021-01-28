function MyApp({ Component, pageProps }) {
  return (
    <div>
      <div>
        <a href="/">Blog</a>
        <a href="/projects">Projects</a>
        <a href="/about">About</a>
      </div>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
