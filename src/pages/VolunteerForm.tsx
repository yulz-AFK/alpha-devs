import { FooterComponent } from '@/components/footer'
import { NavbarComponent } from '@/components/navbar'
import { VolunteerApplicationFormComponent } from '@/components/volunteer-application-form'

export default function VolunteerForm() {
  return (
    <div>
        <NavbarComponent />
        <VolunteerApplicationFormComponent eventTitle="Charity Marathon" />
        <FooterComponent />
    </div>
  )
}
