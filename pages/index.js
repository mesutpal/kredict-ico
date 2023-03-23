import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "../styles/Home.module.css";
import Features from "@/components/Features";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Cover from "@/components/Cover";
import Rail from "@/components/Rail";
import Tokenomics from "@/components/Tokenomics";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>KREDICT - Presale Sample</title>
      </Head>

      {/* Navbar Section */}
      <Navbar />

      {/* cover section */}
      <Cover />

      {/* features Section */}
      <Features styles={styles} />

      {/* about section */}
      <About styles={styles} />

      {/* rail section */}
      <Rail styles={styles} />

      {/* tokenomics section */}
      <Tokenomics styles={styles} />
    </>
  );
}
