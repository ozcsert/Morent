import Example from "@/components/Example";
import "./page.scss";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="home">
        <Example title="Example" />
        <Link href="/dashboard">Go to dashboard</Link>
        <Link href="/category">Go to category</Link>
        <Footer />
      </div>
    </>
  );
}
