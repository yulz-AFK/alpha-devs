import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import {
  Scale,
  Users,
  Home,
  Truck,
  BookOpen,
  Shield,
  Apple,
  Beaker,
  Globe,
  Calendar,
  VoteIcon,
  Trophy,
  Brain,
  Rainbow,
  UserCircle,
  Baby,
  Palette,
  Tv,
  LeafyGreen,
  ThermometerSun,
  Briefcase,
  ClipboardList,
  MonitorSmartphone,
  Phone,
  Info
} from "lucide-react";

const causeCategories = [
  {
    title: "Health & Wellness",
    causes: [
      { name: "Health & Medicine", icon: Beaker },
      { name: "Mental Health", icon: Brain },
      { name: "Hunger", icon: Apple },
      { name: "Homeless & Housing", icon: Home },
      { name: "Disaster Relief", icon: Truck },
    ],
  },
  {
    title: "Social & Community",
    causes: [
      { name: "Advocacy & Human Rights", icon: Scale },
      { name: "LGBTQ+", icon: Rainbow },
      { name: "Race & Ethnicity", icon: Users },
      { name: "Women", icon: UserCircle },
      { name: "Veterans & Military Families", icon: Shield },
    ],
  },
  {
    title: "Education & Literacy",
    causes: [
      { name: "Education & Literacy", icon: BookOpen },
      { name: "Children & Youth", icon: Baby },
      { name: "Seniors", icon: Calendar },
      { name: "International", icon: Globe },
    ],
  },
  {
    title: "Arts & Media",
    causes: [
      { name: "Arts & Culture", icon: Palette },
      { name: "Media & Broadcasting", icon: Tv },
      { name: "Politics", icon: VoteIcon },
      { name: "Sports & Recreation", icon: Trophy },
    ],
  },
  {
    title: "Environment & Sustainability",
    causes: [
      { name: "Environment", icon: LeafyGreen },
      { name: "Climate Action", icon: ThermometerSun },
    ],
  },
  {
    title: "Skills & Work",
    causes: [
      { name: "Employment", icon: Briefcase },
      { name: "Board Development", icon: ClipboardList },
      { name: "Computers & Technology", icon: MonitorSmartphone },
      { name: "Crisis Support", icon: Phone },
    ],
  },
];

export default function CreateEventForm() {
  const [isVirtual, setIsVirtual] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  // const [hasSpecificDates, setHasSpecificDates] = useState(true);
  // const [hasShifts, setHasShifts] = useState(false);

  const renderPage1 = () => (
    <CardContent className="space-y-8">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Event Information</h3>
        <div className="space-y-2">
          <Label htmlFor="title">Title *</Label>
          <Input id="title" placeholder="Enter title here" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="description">Description *</Label>
          <Textarea
            id="description"
            placeholder="How would you describe it?"
            className="min-h-[150px]"
          />
          <div className="flex space-x-2 text-sm text-gray-500">
            <button className="p-1 border rounded">B</button>
            <button className="p-1 border rounded">I</button>
            <button className="p-1 border rounded">List</button>
            <button className="p-1 border rounded">Numbered List</button>
            <button className="p-1 border rounded">T</button>
            <button className="p-1 border rounded">Link</button>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Location</h3>
        <div className="flex items-center space-x-2">
          <Checkbox
            id="virtual"
            checked={isVirtual}
            onCheckedChange={() => setIsVirtual(!isVirtual)}
          />
          <Label htmlFor="virtual">This is a virtual opportunity</Label>
        </div>
        {!isVirtual && (
          <>
            <div className="space-y-2">
              <Label htmlFor="saved-address">Saved Addresses</Label>
              <Select>
                <SelectTrigger id="saved-address">
                  <SelectValue placeholder="Choose a previously saved address" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="address1">Address 1</SelectItem>
                  <SelectItem value="address2">Address 2</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="region">Region *</Label>
              <Select>
                <SelectTrigger id="region">
                  <SelectValue placeholder="Select region" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ncr">
                    National Capital Region (NCR)
                  </SelectItem>
                  <SelectItem value="car">
                    Cordillera Administrative Region (CAR)
                  </SelectItem>
                  <SelectItem value="region1">
                    Region I (Ilocos Region)
                  </SelectItem>
                  <SelectItem value="region2">
                    Region II (Cagayan Valley)
                  </SelectItem>
                  <SelectItem value="region3">
                    Region III (Central Luzon)
                  </SelectItem>
                  <SelectItem value="region4a">
                    Region IV-A (CALABARZON)
                  </SelectItem>
                  <SelectItem value="mimaropa">MIMAROPA Region</SelectItem>
                  <SelectItem value="region5">
                    Region V (Bicol Region)
                  </SelectItem>
                  <SelectItem value="region6">
                    Region VI (Western Visayas)
                  </SelectItem>
                  <SelectItem value="region7">
                    Region VII (Central Visayas)
                  </SelectItem>
                  <SelectItem value="region8">
                    Region VIII (Eastern Visayas)
                  </SelectItem>
                  <SelectItem value="region9">
                    Region IX (Zamboanga Peninsula)
                  </SelectItem>
                  <SelectItem value="region10">
                    Region X (Northern Mindanao)
                  </SelectItem>
                  <SelectItem value="region11">
                    Region XI (Davao Region)
                  </SelectItem>
                  <SelectItem value="region12">
                    Region XII (SOCCSKSARGEN)
                  </SelectItem>
                  <SelectItem value="region13">Region XIII (Caraga)</SelectItem>
                  <SelectItem value="barmm">
                    Bangsamoro Autonomous Region in Muslim Mindanao (BARMM)
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="province">Province *</Label>
              <Input id="province" placeholder="Enter province" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="city">City/Municipality *</Label>
              <Input id="city" placeholder="Enter city or municipality" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="barangay">Barangay *</Label>
              <Input id="barangay" placeholder="Enter barangay" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="street">Street Address *</Label>
              <Input id="street" placeholder="Enter street address" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="postal">Postal Code *</Label>
              <Input id="postal" placeholder="Enter postal code" />
            </div>
          </>
        )}
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Media</h3>
        <div className="bg-blue-100 p-4 rounded-md flex items-start space-x-2">
          <Info className="w-5 h-5 text-blue-500 mt-0.5" />
          <p className="text-sm text-blue-700">
            Opportunities with an image or video attract a larger audience! You
            can drag and drop files or click to upload.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center cursor-pointer hover:border-blue-500 transition-colors">
            <input type="file" id="imageUpload" hidden accept="image/*" />
            <div className="text-gray-500">
              <svg
                className="mx-auto h-12 w-12"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 48 48"
                aria-hidden="true"
              >
                <path
                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p className="mt-1">
                Drag and drop an image here, or click to select
              </p>
            </div>
          </div>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center cursor-pointer hover:border-blue-500 transition-colors">
            <input type="file" id="videoUpload" hidden accept="video/*" />
            <div className="text-gray-500">
              <svg
                className="mx-auto h-12 w-12"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
              <p className="mt-1">
                Drag and drop a video here, or click to select
              </p>
            </div>
          </div>
        </div>
      </div>
    </CardContent>
  );

  const renderPage2 = () => (
    <CardContent className="space-y-8">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Date and time</h3>
        <div className="space-y-2">
          <Label>ARE THERE SPECIFIC DATES?*</Label>
          <RadioGroup
            defaultValue="yes"
            // onValueChange={(value) => setHasSpecificDates(value === "yes")}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="specific-dates-yes" />
              <Label htmlFor="specific-dates-yes">Yes</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="no" id="specific-dates-no" />
              <Label htmlFor="specific-dates-no">No</Label>
            </div>
          </RadioGroup>
        </div>
        <div className="bg-blue-100 p-4 rounded-md">
          <Info className="inline-block mr-2" />
          Opportunities with specific dates cannot exceed 90 days in length.
        </div>
        <div className="space-y-2">
          <Label htmlFor="timezone">TIMEZONE</Label>
          <Select defaultValue="asia-manila">
            <SelectTrigger id="timezone">
              <SelectValue placeholder="Select timezone" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="asia-manila">Asia/Manila</SelectItem>
              {/* Add more timezone options */}
            </SelectContent>
          </Select>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="start-date">START DATE*</Label>
            <Input id="start-date" type="date" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="end-date">END DATE*</Label>
            <Input id="end-date" type="date" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="start-time">START TIME</Label>
            <Select>
              <SelectTrigger id="start-time">
                <SelectValue placeholder="Select start time" />
              </SelectTrigger>
              <SelectContent>{/* Add time options */}</SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="end-time">END TIME</Label>
            <Select>
              <SelectTrigger id="end-time">
                <SelectValue placeholder="Select end time" />
              </SelectTrigger>
              <SelectContent>{/* Add time options */}</SelectContent>
            </Select>
          </div>
        </div>
        <div className="space-y-2">
          <Label>DOES THIS OPPORTUNITY HAVE SHIFTS?*</Label>
          <RadioGroup
            defaultValue="no"
            // onValueChange={(value) => setHasShifts(value === "yes")}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="shifts-yes" />
              <Label htmlFor="shifts-yes">Yes</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="no" id="shifts-no" />
              <Label htmlFor="shifts-no">No</Label>
            </div>
          </RadioGroup>
        </div>
        <div className="space-y-2">
          <Label>TIMESLOTS</Label>
          <div className="bg-blue-100 p-4 rounded-md">
            <Info className="inline-block mr-2" />
            Help volunteers with limited availability filter their search
            results.
          </div>
          <div className="space-y-2">
            <Label>WHEN CAN VOLUNTEERS PARTICIPATE?*</Label>
            <div className="grid grid-cols-3 gap-4">
              <div></div>
              <div>Weekdays</div>
              <div>Weekends</div>
              <div>Daytime</div>
              <Checkbox id="weekday-daytime" />
              <Checkbox id="weekend-daytime" />
              <div>Evenings (after 5pm)</div>
              <Checkbox id="weekday-evening" />
              <Checkbox id="weekend-evening" />
            </div>
          </div>
        </div>
      </div>
    </CardContent>
  );

  const renderPage3 = () => (
    <CardContent className="space-y-8">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Let us know what you need</h3>
        <div className="space-y-2">
          <Label htmlFor="estimated-volunteers">
            ESTIMATED # VOLUNTEERS NEEDED*
          </Label>
          <Input id="estimated-volunteers" placeholder="##" />
        </div>
        <div className="bg-blue-100 p-4 rounded-md">
          <Info className="inline-block mr-2" />
          This helps VolunteerMatch understand the demand for volunteers. It
          will not change the ranking of your opportunity in search results.
        </div>
        <div className="space-y-2">
          <Label>
            DEACTIVATE OPPORTUNITY ONCE TOTAL NUMBER OF ESTIMATED VOLUNTEERS
            NEEDED IS MET?
          </Label>
          <RadioGroup
            defaultValue="no"
            // onValueChange={(value) => setDeactivateWhenMet(value === "yes")}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="deactivate-yes" />
              <Label htmlFor="deactivate-yes">Yes</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="no" id="deactivate-no" />
              <Label htmlFor="deactivate-no">No</Label>
            </div>
          </RadioGroup>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Requirements</h3>
        <div className="space-y-2">
          <Label>
            IS THIS A "DONE IN A DAY" OPPORTUNITY? NOTE: "DONE IN A DAY"
            OPPORTUNITIES DO NOT REQUIRE PRIOR TRAINING OR AN ONGOING
            COMMITMENT.
          </Label>
          <RadioGroup
            defaultValue="no"
            // onValueChange={(value) => setIsDoneInADay(value === "yes")}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="done-in-day-yes" />
              <Label htmlFor="done-in-day-yes">Yes</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="no" id="done-in-day-no" />
              <Label htmlFor="done-in-day-no">No</Label>
            </div>
          </RadioGroup>
        </div>
        <div className="space-y-2">
          <Label>THE FOLLOWING ARE REQUIRED:</Label>
          <div className="flex space-x-4">
            <div className="flex items-center space-x-2">
              <Checkbox id="drivers-license" />
              <Label htmlFor="drivers-license">Driver's License</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="background-check" />
              <Label htmlFor="background-check">Background Check</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="orientation-training" />
              <Label htmlFor="orientation-training">Orientation/Training</Label>
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="minimum-age">MINIMUM AGE</Label>
          <Input id="minimum-age" placeholder="Enter age here" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="time-commitment">TIME COMMITMENT</Label>
          <Input id="time-commitment" placeholder="Enter text here" />
          <p className="text-sm text-gray-500">250 characters max.</p>
        </div>
        <div className="space-y-2">
          <Label htmlFor="other-requirements">OTHER REQUIREMENTS</Label>
          <Textarea id="other-requirements" placeholder="Enter text here" />
          <p className="text-sm text-gray-500">250 characters max.</p>
        </div>
      </div>
    </CardContent>
  );

  const renderPage4 = () => (
    <CardContent className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-xl font-bold">
          Help Volunteers Find Your Opportunity
        </h2>
        <div className="space-y-2">
          <Label>WHAT KINDS OF VOLUNTEERS DO YOU NEED MOST?</Label>
          <div className="flex flex-wrap gap-2">
            {["Kids", "Teens", "55+", "Public Groups", "Private Groups"].map(
              (group) => (
                <div key={group} className="flex items-center space-x-2">
                  <Checkbox id={group.toLowerCase().replace(" ", "-")} />
                  <Label htmlFor={group.toLowerCase().replace(" ", "-")}>
                    {group}
                  </Label>
                </div>
              )
            )}
          </div>
        </div>
        <div className="bg-blue-100 p-4 rounded-md">
          <Info className="inline-block mr-2" />
          All opportunities on VolunteerMatch are considered appropriate for
          adults. These filters are helpful for people searching for activities
          to meet unique needs.
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Cause areas</h3>
        <p className="text-sm text-gray-600">
          This helps your opportunity be more discoverable when volunteers
          search by cause.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {causeCategories.map((category) => (
            <Card key={category.title} className="overflow-hidden">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">{category.title}</h3>
                <div className="space-y-3">
                  {category.causes.map((cause) => {
                    const Icon = cause.icon;
                    return (
                      <div
                        key={cause.name}
                        className="flex items-center space-x-3"
                      >
                        <Checkbox
                          id={cause.name
                            .toLowerCase()
                            .replace(/[^a-z0-9]/g, "-")}
                        />
                        <Icon className="w-5 h-5 text-blue-600" />
                        <Label
                          htmlFor={cause.name
                            .toLowerCase()
                            .replace(/[^a-z0-9]/g, "-")}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {cause.name}
                        </Label>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Desired skills</h3>
        <p className="text-sm text-gray-600">
          This helps your opportunity be more discoverable when volunteers
          search by skill.
        </p>
        <div className="flex space-x-4">
          <div className="w-1/2 space-y-2">
            <Input placeholder="Search skills" />
            <div className="space-y-1">
              {[
                "Money/Finance/Accounting",
                "Building Maintenance",
                "Plumbing",
                "Retail",
                "Telecommunications",
                "Writing",
              ].map((skill) => (
                <div
                  key={skill}
                  className="bg-blue-100 px-2 py-1 rounded inline-block mr-2 mb-2"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
          <div className="w-1/2">
            <Input placeholder="SELECTED (CHOOSE UP TO 10)" disabled />
          </div>
        </div>
      </div>

      <div className="bg-blue-100 p-4 rounded-md">
        <Info className="inline-block mr-2" />
        Add your organization's LinkedIn URL to your Organization Profile, and
        we'll promote opportunities with skills on LinkedIn for more visibility.
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Relevant keywords</h3>
        <Input placeholder="Separate each keyword with a comma or by hitting enter" />
      </div>
    </CardContent>
  );

  const renderPage5 = () => (
    <CardContent className="space-y-8">
      <h2 className="text-xl font-bold">Automate your communications</h2>
      
      <div className="space-y-4">
        <Label htmlFor="contact-select">OPPORTUNITY POINT OF CONTACT</Label>
        <Select>
          <SelectTrigger id="contact-select">
            <SelectValue placeholder="Choose contact" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="contact1">Contact 1</SelectItem>
            <SelectItem value="contact2">Contact 2</SelectItem>
            {/* Add more contacts as needed */}
          </SelectContent>
        </Select>
      </div>
  
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Screen interested volunteers</h3>
        <p className="text-sm text-gray-600">
          Gather information on volunteers when they make a connection
        </p>
        <div className="space-y-2">
          <Label>ADD A VOLUNTEER QUESTIONNAIRE?</Label>
          <RadioGroup defaultValue="no">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="questionnaire-yes" />
              <Label htmlFor="questionnaire-yes">Yes</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="no" id="questionnaire-no" />
              <Label htmlFor="questionnaire-no">No</Label>
            </div>
          </RadioGroup>
        </div>
      </div>
  
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Greet your volunteers</h3>
        <p className="text-sm text-gray-600">
          Automatically send volunteers an email after they connect
        </p>
        <p className="text-sm text-gray-600">
          You can also manage your greetings in Greeting Manager
        </p>
        <div className="space-y-2">
          <Label htmlFor="greeting-select">VOLUNTEER GREETING</Label>
          <Select>
            <SelectTrigger id="greeting-select">
              <SelectValue placeholder="Choose a greeting" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="greeting1">Greeting 1</SelectItem>
              <SelectItem value="greeting2">Greeting 2</SelectItem>
              {/* Add more greetings as needed */}
            </SelectContent>
          </Select>
        </div>
      </div>
    </CardContent>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="w-full max-w-4xl mx-auto py-6">
        <div className="bg-blue-600 text-white p-8 relative overflow-hidden mb-6">
          <div className="absolute inset-0 opacity-10">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-white"
                style={{
                  width: `${Math.random() * 100 + 50}px`,
                  height: `${Math.random() * 100 + 50}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
              />
            ))}
          </div>
          <h1 className="text-4xl font-bold relative z-10">Create Event</h1>
        </div>
        <div className="px-4 mb-6">
          <p className="text-sm text-gray-600">Events &gt; Create Event</p>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Create a new event</CardTitle>
            <CardDescription>
              Provide details about your volunteer opportunity to attract
              participants.
            </CardDescription>
          </CardHeader>
          {currentPage === 1
            ? renderPage1()
            : currentPage === 2
            ? renderPage2()
            : currentPage === 3
            ? renderPage3()
            : currentPage === 4
            ? renderPage4()
            : renderPage5()}
          <CardFooter className="flex justify-between">
            {currentPage > 1 && (
              <Button
                variant="outline"
                onClick={() => setCurrentPage((prev) => prev - 1)}
              >
                Previous
              </Button>
            )}
            <Button variant="outline">Save Draft</Button>
            {currentPage < 5 ? (
              <Button onClick={() => setCurrentPage((prev) => prev + 1)}>
                Next
              </Button>
            ) : (
              <Button>Submit</Button>
            )}
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};