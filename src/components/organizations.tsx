import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusCircle, ExternalLink } from "lucide-react";

interface Organization {
  name: string;
  defaultContact: string;
  activeOpportunities: number;
  imageUrl: string;
}

export default function Organizations() {
  const organizations: Organization[] = [
    {
      name: "Dr. Yanga's Colleges, Inc.",
      defaultContact: "Juan Dela Cruz",
      activeOpportunities: 0,
      imageUrl: "https://dyci.edu.ph/img/DYCI.png",
    },
    {
      name: "Philippine Red Cross",
      defaultContact: "Maria Garcia",
      activeOpportunities: 2,
      imageUrl:
        "https://w7.pngwing.com/pngs/731/800/png-transparent-american-red-cross-philippine-red-cross-rizal-chapter-international-committee-of-the-red-cross-international-red-cross-and-red-crescent-movement-others-trademark-donation-logo-thumbnail.png",
    },
    {
      name: "Make a Wish",
      defaultContact: "John Smith",
      activeOpportunities: 5,
      imageUrl: "https://pbs.twimg.com/media/D-ZBWxeX4AEmb3m.jpg",
    },
  ];

  const navigate = useNavigate();

  const addNewOrganization = () => {
    navigate("/create-org-profile");
  };

  return (
    <div className="container mx-auto p-4 my-4 md:my-8">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
        <h1 className="text-2xl md:text-4xl font-bold text-center mb-4 sm:mb-0">
          My Organizations
        </h1>
        <Button
          className="bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto"
          onClick={addNewOrganization}
        >
          <PlusCircle className="mr-2 h-4 w-4" /> Add New Organization
        </Button>
      </div>

      <hr className="border-gray-300 my-4 md:my-6" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {organizations.map((org, index) => (
          <Card
            key={index}
            className="transform transition-all duration-300 hover:shadow-lg border-0 bg-white rounded-lg overflow-hidden"
          >
            <CardHeader className="flex flex-col items-center bg-gray-50 p-6">
              <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-primary shadow-md">
                <img
                  src={org.imageUrl}
                  alt={`${org.name} logo`}
                  className="object-cover w-full h-full"
                />
              </div>
              <CardTitle className="text-center text-xl font-semibold text-gray-800">
                {org.name}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-2 text-sm text-gray-600">
                <p>
                  <span className="font-medium text-gray-700">
                    Default Contact:
                  </span>{" "}
                  {org.defaultContact}
                </p>
                <p>
                  <span className="font-medium text-gray-700">
                    Active Opportunities:
                  </span>{" "}
                  {org.activeOpportunities}
                </p>
              </div>
            </CardContent>
            <CardFooter className="bg-gray-50 p-4">
              <Button
                variant="outline"
                className="w-full group hover:bg-primary hover:text-white transition-colors duration-300"
                onClick={() => navigate("/manage-org-home")}
              >
                Dashboard
                <ExternalLink className="ml-2 h-4 w-4 group-hover:text-white" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
