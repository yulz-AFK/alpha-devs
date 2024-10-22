import { CreateOrganizationProfile } from '@/components/create-organization-profile'
import { FooterComponent } from '@/components/footer'
import { NavbarComponent } from '@/components/navbar'

export default function CreateOrgProfile() {
  return (
    <div>
        <NavbarComponent />
        <CreateOrganizationProfile />
        <FooterComponent />
    </div>
  )
}
