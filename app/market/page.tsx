import { title } from "@/components/primitives";
import TradingViewWidget from "../../components/TradingViewWidget";
import Stock from "../../components/Stock";
import Applelogo from "../../assets/applelogo.png";

export default function PricingPage() {
  return (
    <>
      <h1 className={title()}>Market</h1>
      <div className="flex items-center justify-between h-full w-full py-4 rounded-lg bg-slate-100 bg-opacity-0" >
        <Stock />
        <TradingViewWidget />
      </div>
    </>
  );
}
