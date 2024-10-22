"use client";

import { MapPin, Briefcase, Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

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
      <span className="block text-center mt-2 text-sm font-medium text-[#fff]" style={{ userSelect: 'none' }}>
        {Math.round(percentage)}%
      </span>
    </div>
  );
};

export function LatestOpportunitiesComponent() {
  const opportunities = [
    {
      image: "https://www.redcross.org/content/dam/redcross/about-us/news/2020/philrctyphoonvamco1_002.jfif.jpg",
      title: "Typhoon Julian Rescue Volunteer",
      organization: "Philippine Red Cross",
      location: "Manila, Philippines",
      position: "Rescue Volunteer",
      dateRange: "11/1/2024 - 11/1/2025",
      currentVolunteers: 15,
      totalVolunteersNeeded: 50,
    },
    {
      image: "https://goodneighbors.ph/wp-content/uploads/2021/01/Sagrada-F.jpg",
      title: "Community Development Volunteer",
      organization: "Gawad Kalinga",
      location: "Bulacan, Philippines",
      position: "Community Development Volunteer",
      dateRange: "03/15/2024 - 06/15/2024",
      currentVolunteers: 8,
      totalVolunteersNeeded: 20,
    },
    {
      image: "https://images.takeshape.io/86ce9525-f5f2-4e97-81ba-54e8ce933da7/dev/0ad17433-095a-4238-aa30-f451ace1da8d/4.jpg?auto=compress%2Cformat&w=1440",
      title: "Mangrove Planting and Coastal Conservation",
      organization: "WWF Philippines",
      location: "Palawan, Philippines",
      position: "Environmental Conservation Volunteer",
      dateRange: "05/01/2024 - 05/31/2024",
      currentVolunteers: 25,
      totalVolunteersNeeded: 100,
    },
    {
      image: "https://rs.projects-abroad.ie/v1/hero/product-5b5b2f57d7d1b.[1090].jpeg",
      title: "English Teacher for Underserved Youth",
      organization: "ASPIRE Philippines",
      location: "Quezon City, Philippines",
      position: "Teacher/Educator",
      dateRange: "07/01/2024 - 08/31/2024",
      currentVolunteers: 5,
      totalVolunteersNeeded: 15,
    },
    {
      image: "https://securitydebrief.com/wp-content/uploads/2017/09/USCG-Irma.jpg",
      title: "Disaster Relief Coordinator",
      organization: "Caritas Philippines",
      location: "Tacloban City, Philippines",
      position: "Disaster Relief Coordinator",
      dateRange: "09/15/2024 - 12/15/2024",
      currentVolunteers: 3,
      totalVolunteersNeeded: 10,
    },
    {
      image: "https://media.cheggcdn.com/media/8f8/8f8d8ae8-36b5-447e-947c-076618279a3d/php1KnYTm",
      organization: "Organization 5",
      title: "Volunteer Position 5",
      location: "Location 5",
      position: "Position",
      dateRange: "Date Range 5",
      currentVolunteers: 12,
      totalVolunteersNeeded: 30,
    },
  ];

  return (
    <div>
      <div className="text-center text-4xl md:text-8xl font-bold" style={{ visibility: 'hidden' }}>
        <p>BLANK</p>
      </div>
      <div className="mx-auto px-7 py-8 rounded-xl" style={{ width: '90%', backgroundColor: 'rgba(4, 30, 37, 0.7)' }}>
        <h2 className="text-[#179eb0] text-4xl font-bold mb-4 w-full text-center mt-4" style={{ userSelect: 'none' }}>
          Latest Opportunities
        </h2>
        <div className="bg-[#fff] w-44 h-1 bg-primary mx-auto mb-8"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {opportunities.map((opportunity, index) => (
            <div
              key={index}
              className="rounded-xl shadow-xl overflow-hidden group"
              style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={opportunity.image}
                  alt={opportunity.title}
                  className="w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-110" // Ensure zoom on group hover
                  style={{ userSelect: 'none' }}
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-[#fff] text-lg font-semibold" style={{ userSelect: 'none' }}>{opportunity.organization}</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#179eb0] mb-4">
                  {opportunity.title}
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-[#fff]">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{opportunity.location}</span>
                  </div>
                  <div className="flex items-center text-sm text-[#fff]">
                    <Briefcase className="w-4 h-4 mr-2" />
                    <span>{opportunity.position}</span>
                  </div>
                  <div className="flex items-center text-sm text-[#fff]">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{opportunity.dateRange}</span>
                  </div>
                  <div className="flex items-center text-sm text-[#fff]">
                    <Users className="w-4 h-4 mr-2" />
                    <span>
                      {opportunity.currentVolunteers} / {opportunity.totalVolunteersNeeded} volunteers
                    </span>
                  </div>
                </div>
                <div className="mt-4">
                  <ProgressBar
                    current={opportunity.currentVolunteers}
                    total={opportunity.totalVolunteersNeeded}
                  />
                </div>
              </div>
              <div className="px-6 pb-6">
                <Button
                  variant="outline"
                  className="w-full"
                  style={{
                    backgroundColor: '#fff',
                    borderColor: '#179eb0',
                    color: '#041e25',
                    transition: 'background-color 0.3s, box-shadow 0.3s',
                    userSelect: 'none',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#179eb0';
                    e.currentTarget.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.5)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#fff';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  More info
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <Button
            variant="default"
            size="lg"
            className="px-8 py-3 text-lg font-semibold"
            style={{ userSelect: 'none' }}
          >
            See all opportunities
          </Button>
        </div>
      </div>
      <div className="text-center text-4xl md:text-8xl font-bold" style={{ visibility: 'hidden' }}>
        <p>BLANK</p>
      </div>
    </div>
  );
}