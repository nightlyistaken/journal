import { Options } from "$fresh/plugins/twind.ts";
export default {
  selfURL: import.meta.url,
  theme: {
    extend: {
      fontFamily: {
        sans: "Rubik, sans-serif",
      },
    },
  },
  preflight: {
    // Import external stylesheet
    "@import":
      `url('https://fonts.googleapis.com/css2?family=Rubik&display=swap')`,
    // Declare font face
  },
} as Options;
