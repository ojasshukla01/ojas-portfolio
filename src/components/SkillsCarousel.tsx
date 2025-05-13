import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

const skills = [
  { name: 'Python', logo: '/logos/python.svg' },
  { name: 'JavaScript', logo: '/logos/javascript.svg' },
  { name: 'React', logo: '/logos/react.svg' },
  { name: 'Node.js', logo: '/logos/nodejs.svg' },
  { name: 'AWS', logo: '/logos/aws.svg' },
  { name: 'GCP', logo: '/logos/gcp.svg' },
  { name: 'Docker', logo: '/logos/docker.svg' },
  { name: 'Kafka', logo: '/logos/kafka.svg' },
  { name: 'dbt', logo: '/logos/dbt.svg' },
  { name: 'TailwindCSS', logo: '/logos/tailwindcss.svg' },
  { name: 'TypeScript', logo: '/logos/typescript.svg' },
];

export default function SkillsCarousel() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          Skills & Tools
        </h2>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={4}
          loop={true}
          autoplay={{ delay: 1500, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
        >
          {skills.map((skill) => (
            <SwiperSlide key={skill.name}>
              <div className="flex flex-col items-center gap-2">
                <img src={skill.logo} alt={skill.name} className="h-12 w-auto" />
                <p className="text-sm text-gray-700 dark:text-gray-300">{skill.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
