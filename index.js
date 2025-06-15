const Tesseract = require("tesseract.js");

Tesseract.recognize(
  "detect.png", // path to your image file
  "eng" // language
  //   {
  //     logger: (m) => console.log(m), // log progress
  //   }
)
  .then(({ data: { text } }) => {
    console.log("Extracted Text:", text);
  })
  .catch((err) => {
    console.error("Error:", err);
  });
