import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png";

const Banner = () => {
  return (
    <div className="hero-banner">
      <div className="content">
        <div className="text-content">
          <h1>SALES</h1>
          <p>
            🌞🛍️ Up to 50% OFF on All Your Favorite Products! 🌞🛍️ Don't miss
            out on the hottest deals of the season! It's time to treat yourself
            and indulge in our irresistible summer sale. Whether you're
            searching for fashion-forward apparel, trendy accessories, or
            must-have gadgets, we've got you covered.
          </p>
          <div className="ctas">
            <div className="banner-cta">Read More</div>
            <div className="banner-cta v2">Shop Now</div>
          </div>
        </div>
        <img className="banner-img" src={BannerImg} alt="banner" />
      </div>
    </div>
  );
};

export default Banner;
