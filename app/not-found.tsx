import CatPaw from "@/public/svgs/cat-paw";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import Link from "next/link";

const page = () => {
  return (
    <main className="flex justify-center items-center h-screen w-full max-w-7xl px-6 mx-auto">
      <div className="flex md:flex-row flex-col justify-center gap-x-4 items-center">
        <div className="w-44">
          <CatPaw />
        </div>
        <div className="w-full md:w-4/5 max-w-96 space-y-2">
          <h1 className=" md:text-lg font-semibold">
            Looks like you&apos;ve hit a cat-astrophe! Time to paws and retrace
            your steps.
          </h1>
          <Link href={"/"}>
            <p className="hover:underline group text-sm mt-2 dark:text-gray-400 text-gray-600 flex gap-x-1 items-center">
              Back to Homepage <HiArrowTopRightOnSquare className="animate-bounce group-hover:animate-none transition-all duration-500" />
            </p>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default page;
