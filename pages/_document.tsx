import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="ko">
        <Head>
          <meta charSet="utf-8" />
          {/* <link rel="icon" type="image/png" sizes="96x96" href="https://static.wehago.com/imgs/common/favicons/favicon-96x96.png" /> */}
          <meta name="theme-color" content="#000000" />
          <meta
            httpEquiv="Cache-Control"
            content="max-age: 0, no-cache, no-store, must-revalidate"
          />
          <meta httpEquiv="Pragma" content="no-cache" />
          <meta httpEquiv="Expires" content="-1" />
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU"
            crossOrigin="anonymous"
          />
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          />
        </Head>
        <body className="bgdark tv_body">
          <div id="app"></div>
          <Main />
          <NextScript />
        </body>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ"
          crossOrigin="anonymous"
        ></script>
      </Html>
    );
  }
}

export default MyDocument;
