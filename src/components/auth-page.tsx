"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import parayaLogo from "../images/PARAYA.png";
import bgwsii from "../images/bgwsii.jpg";

const images: string[] = [
  "https://scontent.fmnl9-6.fna.fbcdn.net/v/t1.6435-9/178746772_1188576928253634_7981208320988017883_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGoWezgTsXYBj4adfnYxhinIM6NBlQHWR4gzo0GVAdZHjksf8XObY0Vl4E66eqI5pfspFjgwp22K2it074fxkBR&_nc_ohc=B3IuH8_CKi4Q7kNvgEXfm12&_nc_zt=23&_nc_ht=scontent.fmnl9-6.fna&_nc_gid=A7WiJyooEypjp3DQEhPk_EC&oh=00_AYCVqYWy3wQKqWXglJgtD_diyxaRZzy_ub-0260aw1xp2A&oe=673DC647",
  "https://scontent.fmnl9-3.fna.fbcdn.net/v/t1.6435-9/178837974_1188576868253640_1686485867395941185_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHU94uJ4Z0WCKuQ9Vxj5k4Kws3jYfUJ7ynCzeNh9QnvKVK-ZuomPG5Ap9acr0YQ8EbRxG-aW5roby9PH_i39RMD&_nc_ohc=Tupiiq2CEwwQ7kNvgFIide9&_nc_zt=23&_nc_ht=scontent.fmnl9-3.fna&_nc_gid=A1TyIh_Y5kiHfrD59gZF6HW&oh=00_AYAWZ28_qaEPv3uBVk2Ot-3WTAQpOYNlWfQxAzSzAwWytg&oe=673DDEF3",
  "https://scontent.fmnl9-3.fna.fbcdn.net/v/t1.6435-9/178944770_1187374611707199_8641730464700369263_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHykmT2XhtJ4dQfK977ul0I-A5VvEqdQ_34DlW8Sp1D_b3XjX_DUSQ7TYuS6HJJ_JQZ3ux6gXFSbGTnZDmRHPTA&_nc_ohc=lhTGXyInCvoQ7kNvgEqzWYn&_nc_zt=23&_nc_ht=scontent.fmnl9-3.fna&_nc_gid=ARr3M5Kboubj1O27nXK9lZe&oh=00_AYDuAPBef7b8RIsA7UZpXbB08epWT4CRClhc3ZGUnDTlUQ&oe=673DBB74",
];

interface FormData {
  email: string;
  password: string;
  name: string;
}

export function AuthPageComponent(): JSX.Element {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showImages, setShowImages] = useState<boolean>(true);
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
    name: "",
  });

  useEffect(() => {
    const handleResize = () => {
      setShowImages(window.innerWidth > 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
    formType: string
  ) => {
    e.preventDefault();
    setIsLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log(`${formType} form submitted:`, formData);
    setIsLoading(false);

    setFormData({ email: "", password: "", name: "" });
  };

  return (
    <div className="flex h-screen">
      <div
        style={{ backgroundImage: `url(${bgwsii})` }}
        className={`${
          showImages ? "w-full md:w-[40%]" : "w-full"
        } flex items-center justify-center transition-all duration-300`}
      >
        {" "}
        <Card className="w-[90%] max-w-[400px] max-h-[600px] border-none" style={{ backgroundColor: 'rgba(4, 30, 37, 0.9)' }}>  
          <CardHeader className="space-y--2">
            <div className="flex justify-center">
              <img
                src={parayaLogo}
                alt="School Logo"
                className="w-20 h-20 object-contain"
                style={{ marginTop: '-10px', userSelect: 'none' }}
              />
            </div>
            <CardTitle className="text-2xl font-bold text-center text-[#179eb0]" style={{ userSelect: 'none' }}>
              Welcome
            </CardTitle>
            <CardDescription className="text-center text-[#fff]" style={{ marginBottom: '-20px', userSelect: 'none' }}>
              Sign in to your account or create a new one.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="signin" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb--5" style={{ backgroundColor: 'rgba(23, 158, 176, 0.1)', userSelect: 'none' }}>
                <TabsTrigger value="signin">Sign In</TabsTrigger>
                <TabsTrigger value="register">Register</TabsTrigger>
              </TabsList>
              <TabsContent value="signin">
                <form
                  className="space-y-4"
                  onSubmit={(e) => handleSubmit(e, "signin")}
                >
                  <div className="space-y-2 text-[#179eb0]" style={{ userSelect: 'none' }}>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="sample@gmail.com"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      aria-label="Email address"
                      style={{ backgroundColor: 'rgba(4, 30, 37, 0.9)', border: 'none', color: 'white' }}
                    />
                  </div>
                  <div className="space-y-2 text-[#179eb0]" style={{ userSelect: 'none' }}>
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      required
                      value={formData.password}
                      onChange={handleInputChange}
                      aria-label="Password"
                      style={{ backgroundColor: 'rgba(4, 30, 37, 0.9)', border: 'none', color: 'white' }}
                    />
                  </div>
                  <Button type="submit" className="w-full" disabled={isLoading} style={{ userSelect: 'none' }}>
                    {isLoading ? "Signing In..." : "Sign In"}
                  </Button>
                  <div className="text-center">
                    <a
                      href="#"
                      className="text-sm text-[#179eb0] hover:underline"
                      style={{ userSelect: 'none' }}
                    >
                      Forgot password?
                    </a>
                  </div>
                </form>
              </TabsContent>
              <TabsContent value="register">
                <form
                  className="space-y-4"
                  onSubmit={(e) => handleSubmit(e, "register")}
                >
                  <div className="space-y-2 text-[#179eb0]" style={{ userSelect: 'none' }}>
                    <Label htmlFor="register-name">Name</Label>
                    <Input
                      id="register-name"
                      name="name"
                      placeholder="John Doe"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      aria-label="Full name"
                      style={{ backgroundColor: 'rgba(4, 30, 37, 0.9)', border: 'none', color: 'white' }}
                    />
                  </div>
                  <div className="space-y-2 text-[#179eb0]" style={{ userSelect: 'none' }}>
                    <Label htmlFor="register-email">Email</Label>
                    <Input
                      id="register-email"
                      name="email"
                      type="email"
                      placeholder="sample@gmail.com"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      aria-label="Email address"
                      style={{ backgroundColor: 'rgba(4, 30, 37, 0.9)', border: 'none', color: 'white' }}
                    />
                  </div>
                  <div className="space-y-2 text-[#179eb0]" style={{ userSelect: 'none' }}>
                    <Label htmlFor="register-password">Password</Label>
                    <Input
                      id="register-password"
                      name="password"
                      type="password"
                      required
                      value={formData.password}
                      onChange={handleInputChange}
                      aria-label="Password"
                      style={{ backgroundColor: 'rgba(4, 30, 37, 0.9)', border: 'none', color: 'white' }}
                    />
                  </div>
                  <Button type="submit" className="w-full" disabled={isLoading} style={{ userSelect: 'none' }}>
                    {isLoading ? "Registering..." : "Register"}
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter className="flex justify-between">
            <a href="/" className="text-sm text-[#fff] hover:underline" style={{ userSelect: 'none' }}>
              ← Go back to main website
            </a>
          </CardFooter>
        </Card>
      </div>
      {showImages && (
        <div className="hidden md:block w-[70%] relative overflow-hidden" style={{ userSelect: 'none' }}>
          {" "}
          {images.map((src, index) => (
            <img
              key={src}
              src={src}
              alt={`Background ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
