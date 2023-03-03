import Head from "next/head";
import Image from "next/image";
import variables from "../styles/variables.module.scss";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

const Home: React.FC = () => {
  let firstName: string = "hello world";

  return (
    <>
      <div className={variables.title}>
        <Link href="/login">
          <button>Go to Login</button>
        </Link>
      </div>
    </>
  );
};
export default Home;
