import BannerSection from "./components/section/BannerSection";
import BlogSection from "./components/section/BlogSection";
import Footer from "./components/section/Footer";
import HeroSection from "./components/section/HeroSection";
import PetListSection from "./components/section/PetListSection";
import ProductSection from "./components/section/ProductSection";
import SellerSection from "./components/section/SellerSection";

export default function App() {
  return (
    <div>
      <HeroSection />
      <PetListSection />
      <BannerSection />
      <ProductSection />
      <SellerSection />
      <BlogSection />
      <Footer />
    </div>
  );
}
