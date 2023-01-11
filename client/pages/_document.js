import { Html, Head, Main, NextScript } from "next/document";




export default function Document() {

  return (
    <Html>
      <Head>
        {/* <meta charset="utf-8" /> */}
        {/* <link rel="icon" href="%PUBLIC_URL%/favicon.ico" /> */}

        <meta name="theme-color" content="#000000" />
        <meta name="description" content="LeadIn, New universe of studies " />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://vjs.zencdn.net/7.20.3/video-js.css" rel="stylesheet" />

        {/* <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin /> */}
        <link
          href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@100;300;400;500;700;800;900&display=swap"
          rel="stylesheet"
        />
        <base href="/"/>

        <style
          dangerouslySetInnerHTML={{
            __html: `</style>
    <link
      rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
      media="print"
      onload="this.media='all';"
    />
    <style>`
          }}></style>
    
      </Head>
      <body>
        <Main/>
        <NextScript />
      </body>
    </Html>
  );
}
