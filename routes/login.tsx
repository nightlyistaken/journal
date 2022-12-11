import { Head } from "$fresh/runtime.ts";
import { Navbar } from "../components/Navbar.tsx";

// * Landing page for Journal

export default function Home() {
  return (
    <>
      <Head>
        <title>Journal | Login</title>
      </Head>
      <body>
        <div class="">
          <div class=" flex min-h-screen text-gray-800 flex-col justify-center bg-gradient-to-tr from-indigo-200 via-pink-300  to-gray-200 py-6 sm:py-12 ">
            <div class=" py-3 sm:w-96 mx-auto text-center">
              <div class="mt-4 bg-white bg-opacity-10 shadow-xl backdrop-blur-2xl rounded-lg text-left">
                <div class=" rounded-t-md"></div>
                <div class="px-8 py-6 text-black">
                  <label class="block font-semibold pb-3">Auth with Google</label>
                  <div class="flex justify-between items-baseline">
                    <button class="group transform rounded-md transition-transform duration-300 bg-indigo-600 px-5 py-3 font-medium text-white hover:from-indigo-700 hover:to-indigo-600 focus:scale-95 shadow-sm ">
                      <div class="relative flex items-center space-x-4 justify-center">
                        <img
                          src="./google.svg"
                          class="absolute -left-2 w-5"
                          alt="google logo"
                        />
                        <span class="block w-max font-semibold tracking-wide text-gray-100 text-sm transition duration-300 group-hover:text-white sm:text-base">
                          Continue with Google
                        </span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}
