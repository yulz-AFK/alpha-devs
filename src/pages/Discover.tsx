import { FooterComponent } from "@/components/footer";
import { DiscoverOpportunities } from "@/components/hero-banner-and-search";
import { NavbarComponent } from "@/components/navbar";
import Container from "@/components/container";

export default function () {
  return (
    <div>
      <NavbarComponent />
      <Container>
      <DiscoverOpportunities />
      <FooterComponent />
      </Container>
    </div>
  );
}