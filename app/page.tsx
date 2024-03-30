import Link from "next/link";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";


export default function Home() {
  return (
    <main className="w-full text-base bg-gradient-to-b from-gradient-top to-gradient-bottom dark:from-background-dark dark:to-background-dark h-screen flex justify-center items-center">
      <div className="w-full space-y-8 max-w-7xl px-6 mb-20">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">
            Welcome to my Hexleap Frontend Assignment
          </h1>
          <p className="max-w-2xl text-gray-600 dark:text-gray-400">
            Thank you for visiting this portal. I&apos;m excited to present my
            application as part of my assignment submission for the frontend
            developer internship.
          </p>
          <span className="text-gray-600 dark:text-gray-400">
            Are you ready to explore?
          </span>
        </div>
        <div className="space-y-1">
          <h2 className="text-xl font-bold">About Me</h2>
          <p className="text-ellipsis text-gray-600 dark:text-gray-400">
            I&apos;m Charan, passionate about development and creating
            applications.
          </p>
        </div>
        <div className="space-y-1 group">
          <Link href={"/hexleap"}>
            <div className="my-1 flex items-center gap-x-1">
              <h2 className="text-xl font-bold">Explore My Work</h2>
              <div className="flex overflow-hidden">
                <MdOutlineKeyboardArrowRight className="size-6 transition-all opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 duration-500 group-hover:delay-200" />
                <MdOutlineKeyboardArrowRight className="size-6 transition-all opacity-0 group-hover:opacity-100 -translate-x-8 group-hover:-translate-x-4 duration-500 group-hover:delay-0 delay-200" />
              </div>
            </div>
            <p className="text-ellipsis text-gray-600 dark:text-gray-400">
              Click
              <code className="px-2 text-black dark:text-white underline animate-pulse">
                here
              </code>
              to see my submission.
            </p>
          </Link>
        </div>
        <div className="space-y-1">
          <h2 className="text-xl font-bold">Technologies Used</h2>
          <p className="text-ellipsis text-gray-600 dark:text-gray-400">
            I&apos;m Charan, passionate about development and creating
            applications.
          </p>
        </div>
      </div>
    </main>
  );
}
