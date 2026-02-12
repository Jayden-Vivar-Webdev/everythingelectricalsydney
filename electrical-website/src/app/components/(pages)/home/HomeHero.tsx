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
      backgroundImage="https://cdn.sanity.io/images/8dp3bjvf/production/f8180d806a89a6fbdbad13fc1480e5f5008d5820-5472x3648.jpg"
      backgroundImageAlt="Everything Electrical Switchboard Installation"
      primaryCtaText="Book Now"
      primaryCtaUrl="#contact"
      secondaryCtaText="Call Now"
      secondaryCtaUrl="tel:0449003526"
    />
  );
}
