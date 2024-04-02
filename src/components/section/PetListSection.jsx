import { ChevronRightIcon } from "lucide-react";
import React from "react";
import pets from "../../assets/data/pets.json";
import FullTitle from "../FullTitle";

import image1 from "../../assets/img/image1.png";
import image2 from "../../assets/img/image2.png";
import image3 from "../../assets/img/image3.png";
import image4 from "../../assets/img/image4.png";
import image5 from "../../assets/img/image5.png";
import image6 from "../../assets/img/image6.png";
import image7 from "../../assets/img/image7.png";
import image8 from "../../assets/img/image8.png";
import Button from "../Button";
import ProductCard from "../ProductCard";

const petImage = {
  1: image1,
  2: image2,
  3: image3,
  4: image4,
  5: image5,
  6: image6,
  7: image7,
  8: image8,
};

const PetListSection = () => {
  return (
    <section className="my-6 space-y-6 md:px-32 md:pt-10 px-4">
      <div className="flex items-center justify-between">
        <FullTitle
          title="Take a look at some of our pets"
          subtitle="Whats new?"
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
        {pets.map((pet, index) => (
          <ProductCard key={index} {...pet} img={petImage[pet.id]} />
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
