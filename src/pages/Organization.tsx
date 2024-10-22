import { FooterComponent } from '@/components/footer'
import { NavbarComponent } from '@/components/navbar'
import { VolunteerMatchPage } from '@/components/volunteer-match-page'
import Container from "@/components/container";

export default function Organization() {
  return (
    <div>
        <NavbarComponent />
        <Container>
        <VolunteerMatchPage />
        <FooterComponent />
        </Container>
    </div>
  )
}