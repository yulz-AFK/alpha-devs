import Dashboard from "@/components/dashboard";
import EventsPageComponent from "@/components/events-page";

export default function ManageOrgHome() {
  return (
    <div>
      <Dashboard>
        <EventsPageComponent />
      </Dashboard>
    </div>
  );
}
