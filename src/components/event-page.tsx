import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Briefcase, Phone, Mail, CheckCircle, XCircle, AlertTriangle, Globe, Calendar as CalendarIcon, Clock as ClockIcon, User, Users as UsersIcon, Target, Shield } from 'lucide-react';
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function EventPageComponent() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(30), 500);
    return () => clearTimeout(timer);
  }, []);

  const eventData = {
    image: "https://www.redcross.org/content/dam/redcross/about-us/news/2020/philrctyphoonvamco1_002.jfif.jpg",
    title: "Typhoon Julian Rescue Volunteer",
    organization: "Philippine Red Cross",
    location: "Manila, Philippines",
    position: "Rescue Volunteer",
    dateRange: "11/1/2024 - 11/1/2025",
    description: "Join the Philippine Red Cross in their efforts to provide relief and assistance to communities affected by Typhoon Julian. Volunteers will help with rescue operations, first aid, and distribution of essential supplies.",
    address: {
      region: "National Capital Region",
      province: "Metro Manila",
      city: "Manila",
      barangay: "Malate",
      street: "123 Rescue Street",
      postalCode: "1004"
    },
    isVirtual: false,
    timezone: "Asia/Manila",
    startDate: "2024-11-01",
    endDate: "2025-11-01",
    startTime: "08:00",
    endTime: "17:00",
    hasShifts: true,
    participationTimes: ["Weekdays", "Weekends", "Daytime", "Evenings"],
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
    driverLicenseRequired: true,
    referenceCheckRequired: false,
    minimumAge: 18,
    timeCommitment: "Volunteers are expected to commit to at least 20 hours per week for a minimum of one month.",
    otherRequirements: "Good physical fitness, ability to work in stressful situations, and basic first aid knowledge (training provided).",
    desiredVolunteers: ["Teens", "55+", "Public Groups"],
    desiredSkills: ["First Aid", "Search and Rescue", "Communication"],
    isDoneInADay: false,
    applyLink: "/application-form",
    currentVolunteers: 15,
    totalVolunteersNeeded: 50,
    deactivateWhenFull: true
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="relative h-96 rounded-t-xl overflow-hidden">
            <img 
              src={eventData.image} 
              alt="Typhoon Julian Rescue" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-8">
              <h1 className="text-4xl font-bold text-white mb-2">{eventData.title}</h1>
              <p className="text-xl text-white">{eventData.organization}</p>
            </div>
          </div>
          <Card>
            <CardContent className="p-8">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <h2 className="text-2xl font-semibold mb-4">Event Details</h2>
                <p className="mb-6 text-gray-600">{eventData.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <MapPin className="mr-2 h-5 w-5 text-primary" />
                      <span>{eventData.address.street}, {eventData.address.barangay}, {eventData.address.city}, {eventData.address.province}, {eventData.address.region}, {eventData.address.postalCode}</span>
                    </li>
                    <li className="flex items-center">
                      <Globe className="mr-2 h-5 w-5 text-primary" />
                      <span>{eventData.isVirtual ? 'Virtual Opportunity' : 'On-Site Opportunity'}</span>
                    </li>
                    <li className="flex items-center">
                      <CalendarIcon className="mr-2 h-5 w-5 text-primary" />
                      <span>{eventData.dateRange}</span>
                    </li>
                    <li className="flex items-center">
                      <ClockIcon className="mr-2 h-5 w-5 text-primary" />
                      <span>{eventData.startTime} - {eventData.endTime} ({eventData.timezone})</span>
                    </li>
                    <li className="flex items-center">
                      <Briefcase className="mr-2 h-5 w-5 text-primary" />
                      <span>{eventData.position}</span>
                    </li>
                  </ul>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <User className="mr-2 h-5 w-5 text-primary" />
                      <span>{eventData.primaryContact.name}</span>
                    </li>
                    <li className="flex items-center">
                      <Mail className="mr-2 h-5 w-5 text-primary" />
                      <span>{eventData.primaryContact.email}</span>
                    </li>
                    <li className="flex items-center">
                      <Phone className="mr-2 h-5 w-5 text-primary" />
                      <span>{eventData.primaryContact.phone}</span>
                    </li>
                  </ul>
                </div>
              </motion.div>

              <Separator className="my-8" />

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <h2 className="text-2xl font-semibold mb-4">Participation Details</h2>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <UsersIcon className="mr-2 h-5 w-5 text-primary" />
                    <span>Participation Times: {eventData.participationTimes.join(', ')}</span>
                  </li>
                  <li className="flex items-center">
                    <AlertTriangle className="mr-2 h-5 w-5 text-yellow-500" />
                    <span>Minimum Age: {eventData.minimumAge}</span>
                  </li>
                  <li className="flex items-center">
                    <Target className="mr-2 h-5 w-5 text-primary" />
                    <span>Time Commitment: {eventData.timeCommitment}</span>
                  </li>
                </ul>

                <h2 className="text-2xl font-semibold mb-4">Requirements</h2>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    {eventData.trainingRequired ? (
                      <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                    ) : (
                      <XCircle className="mr-2 h-5 w-5 text-red-500" />
                    )}
                    <span>Training Required</span>
                  </li>
                  <li className="flex items-center">
                    {eventData.backgroundCheckRequired ? (
                      <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                    ) : (
                      <XCircle className="mr-2 h-5 w-5 text-red-500" />
                    )}
                    <span>Background Check Required</span>
                  </li>
                  <li className="flex items-center">
                    {eventData.driverLicenseRequired ? (
                      <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                    ) : (
                      <XCircle className="mr-2 h-5 w-5 text-red-500" />
                    )}
                    <span>Driver's License Required</span>
                  </li>
                  <li className="flex items-center">
                    <Shield className="mr-2 h-5 w-5 text-primary" />
                    <span>Other Requirements: {eventData.otherRequirements}</span>
                  </li>
                </ul>

                <h2 className="text-2xl font-semibold mb-4">Categories and Skills</h2>
                <div className="mb-4">
                  <p className="font-semibold mb-2">Categories:</p>
                  <div className="flex flex-wrap gap-2">
                    {eventData.categories.map((category, index) => (
                      <Badge key={index} variant="secondary">{category}</Badge>
                    ))}
                  </div>
                </div>
                <div className="mb-6">
                  <p className="font-semibold mb-2">Desired Skills:</p>
                  <div className="flex flex-wrap gap-2">
                    {eventData.desiredSkills.map((skill, index) => (
                      <Badge key={index} variant="outline">{skill}</Badge>
                    ))}
                  </div>
                </div>

                <h2 className="text-2xl font-semibold mb-4">Volunteer Progress</h2>
                <Progress value={progress} className="w-full mb-2" />
                <p className="text-sm text-gray-600 mb-8">
                  {eventData.currentVolunteers} out of {eventData.totalVolunteersNeeded} volunteers
                </p>

                <div className="flex justify-center">
                  <Button size="lg" asChild>
                    <a href={eventData.applyLink}>Apply Now</a>
                  </Button>
                </div>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}