import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useNavigate } from "react-router-dom";
type Application = {
  id: string;
  volunteerName: string;
  event: string;
  date: string;
  status: "Pending" | "Approved" | "Rejected";
  contact: string;
  comments: string;
};

const applications: Application[] = [
  {
    id: "1",
    volunteerName: "John Doe",
    event: "Community Cleanup",
    date: "2023-06-15",
    status: "Pending",
    contact: "john@example.com",
    comments: "Excited to help!",
  },
  {
    id: "2",
    volunteerName: "Jane Smith",
    event: "Food Drive",
    date: "2023-06-20",
    status: "Approved",
    contact: "jane@example.com",
    comments: "Available all day",
  },
];

export default function VolunteerApplications() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const navigate = useNavigate();

  const filteredApplications = useMemo(() => {
    return applications.filter((app) => {
      const matchesSearch =
        app.volunteerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        app.event.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus =
        statusFilter === "All" || app.status === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [searchTerm, statusFilter]);

  const pageCount = Math.ceil(filteredApplications.length / itemsPerPage);
  const paginatedApplications = filteredApplications.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-5">
        Approve Volunteer Applications
      </h1>

      <div className="flex space-x-4 mb-4">
        <Input
          placeholder="Search by name or event"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All">All Statuses</SelectItem>
            <SelectItem value="Pending">Pending</SelectItem>
            <SelectItem value="Approved">Approved</SelectItem>
            <SelectItem value="Rejected">Rejected</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Volunteer Name</TableHead>
            <TableHead>Event</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Contact</TableHead>
            <TableHead>Comments</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedApplications.map((application) => (
            <TableRow key={application.id}>
              <TableCell>{application.volunteerName}</TableCell>
              <TableCell>{application.event}</TableCell>
              <TableCell>{application.date}</TableCell>
              <TableCell>
                <Badge
                  variant={
                    application.status === "Approved"
                      ? "default"
                      : application.status === "Rejected"
                      ? "destructive"
                      : "default"
                  }
                >
                  {application.status}
                </Badge>
              </TableCell>
              <TableCell>{application.contact}</TableCell>
              <TableCell>{application.comments}</TableCell>
              <TableCell>
                <Button variant="outline" size="sm" onClick={() => navigate('/approve-application')}>
                  Details
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="flex justify-between items-center mt-4">
        <Select
          value={itemsPerPage.toString()}
          onValueChange={(value) => {
            setItemsPerPage(Number(value));
            setCurrentPage(1);
          }}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Items per page" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="5">5 per page</SelectItem>
            <SelectItem value="10">10 per page</SelectItem>
            <SelectItem value="20">20 per page</SelectItem>
          </SelectContent>
        </Select>

        <div className="flex space-x-2">
          <Button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Previous
          </Button>
          <Button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, pageCount))
            }
            disabled={currentPage === pageCount}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
