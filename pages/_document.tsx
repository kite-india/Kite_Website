import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import type { DocumentContext } from 'next/document'

export default class Document extends NextDocument {
  static async getInitialProps(ctx: DocumentContext) {
    return await Document.getInitialProps(ctx)
  }
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
