import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LabelList } from 'recharts';
import { PieChart, Pie, Cell, Legend } from 'recharts';

const events = [
  {
    id: 1,
    title: "Community Cleanup",
    shortTitle: "Cleanup",
    volunteers: 12,
    targetVolunteers: 20,
  },
  {
    id: 2,
    title: "Food Distribution",
    shortTitle: "Food Dist.",
    volunteers: 8,
    targetVolunteers: 15,
  },
  {
    id: 3,
    title: "Seniors Workshop",
    shortTitle: "Workshop",
    volunteers: 5,
    targetVolunteers: 10,
  },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export default function VolunteerStatisticsPage() {
  const totalVolunteers = events.reduce((sum, event) => sum + event.volunteers, 0);
  const averageVolunteers = totalVolunteers / events.length;
  const eventsReachedTarget = events.filter(event => event.volunteers >= event.targetVolunteers).length;
  const percentageEventsReachedTarget = (eventsReachedTarget / events.length) * 100;

  const pieChartData = events.map(event => ({
    name: event.shortTitle,
    value: event.volunteers
  }));

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Volunteer Event Statistics</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Total Volunteers</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">{totalVolunteers}</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Avg Volunteers/Event</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">{averageVolunteers.toFixed(1)}</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Events Reaching Target</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">{percentageEventsReachedTarget.toFixed(1)}%</p>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Volunteers vs Target per Event</CardTitle>
          </CardHeader>
          <CardContent className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={events}
                layout="vertical"
                margin={{ top: 20, right: 30, left: 40, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="shortTitle" type="category" width={100} />
                <Tooltip />
                <Bar dataKey="volunteers" fill="#8884d8" name="Current">
                  <LabelList dataKey="volunteers" position="right" />
                </Bar>
                <Bar dataKey="targetVolunteers" fill="#82ca9d" name="Target">
                  <LabelList dataKey="targetVolunteers" position="right" />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Volunteer Distribution</CardTitle>
          </CardHeader>
          <CardContent className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieChartData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {pieChartData.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}