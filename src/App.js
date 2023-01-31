import "./App.css";
import Document from "./Document";
import { useEffect, useState } from "react";

function App() {
  const [terms, setTerms] = useState(null);
  const [error, setError] = useState(null);

  // const fetchRequest = () => {
  //   fetch(`https://jaspervdj.be/lorem-markdownum/markdown.txt`)
  //     .then((restult) => restult.text())
  //     .then((restult) => setTerms(restult))
  //     .catch((error) => {
  //       setError(error.message);
  //     });
  // };

  useEffect(() => {
    fetch(`https://jaspervdj.be/lorem-markdownum/markdown.txt`)
      .then((restult) => restult.text())
      .then((restult) => setTerms(restult))
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  useEffect(() => {
    document
      .querySelector(".content")
      .addEventListener("scroll", checkScrollHeight, false);

    function checkScrollHeight() {
      let textElement = document.querySelector(".content");
      if (
        textElement.scrollTop + textElement.offsetHeight >=
        textElement.scrollHeight
      ) {
        document.querySelector("button").disabled = false;
      }
    }
  }, [terms]);

  return (
    <div className="App">
      {error && <p>An error has occurred: {error}</p>}

      <Document title="Terms and Conditions" content={terms} />
    </div>
  );
}

export default App;
