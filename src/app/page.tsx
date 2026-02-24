'use client';
import { useState } from "react";
import SalesChart from "./components/saleschart";
import Scorecard from "./components/scorecard";
import CustomDatePicker from "./components/CustomDatePicker";
import Navbar from "./components/Navbar";

export default function Home() {
  // 1. State buat filter waktu
  const [activeRange, setActiveRange] = useState("Day");

  // 2. State buat tanggal
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);

  // Helper styling buat button aktif
  const getBtnStyle = (range: string) =>
    `h-10 px-4 rounded-lg text-sm border-2 transition-all ${activeRange === range
      ? "bg-[#1BA488] text-white border-[#1BA488] shadow-md"
      : "text-[#1C1D21] border-[#ECECF2] hover:bg-zinc-50"
    }`;
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-4">
        <div>
          <h1 className="text-lg text-[#05004E] font-semibold">Today's Sales</h1>
          <h2 className="text-xs text-[#737791] ">Sales Summary</h2>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <Scorecard
            value={1000000}
            category="Sales"
            change={8}
          />
          <Scorecard
            value={1000000}
            category="Order"
            change={8}
          />
          <Scorecard
            value={20}
            category="Sold"
            change={8}
          />
          <Scorecard
            value={10}
            category="Customer"
            change={8}
          />
        </div>
      </div>
      <div className="min-h-96 max-h-screen rounded-2xl bg-[#FFFFFF] border-2 border-[#EAECF0] flex flex-col p-4 ">
        <div className="flex flex-col gap-5">
          <h1 className="text-lg font-bold">Your Sales</h1>
          <div className="flex gap-2 ">
            <button onClick={() => setActiveRange("Day")} className={getBtnStyle("Day")}>Day</button>
            <button onClick={() => setActiveRange("Week")} className={getBtnStyle("Week")}>Week</button>
            <button onClick={() => setActiveRange("Month")} className={getBtnStyle("Month")}>Month</button>
            <CustomDatePicker onDateChange={(date) => setSelectedDate(date)} />
          </div>
          <div className="flex flex-col gap-1">
            <h2>Total Income</h2>
            <h1 className="font-bold text-2xl text-[#1BA488]">Rp 159,498,791.00</h1>
          </div>
          <div>
            <SalesChart />
          </div>
        </div>
      </div>
    </div>
  )
}