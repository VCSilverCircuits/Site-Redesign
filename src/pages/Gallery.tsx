import React from "react";

import img2019_1 from "@/assets/Gallery/2019/1.webp";
import img2019_2 from "@/assets/Gallery/2019/2.webp";
import img2019_3 from "@/assets/Gallery/2019/3.webp";
import img2019_4 from "@/assets/Gallery/2019/4.webp";

import img2020_1 from "@/assets/Gallery/2020/1.webp";
import img2020_2 from "@/assets/Gallery/2020/2.webp";
import img2020_3 from "@/assets/Gallery/2020/3.webp";
import img2020_4 from "@/assets/Gallery/2020/4.webp";

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
  { title: "2024-2025 Into The Deep", images: [img2024_1, img2024_2, img2024_3, img2024_4] },
  { title: "2023-2024 CenterStage", images: [img2023_1, img2023_2, img2023_3, img2023_4] },
  { title: "2022-2023 Power Play", images: [img2022_1, img2022_2, img2022_3, img2022_4] },
  { title: "2021-2022 Freight Frenzy", images: [img2021_1, img2021_2, img2021_3, img2021_4] },
  { title: "2020-2021 Ultimate Goal", images: [img2020_1, img2020_2, img2020_3, img2020_4] },
  { title: "2019-2020 Skystone", images: [img2019_1, img2019_2, img2019_3, img2019_4] },
];

const TeamGallery = () => (
  <div className="container mx-auto px-4 py-16 tech-fade-in">
    <h1 className="text-4xl font-bold mb-12 pt-20 text-center animate-fadeInDown">
      Team Gallery
    </h1>
    {seasons.map(({ title, images }, idx) => (
      <section key={idx} className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 animate-fadeInLeft">
          {title}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`${title} image ${i + 1}`}
              className="w-full h-48 object-cover rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl opacity-0 animate-fadeInUp"
              style={{ animationDelay: `${i * 150}ms`, animationFillMode: "forwards" }}
            />
          ))}
        </div>
      </section>
    ))}
  </div>
);

export default TeamGallery;
