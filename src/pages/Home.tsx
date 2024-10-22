import Container from "@/components/container";
import { VolunteerHero } from "@/components/volunteer-hero";
import { NavbarComponent } from "@/components/navbar";
import { VolunteerOpportunitiesComponent } from "@/components/volunteer-opportunities";
import { LatestOpportunitiesComponent } from "@/components/latest-opportunities";
import { FooterComponent } from "@/components/footer";
import PartnerLogosComponent from "@/components/partner-logos";

export default function Home() {
  return (
    <div>
      <NavbarComponent />
      <VolunteerHero />
      <Container>
        <VolunteerOpportunitiesComponent />
        <LatestOpportunitiesComponent />
      <PartnerLogosComponent />
      <FooterComponent />
      </Container>
    </div>
  );
}