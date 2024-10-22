import { FooterComponent } from "@/components/footer";
import { NavbarComponent } from "@/components/navbar";
import Organizations from "@/components/organizations";

export default function MyOrganizations() {
  return (
    <div>
        <NavbarComponent />
        <Organizations />
        <FooterComponent />
    </div>
  )
}
