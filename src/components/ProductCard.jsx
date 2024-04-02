import React from "react";
import Gift from "../assets/icons/gift-icon.svg";
import { cn } from "../features/cn";

const ProductCard = ({
  img,
  code,
  name,
  gender,
  age,
  price,
  product,
  size,
  gift,
}) => {
  return (
    <div className="shadow-xl p-2 gap-2 rounded-xl">
      <img
        src={img}
        alt={name}
        width="100%"
        height="auto"
        className="rounded-xl"
      />
      <div className="p-2 space-y-1.5 md:space-y-2 md:py-4">
        <p className="text-neutral_100 font-bold text-sm md:text-base">
          {code ? `${code} - ` : ""}
          {name}
        </p>
        <div className="md:flex md:space-x-2 gap-y-1">
          <p className="text-xs text-neutral_60 font-medium">
            {gender ? "Gene:" : "Product:"}{" "}
            <span className="font-bold">{gender ?? product}</span>
          </p>
          <p
            className={cn(
              "text-xs text-neutral_60 hidden font-medium",
              size || age ? "md:block" : "hidden"
            )}
          >
            •
          </p>
          <p className="text-xs text-neutral_60 font-medium">
            {age && "Age: "}
            {size && "Size: "}
            <span className="font-bold">{age ?? size}</span>
          </p>
        </div>
        <p className="text-neutral_100 font-bold text-base md:text-sm">
          {price} VND
        </p>
        {gift && (
          <div className="rounded-md mt-6 flex items-center gap-x-3 bg-secondary px-4 py-2 w-full text-sm font-bold">
            <img src={Gift} alt="Gift" className="w-5 h-5" />
            <p className="font-bold">•</p>
            Free Cat Food
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
