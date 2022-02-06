import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/Main";
import Sponsors from "../components/Sponsors";
import Education from "../components/Education";
import { SectionProvider } from "../Context/SectionContext";
export default function Home() {
  return (
    <SectionProvider>
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
        <Sponsors />
        <Education />
      </div>
    </SectionProvider>
  );
}
