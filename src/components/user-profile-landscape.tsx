import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MapPin, Edit2 } from 'lucide-react';

export default function UserProfileLandscape() {
  return (
    <Card className="w-full max-w-5xl mx-auto">
      <CardContent className="p-6">
        <div className="grid grid-cols-[300px_1fr_300px] gap-6">
          <div className="space-y-6">
            <div className="relative">
              <Avatar className="w-full h-[300px]">
                <AvatarImage src="/placeholder.svg" alt="Juan Dela Cruz" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <Button variant="outline" size="icon" className="absolute bottom-2 right-2">
                <Edit2 className="h-4 w-4" />
              </Button>
            </div>
            <div>
              <h2 className="text-2xl font-bold">Juan Dela Cruz</h2>
              <p className="text-sm text-muted-foreground">Member since 2024</p>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">My Causes</h3>
              <p className="text-sm text-muted-foreground mb-2">No causes added yet</p>
              <Button variant="outline" size="sm">Add Causes</Button>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">My Skills</h3>
              <p className="text-sm text-muted-foreground mb-2">No skills added yet</p>
              <Button variant="outline" size="sm">Add Skills</Button>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Location</h3>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>PH 3018</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Account</h3>
              <div className="space-y-2">
                <Button variant="link" className="justify-start p-0 h-auto">Account information</Button>
                <Button variant="link" className="justify-start p-0 h-auto">Email alert preferences</Button>
                <Button variant="link" className="justify-start p-0 h-auto">Download My Data</Button>
              </div>
            </div>
            <div className="pt-4">
              <img 
                src="/placeholder.svg" 
                alt="Location Map" 
                width={300} 
                height={200} 
                className="rounded-md"
              />
            </div>
            <Button className="w-full">See Recommendations</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
