import { Head } from "$fresh/runtime.ts";
import { useEffect, useState } from "preact/hooks";
import { Navbar } from "../components/Navbar.tsx";

export default function Preview() {
  const date = `${new Date(Date.now()).toLocaleDateString("en-US")}`;
  ///USE ISLANDS

  // const [name, setName] = useState("");
  // const [content, setContent] = useState("");
  // useEffect(() => {
  //   localStorage.setItem("Name", JSON.stringify(name));
  //   localStorage.setItem("Password", JSON.stringify(content));
  //   console.log(name);
  // }, [name]);
  return (
    <>
      <Head>
        <title>Journal</title>
      </Head>
      <body>
        <div class="dark:(bg-gray-900 text-white)">
          <Navbar />
          <section class="py-24 flex items-center min-h-screen justify-center">
            <div class="mx-auto max-w-[45rem]">
              <div class="text-center">
                <h1 class="text-4xl font-bold font-heading mb-4">
                  Journal for {date}
                </h1>
                <p class="text-lg text-gray-500 mb-8">
                  Write down your thoughts and feelings
                </p>
              </div>
              <div class="flex flex-col space-y-4">
                <label class="text-lg font-semibold font-heading">Title</label>
                <input
                  class="border-2 p-2 bg-gray-900 rounded-lg text-2xl"
                  type="text"
                  placeholder="Enter a title"
                >
                </input>
              </div>
              
              <div class="flex flex-col space-y-4 pt-4">
                <label class="text-lg font-semibold font-heading">
                  Content
                </label>

                <textarea
                  class="border-2 bg-gray-900 rounded-lg text-2xl p-2"
                  placeholder="Journal"
                  cols="50"
                  rows="4"
                >
                </textarea>
              </div>
            </div>
          </section>
        </div>
      </body>
    </>
  );
}
