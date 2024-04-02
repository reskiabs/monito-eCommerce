import { ChevronRightIcon } from "lucide-react";
import React from "react";
import products from "../../assets/data/products.json";
import FullTitle from "../FullTitle";

import product1 from "../../assets/img/product1.png";
import product2 from "../../assets/img/product2.png";
import product3 from "../../assets/img/product3.png";
import product4 from "../../assets/img/product4.png";
import product5 from "../../assets/img/product5.png";
import product6 from "../../assets/img/product6.png";
import product7 from "../../assets/img/product7.png";
import product8 from "../../assets/img/product8.png";
import Button from "../Button";
import ProductCard from "../ProductCard";

const productImage = {
  1: product1,
  2: product2,
  3: product3,
  4: product4,
  5: product5,
  6: product6,
  7: product7,
  8: product8,
};

const PetListSection = () => {
  return (
    <section className="my-6 space-y-6 hidden md:block md:px-32 md:pt-10 px-4">
      <div className="flex items-center justify-between">
        <FullTitle
          title="Our Products"
          subtitle="Hard to choose right products for your pets?"
        />
        <div className="md:block hidden">
          <Button
            secondary
            icon={<ChevronRightIcon className="h-5 w-5" />}
            title="View more"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 md:gap-6 gap-3 md:grid-cols-4">
        {products.map((item, index) => (
          <ProductCard key={index} {...item} img={productImage[item.id]} />
        ))}
      </div>
      <div className="md:hidden">
        <Button
          secondary
          icon={<ChevronRightIcon className="h-5 w-5" />}
          title="View more"
        />
      </div>
    </section>
  );
};

export default PetListSection;
