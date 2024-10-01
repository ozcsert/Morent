import Link from "next/link";
import React from "react";
import Example from "./(main)/example/page";
import "./page.scss";
import RangeSettings from "@/components/RangeSetting";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div className="home">
        <RangeSettings />
        <br />
        <Example title="Example" />
        <Link href="/dashboard">Go to dashboard</Link>
        <Link href="/category">Go to category</Link>
        <Footer />
      </div>

      <div className="home"></div>
    </>
  );
}
