import { useState, ChangeEvent, FormEvent } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ChevronDown, Info, Search, MapPin, Edit2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";

interface User {
  name: string;
  profilePicture: string;
  causes: string[];
  skills: string[];
  location: string;
  coordinates: { lat: number; lng: number };
}

interface Opportunity {
  applicationNumber: string;
  link: string;
  status: string;
  totalHours: number;
  outstandingHours: number;
}

const mockUser: User = {
  name: "John Rick Salazar",
  profilePicture: "",
  causes: ["Environment", "Education", "Animal Welfare"],
  skills: ["Project Management", "Teaching", "Gardening"],
  location: "San Francisco, CA",
  coordinates: { lat: 37.7749, lng: -122.4194 },
};

const getInitials = (name: string) => {
  const initials = name
    .split(" ")
    .map((word) => word[0])
    .join("");
  return initials.toUpperCase();
};

const mockApplications: Opportunity[] = [
  {
    applicationNumber: "APP002",
    link: "Food Bank",
    status: "Pending",
    totalHours: 0,
    outstandingHours: 0,
  },
  {
    applicationNumber: "APP003",
    link: "Animal Shelter",
    status: "In Review",
    totalHours: 0,
    outstandingHours: 0,
  },
];

const mockActiveOpportunities: Opportunity[] = [
  {
    applicationNumber: "APP001",
    link: "Beach Cleanup",
    status: "Active",
    totalHours: 10,
    outstandingHours: 5,
  },
];

const mockCompletedOpportunities: Opportunity[] = [
  {
    applicationNumber: "APP004",
    link: "Tree Planting",
    status: "Completed",
    totalHours: 8,
    outstandingHours: 0,
  },
];

const mockCancelledOpportunities: Opportunity[] = [
  {
    applicationNumber: "APP005",
    link: "Senior Center",
    status: "Cancelled",
    totalHours: 0,
    outstandingHours: 0,
  },
];

export default function VolunteerDashboard() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [user, setUser] = useState<User>(mockUser);

  const filterOpportunities = (opportunities: Opportunity[]) =>
    opportunities.filter((opp) =>
      opp.link.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const handleUserUpdate = (updatedUser: User) => {
    setUser(updatedUser);
  };

  const renderOpportunityTable = (opportunities: Opportunity[], showHours: boolean) => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Application Number <ChevronDown className="inline-block ml-1" /></TableHead>
          <TableHead>Volunteer Opportunity Link <ChevronDown className="inline-block ml-1" /></TableHead>
          <TableHead>Status <ChevronDown className="inline-block ml-1" /></TableHead>
          {showHours && (
            <>
              <TableHead>Total Hours <ChevronDown className="inline-block ml-1" /></TableHead>
              <TableHead>Outstanding Hours <ChevronDown className="inline-block ml-1" /></TableHead>
            </>
          )}
        </TableRow>
      </TableHeader>
      <TableBody>
        {opportunities.map((opportunity) => (
          <TableRow key={opportunity.applicationNumber}>
            <TableCell>{opportunity.applicationNumber}</TableCell>
            <TableCell>{opportunity.link}</TableCell>
            <TableCell>{opportunity.status}</TableCell>
            {showHours && (
              <>
                <TableCell>{opportunity.totalHours}</TableCell>
                <TableCell>{opportunity.outstandingHours}</TableCell>
              </>
            )}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );

  return (
    <div>
      <div className="text-center text-4xl md:text-8xl font-bold" style={{ visibility: 'hidden' }}>
        <p>BLANK</p>
      </div>
      <h1 className="text-4xl md:text-5xl font-bold text-white text-center" style={{ userSelect: 'none'  }}>
        My Profile
      </h1>
      <div className="container mx-auto px-4 py-8">
        <Card className="mb-12 max-w-4xl mx-auto" style={{ backgroundColor: 'rgba(4, 30, 37, 0.7)', border: 'none', userSelect: 'none'  }}>
          <CardContent className="p-6" style={{ border: 'none' }}>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                {user.profilePicture ? (
                  <img
                    src={user.profilePicture}
                    alt={user.name}
                    className="w-40 h-40 rounded-full object-cover"
                    style={{ border: 'none' }} // Remove any border on image
                  />
                ) : (
                  <div className="bg-gray-200 w-40 h-40 rounded-full flex items-center justify-center text-2xl font-bold text-[#041e25]">
                    {getInitials(user.name)}
                  </div>
                )}
              </div>

              <div className="flex-grow text-center md:text-left">
                <h2 className="text-2xl font-bold mb-2 text-[#179eb0]">{user.name}</h2>
                <div className="flex items-center justify-center md:justify-start mb-4">
                  <MapPin className="mr-2 text-[#179eb0]" />
                  <span className="text-[#fff]">{user.location}</span>
                </div>
                <div className="mb-4">
                  <h3 className="font-semibold mb-2 text-[#179eb0]">Causes:</h3>
                  <div className="flex flex-wrap justify-center md:justify-start gap-2">
                    {user.causes.map((cause) => (
                      <Badge key={cause} variant="outline" style={{ border: 'none', color: 'white' }}>
                        {cause}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-[#179eb0]">Skills:</h3>
                  <div className="flex flex-wrap justify-center md:justify-start gap-2">
                    {user.skills.map((skill) => (
                      <Badge key={skill} variant="outline" style={{ border: 'none', color: 'white' }}>
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex-shrink-0 w-full md:w-48 h-48 bg-gray-200 rounded-lg overflow-hidden" style={{ visibility: 'hidden', border: 'none' }}>
                <iframe
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  style={{ border: 0 }}
                  src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${user.coordinates.lat},${user.coordinates.lng}`}
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="mt-4 text-center">
              <EditProfileDialog user={user} onUpdate={handleUserUpdate} />
            </div>
          </CardContent>
        </Card>


        <section className="mb-12">
          <div className="text-center text-4xl md:text-8xl font-bold" style={{ visibility: 'hidden' }}>
            <p>BLANK</p>
          </div>
          <h2 className="text-4xl font-bold mb-4">My Volunteer Journey [NO IMPROVEMENT YET]</h2>
          <p className="mb-4">
            Track your volunteer applications and opportunities here. Ready to make a difference? 
            Browse the latest opportunities in{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Discover Opportunities
            </a>{" "}
            and find something that sparks your passion.
          </p>
          <p>
            Contact the Volunteer Coordinator for more information about your applications or active opportunities.
          </p>
        </section>

        <div className="flex items-center mb-4">
          <Search className="mr-2" />
          <Input
            placeholder="Search opportunities..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-4">APPLICATIONS</h3>
          {renderOpportunityTable(filterOpportunities(mockApplications), false)}
        </section>

        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-4">ACTIVE OPPORTUNITIES</h3>
          {renderOpportunityTable(filterOpportunities(mockActiveOpportunities), true)}
        </section>

        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-4">COMPLETED OPPORTUNITIES</h3>
          {renderOpportunityTable(filterOpportunities(mockCompletedOpportunities), true)}
        </section>

        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-4">CANCELLED OPPORTUNITIES</h3>
          {renderOpportunityTable(filterOpportunities(mockCancelledOpportunities), false)}
        </section>

        <section className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="mr-2">Total Lifetime Hours: 18</span>
            <Info className="text-gray-500" />
          </div>
          <div className="flex items-center">
            <span className="mr-2">Total Hours for Volunteer Pass: 18</span>
            <Info className="text-gray-500" />
          </div>
          <div className="flex items-center">
            <span className="mr-2">Total Fiscal Year Hours: 18</span>
            <Info className="text-gray-500" />
          </div>
        </section>
      </div>
    </div>
  );
}

interface EditProfileDialogProps {
  user: User;
  onUpdate: (updatedUser: User) => void;
}

function EditProfileDialog({ user, onUpdate }: EditProfileDialogProps) {
  const [editedUser, setEditedUser] = useState<User>(user);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleArrayInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    field: keyof User
  ) => {
    const { value } = e.target;
    setEditedUser((prev) => ({
      ...prev,
      [field]: value.split(",").map((item) => item.trim()),
    }));
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const base64Image = reader.result as string;
        setEditedUser((prev) => ({ ...prev, profilePicture: base64Image }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onUpdate(editedUser);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default" className="mt-4">
          <Edit2 className="w-4 h-4 mr-2" />
          Edit Profile
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Profile</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              value={editedUser.name}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <Label htmlFor="location">Location</Label>
            <Input
              id="location"
              name="location"
              value={editedUser.location}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <Label htmlFor="causes">Causes (comma-separated)</Label>
            <Input
              id="causes"
              name="causes"
              value={editedUser.causes.join(", ")}
              onChange={(e) => handleArrayInputChange(e, "causes")}
            />
          </div>
          <div>
            <Label htmlFor="skills">Skills (comma-separated)</Label>
            <Input
              id="skills"
              name="skills"
              value={editedUser.skills.join(", ")}
              onChange={(e) => handleArrayInputChange(e, "skills")}
            />
          </div>
          <div>
            <Label htmlFor="profilePicture">Profile Picture</Label>
            <Input
              id="profilePicture"
              type="file"
              onChange={handleImageChange}
            />
          </div>
          <Button type="submit">Save Changes</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
