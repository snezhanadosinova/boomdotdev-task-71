export default function Document({ title, content }) {
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
