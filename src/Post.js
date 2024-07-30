import "./Stayle.css";

export default function Post({
  Hpost = "This post",
  content = "default post",
}) {
  return (
    <div className="cont">
      <h1>{Hpost}</h1>
      <hr />

      <h4>{content}</h4>
    </div>
  );
}
