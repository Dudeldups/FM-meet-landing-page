import Btn from "../Btn/Btn";

import "./Top.scss";

export default function Top() {
  return (
    <article className="top padding">
      <h1 className="top__title">Group Chat for Everyone</h1>
      <p className="top__desc">
        Meet makes it easy to connect with others face&#8209;to&#8209;face
        virtually and collaborate across any device.
      </p>
      <div className="top__button-container">
        <Btn color="blue" btnType="download" />
        <Btn color="purple" />
      </div>
    </article>
  );
}
