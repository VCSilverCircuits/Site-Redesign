import { FC } from "react";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";

import sponsor1 from "@/assets/Sponsors/1.webp";
import sponsor2 from "@/assets/Sponsors/2.webp";
import sponsor3 from "@/assets/Sponsors/3.webp";
import sponsor4 from "@/assets/Sponsors/4.webp";
import sponsor5 from "@/assets/Sponsors/5.webp";
import sponsor6 from "@/assets/Sponsors/6.webp";
import sponsor7 from "@/assets/Sponsors/7.webp";
import sponsor8 from "@/assets/Sponsors/8.webp";
import sponsor9 from "@/assets/Sponsors/9.webp";
import sponsor10 from "@/assets/Sponsors/10.webp";
import sponsor11 from "@/assets/Sponsors/11.webp";

const sponsors = [
  { logo: sponsor1, website: "https://www.tract.com/" },
  { logo: sponsor2, website: "https://ghaasfoundation.org/content/ghf/en/home.html" },
  { logo: sponsor3, website: "https://www.revrobotics.com/" },
  { logo: sponsor4, website: "https://firstnevada.org/" },
  { logo: sponsor5, website: "https://kimmiecandy.com/" },
  { logo: sponsor6, website: "https://tesla.com" },
  { logo: sponsor7, website: "https://comstock.inc/" },
  { logo: sponsor8, website: "https://www.dolanautogroup.com/" },
  { logo: sponsor9, website: "https://www.109comstockladies.com/" },
  { logo: sponsor10, website: "https://www.theroastinghouse.com/" }, // this site has some SSL issues
  { logo: sponsor11, website: "https://www.corporationwiki.com/p/2jiu89/ascension-power-engineering-llc" },
];

const ThankYouSponsors: FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white tech-fade-in">
      <div className="container mx-auto px-4 pt-32 pb-12 flex-1">
        <h1 className="text-4xl font-bold text-center mb-12">
          Thank You to Our Sponsors
        </h1>

        <p className="text-center text-gray-300 mb-12">
          Our team wouldn’t be possible without the generous support of our sponsors. 
          We sincerely appreciate your contribution to our success!
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {sponsors.map((sponsor, index) => (
            <motion.a
              key={index}
              href={sponsor.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-4 bg-gray-900 rounded-xl shadow-md shadow-gray-800/50 border border-gray-700 hover:scale-105 hover:bg-gray-800 transition-transform duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <div className="w-32 h-32 flex items-center justify-center bg-gray-800 p-2 rounded-lg">
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

      <Footer />
    </div>
  );
};


export default ThankYouSponsors;
