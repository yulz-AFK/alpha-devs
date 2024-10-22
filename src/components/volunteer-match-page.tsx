"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, Building2, GraduationCap, Globe } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function VolunteerMatchPage() {
  const navigate = useNavigate();

  function navCreateOrgProfile() {
    navigate("/create-org-profile");
  }

  return (
    <div className="min-h-screen">
      <div className="text-center text-4xl md:text-5xl font-bold" style={{ visibility: 'hidden' }}>
        <p>BLANK</p>
      </div>
      <main className="container mx-auto px-4 py-8">
        <section className="mb-16 bg-primary text-white rounded-lg overflow-hidden shadow-lg">
          <div className="flex flex-col md:flex-row items-center">
            <div className="p-8 md:w-2/3">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Claim your organization's Bayani profile now
              </h1>
              <p className="text-lg">
                Enjoy the benefits! Join our highly engaged network -- 13
                million volunteers and 130,000 nonprofits -- and take advantage
                of the world's most powerful volunteer recruiting services,
                engagement tools, and best-in-class educational resources.
              </p>
            </div>
            <div className="md:w-1/3">
              <img
                src="https://treetrust.org/wp-content/uploads/2021/08/DSC_0178-scaled.jpg"
                alt="Volunteers working together"
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 pb-2 border-b-2 border-gray-200 w-full">
            Start Here
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-6">
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Home,
                title: "501(c) Nonprofits",
                color: "bg-red-500",
                items: [
                  "501(c) Organizations",
                  "Tax-Exempt Status Pending Organizations",
                ],
              },
              {
                icon: Building2,
                title: "Gov't, Hospice, State-Level",
                color: "bg-blue-500",
                items: [
                  "Government Organizations",
                  "Hospices & Hospitals",
                  "State-Level Tax Exempt Organizations",
                ],
              },
              {
                icon: GraduationCap,
                title: "Schools",
                color: "bg-orange-500",
                items: [
                  "Public and Private K-12",
                  "Public and Private Universities",
                ],
              },
              {
                icon: Globe,
                title: "NGO",
                color: "bg-green-500",
                items: ["Non-Governmental Organizations"],
              },
            ].map((item, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className={`${item.color} p-6 text-center`}>
                    <item.icon className="mx-auto h-12 w-12 text-white" />
                    <h3 className="mt-4 font-semibold text-white">
                      {item.title}
                    </h3>
                  </div>
                  <div className="p-4">
                    <Button onClick={navCreateOrgProfile} variant="outline" className="w-full mb-4">
                      Select
                    </Button>
                    <ul className="text-sm text-gray-600 space-y-2">
                      {item.items.map((subItem, subIndex) => (
                        <li key={subIndex}>{subItem}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <div className="flex flex-col md:flex-row items-center rounded-lg overflow-hidden shadow-lg">
            <div className="md:w-1/3">
              <img
                src="https://www.ivolunteer.com.ph/storage/event_images/Literacy.JPG"
                alt="Volunteer with child"
                className="w-full h-auto"
              />
            </div>
            <div className="p-8 md:w-2/3">
              <h2 className="text-3xl font-bold mb-4">
                Bayani connects you with meaningful volunteer opportunities
              </h2>
              <p className="text-gray-600 mb-4">
                Bayani empowers Filipinos to create positive change by matching volunteers with causes that matter. Whether you're passionate about education, the environment, or community development, Bayani helps you find the perfect fit.
              </p>
              <p className="text-gray-600 mb-4">
                We make it easy for volunteers not only to give their time but also to donate and support causes close to their hearts, further amplifying their impact.
              </p>
              <p className="text-gray-600">
                Our platform simplifies the process for organizers, automating tasks like posting volunteer opportunities and managing events, so you can focus on what really matters—building a better Philippines.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Join the largest volunteer network in three steps
          </h2>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-8">
            {[
              { number: "1", text: "find / claim your organization" },
              { number: "2", text: "create a personal profile" },
              { number: "3", text: "add volunteer opportunities" },
            ].map((step, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="bg-primary text-white text-4xl font-bold w-16 h-16 rounded-full flex items-center justify-center">
                  {step.number}
                </div>
                <p className="text-xl">{step.text}</p>
              </div>
            ))}
          </div>
          <p className="text-center mt-8">
            Need help registering your organization? Visit our Help Center
          </p>
        </section>
      </main>
    </div>
  );
}