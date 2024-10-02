import Link from "next/link";
import React from "react";
import Example from "./(main)/example/page";
import "./page.scss";
import RangeSettings from "@/components/RangeSetting";
import Footer from "@/components/Footer";
import Recomendation from "@/components/Recomendation";

export default function Home() {
  return (
    <>
      <div className="home">
        <RangeSettings />
        <br />
        <Example title="Example" />
        <Link href="/dashboard">Go to dashboard</Link>
        <Link href="/category">Go to category</Link>
        <Recomendation
          id={0}
          name={""}
          img={""}
          type={""}
          capacity={""}
          price={0}
          gasoline={""}
          gear={""}
        />
        <Footer />
      </div>

      <div className="home"></div>
    </>
  );
}
