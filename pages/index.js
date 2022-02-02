import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Main from "../components/Main";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Coderhouse | Aprendé haciendo</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          description="description"
          content="This is a Coderhouse website clone made just to practice NextJS and Tailwind"
        />
        <meta name="author" content="Krb0" />
      </Head>
      <Header />
      <Main />
    </div>
  );
}
