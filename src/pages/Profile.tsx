import { FooterComponent } from '@/components/footer'
import { NavbarComponent } from '@/components/navbar'
import VolunteerDashboard from '@/components/volunteer-dashboard'
import Container from "@/components/container";

export default function Profile() {
  return (
    <div>
        <NavbarComponent />
        <Container>
        <VolunteerDashboard />
        <FooterComponent />
        </Container>
    </div>
  )
}