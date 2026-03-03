'use client';
import CustomDatePicker from "@/app/components/CustomDatePicker";
import SalesChart from "@/app/components/saleschart";
import Table from "@/app/components/table";
import Link from "next/link";
import { useState } from "react";

export default function Pemasukan() {
    const [activeRange, setActiveRange] = useState("Day");

    const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);

    const getBtnStyle = (range: string) =>
        `h-10 px-4 rounded-lg text-sm border-2 transition-all ${activeRange === range
            ? "bg-[#1BA488] text-white border-[#1BA488] shadow-md"
            : "text-[#1C1D21] border-[#ECECF2] hover:bg-zinc-50"
        }`;
    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-row justify-between items-center">
                <div className="flex flex-col">
                    <div className="text-lg font-semibold text-[#05004E]">
                        Data Pemasukan
                    </div>
                    <div className="text-xs font-normal text-[#737791]">
                        Expense Summary
                    </div>
                </div>
                <div>
                    <Link href="/pemasukan/input">
                        <button className="text-sm font-medium text-[#1BA488] px-1 py-2.5 rounded-lg border border-[#C3D3E2]" >+ Add New</button>
                    </Link>
                </div>
            </div>
            <div className="min-h-96 max-h-screen rounded-2xl bg-[#FFFFFF] border-2 border-[#EAECF0] flex flex-col p-4 ">
                <div className="flex flex-col gap-5">
                    <div className="flex gap-2 justify-center">
                        <button onClick={() => setActiveRange("Day")} className={getBtnStyle("Day")}>Day</button>
                        <button onClick={() => setActiveRange("Week")} className={getBtnStyle("Week")}>Week</button>
                        <button onClick={() => setActiveRange("Month")} className={getBtnStyle("Month")}>Month</button>
                        <CustomDatePicker onDateChange={(date) => setSelectedDate(date)} />
                    </div>
                    <div className="flex flex-col gap-1">
                        <h2 className="text-[#8181A5]">Total Expense</h2>
                        <h1 className="font-bold text-2xl text-[#A4201B]">Rp 159,498,791.00</h1>
                    </div>
                    <div>
                        <SalesChart />
                    </div>
                </div>
            </div>
            <div className="min-h-96 max-h-screen rounded-2xl bg-[#FFFFFF] border-2 border-[#EAECF0] flex flex-col p-4 gap-4">
                <div className="text-lg font-semibold text-black">
                    Data Pemasukan
                </div>
                <Table />
            </div>
        </div>
    )
}