'use client'

import React, { useState, useEffect, useRef } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Send, Menu, X } from "lucide-react"

interface Conversation {
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

const initialConversations: Conversation[] = [
  { id: 1, name: "Gawad Kalinga", lastMessage: "Thank you for your interest in volunteering!", avatar: "/placeholder.svg?height=32&width=32" },
  { id: 2, name: "Philippine Red Cross", lastMessage: "Can you join our blood donation drive?", avatar: "/placeholder.svg?height=32&width=32" },
  { id: 3, name: "Habitat for Humanity PH", lastMessage: "We appreciate your help last week!", avatar: "/placeholder.svg?height=32&width=32" },
  { id: 4, name: "UNICEF Philippines", lastMessage: "Our next outreach is on Saturday.", avatar: "/placeholder.svg?height=32&width=32" },
]

const initialMessages: Message[] = [
  { id: 1, sender: "Gawad Kalinga", content: "Magandang araw! Thank you for your interest in volunteering with Gawad Kalinga.", timestamp: "10:00 AM" },
  { id: 2, sender: "You", content: "Magandang araw din po! I'm excited to help. What opportunities are available?", timestamp: "10:05 AM" },
  { id: 3, sender: "Gawad Kalinga", content: "We have several programs you can join. Our current focus is on building homes in Tondo, Manila.", timestamp: "10:10 AM" },
  { id: 4, sender: "You", content: "That sounds great! I'd love to help with the house-building project. What skills are needed?", timestamp: "10:15 AM" },
  { id: 5, sender: "Gawad Kalinga", content: "No specific skills are required, just your willingness to help! We'll provide training on-site. Are you available this coming Saturday?", timestamp: "10:20 AM" },
]

export function ChatUi() {
  const [conversations, setConversations] = useState<Conversation[]>(initialConversations)
  const [selectedConversation, setSelectedConversation] = useState<Conversation>(conversations[0])
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
      const newUserMessage: Message = { 
        id: messages.length + 1, 
        sender: "You", 
        content: newMessage, 
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) 
      }
      setMessages([...messages, newUserMessage])
      setNewMessage("")
      simulateReply(newUserMessage)
      updateConversation(newUserMessage)
    }
  }

  const simulateReply = (userMessage: Message) => {
    setIsTyping(true)
    setTimeout(() => {
      const replyMessage: Message = { 
        id: messages.length + 2, 
        sender: selectedConversation.name, 
        content: `Thank you for your message: "${userMessage.content}". We'll get back to you soon.`, 
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) 
      }
      setMessages(prevMessages => [...prevMessages, replyMessage])
      setIsTyping(false)
      updateConversation(replyMessage)
    }, 2000 + Math.random() * 2000)
  }

  const updateConversation = (message: Message) => {
    setConversations(prevConversations =>
      prevConversations.map(conv =>
        conv.id === selectedConversation.id
          ? { ...conv, lastMessage: message.content }
          : conv
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
          <h2 className="text-xl font-semibold">Organizations</h2>
          <Button variant="ghost" className="md:hidden" onClick={toggleSidebar}>
            <X className="h-6 w-6" />
          </Button>
        </div>
        <ScrollArea className="h-[calc(100vh-5rem)]">
          {conversations.map((conversation) => (
            <div
              key={conversation.id}
              className={`p-4 cursor-pointer hover:bg-gray-100 ${selectedConversation.id === conversation.id ? 'bg-gray-100' : ''}`}
              onClick={() => {
                setSelectedConversation(conversation)
                setIsSidebarOpen(false)
              }}
            >
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src={conversation.avatar} alt={conversation.name} />
                  <AvatarFallback>{conversation.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">{conversation.name}</p>
                  <p className="text-sm text-gray-500 truncate">{conversation.lastMessage}</p>
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
          <h2 className="text-xl font-semibold">{selectedConversation.name}</h2>
          <div className="w-6 md:hidden"></div>
        </div>

        <ScrollArea className="flex-1 p-4" ref={scrollRef}>
          {messages.map((message) => (
            <div key={message.id} className={`mb-4 ${message.sender === "You" ? "text-right" : ""}`}>
              <Card className={`inline-block p-4 max-w-xs sm:max-w-sm md:max-w-md ${message.sender === "You" ? "bg-blue-500 text-white" : "bg-white"}`}>
                <p>{message.content}</p>
                <p className={`text-xs mt-1 ${message.sender === "You" ? "text-blue-100" : "text-gray-500"}`}>{message.timestamp}</p>
              </Card>
            </div>
          ))}
          {isTyping && (
            <div className="text-gray-500 text-sm">
              {selectedConversation.name} is typing...
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
