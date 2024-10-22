
import EventPageComponent from "@/components/event-page";
import { FooterComponent } from "@/components/footer";
import { NavbarComponent } from "@/components/navbar";

export default function Event() {
  return (
    <div>
        <NavbarComponent />
        <EventPageComponent />
        <FooterComponent />
    </div>
  )
}
