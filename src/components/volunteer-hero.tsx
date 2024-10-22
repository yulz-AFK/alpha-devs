import { Search } from "lucide-react";
import heroImage from "../images/import.jpg";

export function VolunteerHero() {
  return (
    <div className="relative">
      <img
        src={heroImage}
        width={1200}
        height={800}
        alt="Volunteers hiking in a forest"
        className="w-full h-[600px] object-cover"
        style={{ userSelect: 'none' }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-50">
        <div className="container mx-auto px-7 h-full flex flex-col justify-center pt-16">
          <h2 className="text-[#fff] text-sm mb-4" style={{ userSelect: 'none' }}>
            FIND YOUR PASSION. MAKE A DIFFERENCE. BE A BAYANI!
          </h2>
          <h1 className="text-[#fff] text-4xl md:text-5xl font-bold mb-4 max-w-2xl" style={{ userSelect: 'none' }}>
            Discover volunteer opportunities and see how you can help improve
            communities across the Philippines.
          </h1>
          <p className="text-[#fff] text-xl mb-8 max-w-2xl" style={{ userSelect: 'none' }}>
            Submit your volunteer application to hundreds of organizations
            nationwide, all working on causes that need your time and talent to
            create lasting change.
          </p>
          {/* <button className="bg-white text-blue-600 px-6 py-2 rounded-full inline-flex items-center mb-8">
      Learn more
    </button> */}
          <div className=" relative max-w-2xl">
            <input
              type="text"
              placeholder="Search for volunteer opportunities in your area."
              style={{ backgroundColor: 'rgba(4, 30, 37, 0.8)', userSelect: 'none' }}
              className="w-full py-3 px-4 pr-12 rounded-lg focus:outline-none focus:border-transparent placeholder:text-[#179eb0] text-[#179eb0]"
            />
            <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#179eb0]" />
          </div>
        </div>
      </div>
    </div>
  );
}
