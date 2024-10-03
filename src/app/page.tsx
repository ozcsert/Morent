import "./page.scss"
import Link from "next/link"
import RangeSettings from "@/components/RangeSetting"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <>
      <div className="home">
        <RangeSettings />
        <br />
        <Link href="/dashboard">Go to dashboard</Link>
        <Link href="/category">Go to category</Link>
        <Link href="/payment">Go to payment</Link>
        <Footer />
      </div>
      <div className="home"></div>
    </>
  )
}
