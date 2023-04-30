import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap"
          rel="stylesheet"
        />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet"/>
        <link rel="shortcut icon" href="next.svg" />
        <meta
          name="description"
          content="MERN stack developer looking for a job"
        />
        <meta
          name="keywords"
          content="Full Stack Web Developer , Freelancer , MERN Developer"
        />
      </Head>
      <body className="h-full bg-gradient-to-r from-orange to-blue-400 dark:from-dark-500 dark:to-dark-700 dark:text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
