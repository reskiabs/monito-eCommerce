import { ChevronRightIcon } from "lucide-react";
import React from "react";
import Bakers from "../../assets/icons/bakers.svg";
import Butchers from "../../assets/icons/buchers.svg";
import Felix from "../../assets/icons/felix.svg";
import GoodBoy from "../../assets/icons/good-boy.svg";
import Pedigree from "../../assets/icons/pedigree.svg";
import Sheba from "../../assets/icons/sheba.svg";
import Whiskas from "../../assets/icons/whiskas.svg";
import SellerBanner from "../../assets/img/SellerBanner.png";
import Button from "../Button";
import FullTitle from "../FullTitle";

const SellerSection = () => {
  return (
    <section className="my-8 px-4 hidden md:block md:px-32 md:pt-10">
      <div className="flex mb-6 items-center justify-between">
        <FullTitle title="Pet Sellers" subtitle="Proud to be part of" />
        <div className="md:block hidden">
          <Button
            secondary
            icon={<ChevronRightIcon className="h-5 w-5" />}
            title="View all our sellers"
          />
        </div>
      </div>
      <div className="flex items-center justify-between mt-14 mb-20">
        <img src={Sheba} alt="" width="135" />
        <img src={Whiskas} alt="" width="135" />
        <img src={Bakers} alt="" width="135" />
        <img src={Felix} alt="" width="135" />
        <img src={GoodBoy} alt="" width="135" />
        <img src={Butchers} alt="" width="135" />
        <img src={Pedigree} alt="" width="135" />
      </div>
      <img src={SellerBanner} alt="" width="100%" />
    </section>
  );
};

export default SellerSection;
