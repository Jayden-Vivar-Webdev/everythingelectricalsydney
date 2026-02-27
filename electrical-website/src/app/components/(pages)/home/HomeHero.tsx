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
      backgroundImage="/images/cropped_image-mobile.png"
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
