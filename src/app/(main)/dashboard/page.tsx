import React from "react";
import "./styles.scss";
import Link from "next/link";
import Example from "@/components/Example";

const Dashboard = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
      }}
    >
      <Example title="This is the dashboard" />
      <Link
        style={{
          color: "red",
        }}
        href="/example"
      >
        Go to example
      </Link>
    </div>
  );
};

export default Dashboard;
