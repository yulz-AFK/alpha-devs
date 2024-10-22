import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Building2, GraduationCap, Globe } from "lucide-react"

export default function OrganizationComponent() {
  const categories = [
    {
      icon: Heart,
      title: "501(c) Nonprofits",
      color: "text-red-500",
      bgColor: "bg-red-100",
      items: [
        "501(c) Organizations",
        "Tax-Exempt Status Pending Organizations"
      ]
    },
    {
      icon: Building2,
      title: "Gov't, Hospice, State-Level",
      color: "text-blue-500",
      bgColor: "bg-blue-100",
      items: [
        "Government Organizations",
        "Hospices & Hospitals",
        "State-Level Tax Exempt Organizations"
      ]
    },
    {
      icon: GraduationCap,
      title: "Schools",
      color: "text-orange-500",
      bgColor: "bg-orange-100",
      items: [
        "Public and Private K-12",
        "Public and Private Universities"
      ]
    },
    {
      icon: Globe,
      title: "Non-US NGO",
      color: "text-green-500",
      bgColor: "bg-green-100",
      items: [
        "Non-Governmental Organizations (Non-US)"
      ]
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <Card className="mb-12 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl text-gray-700">You will need</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            <li>Your mission statement and organization description</li>
            <li>Your EIN (if you are a 501(c) organization)</li>
          </ul>
        </CardContent>
      </Card>
      <h2 className="text-3xl font-semibold mb-6 text-gray-800">Start Here</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <Card key={index} className="flex flex-col items-center p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className={`rounded-full p-4 ${category.bgColor} mb-4`}>
              <category.icon className={`w-12 h-12 ${category.color}`} />
            </div>
            <CardTitle className="text-center text-lg mb-4">{category.title}</CardTitle>
            <ul className="text-sm text-gray-600 mb-4">
              {category.items.map((item, i) => (
                <li key={i} className="mb-1">• {item}</li>
              ))}
            </ul>
            <Button variant="outline" className="mt-auto w-full hover:bg-gray-100">
              Select
            </Button>
          </Card>
        ))}
      </div>
    </div>
  )
}