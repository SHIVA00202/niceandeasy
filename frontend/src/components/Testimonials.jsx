import React from "react";
import aashtaImg from "../assets/aashta.png";
import ananyaImg from "../assets/ananya.png";
import ankushImg from "../assets/ankush.png";
import arnavImg from "../assets/arnav.jfif";
import blueticks from "../assets/bluetick.png";

const reviews = [
  {
    name: "Darrell Steward",
    review:
      "You made it so simple. My new site is much faster and easier to work with than my old site.",
    image: aashtaImg,
    tag: "#another",
    profileLink: "https://twitter.com/darrell",
  },
  {
    name: "Leslie Alexander",
    review:
      "Simply the best. Better than all the rest. I'd recommend this product to beginners and advanced users.",
    image: ananyaImg,
    tag: "#Celebration",
    profileLink: "https://instagram.com/leslie",
  },
  {
    name: "Jenny Wilson",
    review:
      "This is a top-quality product. No need to think twice before making it live on web.",
    image: ankushImg,
    tag: "#make_it_fast",
    profileLink: "https://twitter.com/jennywilson",
  },
  {
    name: "Kristin Watson",
    review:
      "Finally, I've found a template that covers all bases for a Bootstrap-based startup.",
    image: arnavImg,
    tag: "#Celebration",
    profileLink: "https://instagram.com/kristinwatson",
  },
  {
    name: "Guy Hawkins",
    review:
      "This is a top-quality product. No need to think twice before making it live on web.",
    image: aashtaImg,
    tag: "#make_it_fast",
    profileLink: "https://twitter.com/guyhawkins",
  },
  {
    name: "Marvin McKinney",
    review:
      "With Celebration, it’s quicker with the customer. The customer is more ensured of getting exactly what they ordered.",
    image: ananyaImg,
    tag: "#dev #tools",
    profileLink: "https://instagram.com/marvin",
  },
];

const HeroTestimonials = () => {
  return (
    <section className="bg-[#0f0f0f] text-center py-16 px-4 sm:px-6 md:px-10 lg:px-16 font-inter">
      {/* Title */}
      <h1 className="text-white font-bold text-[clamp(1.8rem,4vw,3rem)] mb-2">
        What our customers say
      </h1>
      <p className="text-[#dadada] text-[15px] sm:text-[16px] max-w-2xl mx-auto mb-10">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
        Velit officia consequat duis.
      </p>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-white text-left rounded-xl p-6 border border-gray-200 shadow-[0_4px_8px_rgba(0,0,0,0.1)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.15)] transition-shadow duration-300"
          >
            {/* Header */}
            <div className="flex items-center gap-3 mb-3">
              <img
                src={review.image}
                alt={review.name}
                className="w-[50px] h-[50px] rounded-full object-cover border border-gray-300"
              />
              <div className="flex items-center gap-2">
                <a
                  href={review.profileLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[18px] font-semibold text-black hover:text-gray-600 transition-colors duration-300"
                >
                  {review.name}
                </a>
                <img
                  src={blueticks}
                  alt="Verified"
                  className="w-[18px] h-[18px]"
                />
              </div>
            </div>

            {/* Review Text */}
            <p className="text-[14px] text-[#333] font-roboto mb-3">
              “{review.review}”
            </p>

            {/* Tag */}
            <span className="text-[13px] text-blue-600 font-medium">
              {review.tag}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroTestimonials;
