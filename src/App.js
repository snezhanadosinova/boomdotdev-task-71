import "./App.css";
import Document from "./Document";
import { useEffect, useState } from "react";

function App() {
  const [terms, setTerms] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://jaspervdj.be/lorem-markdownum/markdown.txt`)
      .then((response) => response.text())
      .then((terms) => setTerms(terms))
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  return (
    <div className="App">
      {(error && <p>An error has occurred: {error}</p>) || (
        <Document title="Terms and Conditions" content={terms} />
      )}
    </div>
  );
}

export default App;
