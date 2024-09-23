export default function CategoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <>{children}</>
      <p style={{ width: "100vh", background: "#596790" }}>
        Import Footer Here
      </p>
    </>
  );
}
