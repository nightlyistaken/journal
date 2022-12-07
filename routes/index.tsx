import { Head } from "$fresh/runtime.ts";

export default function Home() {
  return (
    <>
      <Head>
        <title>Journal</title>
      </Head>
      <body>
        <div class="">
        <section class="absolute mx-auto">
          <nav class="flex justify-between  text-black w-screen">
            <div class="px-5 xl:px-12 py-6 flex w-full items-center">
              <a class="text-3xl font-bold font-heading" href="#">
                <span class="bg-gradient-to-br text-transparent bg-clip-text font-medium from-indigo-600 via-purple-500 to-indigo-800">Journal</span>
              </a>

              <ul class="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
                <li>
                  <a class="hover:text-indigo-900" href="#">Home</a>
                </li>
                <li>
                  <a class="hover:text-indigo-900" href="#">Category</a>
                </li>
                <li>
                  <a class="hover:text-indigo-900" href="#">Collections</a>
                </li>
                <li>
                  <a class="hover:text-indigo-900" href="#">Contact Us</a>
                </li>
              </ul>

              <div class="hidden xl:flex items-center space-x-4">
                <a class="hover:text-indigo-900" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </a>
                

                <a class="flex items-center hover:text-gray-200" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 hover:text-indigo-900"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <a class="xl:hidden flex mr-6 items-center" href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 hover:text-gray-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span class="flex absolute -mt-5 ml-4">
                <span class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75">
                </span>
                <span class="relative inline-flex rounded-full h-3 w-3 bg-pink-500">
                </span>
              </span>
            </a>
            <a class="navbar-burger self-center mr-12 xl:hidden" href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 hover:text-gray-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </a>
          </nav>
        </section>
      <section class="py-24 flex items-center min-h-screen justify-center">
        <div class="mx-auto max-w-[43rem]">
          <div class="text-center">
            <p class="text-lg bg-clip-text font-bold text-transparent tracking-wide leading-8 bg-gradient-to-l from-indigo-800 to-indigo-400">
              The new version 1.1x of Journal is here!
            </p>
            <h1 class="mt-3 text-[3.5rem] font-bold leading-[4rem] tracking-wider text-black">
              Write your journals&nbsp;like never <span class="font-bold bg-clip-text text-transparent tracking-wide leading-8 bg-gradient-to-l from-indigo-800 via-zinc-800 to-indigo-900">before</span>
            </h1>
            <p class="mt-3 text-lg leading-relaxed text-slate-400">
              Journal is a simple way to write journals. It is fast, easy to use
              and has a user-friendly interface that makes it easy to write your
              journals.
            </p>
          </div>

          <div class="mt-6 flex items-center justify-center gap-4">
            <a
              href="#"
              class="transform rounded-md transition-all ease-in duration-300 bg-gradient-to-tr bg-indigo-600 px-5 py-3 font-medium text-white hover:-translate-y-1 hover:scale-105 hover:from-indigo-700 hover:to-indigo-600 focus:scale-95 shadow-sm"
            >
              Preview Journal
            </a>
            <a
              href="#"
              class="border-1 text-black transform rounded-md transition-all ease-in duration-300 bg-gradient-to-tr bg-slate-100 px-5 py-3 font-medium  hover:-translate-y-1 hover:scale-105 hover:from-slate-300 hover:to-slate-300 focus:scale-95 shadow-sm"
            >
              Coming Soon
            </a>
          </div>
        </div>
      </section>
      <section class="py-24 flex items-center min-h-screen justify-center bg-white">
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
