import HeroMain from "../../hero/hero-main";

export default function HomeHero() {
  return (
    <HeroMain
      showAnnouncementText={true}
      announcementText={"24/7 Emergency Electrician"}
      announcementLink={"tel:0449003526"}
      headline={"All Your Power Needs in One Place"}
      subheadline={
        "Seniors & Pensioners Discount. Get $50 Off Your First Purchase."
      }
      backgroundImage="https://cdn.sanity.io/images/8dp3bjvf/production/43854d6bf5bdacf15e3d29060007836b2e57f78f-3648x5472.jpg"
      backgroundImageDesktop="https://cdn.sanity.io/images/8dp3bjvf/production/43854d6bf5bdacf15e3d29060007836b2e57f78f-3648x5472.jpg"
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
