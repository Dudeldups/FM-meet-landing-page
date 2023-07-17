import "./Btn.scss";

export default function Btn({ color, btnType }) {
  let text =
    btnType === "download" ? (
      <>
        Download <span className="btn__version">{"v1.3"}</span>
      </>
    ) : (
      "What is it?"
    );

  return <button className={"btn " + color}>{text}</button>;
}
