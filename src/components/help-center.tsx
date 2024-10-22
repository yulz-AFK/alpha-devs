'use client'

import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const articles = [
  { id: 1, title: "How do I view my volunteer hours?", category: "Creating and Updating My Account", date: "Dec 6, 2023", views: 1673 },
  { id: 2, title: "What sorts of benefits do I get for being a volunteer?", category: "Benefits of Volunteering", date: "Dec 5, 2023", views: 2409 },
  { id: 3, title: "What is a Volunteer Pass?", category: "Benefits of Volunteering", date: "Dec 5, 2023", views: 2979 },
  { id: 4, title: "National Volunteer Month: Give Back and Make a Difference!", category: "News and Updates", date: "Apr 17, 2024", views: 8311 },
]

const topics = [
  "Applying to Volunteer Opportunities",
  "Benefits of Volunteering",
  "Creating and Updating My Account",
  "FAQ",
  "News and Updates",
  "Onboarding as a Volunteer",
  "Searching for Volunteer Opportunities",
  "Selection as a Volunteer",
]

export function HelpCenterComponent() {
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState('trending')

  const filteredArticles = articles.filter(article =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const sortedArticles = [...filteredArticles].sort((a, b) => {
    if (sortBy === 'a-z') return a.title.localeCompare(b.title)
    if (sortBy === 'z-a') return b.title.localeCompare(a.title)
    if (sortBy === 'recent') return new Date(b.date).getTime() - new Date(a.date).getTime()
    if (sortBy === 'most-viewed') return b.views - a.views
    return 0
  })

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="relative h-80 bg-cover bg-center" style={{backgroundImage: "url('https://ofhsoupkitchen.org/wp-content/uploads/2023/06/helping-someone-up-1.jpg')"}}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center px-6">
          <h1 className="text-4xl font-bold text-white mb-2">Help Center</h1>
          <p className="text-xl text-white mb-8">Welcome to the Help Center. Here you can find frequently asked questions and articles to help you navigate the site.</p>
          <Card className="w-full max-w-3xl mx-auto">
            <CardContent className="p-2">
              <Input
                type="text"
                placeholder="Search help articles by title"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full"
              />
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4 bg-blue-700 text-white p-2">Articles</h2>
                <div className="flex justify-end mb-4">
                  <span className="mr-2">Sort By:</span>
                  <Button variant={sortBy === 'a-z' ? 'default' : 'outline'} size="sm" onClick={() => setSortBy('a-z')}>A-Z</Button>
                  <Button variant={sortBy === 'z-a' ? 'default' : 'outline'} size="sm" onClick={() => setSortBy('z-a')}>Z-A</Button>
                  <Button variant={sortBy === 'trending' ? 'default' : 'outline'} size="sm" onClick={() => setSortBy('trending')}>Trending</Button>
                  <Button variant={sortBy === 'recent' ? 'default' : 'outline'} size="sm" onClick={() => setSortBy('recent')}>Recent</Button>
                  <Button variant={sortBy === 'most-viewed' ? 'default' : 'outline'} size="sm" onClick={() => setSortBy('most-viewed')}>Most Viewed</Button>
                </div>
                <ul className="space-y-4">
                  {sortedArticles.map(article => (
                    <li key={article.id} className="border-b pb-4">
                      <h3 className="text-lg font-semibold mb-1">{article.title}</h3>
                      <p className="text-sm text-gray-600">{article.category} - {article.date} - {article.views} Views</p>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4 bg-blue-700 text-white p-2">Topics</h2>
                <ul className="space-y-2">
                  {topics.map(topic => (
                    <li key={topic}>
                      <Button variant="link" className="text-blue-600 hover:underline">{topic}</Button>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}