import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PlusIcon, TrashIcon } from "lucide-react";

type MemberRank = "Member" | "Admin" | "Owner";

type Member = {
  id: string;
  name: string;
  email: string;
  rank: MemberRank;
};

const initialMembers: Member[] = [
  { id: "1", name: "John Doe", email: "john@example.com", rank: "Member" },
  { id: "2", name: "Jane Smith", email: "jane@example.com", rank: "Admin" },
  { id: "3", name: "Alice Johnson", email: "alice@example.com", rank: "Owner" },
];

export default function ManageOrgMembers() {
  const [members, setMembers] = useState<Member[]>(initialMembers);
  const [newMember, setNewMember] = useState<Omit<Member, 'id'>>({ name: "", email: "", rank: "Member" });

  const addMember = () => {
    if (newMember.name && newMember.email) {
      setMembers([...members, { ...newMember, id: Date.now().toString() }]);
      setNewMember({ name: "", email: "", rank: "Member" });
    }
  };

  const removeMember = (id: string) => {
    setMembers(members.filter((member) => member.id !== id));
  };

  const promoteRank = (id: string) => {
    setMembers(
      members.map((member) => {
        if (member.id === id) {
          if (member.rank === "Member") return { ...member, rank: "Admin" };
          if (member.rank === "Admin") return { ...member, rank: "Owner" };
        }
        return member;
      })
    );
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-5">Manage Organization Members</h1>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Add New Member</h2>
        <div className="flex space-x-4 mb-4">
          <Input
            placeholder="Name"
            value={newMember.name}
            onChange={(e) => setNewMember({ ...newMember, name: e.target.value })}
          />
          <Input
            placeholder="Email"
            value={newMember.email}
            onChange={(e) => setNewMember({ ...newMember, email: e.target.value })}
          />
          <Select
            value={newMember.rank}
            onValueChange={(value: MemberRank) => setNewMember({ ...newMember, rank: value })}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select rank" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Member">Member</SelectItem>
              <SelectItem value="Admin">Admin</SelectItem>
              <SelectItem value="Owner">Owner</SelectItem>
            </SelectContent>
          </Select>
          <Button onClick={addMember}>
            <PlusIcon className="mr-2 h-4 w-4" /> Add Member
          </Button>
        </div>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Rank</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {members.map((member) => (
            <TableRow key={member.id}>
              <TableCell>{member.name}</TableCell>
              <TableCell>{member.email}</TableCell>
              <TableCell>{member.rank}</TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => promoteRank(member.id)}
                    disabled={member.rank === "Owner"}
                  >
                    Promote
                  </Button>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => removeMember(member.id)}
                    disabled={member.rank === "Owner"}
                  >
                    <TrashIcon className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}