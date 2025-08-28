import { FC, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "@/components/Footer";

import img2021_1 from "@/assets/Gallery/2021/1.webp";
import img2021_2 from "@/assets/Gallery/2021/2.webp";
import img2021_3 from "@/assets/Gallery/2021/3.webp";
import img2021_4 from "@/assets/Gallery/2021/4.webp";

import img2022_1 from "@/assets/Gallery/2022/1.webp";
import img2022_2 from "@/assets/Gallery/2022/2.webp";
import img2022_3 from "@/assets/Gallery/2022/3.webp";
import img2022_4 from "@/assets/Gallery/2022/4.webp";

import img2023_1 from "@/assets/Gallery/2023/1.webp";
import img2023_2 from "@/assets/Gallery/2023/2.webp";
import img2023_3 from "@/assets/Gallery/2023/3.webp";
import img2023_4 from "@/assets/Gallery/2023/4.webp";

import img2024_1 from "@/assets/Gallery/2024/1.webp";
import img2024_2 from "@/assets/Gallery/2024/2.webp";
import img2024_3 from "@/assets/Gallery/2024/3.webp";
import img2024_4 from "@/assets/Gallery/2024/4.webp";

const seasons = [
    {
        title: "2024–2025 Season",
        images: [img2024_1, img2024_2, img2024_3, img2024_4],
        achievements: [
            "Lobster Cup International – Division Winning Alliance Captain, Finalist Alliance Captain",
            "Nevada Championship – 1st place (quals), Inspire Award Winner, Finalist Alliance Captain",
            "NV Northern League Tournament – 1st place (quals), Dean's List Semifinalist (Tucker Knight), Inspire Award Winner, Winning Alliance Captain",
            "NV Northern League Meets 1N–6N – Multiple qualifications, eliminations, and placements; top performances in all events",
            "NV Northern Scrimmage – 1st place (quals), top scores in qualification matches",
            "FIRST World Championship – Jemison Division – 29th place (quals), Winning Alliance 2nd Pick",
        ],
    },
    {
        title: "2023–2024 Season",
        images: [img2023_1, img2023_2, img2023_3, img2023_4],
        achievements: [
            "NV Northern League Tournament: Inspire Award, Promote Award, Winning Alliance 1st pick, 2 Dean’s List Semi-Finalists",
            "Nevada Championship: Inspire Award, Semi-Final Alliance Captain, Dean’s List Finalist",
        ],
    },
    {
        title: "2022–2023 Season",
        images: [img2022_1, img2022_2, img2022_3, img2022_4],
        achievements: [
            "NV Northern League Tournament: 2 Dean’s List Semi-Finalists, Inspire Award 2nd Place, Think Award, Winning Alliance – Captain",
            "Nevada Championship: Compass Award 2nd Place, Innovate Award sponsored by Raytheon Technologies 2nd Place, Inspire Award, Promote Award 2nd Place, Think Award 2nd Place, Winning Alliance – Captain",
            "FIRST Championship – Houston – World Championship – Edison Division: Motivate Award",
        ],
    },
    {
        title: "2021–2022 Season",
        images: [img2021_1, img2021_2, img2021_3, img2021_4],
        achievements: [
            "NV Northern League Tournament: Inspire Award 2nd Place, Think Award, Winning Alliance – Captain",
            "Nevada State Championship: Finalist Alliance – Captain, Inspire Award, Think Award 3rd Place",
        ],
    },
];

const TeamPortfolio: FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <div className="min-h-screen flex flex-col bg-black text-white">
            <div className="container mx-auto px-4 pt-20 pb-12 flex-1">
                <h1 className="text-4xl font-bold text-center mb-12">Team Portfolio</h1>

                {seasons.map((season, index) => (
                    <motion.section
                        key={index}
                        className="mb-16 bg-gray-900 p-6 rounded-xl shadow-md shadow-gray-800/50 border border-gray-700"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2, duration: 0.6 }}
                    >
                        <h2 className="text-2xl font-semibold mb-6 text-white">{season.title}</h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                            {season.images.map((img, idx) => (
                                <motion.img
                                    key={idx}
                                    src={img}
                                    alt={`${season.title} Image ${idx + 1}`}
                                    className="w-full h-48 object-cover rounded-lg cursor-pointer transition-transform duration-300 hover:scale-105 hover:brightness-110"
                                />
                            ))}
                        </div>

                        <div>
                            <button
                                onClick={() =>
                                    setOpenIndex(openIndex === index ? null : index)
                                }
                                className="w-full text-left font-medium text-lg mb-2 py-2 px-4 bg-gray-800 text-white rounded-lg border border-gray-700 hover:bg-gray-700 transition-colors duration-200"
                            >
                                {openIndex === index ? "Hide Achievements" : "View Achievements"}
                            </button>

                            <AnimatePresence initial={false}>
                                {openIndex === index && (
                                    <motion.ul
                                        key="achievements"
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.5 }}
                                        className="list-disc pl-6 space-y-2 mt-4 text-gray-300 overflow-hidden"
                                    >
                                        {season.achievements.map((achievement, idx) => (
                                            <li key={idx}>{achievement}</li>
                                        ))}
                                    </motion.ul>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.section>
                ))}
            </div>
            <Footer />
        </div>
    );
};

export default TeamPortfolio;
