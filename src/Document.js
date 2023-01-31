import { useEffect } from "react";

export default function Document({ title, content }) {
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
  }, []);

  return (
    <div>
      <h1 className="title">{title}</h1>
      <div className="content">{content}</div>
      <button type="button" disabled>
        I Agree
      </button>
    </div>
  );
}
