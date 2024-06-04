/* eslint-disable prettier/prettier */
import { title } from "@/components/primitives";
import TradingViewWidget from '../../components/TradingViewWidget'
import Stock from '../../components/Stock'

export default function PricingPage() {
  return (
    <>
    <div className="flex items-center justify-between h-full w-full p-4">
      <div className="flex flex-col w-[30%] h-full pr-2 ">
        <Stock/>
      </div>
        
      <div className="flex flex-col w-[70%] h-full pl-3">
         <TradingViewWidget />  
      </div>
    </div>
    </>
    
      
      
    
  );
}