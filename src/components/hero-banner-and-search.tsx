import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  MapPin,
  Briefcase,
  Calendar,
  User,
  Users,
  Clock,
  Home,
  School,
  Shield,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface ContactInfo {
  name: string;
  email: string;
  phone: string;
}

interface Opportunity {
  image: string;
  title: string;
  organization: string;
  location: string;
  position: string;
  dateRange: string;
  description: string;
  address: string;
  type: string;
  primaryContact: ContactInfo;
  secondaryContact?: ContactInfo;
  categories: string[];
  requiredDays: string[];
  lodgingAvailable: boolean;
  trainingRequired: boolean;
  backgroundCheckRequired: boolean;
  referenceCheckRequired: boolean;
  applyLink: string;
}

interface ProgressBarProps {
  current: number;
  total: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ current, total }) => {
  const percentage = (current / total) * 100;

  return (
    <div className="w-full mb-4">
      <div className="bg-gray-200 rounded-full h-2.5">
        <div
          className="bg-[#179eb0] h-2.5 rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <span className="block text-center mt-2 text-sm font-medium text-gray-700">
        {Math.round(percentage)}%
      </span>
    </div>
  );
};

const OpportunityDetails: React.FC<{ opportunity: Opportunity }> = ({
  opportunity,
}) => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg">
      <div className="relative h-64 rounded-t-lg overflow-hidden mb-6">
        <img
          src={opportunity.image}
          alt={opportunity.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white text-center">
            {opportunity.title}
          </h1>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Description</h2>
        <p className="text-gray-600">{opportunity.description}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-xl font-semibold mb-4">Position Details</h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <MapPin className="w-5 h-5 mr-2 text-blue-500 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold">Address</p>
                <p>{opportunity.address}</p>
              </div>
            </li>
            <li className="flex items-center">
              <Briefcase className="w-5 h-5 mr-2 text-blue-500" />
              <div>
                <p className="font-semibold">Type</p>
                <p>{opportunity.type}</p>
              </div>
            </li>
            <li className="flex items-center">
              <Calendar className="w-5 h-5 mr-2 text-blue-500" />
              <div>
                <p className="font-semibold">Dates</p>
                <p>{opportunity.dateRange}</p>
              </div>
            </li>
            <li className="flex items-start">
              <User className="w-5 h-5 mr-2 text-blue-500 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold">Point of Contact</p>
                <p>{opportunity.primaryContact.name}</p>
                <p>{opportunity.primaryContact.email}</p>
                <p>{opportunity.primaryContact.phone}</p>
              </div>
            </li>
            {opportunity.secondaryContact && (
              <li className="flex items-start">
                <Users className="w-5 h-5 mr-2 text-blue-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Secondary Point of Contact</p>
                  <p>{opportunity.secondaryContact.name}</p>
                  <p>{opportunity.secondaryContact.email}</p>
                  <p>{opportunity.secondaryContact.phone}</p>
                </div>
              </li>
            )}
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Additional Information</h3>
          <ul className="space-y-4">
            <li className="flex items-center">
              <School className="w-5 h-5 mr-2 text-blue-500" />
              <div>
                <p className="font-semibold">Category</p>
                {opportunity.categories.map((category, index) => (
                  <p key={index}>{category}</p>
                ))}
              </div>
            </li>
            <li className="flex items-center">
              <Clock className="w-5 h-5 mr-2 text-blue-500" />
              <div>
                <p className="font-semibold">Required Days</p>
                <p>{opportunity.requiredDays.join(", ")}</p>
              </div>
            </li>
            <li className="flex items-center">
              <Home className="w-5 h-5 mr-2 text-blue-500" />
              <div>
                <p className="font-semibold">
                  Lodging Available for Opportunity
                </p>
                <p>{opportunity.lodgingAvailable ? "Yes" : "No"}</p>
              </div>
            </li>
            <li className="flex items-center">
              <Shield className="w-5 h-5 mr-2 text-blue-500" />
              <div>
                <p className="font-semibold">Training Required</p>
                <p>{opportunity.trainingRequired ? "Yes" : "No"}</p>
              </div>
            </li>
            <li className="flex items-center">
              <Shield className="w-5 h-5 mr-2 text-blue-500" />
              <div>
                <p className="font-semibold">Background Check Required</p>
                <p>{opportunity.backgroundCheckRequired ? "Yes" : "No"}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-6 text-center">
        <Button
          variant="default"
          size="lg"
          onClick={() => window.open(opportunity.applyLink, "_blank")}
        >
          Apply Now
        </Button>
      </div>
    </div>
  );
};

export function DiscoverOpportunities() {
  const [category, setCategory] = useState("");
  const [specialGroup, setSpecialGroup] = useState("");
  const [agency, setAgency] = useState("");
  const opportunities = [
    {
      image:
        "https://www.redcross.org/content/dam/redcross/about-us/news/2020/philrctyphoonvamco1_002.jfif.jpg",
      title: "Typhoon Julian Rescue Volunteer",
      organization: "Philippine Red Cross",
      location: "Manila, Philippines",
      position: "Rescue Volunteer",
      dateRange: "11/1/2024 - 11/1/2025",
      description:
        "Join the Philippine Red Cross in their efforts to provide relief and assistance to communities affected by Typhoon Julian. Volunteers will help with rescue operations, first aid, and distribution of essential supplies.",
      address: "123 Rescue Street, Manila, Philippines",
      type: "On-Site Position",
      primaryContact: {
        name: "Maria Santos",
        email: "maria.santos@redcross.ph",
        phone: "+63 123 456 7890",
      },
      categories: ["Disaster Relief", "Emergency Response"],
      requiredDays: ["Weekdays", "Weekends"],
      lodgingAvailable: true,
      trainingRequired: true,
      backgroundCheckRequired: true,
      referenceCheckRequired: false,
      applyLink: "/application-form",
      currentVolunteers: 15,
      totalVolunteersNeeded: 50,
    },
    {
      image:
        "https://goodneighbors.ph/wp-content/uploads/2021/01/Sagrada-F.jpg",
      title: "Community Development Volunteer",
      organization: "Gawad Kalinga",
      location: "Bulacan, Philippines",
      position: "Community Development Volunteer",
      dateRange: "03/15/2024 - 06/15/2024",
      description:
        "Work with Gawad Kalinga to build sustainable communities.  Tasks include assisting with housing construction, teaching livelihood skills, and organizing community events.",
      address: "Gawad Kalinga Enchanted Farm, Angat, Bulacan, Philippines",
      type: "On-Site Position",
      primaryContact: {
        name: "Anna Reyes",
        email: "anna.reyes@gk.org.ph",
        phone: "+63 987 654 3210",
      },
      categories: ["Community Development", "Construction", "Education"],
      requiredDays: ["Weekdays"],
      lodgingAvailable: true,
      trainingRequired: true,
      backgroundCheckRequired: false,
      referenceCheckRequired: false,
      applyLink: "/application-form",
      currentVolunteers: 8,
      totalVolunteersNeeded: 20,
    },
    {
      image:
        "https://images.takeshape.io/86ce9525-f5f2-4e97-81ba-54e8ce933da7/dev/0ad17433-095a-4238-aa30-f451ace1da8d/4.jpg?auto=compress%2Cformat&w=1440",
      title: "Mangrove Planting and Coastal Conservation",
      organization: "WWF Philippines",
      location: "Palawan, Philippines",
      position: "Environmental Conservation Volunteer",
      dateRange: "05/01/2024 - 05/31/2024",
      description:
        "Participate in mangrove planting activities, coastal cleanups, and environmental awareness campaigns in Palawan.",
      address: "Puerto Princesa City, Palawan, Philippines",
      type: "On-Site Position",
      primaryContact: {
        name: "Jose Cruz",
        email: "jose.cruz@wwf.org.ph",
        phone: "+63 912 345 6789",
      },
      categories: ["Environmental Conservation", "Coastal Management"],
      requiredDays: ["Weekends"],
      lodgingAvailable: false,
      trainingRequired: true,
      backgroundCheckRequired: false,
      referenceCheckRequired: true,
      applyLink: "/application-form",
      currentVolunteers: 25,
      totalVolunteersNeeded: 100,
    },
    {
      image:
        "https://rs.projects-abroad.ie/v1/hero/product-5b5b2f57d7d1b.[1090].jpeg",
      title: "English Teacher for Underserved Youth",
      organization: "ASPIRE Philippines",
      location: "Quezon City, Philippines",
      position: "Teacher/Educator",
      dateRange: "07/01/2024 - 08/31/2024",
      description:
        "Teach English to underserved youth in Quezon City and help them improve their communication skills.",
      address: "101 Education Street, Quezon City, Philippines",
      type: "On-Site Position",
      primaryContact: {
        name: "Sofia Rodriguez",
        email: "sofia.rodriguez@aspire.org.ph",
        phone: "+63 999 888 7777",
      },
      categories: ["Education", "Youth Development"],
      requiredDays: ["Weekdays"],
      lodgingAvailable: false,
      trainingRequired: false,
      backgroundCheckRequired: true,
      referenceCheckRequired: true,
      applyLink: "/application-form",
      currentVolunteers: 5,
      totalVolunteersNeeded: 15,
    },
    {
      image:
        "https://securitydebrief.com/wp-content/uploads/2017/09/USCG-Irma.jpg",
      title: "Disaster Relief Coordinator",
      organization: "Caritas Philippines",
      location: "Tacloban City, Philippines",
      position: "Disaster Relief Coordinator",
      dateRange: "09/15/2024 - 12/15/2024",
      description:
        "Coordinate disaster relief efforts, including needs assessments, resource mobilization, and distribution of aid to affected communities.",
      address: "Caritas Philippines Office, Tacloban City, Philippines",
      type: "On-Site Position",
      primaryContact: {
        name: "David Garcia",
        email: "david.garcia@caritas.org.ph",
        phone: "+63 900 111 2222",
      },
      categories: ["Disaster Relief", "Project Management"],
      requiredDays: ["Weekdays"],
      lodgingAvailable: true,
      trainingRequired: true,
      backgroundCheckRequired: true,
      referenceCheckRequired: true,
      applyLink: "/application-form",
      currentVolunteers: 3,
      totalVolunteersNeeded: 10,
    },
  ];

  const renderModal = (
    title: string,
    options: string[],
    value: string,
    setValue: React.Dispatch<React.SetStateAction<string>>
  ) => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-full justify-between" style={{ backgroundColor: 'rgba(4, 30, 37, 0.7)', border: 'none', color: '#179eb0', cursor: 'pointer' }}>
          {value || title}
          <span className="text-blue-600">⋯</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>
            Select a {title.toLowerCase()} from the list below.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {options.map((option, index) => (
            <Button
              key={index}
              variant="outline"
              onClick={() => setValue(option)}
              className={value === option ? "bg-blue-100" : ""}
            >
              {option}
            </Button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );

  return (
    <div className="min-h-screen" style={{ userSelect: 'none' }}>
      <div className="text-center text-4xl md:text-5xl font-bold" style={{ visibility: 'hidden' }}>
        <p>BLANK</p>
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/3">
            <h2 className="text-2xl font-bold mb-4 text-[#fff]">Narrow Choices</h2>
            <Button variant="default" className="w-full mb-4">
              Reset Filters
            </Button>
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="keyword"
                  className="block text-sm font-medium text-[#fff] mb-1"
                >
                  Keyword
                </label>
                <Input type="text" id="keyword" placeholder="Search..." style={{ backgroundColor: 'rgba(4, 30, 37, 0.7)', border: 'none', color: '#179eb0' }} />
              </div>
              <Separator className="my-4 bg-[#179eb0]" />
              <div>
                <label
                  htmlFor="inPersonVirtual"
                  className="block text-sm font-medium text-[#fff] mb-1"
                >
                  In-Person or Virtual
                </label>
                <Select style={{ backgroundColor: 'rgba(4, 30, 37, 0.7)', border: 'none', color: '#179eb0' }}>
                  <SelectTrigger style={{ backgroundColor: 'rgba(4, 30, 37, 0.7)', border: 'none', color: '#179eb0' }}>
                    <SelectValue placeholder="None" />
                  </SelectTrigger>
                  <SelectContent style={{ backgroundColor: '#179eb0', color: '#041e25' }}>
                    <SelectItem value="none"style={{ cursor: 'pointer' }}>None</SelectItem>
                    <SelectItem value="inPerson" style={{ cursor: 'pointer' }}>In-Person</SelectItem>
                    <SelectItem value="virtual" style={{ cursor: 'pointer' }}>Virtual</SelectItem>
                  </SelectContent>
                </Select>

              </div>
              <div>
                <label
                  htmlFor="positionEvent"
                  className="block text-sm font-medium text-[#fff] mb-1"
                >
                  Position or Event
                </label>
                <Select style={{ backgroundColor: 'rgba(4, 30, 37, 0.7)', border: 'none', color: '#179eb0' }}>
                  <SelectTrigger style={{ backgroundColor: 'rgba(4, 30, 37, 0.7)', border: 'none', color: '#179eb0' }}>
                    <SelectValue placeholder="None" />
                  </SelectTrigger>
                  <SelectContent style={{ backgroundColor: '#179eb0', color: '#041e25' }}>
                    <SelectItem value="none"style={{ cursor: 'pointer' }}>None</SelectItem>
                    <SelectItem value="position" style={{ cursor: 'pointer' }}>Position</SelectItem>
                    <SelectItem value="event" style={{ cursor: 'pointer' }}>Event</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label
                  htmlFor="lodging"
                  className="block text-sm font-medium text-[#fff] mb-1"
                >
                  Lodging Availability
                </label>
                <Select style={{ backgroundColor: 'rgba(4, 30, 37, 0.7)', border: 'none', color: '#179eb0' }}>
                  <SelectTrigger style={{ backgroundColor: 'rgba(4, 30, 37, 0.7)', border: 'none', color: '#179eb0' }}>
                    <SelectValue placeholder="None" />
                  </SelectTrigger>
                  <SelectContent style={{ backgroundColor: '#179eb0', color: '#041e25' }}>
                    <SelectItem value="none"style={{ cursor: 'pointer' }}>None</SelectItem>
                    <SelectItem value="available" style={{ cursor: 'pointer' }}>Available</SelectItem>
                    <SelectItem value="notAvailable" style={{ cursor: 'pointer' }}>Not Available</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label
                  htmlFor="city"
                  className="block text-sm font-medium text-[#fff] mb-1"
                >
                  City
                </label>
                <Input type="text" id="keyword" placeholder="Enter city.." style={{ backgroundColor: 'rgba(4, 30, 37, 0.7)', border: 'none', color: '#179eb0' }} />
              </div>
              <div>
                <label
                  htmlFor="province"
                  className="block text-sm font-medium text-[#fff] mb-1"
                >
                  Province
                </label>
                <Select style={{ backgroundColor: 'rgba(4, 30, 37, 0.7)', border: 'none', color: '#179eb0' }}>
                  <SelectTrigger style={{ backgroundColor: 'rgba(4, 30, 37, 0.7)', border: 'none', color: '#179eb0' }}>
                    <SelectValue placeholder="None" />
                  </SelectTrigger>
                  <SelectContent style={{ backgroundColor: '#179eb0', color: '#041e25' }}>
                    <SelectItem value="none"style={{ cursor: 'pointer' }}>None</SelectItem>
                    <SelectItem value="metroManila" style={{ cursor: 'pointer' }}>Metro Manila</SelectItem>
                    <SelectItem value="ilocosRegion" style={{ cursor: 'pointer' }}>Ilocos Region</SelectItem>
                    <SelectItem value="cagayanValley" style={{ cursor: 'pointer' }}>Cagayan Valley</SelectItem>
                    <SelectItem value="centralLuzon" style={{ cursor: 'pointer' }}>Central Luzon</SelectItem>
                    <SelectItem value="calabarzon" style={{ cursor: 'pointer' }}>Calabarzon</SelectItem>
                    <SelectItem value="bicolRegion" style={{ cursor: 'pointer' }}>Bicol Region</SelectItem>
                    <SelectItem value="visayas" style={{ cursor: 'pointer' }}>Visayas</SelectItem>
                    <SelectItem value="mindanao" style={{ cursor: 'pointer' }}>Mindanao</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Separator className="my-4 bg-[#179eb0]" />

              <div>
                <label
                  htmlFor="startDate"
                  className="block text-sm font-medium text-[#fff] mb-1"
                >
                  Starts By
                </label>
                <Input type="date" id="startDate" style={{ backgroundColor: 'rgba(4, 30, 37, 0.7)', border: 'none', color: '#179eb0', cursor: 'pointer' }} />
              </div>
              <div>
                <label
                  htmlFor="endDate"
                  className="block text-sm font-medium text-[#fff] mb-1"
                >
                  Ends By
                </label>
                <Input type="date" id="endDate" style={{ backgroundColor: 'rgba(4, 30, 37, 0.7)', border: 'none', color: '#179eb0', cursor: 'pointer' }} />
              </div>
              <Separator className="my-4 bg-[#179eb0]" />

              <div>
                <label className="block text-sm font-medium text-[#fff] mb-1">
                  Category
                </label>
                {renderModal(
                  "Category",
                  ["Environment", "Education", "Health", "Community"],
                  category,
                  setCategory
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-[#fff] mb-1">
                  Special Group
                </label>
                {renderModal(
                  "Special Group",
                  ["Veterans", "Youth", "Seniors", "Families"],
                  specialGroup,
                  setSpecialGroup
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-[#fff] mb-1">
                  Agency
                </label>
                {renderModal(
                  "Agency",
                  [
                    "Philippine Red Cross",
                    "Gawad Kalinga",
                    "Mangrove Planting and Coastal Conservation",
                    "ASPIRE Philippines",
                    "Caritas Philippines",
                  ],
                  agency,
                  setAgency
                )}
              </div>
            </div>
          </div>

          <div className="w-full md:w-2/3">
            <h2 className="text-2xl font-bold mb-4 text-[#fff]">
              5 of 5 Opportunities{" "}
            </h2>
            <div className="space-y-6">
              {opportunities.map((opportunity, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="w-full md:w-1/3">
                        <img
                          src={opportunity.image}
                          alt={opportunity.title}
                          className="w-full h-48 object-cover rounded-md"
                        />
                      </div>
                      <div className="w-full md:w-2/3">
                        <h3 className="text-xl font-semibold text-[#041e25] mb-2">
                          {opportunity.title}
                        </h3>
                        <p className="text-gray-600 mb-2">
                          {opportunity.organization}
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center text-sm text-gray-600">
                            <MapPin className="w-4 h-4 mr-2" />
                            <span>{opportunity.location}</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <Briefcase className="w-4 h-4 mr-2" />
                            <span>{opportunity.position}</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <Calendar className="w-4 h-4 mr-2" />
                            <span>{opportunity.dateRange}</span>
                          </div>
                        </div>
                        <div className="mt-4">
                          <ProgressBar
                            current={opportunity.currentVolunteers}
                            total={opportunity.totalVolunteersNeeded}
                          />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="bg-gray-50 border-t p-4">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" className="w-full">
                          More info
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl">
                        <OpportunityDetails opportunity={opportunity} />
                      </DialogContent>
                    </Dialog>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}