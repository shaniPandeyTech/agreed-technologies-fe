"use client"
import Link from "next/link";
import MainBanner from "@/src/components/LandingPage/Banner";
import ResultsDriven from "@/src/components/LandingPage/Resultdriven";
import DriveRevenue from "@/src/components/LandingPage/DriveRevenue";
import SeoResults from "@/src/components/LandingPage/SeoResults";
import WhyGo from "@/src/components/LandingPage/WhyGo";
import GetFreeProposal from "@/src/components/LandingPage/getFreeProposal";
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
    swipe: true,
  };
  return (
    <div className="container">
      <MainBanner />
      <GetFreeProposal />
      <ResultsDriven />
      <DriveRevenue />
      <div className="whiteBox">
        <h2>Get ready to grow your Organic Sales</h2>
        <div className="text-center">
          <p className="mb-36">
            You can achieve significant revenue growth and expanded market share
            through our proven strategies.
          </p>
          <Link href="#" className="btn btn-blue">
            Get Proposal
          </Link>
        </div>
      </div>

      <SeoResults />
      <WhyGo />
      <FaqSection />
      <DriveRevenueCard />
    </div>
  );
}
