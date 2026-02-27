import HeroMain from "../../hero/hero-main";

export default function HomeHero() {
  return (
    <HeroMain
      announcementText={"test"}
      announcementLink={"#contact"}
      headline={"All Your Power Needs in One Place"}
      subheadline={
        "Seniors & Pensioners Discount. Get $50 Off Your First Purchase. 24/7 Emergency Electrician."
      }
      backgroundImage="https://cdn.sanity.io/images/8dp3bjvf/production/a0d6270d17067caeff7299b2f67651781be6f98c-5472x3648.jpg"
      backgroundImageDesktop="/images/left_cropped.png"
      backgroundImageAlt="Everything Electrical Switchboard Installation"
      primaryCtaText="Book Now"
      primaryCtaUrl="#contact"
      secondaryCtaText="Call Now"
      secondaryCtaUrl="tel:0449003526"
      animation={true}
      googleRating={4.9}
      googleReviewCount={247}
    />
  );
}
