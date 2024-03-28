import Link from "next/link";

export default function Home() {

  return (
    <main className="w-full h-screen flex justify-center items-center">
      <Link href='/hexleap'>
        <div className="w-72">
          This is my frontend assignment for Hexleap. Click here to see the assignment.
        </div>
      </Link>
    </main>
  );
}
