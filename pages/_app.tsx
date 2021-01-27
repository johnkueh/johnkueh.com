function MyApp({ Component, pageProps }) {
  return (
    <div>
      <div>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/work">Work</a>
        <a href="/blog">Blog</a>
      </div>
      <div>
        <a href="https://airtable.com/shrlvz9QWpffIOZ7v">Contact</a>
      </div>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
