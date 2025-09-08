import { FC } from "react";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";

import sponsor1 from "@/assets/Sponsors/1.webp"; // Tract
import sponsor2 from "@/assets/Sponsors/2.webp"; // Gene Haas
import sponsor3 from "@/assets/Sponsors/3.webp"; // Rev Robotics
import sponsor4 from "@/assets/Sponsors/4.webp"; // FIRST Nevada
import sponsor5 from "@/assets/Sponsors/5.webp"; // Kimmie Candy
import sponsor6 from "@/assets/Sponsors/6.webp"; // Tesla
import sponsor7 from "@/assets/Sponsors/7.webp"; // Comstock
import sponsor8 from "@/assets/Sponsors/8.webp"; // Dolan Auto

const sponsorsByCategory = {
  major: [
    { logo: sponsor1, website: "https://www.tract.com/" },
    { logo: sponsor2, website: "https://ghaasfoundation.org/content/ghf/en/home.html" },
    { logo: sponsor3, website: "https://www.revrobotics.com/" },
  ],
  current: [
    { logo: sponsor4, website: "https://firstnevada.org/" },
    { logo: sponsor5, website: "https://kimmiecandy.com/" },
    { logo: sponsor6, website: "https://tesla.com" },
    { logo: sponsor7, website: "https://comstock.inc/" },
    { logo: sponsor8, website: "https://www.dolanautogroup.com/" },
  ],
};

const ThankYouSponsors: FC = () => {
  const renderCategory = (title: string, sponsors: typeof sponsorsByCategory[keyof typeof sponsorsByCategory], size: string) => (
    <div className="flex flex-col items-center mb-12">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-center">{title}</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {sponsors.map((sponsor, index) => (
          <motion.a
            key={index}
            href={sponsor.website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center p-4 rounded-xl bg-white hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
          >
            <div className={`${size} flex items-center justify-center p-2`}>
              <img
                src={sponsor.logo}
                alt="Sponsor Logo"
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <div className="container mx-auto px-4 pt-32 pb-12 flex flex-col items-center">
        <h1 className="text-4xl font-bold text-center mb-8">
          Thank You to Our Sponsors!
        </h1>

        <p className="text-center text-gray-300 mb-12 max-w-2xl">
          Our team wouldn’t be possible without the generous support of our sponsors. 
          We sincerely appreciate your contribution to our success!
        </p>

        {renderCategory("Major Sponsors", sponsorsByCategory.major, "w-44 h-44")}
        {renderCategory("Current Sponsors", sponsorsByCategory.current, "w-32 h-32")}
      </div>

      <Footer />
    </div>
  );
};

export default ThankYouSponsors;
