import Hello from "../components/hello";

export default function Home() {
  console.log("Hello, Nextjs! server");
  return (
    <>
      <h1 className="text-3xl">Welcome to Nextjs</h1>
      <Hello />
    </>
  );
}
