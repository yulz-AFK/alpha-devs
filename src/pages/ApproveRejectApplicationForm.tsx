import Dashboard from "@/components/dashboard";
import { VolunteerApplicationReviewPageComponent } from "@/components/volunteer-application-review-page";

export default function ApproveRejectApplicationForm() {
  const application = {
    id: "12345",
    firstName: "Juan",
    lastName: "Dela Cruz",
    email: "juan@example.com",
    phone: "09123456789",
    address: "123 Rizal St, Brgy. San Antonio",
    city: "Quezon City",
    province: "Metro Manila",
    zipCode: "1100",
    citizenship: "Philippine",
    skills: [
      "Backpacking/Camping",
      "First Aid Certificate",
      "Public Speaking",
      "Teaching",
    ],
    languages: ["Filipino", "English", "Cebuano"],
    volunteeredBefore: "Yes",
    additionalQualifications:
      "I have experience in organizing community events and have been actively involved in environmental conservation projects for the past 3 years.",
    daysAvailable: ["Monday", "Wednesday", "Friday", "Saturday"],
    monthsAvailable: ["June", "July", "August", "September"],
    totalHours: 40,
    status: "pending" as const,
  };

  const handleApprove = (id: string) => {
    console.log(`Approved application ${id}`);
  };

  const handleReject = (id: string) => {
    console.log(`Rejected application ${id}`);
  };

  return (
    <div>
      <Dashboard>
        <VolunteerApplicationReviewPageComponent
          application={application}
          onApprove={handleApprove}
          onReject={handleReject}
        />
      </Dashboard>
    </div>
  );
}
