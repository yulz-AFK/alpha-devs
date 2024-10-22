import { FooterComponent } from "@/components/footer";
import { NavbarComponent } from "@/components/navbar";
import OrganizationProfile from "@/components/organization-profile";

export default function OrgProfile() {
  return (
    <div>
      <NavbarComponent />
      <OrganizationProfile />
      <FooterComponent />
    </div>
  );
}
