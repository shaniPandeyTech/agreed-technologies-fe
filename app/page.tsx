import Link from "next/link";
import MainBanner from "@/src/components/LandingPage/Banner";
import GetFreeProposal from "@/src/components/LandingPage/GetFreeProposal";
import ResultsDriven from "@/src/components/LandingPage/Resultdriven";
import DriveRevenue from "@/src/components/LandingPage/DriveRevenue";
import SeoResults from '@/src/components/LandingPage/SeoResults'
import WhyGo from '@/src/components/LandingPage/WhyGo'

export default function Home() {
  return (
    <div className="container">
      <MainBanner />
      <GetFreeProposal/>
      <ResultsDriven/>
      <DriveRevenue/>
      <div className="whiteBox">
            <h2>Get ready to grow your Organic Sales</h2>
            <div className="text-center">
              <p className="mb-36">You can achieve significant revenue growth and expanded market share through our proven strategies.</p>
              <Link href="#" className="btn btn-blue">Get Proposal</Link>
            </div>
        </div>

        <SeoResults/>
        <WhyGo/>
    </div>
  );
}
