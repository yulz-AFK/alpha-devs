"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

interface VolunteerApplicationFormProps {
  eventTitle: string;
}

export function VolunteerApplicationFormComponent({
  eventTitle,
}: VolunteerApplicationFormProps) {
  const [step, setStep] = useState(1);

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
  };

  const skills = [
    "Backpacking/Camping",
    "Biology",
    "Boat Operation",
    "Carpentry",
    "Clerical/Office Machines",
    "Computer Programming",
    "Drafting/Graphics",
    "Driver's License",
    "First Aid Certificate",
    "Hand Power Tools",
    "Heavy Equipment Operation",
    "Horses - Care/Riding",
    "Landscaping/Reforestation",
    "Land Surveying",
    "Livestock/Ranching",
    "Map Reading or GIS/GPS",
    "Mountaineering",
    "Photography",
    "Public Speaking",
    "Research/Librarian",
    "Sign Language",
    "Supervision",
    "Teaching",
    "Working with People",
    "Writing/Editing",
  ];

  const languages = [
    "Filipino",
    "English",
    "Cebuano",
    "Ilocano",
    "Hiligaynon",
    "Waray",
  ];

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div className="w-full max-w-4xl mx-auto py-6">
      <div className="bg-blue-800 text-white p-8 mb-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
            <pattern
              id="topo-pattern"
              x="0"
              y="0"
              width="200"
              height="200"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M0 0 L200 0 L200 200 L0 200 Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
              />
              <circle
                cx="100"
                cy="100"
                r="50"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
              />
              <circle
                cx="100"
                cy="100"
                r="25"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
              />
            </pattern>
            <rect width="100%" height="100%" fill="url(#topo-pattern)" />
          </svg>
        </div>
        <h1 className="text-4xl font-bold relative z-10">
          Volunteer Application
        </h1>
      </div>
      <div className="px-4 mb-6">
        <p className="text-sm text-gray-600">
          Discover Opportunities &gt; {eventTitle}
        </p>
      </div>
      <Card className="mb-6">
        <CardContent className="p-6">
          <h3 className="text-lg font-medium mb-4">
            Bayani: Your Volunteer Journey Starts Here
          </h3>
          <p className="mb-4">
            Bayani makes volunteering easy! We'll gather your contact info,
            optional demographics, and emergency contact details. Some
            opportunities may also ask about your skills, experience, and
            availability. You can easily update your information at any time.
          </p>
          <p>
            Questions? Check out our Help Center or reach out to the Volunteer
            Coordinator listed on the opportunity.
          </p>
        </CardContent>
      </Card>
      {" "}
      <Card>
        <CardContent className="p-6">
          <form className="space-y-6">
            {step === 1 && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">
                  Step 1 of 2: Personal Information
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input id="firstName" placeholder="Juan" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input id="lastName" placeholder="Dela Cruz" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dob">Date of Birth *</Label>
                  <Input id="dob" type="date" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Mobile Number *</Label>
                  <Input id="phone" placeholder="09XX-XXX-XXXX" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Complete Address *</Label>
                  <Input
                    id="address"
                    placeholder="123 Rizal St, Brgy. San Antonio"
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="city">City/Municipality *</Label>
                    <Input id="city" placeholder="Quezon City" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="province">Province *</Label>
                    <Select>
                      <SelectTrigger id="province">
                        <SelectValue placeholder="Select province" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="metro-manila">
                          Metro Manila
                        </SelectItem>
                        <SelectItem value="cebu">Cebu</SelectItem>
                        <SelectItem value="davao">Davao</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="zipCode">Zip Code *</Label>
                  <Input id="zipCode" placeholder="1100" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="citizenship">Citizenship *</Label>
                  <Select>
                    <SelectTrigger id="citizenship">
                      <SelectValue placeholder="Select citizenship" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ph">Philippine</SelectItem>
                      <SelectItem value="dual">Dual Citizen</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">
                  Step 2 of 2: Knowledge, Skills, Abilities, and Availability
                </h2>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">
                    Skills and Abilities
                  </h3>
                  <div className="space-y-2">
                    <Label>
                      What qualifications, skills, or experiences do you have
                      that you would like to use as a volunteer? Check all that
                      apply *
                    </Label>
                    <div className="grid grid-cols-2 gap-2">
                      {skills.map((skill) => (
                        <div
                          key={skill}
                          className="flex items-center space-x-2"
                        >
                          <Checkbox id={`skill-${skill}`} />
                          <label htmlFor={`skill-${skill}`}>{skill}</label>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center space-x-2 mt-2">
                      <Checkbox id="skill-other" />
                      <label htmlFor="skill-other">
                        Other (Please specify)
                      </label>
                    </div>
                    <Input
                      id="skill-other-specify"
                      placeholder="Specify other skills"
                      className="mt-2"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>
                      What languages are you proficient in? Check all that apply
                      *
                    </Label>
                    <div className="grid grid-cols-2 gap-2">
                      {languages.map((language) => (
                        <div
                          key={language}
                          className="flex items-center space-x-2"
                        >
                          <Checkbox id={`language-${language}`} />
                          <label htmlFor={`language-${language}`}>
                            {language}
                          </label>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center space-x-2 mt-2">
                      <Checkbox id="language-other" />
                      <label htmlFor="language-other">Other</label>
                    </div>
                    <Input
                      id="language-other-specify"
                      placeholder="Specify other languages"
                      className="mt-2"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="volunteered-before">
                      Have you volunteered before? *
                    </Label>
                    <Select>
                      <SelectTrigger id="volunteered-before">
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="yes">Yes</SelectItem>
                        <SelectItem value="no">No</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="additional-qualifications">
                      Please identify and describe any other additional
                      qualifications, skills, experiences, or education that may
                      apply *
                    </Label>
                    <Textarea
                      id="additional-qualifications"
                      placeholder="Describe your additional qualifications here"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Availability</h3>
                  <p>
                    Please select your availability preferences. You can select
                    more than one option.
                  </p>

                  <div className="space-y-2">
                    <Label>Days Available *</Label>
                    <div className="grid grid-cols-2 gap-2">
                      {daysOfWeek.map((day) => (
                        <div key={day} className="flex items-center space-x-2">
                          <Checkbox id={`day-${day}`} />
                          <label htmlFor={`day-${day}`}>{day}</label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Months Available *</Label>
                    <div className="grid grid-cols-2 gap-2">
                      {months.map((month) => (
                        <div
                          key={month}
                          className="flex items-center space-x-2"
                        >
                          <Checkbox id={`month-${month}`} />
                          <label htmlFor={`month-${month}`}>{month}</label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="total-hours">
                      Total Available Hours in a Month *
                    </Label>
                    <Input
                      id="total-hours"
                      type="number"
                      placeholder="Enter total hours"
                      required
                    />
                  </div>
                </div>
              </div>
            )}

            <div className="flex justify-between mt-6">
              {step > 1 && (
                <Button
                  type="button"
                  variant="outline"
                  onClick={handlePreviousStep}
                >
                  Previous
                </Button>
              )}
              {step < 2 ? (
                <Button type="button" onClick={handleNextStep}>
                  Next
                </Button>
              ) : (
                <Button type="submit">Submit Application</Button>
              )}
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
