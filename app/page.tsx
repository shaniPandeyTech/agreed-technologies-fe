"use client"
import CustomSlider from "@/src/components/CustomSlider";
import DriveRevenueCard from "@/src/components/DriveRevenueCard";
import FaqSection from "@/src/components/FaqSection";

export default function Home() {
  
 

  const settings = {
    dots: true,
    arrow: true,
    infinite: true,
    autoplay: true,
    slideToShow: 2,
    SlideToScroll: 1,
    speed: 500,
    swipe: true
  }
  return (
    <div>
      <div className="container">
      <br/><br/><br/>
        <FaqSection />
        <DriveRevenueCard />
        

        <br/><br/><br/>
        <br/><br/><br/>
      </div>
    </div>
  );
}
