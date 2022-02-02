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
      </Head>
      <Header />
      <Main />
    </div>
  );
}
