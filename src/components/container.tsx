import { ReactNode } from "react";
import bgws from "../images/bgws.jpg";

interface ContainerProps {
  children?: ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return (
    <div
      className="relative bg-cover bg-center"
      style={{ backgroundImage: `url(${bgws})` }}
    >
      <div className="absolute inset-0 bg-black opacity-40" /> {/* Overlay for opacity */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </div>
  );
}