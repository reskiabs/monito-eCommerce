import React from "react";

const ProductCard = ({ img, title, description }) => {
  return (
    <article className="shadow-xl p-2 gap-2 rounded-xl">
      <img
        src={img}
        alt={title}
        width="100%"
        height="auto"
        className="rounded-xl"
      />
      <div className="p-2 mt-2 md:py-4">
        <span className="text-xs text-white px-4 py-2 rounded-full bg-blue font-bold">
          Pet Knowledge
        </span>
        <h3 className="text-neutral_100 mt-5 font-bold text-sm md:text-base">
          {title}
        </h3>
        <p className="text-sm text-neutral_80 mt-3 line-clamp-4 font-normal">
          {description}
        </p>
      </div>
    </article>
  );
};

export default ProductCard;
