import parayaLogo from "../images/PARAYA.png";
import dyciLogo from "../images/DYCI.png";
import ccsLogo from "../images/CCS.png";
import icpLogo from "../images/ICP.png";
import parayaiiLogo from "../images/PARAYAII.png";

export default function PartnerLogosComponent() {
  const imageLinks = [
    parayaLogo,
    dyciLogo,
    ccsLogo,
    icpLogo,
  ];

  return (
    <div className="w-full">
      <section className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <div className="h-1 w-100 bg-[#fff] mx-auto bg-primary"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {imageLinks.map((src, i) => (
            <div key={i} className="flex items-center justify-center">
              <img
                src={src}
                alt={`Partner logo ${i + 1}`}
                width={80}
                height={80}
                className="h-20 w-auto object-contain transition-transform duration-300 transform hover:scale-110" // Added hover effect
                style={{ userSelect: 'none', marginTop: '14px', height: '100px' }}
              />
            </div>
          ))}
        </div>
      </section>
      {/* Parayaii Logo placed outside the section */}
      <div className="flex items-center justify-center mb-4">
        <img
          src={parayaiiLogo}
          alt="Parayaii Logo"
          width={100}
          height={100}
          className="h-100 w-80 object-contain transition-transform duration-300 transform hover:scale-110" // Added hover effect
          style={{ userSelect: 'none' }}
        />
      </div>
    </div>
  );
}