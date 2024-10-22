'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarIcon, MapPinIcon, UsersIcon, PlusIcon, CheckCircle, XCircle } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { useNavigate } from "react-router-dom"

interface Position {
  title: string;
  filled: boolean;
}

interface Event {
  id: number;
  title: string;
  startDate: string;
  endDate: string;
  location: string;
  volunteers: number;
  targetVolunteers: number;
  description: string;
  image: string;
  positions: Position[];
  completed: boolean;
}

const initialEvents: Event[] = [
  {
    id: 1,
    title: "Bayanihan Community Cleanup",
    startDate: "2023-06-15",
    endDate: "2023-06-16",
    location: "Luneta Park, Manila",
    volunteers: 12,
    targetVolunteers: 20,
    description: "Join us for a day of cleaning and beautifying our local park, promoting community spirit.",
    image: "https://i0.wp.com/rotarycluboftimogqc.org/wp-content/uploads/2021/03/IMG_1321-b.jpg?resize=843%2C632&ssl=1",
    positions: [
      { title: "Team Leader", filled: true },
      { title: "Gardener", filled: true },
      { title: "Litter Picker", filled: false },
      { title: "Recycling Sorter", filled: false },
    ],
    completed: false
  },
  {
    id: 2,
    title: "Tulong sa Kapwa Food Distribution",
    startDate: "2023-06-20",
    endDate: "2023-06-20",
    location: "Barangay Hall, Quezon City",
    volunteers: 8,
    targetVolunteers: 15,
    description: "Help sort and distribute food packages to families in need in our community.",
    image: "https://files01.pna.gov.ph/category-list/2020/05/18/distribution.jpg",
    positions: [
      { title: "Coordinator", filled: true },
      { title: "Food Packer", filled: false },
      { title: "Distributor", filled: false },
    ],
    completed: false
  },
  {
    id: 3,
    title: "Tech Savvy Seniors Workshop",
    startDate: "2023-06-25",
    endDate: "2023-06-27",
    location: "Senior Citizens Center, Makati",
    volunteers: 5,
    targetVolunteers: 10,
    description: "Assist seniors with basic computer and smartphone skills to help them stay connected.",
    image: "https://www.conservatoryseniorliving.com/wp-content/uploads/2022/01/how-to-become-a-tech-savvy-senior-1.jpg",
    positions: [
      { title: "Instructor", filled: true },
      { title: "Tech Support", filled: false },
      { title: "Assistant", filled: false },
    ],
    completed: false
  },
];

export default function EventsPageComponent() {
  const navigate = useNavigate();
  const [events, setEvents] = useState<Event[]>(initialEvents);
  const [animatingEventId, setAnimatingEventId] = useState<number | null>(null);

  const completeEvent = (id: number) => {
    setAnimatingEventId(id);
    setTimeout(() => {
      setEvents(events.map(event => 
        event.id === id ? { ...event, completed: true } : event
      ));
      setAnimatingEventId(null);
    }, 500); // Wait for animation to complete before updating state
  };

  const togglePositionFilled = (eventId: number, positionIndex: number) => {
    setEvents(events.map(event => {
      if (event.id === eventId) {
        const updatedPositions = [...event.positions];
        updatedPositions[positionIndex] = {
          ...updatedPositions[positionIndex],
          filled: !updatedPositions[positionIndex].filled
        };
        return { ...event, positions: updatedPositions };
      }
      return event;
    }));
  };

  const activeEvents = events.filter(event => !event.completed);
  const completedEvents = events.filter(event => event.completed);

  const renderEvent = (event: Event) => (
    <Card 
      key={event.id} 
      className={`flex flex-col transition-all duration-500 ${
        animatingEventId === event.id ? 'opacity-0 transform translate-y-[-20px]' : 'opacity-100'
      }`}
    >
      <img 
        src={event.image} 
        alt={event.title}
        className="w-full h-48 object-cover"
      />
      <CardHeader>
        <CardTitle>{event.title}</CardTitle>
        <CardDescription>{event.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex items-center mb-2">
          <CalendarIcon className="mr-2 h-4 w-4 opacity-70" /> 
          {event.startDate} - {event.endDate}
        </div>
        <div className="flex items-center mb-2">
          <MapPinIcon className="mr-2 h-4 w-4 opacity-70" /> {event.location}
        </div>
        <div className="flex items-center mb-2">
          <UsersIcon className="mr-2 h-4 w-4 opacity-70" /> 
          {event.volunteers} / {event.targetVolunteers} volunteers
        </div>
        <Progress 
          value={(event.volunteers / event.targetVolunteers) * 100} 
          className="h-2 mb-4"
        />
        <div className="mt-4">
          <h4 className="font-semibold mb-2">Positions Needed:</h4>
          <div className="flex flex-wrap gap-2">
            {event.positions.map((position, index) => (
              <Badge 
                key={index} 
                variant={position.filled ? "secondary" : "outline"} 
                className="flex items-center cursor-pointer"
                onClick={() => togglePositionFilled(event.id, index)}
              >
                {position.title}
                {position.filled ? 
                  <CheckCircle className="ml-1 h-3 w-3 text-green-500" /> : 
                  <XCircle className="ml-1 h-3 w-3 text-red-500" />
                }
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={() => navigate("/event")}>
          View Details
        </Button>
        {!event.completed && (
          <Button variant="secondary" onClick={() => completeEvent(event.id)}>
            Complete Event
          </Button>
        )}
      </CardFooter>
    </Card>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Your Events</h1>
        <Button onClick={() => navigate("/create-event")}>
          <PlusIcon className="mr-2 h-4 w-4" /> Create Event
        </Button>
      </header>
      
      <h2 className="text-2xl font-semibold mb-4">Active Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {activeEvents.map(renderEvent)}
      </div>
      
      <h2 className="text-2xl font-semibold mb-4">Completed Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {completedEvents.map(renderEvent)}
      </div>
    </div>
  )
}