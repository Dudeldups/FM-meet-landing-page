import Top from "../Top/Top";

import "./Hero.scss";

export default function Hero() {
  return (
    <aside className="hero">
      <picture>
        <source
          srcSet="/assets/images/image-hero-left.png"
          media="(min-width: 78.125rem)"
        />
        <img
          className="hero__img-main"
          src="/assets/images/image-hero.png"
          alt="A diverse group of people from different cultures and backgrounds smiling in a global photo collection."
        />
      </picture>

      <Top />

      <picture>
        <source
          srcSet="/assets/images/image-hero-right.png"
          media="(min-width: 78.125rem)"
        />

        <img className="hero__img-secondary" src="" alt="" />
      </picture>
    </aside>
  );
}
