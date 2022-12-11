import { Options } from "$fresh/plugins/twind.ts";
export default {
  selfURL: import.meta.url,
  theme: {
    extend: {
      fontFamily: {
        sans: "Poppins, sans-serif",
      },
    },
  },
  preflight: {
    // Import external stylesheet
    "@import":
      `url('https://fonts.googleapis.com/css2?family=Poppins&display=swap')`,
    // Declare font face
  },
} as Options;
