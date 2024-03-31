import Link from "next/link";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Badge } from "@/components/ui/badge";
import { FaGithub } from "react-icons/fa";
import Image from 'next/image';
import { FaLinkedin } from "react-icons/fa";
import { FaUserAstronaut } from "react-icons/fa";

export default function Home() {
  return (
    <main className="pt-10 w-full text-base bg-gradient-to-b from-gradient-top to-gradient-bottom dark:from-background-dark dark:to-background-dark min-h-screen flex justify-center items-center">
      <div className="w-full space-y-8 max-w-7xl px-6 mb-20">
        <div className="space-y-4">
          <h1 className="text-2xl md:text-3xl font-bold">
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
            I&apos;m <span className='underline'>Charan</span>, passionate about development and creating
            applications.
          </p>
        </div>
        <div className="space-y-1 group">
          <Link href={"/hexleap"}>
            <div className="my-1 flex drop-shadow-xl items-center gap-x-1">
              <h2 className="text-xl font-bold">Explore My Work</h2>
              <div className="flex overflow-hidden">
                <MdOutlineKeyboardArrowRight className="size-6 transition-all opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 duration-500 group-hover:delay-200" />
                <MdOutlineKeyboardArrowRight className="size-6 transition-all opacity-0 group-hover:opacity-100 -translate-x-8 group-hover:-translate-x-4 duration-500 group-hover:delay-0 delay-200" />
              </div>
            </div>
            <p className="text-ellipsis text-gray-800 dark:text-gray-200">
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
          <div className="text-ellipsis space-x-1 space-y-1 text-gray-600 dark:text-gray-400">
            <Badge>Next.js</Badge>
            <Badge>TypeScript</Badge>
            <Badge>Tailwind CSS</Badge>
            <div className="space-x-1">
              <Badge variant={"secondary"}>ESlint</Badge>
              <Badge variant={"secondary"}>Prettier</Badge>
              <Badge variant={"secondary"}>shadcn/ui</Badge>
              <Badge variant={"secondary"}>Git</Badge>
              <Badge variant={"secondary"}>Linux</Badge>
            </div>
          </div>
        </div>
        <div className="space-y-1">
          <h2 className="text-xl font-bold">Let&apos;s Connect</h2>
          <p className="text-ellipsis text-gray-600 dark:text-gray-400">
            Should you have any inquiries or feedback, please feel free to reach
            out.
          </p>
          <p className="text-ellipsis text-gray-800 dark:text-gray-200">
            I value the opportunity to discuss my work further.
          </p>
          <div className="max-md:text-sm pt-4 md:pt-8 max-sm:grid grid-cols-2 gap-y-2 sm:flex  gap-x-4">
            <Link
              rel="noopener noreferrer"
              target="_blank"
              href={"https://github.com/charankamal20/hexleap"}
            >
              <div className="font-semibold dark:text-gray-400 rounded-xl bg-transparent hover:bg-background-secondary dark:hover:bg-background-dark-secondary px-4 py-2 text flex items-center w-fit gap-x-2">
                <FaGithub className="size-7" />
                <span>Github</span>
              </div>
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={"https://charankamal20.github.io/"}
            >
              <div className="font-semibold dark:text-gray-400 rounded-xl bg-transparent hover:bg-background-secondary dark:hover:bg-background-dark-secondary px-4 py-2 text flex items-center w-fit gap-x-2">
                <FaUserAstronaut className="size-6" />
                <span>Portfolio</span>
              </div>
            </Link>
            <Link
              rel="noopener noreferrer"
              target="_blank"
              href={"https://www.linkedin.com/in/charankamal20"}
            >
              <div className="font-semibold dark:text-gray-400 rounded-xl bg-transparent hover:bg-background-secondary dark:hover:bg-background-dark-secondary px-4 py-2 text flex items-center w-fit gap-x-2">
                <FaLinkedin className="size-7" />
                <span>LinkedIn</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
