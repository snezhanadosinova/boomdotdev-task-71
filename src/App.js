import "./App.css";
import Document from "./Document";
import { useEffect, useState } from "react";

function App() {
  const [terms, setTerms] = useState(null);

  useEffect(() => {
    fetch(`https://jaspervdj.be/lorem-markdownum/markdown.txt`)
      .then((restult) => restult.text())
      .then((terms) => setTerms(terms));
  }, []);

  return (
    <div className="App">
      <Document title="Terms and Conditions" content={terms} />
    </div>
  );
}

export default App;
