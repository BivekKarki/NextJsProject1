import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/productcard";

export default function Home() {
  return (
    <main>
      <h1>Hello World</h1>
      <Link href="/users" >users</Link>
      <Link href={"/users/new"}>New users</Link>
      <ProductCard />
    </main>
  );
}
