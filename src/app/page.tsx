import Example from "@/components/Example";
import "./page.scss";
import Link from "next/link";
import ReviewCard from "@/components/ReviewCard";

export default function Home() {
  return (
    <>
      <div className="home">
        <Example title="Example" />
        <Link href="/dashboard">Go to dashboard</Link>
        <Link href="/category">Go to category</Link>
        <ReviewCard
          id={0}
          img={""}
          name={""}
          title={""}
          review={""}
          rating={0}
          date={""}
        />
      </div>
    </>
  );
}
