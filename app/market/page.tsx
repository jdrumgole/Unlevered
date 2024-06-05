/* eslint-disable prettier/prettier */
import { title } from "@/components/primitives";
import TradingViewWidget from '../../components/TradingViewWidget'
import Stock from '../../components/Stock'

export default function PricingPage() {
  return (
    <>
     <h1 className={title()}>Market</h1>
    <div className="flex items-center justify-between h-full w-full p-4 rounded-lg bg-slate-100">
      <div className="flex flex-col w-[30%] h-full pr-2 rounded-md bg-slate-500 bg-opacity-20 ">
        <Stock/>
      </div>
        
      
         <TradingViewWidget />  
      
    </div>
    </>
    
      
      
    
  );
}