import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";
//demo client side rendering
export default function AdminUser() {
  // const router = useRouter();
  // console.log("router", router.query.id);
  // function handleOnClick() {
  //   router.push("/login");
  // }
  return (
    <>
      <Head>
        <title>User Detail</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
      </Head>
      <Link href="/login">
        <button>Go to Login by Link</button>
      </Link>
      {/* <h1>User page {router.query.id}</h1>
      <button onClick={handleOnClick}>Go to Login</button> */}
    </>
  );
}
