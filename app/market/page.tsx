import { title } from "@/components/primitives";
import TradingViewWidget from "../../components/TradingViewWidget";
import Stock from "../../components/Stock";
import Applelogo from "../../assets/applelogo.png";

export default function PricingPage() {
  return (
    <div>
      <div className="flex flex-col pb-6 w-[100%] items-center h-full   bg-slate-500 bg-opacity-0" >
        <span className="text-7xl ">Market</span>
      </div>

      <div className="flex items-center justify-between h-full w-full py-6 rounded-lg bg-slate-100 bg-opacity-0" >
        <Stock />
        <TradingViewWidget />
      </div>
    </div>
  );
}
