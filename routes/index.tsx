import { Head } from "$fresh/runtime.ts";
import { Navbar } from "../components/Navbar.tsx";

// * Landing page for Journal

export default function Home() {
  return (
    <>
      <Head>
        <title>Journal</title>
      </Head>
      <body>
        <div class="bg-gradient-to-tr from-indigo-200 via-pink-300  to-gray-200">
          <Navbar />
          <section class="py-24 flex items-center min-h-screen justify-center">
            <div class="mx-auto max-w-[45rem]">
              <div class="text-center">
                <p class="text-lg bg-clip-text font-bold text-transparent tracking-wide leading-8 bg-gradient-to-r from-indigo-500 via-blue-900 to-indigo-300 dark:(from-indigo-400 via-blue-500 to-indigo-200)">
                  The new version 0.1x of Journal is here!
                </p>
                <div class="transform transition-all hover:scale-105 hover:-translate-y-1 hover:skew-x-3 hover:cursor-pointer">
                  <h1 class="mt-3 text-[3.5rem] font-bold leading-[4rem] tracking-wider text-black ">
                    Write your journals&nbsp;like never{" "}
                    <span class="font-bold bg-clip-text text-transparent tracking-wide leading-8 bg-gradient-to-l from-indigo-600 via-zinc-500 to-indigo-700 ">
                      before
                    </span>
                  </h1>
                </div>
                <p class="mt-3 text-lg leading-relaxed text-slate-400">
                  Journal is a simple way to write journals. It is fast, easy to
                  use and has a user-friendly interface that makes it easy to
                  write your journals.
                </p>
              </div>

              <div class="mt-6 flex items-center justify-center gap-4">
                <a
                  href="/preview"
                  class="transform rounded-md transition-all duration-300 bg-indigo-600 px-5 py-3 font-medium text-white hover:-translate-y-1 hover:scale-105 hover:from-indigo-700 hover:to-indigo-600 focus:scale-95 shadow-sm"
                >
                  Preview Journal
                </a>
                <a
                  href="#"
                  class="border-1 border-black transform rounded-md transition-all duration-300  bg-slate-100 px-5 py-3 font-medium  hover:-translate-y-1 hover:scale-105 hover:from-slate-300 hover:to-slate-300 focus:scale-95 shadow-sm"
                >
                  Coming Soon
                </a>
              </div>
            </div>
          </section>
          <section class="py-24 flex items-center min-h-screen justify-center">
            <div class="mx-auto max-w-[43rem]">
              <div class="text-center">
                <p class="text-lg bg-clip-text font-bold text-transparent tracking-wide leading-8 bg-gradient-to-l from-indigo-800 to-indigo-400">
                </p>
                <h1 class="mt-3 text-[3.5rem] font-bold leading-[4rem] tracking-wider text-black">
                </h1>
                <p class="mt-3 text-lg leading-relaxed text-slate-400">
                  There's nothing here yet. We're working on it.
                </p>
              </div>
            </div>
          </section>
        </div>
      </body>
    </>
  );
}
