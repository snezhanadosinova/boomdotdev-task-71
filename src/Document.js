export default function Document({ title, content }) {
  const handleScroll = (event) => {
    if (
      event.target.scrollTop + event.target.clientHeight >=
      event.target.scrollHeight
    ) {
      document.querySelector("button").removeAttribute("disabled");
    }
  };

  return (
    <div>
      <h1 className="title">{title}</h1>
      <div className="content" onScroll={handleScroll}>
        {content}
      </div>
      <button type="button" disabled>
        I Agree
      </button>
    </div>
  );
}
