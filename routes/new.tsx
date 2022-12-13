import { Head } from "$fresh/runtime.ts";
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
        <div>
          <Navbar />
          <section class="py-24 flex items-center min-h-screen justify-center bg-gradient-to-tr from-indigo-200 to-gray-200">
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
                  class="border-2 py-2 px-4 bg-gray-900 rounded-lg text-2xl text-white"
                  type="text"
                  placeholder="Enter a title"
                >
                </input>
              </div>

              <div class="flex flex-col space-y-4 pt-4">
                <label class="text-lg font-semibold font-heading">
                  Content
                </label>
                {}
                <textarea
                  class="border-2 bg-gray-900 rounded-lg text-2xl py-2 px-4 text-white"
                  placeholder="Journal"
                  cols="50"
                  rows="4"
                >
                </textarea>
                <a
                  href="/home"
                  class="transform rounded-md w-20 transition-all duration-300 bg-gray-900 px-5 py-3 font-medium text-white hover:-translate-y-1 hover:scale-105 hover:from-indigo-700 hover:to-indigo-600 focus:scale-95 shadow-sm"
                >
                  Send
                </a>
              </div>
            </div>
          </section>
        </div>
      </body>
    </>
  );
}
