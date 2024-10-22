import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, User, Calendar, Clock, MapPin, Globe, Award, File, ThumbsUp, ThumbsDown } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';


interface VolunteerApplication {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  province: string;
  zipCode: string;
  citizenship: string;
  skills: string[];
  languages: string[];
  volunteeredBefore: string;
  additionalQualifications: string;
  daysAvailable: string[];
  monthsAvailable: string[];
  totalHours: number;
  status: "pending" | "approved" | "rejected";
}

interface VolunteerApplicationReviewPageProps {
  application: VolunteerApplication;
  onApprove: (id: string) => void;
  onReject: (id: string) => void;
}

export function VolunteerApplicationReviewPageComponent(
  { application, onApprove, onReject }: VolunteerApplicationReviewPageProps = {
    application: {
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
      status: "pending",
    },
    onApprove: (id) => console.log(`Approved application ${id}`),
    onReject: (id) => console.log(`Rejected application ${id}`),
  }
) {
  const [isApproveDialogOpen, setIsApproveDialogOpen] = useState(false);
  const [isRejectDialogOpen, setIsRejectDialogOpen] = useState(false);

  const handleApprove = () => {
    onApprove(application.id);
    setIsApproveDialogOpen(false);
  };

  const handleReject = () => {
    onReject(application.id);
    setIsRejectDialogOpen(false);
  };

  return (
    <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="container mx-auto py-8 px-4"
  >
    <div className="mb-6">
      <Link
        to="/view-applications"
        className="text-blue-600 hover:text-blue-800 transition-colors duration-200 flex items-center"
      >
        <ChevronLeft className="w-4 h-4 mr-1" />
        Back to Applications
      </Link>
    </div>
    <div className="flex flex-col md:flex-row justify-between items-center mb-6">
      <motion.h1
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-3xl font-bold mb-4 md:mb-0"
      >
        Volunteer Application Review
      </motion.h1>
      <Link
        // to={`/user/${application.id}`}
        to={'/profile'}
        className="text-blue-600 hover:text-blue-800 transition-colors duration-200 flex items-center"
      >
        <User className="w-4 h-4 mr-1" />
        View User Profile
      </Link>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2">
        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
            <CardTitle className="text-2xl flex items-center justify-between">
              Application Details
              <Badge
                  variant={
                    application.status === "approved"
                      ? "default"
                      : application.status === "rejected"
                      ? "destructive"
                      : "default"
                  }
                  className="text-sm font-medium px-2 py-1 rounded-full"
              >
                {application.status.charAt(0).toUpperCase() +
                  application.status.slice(1)}
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <Tabs defaultValue="personal" className="w-full">
              <TabsList className="grid w-full grid-cols-3 rounded-lg bg-gray-100 p-1">
                <TabsTrigger value="personal" className="rounded-md transition-all duration-200">
                  <User className="w-4 h-4 mr-2" />
                  Personal Info
                </TabsTrigger>
                <TabsTrigger value="skills" className="rounded-md transition-all duration-200">
                  <Award className="w-4 h-4 mr-2" />
                  Skills & Experience
                </TabsTrigger>
                <TabsTrigger value="availability" className="rounded-md transition-all duration-200">
                  <Calendar className="w-4 h-4 mr-2" />
                  Availability
                </TabsTrigger>
              </TabsList>
              <TabsContent value="personal">
                <ScrollArea className="h-[400px] w-full pr-4">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold mb-2 flex items-center">
                        <User className="w-4 h-4 mr-2" />
                        Contact Information
                      </h3>
                      <p>
                        <span className="font-medium">Name:</span>{" "}
                        {application.firstName} {application.lastName}
                      </p>
                      <p>
                        <span className="font-medium">Email:</span>{" "}
                        {application.email}
                      </p>
                      <p>
                        <span className="font-medium">Phone:</span>{" "}
                        {application.phone}
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        Address
                      </h3>
                      <p>{application.address}</p>
                      <p>
                        {application.city}, {application.province}{" "}
                        {application.zipCode}
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 flex items-center">
                        <Globe className="w-4 h-4 mr-2" />
                        Citizenship
                      </h3>
                      <p>{application.citizenship}</p>
                    </div>
                  </div>
                </ScrollArea>
              </TabsContent>
              <TabsContent value="skills">
                <ScrollArea className="h-[400px] w-full pr-4">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold mb-2 flex items-center">
                        <Award className="w-4 h-4 mr-2" />
                        Skills
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {application.skills.map((skill) => (
                          <Badge key={skill} variant="secondary" className="animate-fade-in">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 flex items-center">
                        <Globe className="w-4 h-4 mr-2" />
                        Languages
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {application.languages.map((language) => (
                          <Badge key={language} variant="outline" className="animate-fade-in">
                            {language}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 flex items-center">
                        <File className="w-4 h-4 mr-2" />
                        Previous Volunteer Experience
                      </h3>
                      <p>{application.volunteeredBefore}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 flex items-center">
                        <Award className="w-4 h-4 mr-2" />
                        Additional Qualifications
                      </h3>
                      <p>{application.additionalQualifications}</p>
                    </div>
                  </div>
                </ScrollArea>
              </TabsContent>
              <TabsContent value="availability">
                <ScrollArea className="h-[400px] w-full pr-4">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold mb-2 flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        Days Available
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {application.daysAvailable.map((day) => (
                          <Badge key={day} variant="secondary" className="animate-fade-in">
                            {day}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        Months Available
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {application.monthsAvailable.map((month) => (
                          <Badge key={month} variant="outline" className="animate-fade-in">
                            {month}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        Total Hours per Month
                      </h3>
                      <p>{application.totalHours} hours</p>
                    </div>
                  </div>
                </ScrollArea>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
      <div>
        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="flex items-center">
              <User className="w-5 h-5 mr-2" />
              Applicant Summary
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-4 mb-4">
              <Avatar className="w-16 h-16">
                <AvatarImage
                  src={`https://api.dicebear.com/6.x/initials/svg?seed=${application.firstName}%20${application.lastName}`}
                  alt={`${application.firstName} ${application.lastName}`}
                />
                <AvatarFallback>
                  {application.firstName.charAt(0)}
                  {application.lastName.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-lg font-semibold">
                  {application.firstName} {application.lastName}
                </h3>
                <p className="text-sm text-gray-500">{application.email}</p>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-end space-x-2">
            <Dialog open={isRejectDialogOpen} onOpenChange={setIsRejectDialogOpen}>
              <DialogTrigger asChild>
                <Button variant="destructive" className="flex items-center">
                  <ThumbsDown className="w-4 h-4 mr-2" />
                  Reject
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Reject Application</DialogTitle>
                  <DialogDescription>
                    Are you sure you want to reject this volunteer application?
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <Button
                    variant="outline"
                    onClick={() => setIsRejectDialogOpen(false)}
                  >
                    Cancel
                  </Button>
                  <Button variant="destructive" onClick={handleReject}>
                    Reject
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
            <Dialog open={isApproveDialogOpen} onOpenChange={setIsApproveDialogOpen}>
              <DialogTrigger asChild>
                <Button className="flex items-center">
                  <ThumbsUp className="w-4 h-4 mr-2" />
                  Approve
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Approve Application</DialogTitle>
                  <DialogDescription>
                    Are you sure you want to approve this volunteer application?
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <Button
                    variant="outline"
                    onClick={() => setIsApproveDialogOpen(false)}
                  >
                    Cancel
                  </Button>
                  <Button onClick={handleApprove}>Approve</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </CardFooter>
        </Card>
      </div>
    </div>
  </motion.div>
  );
}
