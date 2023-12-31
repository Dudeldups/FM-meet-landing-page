import Btn from "../Btn/Btn";

import "./Features.scss";

export default function Features() {
  return (
    <ol className="features">
      <li className="features__item first padding">
        <div className="line"></div>
        <aside className="first__pic-grid">
          <img
            src="/assets/images/image-woman-in-videocall.jpg"
            alt="A woman sitting on a desk, smiling at her laptop."
            className="first__pic"
          />
          <img
            src="/assets/images/image-women-videochatting.jpg"
            alt="Three elderly women videochatting over a phone."
            className="first__pic"
          />
          <img
            src="/assets/images/image-men-in-meeting.jpg"
            alt="A man having a video meeting over his laptop."
            className="first__pic"
          />
          <img
            src="/assets/images/image-man-texting.jpg"
            alt="A man on a sofa, smiling at his phone."
            className="first__pic"
          />
        </aside>
        <section className="first__text">
          <p className="first__overline">Built for modern use</p>
          <h2 className="first__title">Smarter meetings, all in one place</h2>
          <p className="first__desc">
            Send messages, share files, show your screen, and record your
            meetings — all in one workspace. Control who can join with
            invite-only team access, data encryption, and data export.
          </p>
        </section>
      </li>

      <li className="features__item second">
        <div className="line"></div>
        <section className="second__text padding">
          <h2 className="second__title">Experience more together</h2>
          <p className="second__desc">
            Stay connected with reliable HD meetings and unlimited one-on-one
            and group video sessions.
          </p>
          <Btn color="purple" btnType="download" />
        </section>
      </li>
    </ol>
  );
}
