import { FooterComponent } from '@/components/footer'
import { NavbarComponent } from '@/components/navbar'
import { OrganizationChatUi } from '@/components/organization-chat'

export default function OrgChat() {
  return (
    <div>
        <NavbarComponent />
        <OrganizationChatUi />
        <FooterComponent />
    </div>
  )
}
