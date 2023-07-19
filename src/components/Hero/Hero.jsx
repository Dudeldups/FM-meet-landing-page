import Top from "../Top/Top";

import "./Hero.scss";

export default function Hero() {
  return (
    <div className="hero">
      <picture>
        <source
          srcSet="./src/assets/images/image-hero-left.png"
          media="(min-width: 75rem)"
        />
        <img
          className="hero__img-main"
          src="./src/assets/images/image-hero.png"
          alt="A diverse group of people from different cultures and backgrounds smiling in a global photo collection."
        />
      </picture>

      <Top />

      <picture>
        <source
          srcSet="./src/assets/images/image-hero-right.png"
          media="(min-width: 75rem)"
        />

        <img className="hero__img-secondary" src="" alt="" />
      </picture>
    </div>
  );
}
