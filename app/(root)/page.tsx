import Image from "next/image";
import Hello from "@/app/components/hello";

export default function Home() {
  console.log("What am I doing here? -- SERVER/CLIENT?")

  return (
      <>
        <Hello />
        <h1 className={"text-3xl"}>Welcome to Next JS</h1>
      </>
  );
}
