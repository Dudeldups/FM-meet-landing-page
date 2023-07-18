import "./Hero.scss";

export default function Hero() {
  return (
    <div className="hero">
      <picture className="hero__img-main">
        <source
          srcSet="./src/assets/images/image-hero-left.png"
          media="(min-width: 62.5rem)"
        />
        <img
          src="./src/assets/images/image-hero.png"
          alt="A diverse group of people from different cultures and backgrounds smiling in a global photo collection."
        />
      </picture>

      <picture className="hero__img-secondary">
        <source
          srcSet="./src/assets/images/image-hero-right.png"
          media="(min-width: 62.5rem)"
        />
        <img src="" alt="" />
      </picture>
    </div>
  );
}
