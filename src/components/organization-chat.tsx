import React, { useState, useEffect, useRef } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Send, Menu, X } from "lucide-react"

interface Volunteer {
  id: number
  name: string
  lastMessage: string
  avatar: string
}

interface Message {
  id: number
  sender: string
  content: string
  timestamp: string
}

const initialVolunteers: Volunteer[] = [
  { id: 1, name: "Juan Dela Cruz", lastMessage: "I'm interested in volunteering!", avatar: "/placeholder.svg?height=32&width=32" },
  { id: 2, name: "Maria Santos", lastMessage: "When is the next event?", avatar: "/placeholder.svg?height=32&width=32" },
  { id: 3, name: "Pedro Reyes", lastMessage: "Thank you for the opportunity!", avatar: "/placeholder.svg?height=32&width=32" },
  { id: 4, name: "Ana Gomez", lastMessage: "I can help on Saturday.", avatar: "/placeholder.svg?height=32&width=32" },
]

const initialMessages: Message[] = [
  { id: 1, sender: "Juan Dela Cruz", content: "Magandang araw! I'm interested in volunteering with your organization.", timestamp: "10:00 AM" },
  { id: 2, sender: "You", content: "Magandang araw din! Thank you for your interest. We have several programs you can join.", timestamp: "10:05 AM" },
  { id: 3, sender: "Juan Dela Cruz", content: "That sounds great! What kind of programs do you have?", timestamp: "10:10 AM" },
  { id: 4, sender: "You", content: "Our current focus is on building homes in Tondo, Manila. Would you be interested in that?", timestamp: "10:15 AM" },
  { id: 5, sender: "Juan Dela Cruz", content: "Yes, I'd love to help with the house-building project! What skills are needed?", timestamp: "10:20 AM" },
]

export function OrganizationChatUi() {
  const [volunteers, setVolunteers] = useState<Volunteer[]>(initialVolunteers)
  const [selectedVolunteer, setSelectedVolunteer] = useState<Volunteer>(volunteers[0])
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [newMessage, setNewMessage] = useState<string>("")
  const [isTyping, setIsTyping] = useState<boolean>(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages])

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (newMessage.trim()) {
      const newOrgMessage: Message = { 
        id: messages.length + 1, 
        sender: "You", 
        content: newMessage, 
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) 
      }
      setMessages([...messages, newOrgMessage])
      setNewMessage("")
      simulateReply(newOrgMessage)
      updateVolunteer(newOrgMessage)
    }
  }

  const simulateReply = (orgMessage: Message) => {
    setIsTyping(true)
    setTimeout(() => {
      let replyContent = "Thank you for your message. I'll consider your offer and get back to you soon."
      
      if (orgMessage.content.toLowerCase().includes("event")) {
        replyContent = "Thank you for the information about the event. Can you provide more details about the date and location?"
      } else if (orgMessage.content.toLowerCase().includes("volunteer")) {
        replyContent = "I'm excited about the volunteer opportunity! What specific skills are you looking for?"
      } else if (orgMessage.content.toLowerCase().includes("thank")) {
        replyContent = "You're welcome! I'm glad I could help. Is there anything else I can do?"
      }

      const replyMessage: Message = { 
        id: messages.length + 2, 
        sender: selectedVolunteer.name, 
        content: replyContent, 
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) 
      }
      setMessages(prevMessages => [...prevMessages, replyMessage])
      setIsTyping(false)
      updateVolunteer(replyMessage)
    }, 2000 + Math.random() * 2000)
  }

  const updateVolunteer = (message: Message) => {
    setVolunteers(prevVolunteers =>
      prevVolunteers.map(vol =>
        vol.id === selectedVolunteer.id
          ? { ...vol, lastMessage: message.content }
          : vol
      )
    )
  }

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <div className={`bg-white border-r border-gray-200 w-full md:w-1/4 lg:w-1/5 absolute md:relative z-10 transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-xl font-semibold">Volunteers</h2>
          <Button variant="ghost" className="md:hidden" onClick={toggleSidebar}>
            <X className="h-6 w-6" />
          </Button>
        </div>
        <ScrollArea className="h-[calc(100vh-5rem)]">
          {volunteers.map((volunteer) => (
            <div
              key={volunteer.id}
              className={`p-4 cursor-pointer hover:bg-gray-100 ${selectedVolunteer.id === volunteer.id ? 'bg-gray-100' : ''}`}
              onClick={() => {
                setSelectedVolunteer(volunteer)
                setIsSidebarOpen(false)
              }}
            >
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src={volunteer.avatar} alt={volunteer.name} />
                  <AvatarFallback>{volunteer.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">{volunteer.name}</p>
                  <p className="text-sm text-gray-500 truncate">{volunteer.lastMessage}</p>
                </div>
              </div>
            </div>
          ))}
        </ScrollArea>
      </div>

      <div className="flex-1 flex flex-col w-full">
        <div className="p-4 border-b border-gray-200 bg-white flex justify-between items-center">
          <Button variant="ghost" className="md:hidden" onClick={toggleSidebar}>
            <Menu className="h-6 w-6" />
          </Button>
          <h2 className="text-xl font-semibold">{selectedVolunteer.name}</h2>
          <div className="w-6 md:hidden"></div>
        </div>

        <ScrollArea className="flex-1 p-4" ref={scrollRef}>
          {messages.map((message) => (
            <div key={message.id} className={`mb-4 ${message.sender === "You" ? "text-right" : ""}`}>
              <Card className={`inline-block p-4 max-w-xs sm:max-w-sm md:max-w-md ${message.sender === "You" ? "bg-green-500 text-white" : "bg-white"}`}>
                <p>{message.content}</p>
                <p className={`text-xs mt-1 ${message.sender === "You" ? "text-green-100" : "text-gray-500"}`}>{message.timestamp}</p>
              </Card>
            </div>
          ))}
          {isTyping && (
            <div className="text-gray-500 text-sm">
              {selectedVolunteer.name} is typing...
            </div>
          )}
        </ScrollArea>

        <form onSubmit={handleSendMessage} className="p-4 bg-white border-t border-gray-200">
          <div className="flex space-x-2">
            <Input
              type="text"
              placeholder="Type a message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              className="flex-1"
            />
            <Button type="submit" disabled={isTyping}>
              <Send className="h-4 w-4" />
              <span className="sr-only">Send</span>
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}