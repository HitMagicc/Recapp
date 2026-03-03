'use client'
import { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import 'react-day-picker/dist/style.css'; 

export default function CustomDatePicker({ onDateChange }: { onDateChange: (d: string) => void }) {
    const [tempSelected, setTempSelected] = useState<Date>();
    const [isOpen, setIsOpen] = useState(false);

    const handleSelect = (date: Date | undefined) => {
        setTempSelected(date);
    };

    // Fungsi pas tombol Simpan diklik
    const handleSave = () => {
        if (tempSelected) {
            onDateChange(format(tempSelected, 'yyyy-MM-dd'));
            setIsOpen(false); 
        } else {
            alert("Pilih tanggal dulu, By!");
        }
    };

    return (
        <div className="relative inline-block">
            {/* Tombol Kalender */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="h-10 w-10 text-[#1C1D21] rounded-lg border-2 border-[#ECECF2] flex items-center justify-center hover:bg-zinc-50 active:scale-95 transition-all"
            >
                <span className="material-symbols-outlined text-[20px]">calendar_month</span>
            </button>

            {/* Dropdown Kalender */}
            {isOpen && (
                <>
                    {/* Overlay transparan buat nutup kalender pas klik di luar (tanpa blur/warna) */}
                    <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />

                    <div className="absolute left-1/2 -translate-x-9/12 mt-2 z-50 bg-white border border-[#EAECF0] p-4 rounded-2xl shadow-2xl animate-in fade-in zoom-in-95 duration-200 min-w-max">
                        <style>{`
                            .rdp-day{
                                color:#7C86A2;
                            }
                            .rdp-day_selected { 
                                background-color: #1BA488 !important; 
                                border-radius: 50%;
                                color: white;
                            }
                            .rdp-day_button {
                                border: none !important;
                            }
                            .rdp-selected { 
                                background-color: #1BA488 !important; 
                                border-radius: 100%;
                                color: white;
                            }
                            .rdp-button:hover:not([disabled]):not(.rdp-day_selected) {
                                background-color: #DCFCE7 !important;
                                color: #1BA488;
                            }
                            .rdp-chevron{
                                fill: #0A2041 !important;
                            }
                            .rdp-head_cell {
                                font-size: 10px;
                                text-transform: uppercase;
                                color: #737791;
                            }
                            .rdp-today{
                                color: #1BA488 !important;
                            }
                            .rdp-today.rdp-selected{
                                color: white !important;
                            }
                            .rdp-caption_label {
                                font-size: 14px;
                                font-weight: 600;
                                color: #151D48;
                            }
                        `}</style>
                        <DayPicker
                            mode="single"
                            selected={tempSelected}
                            onSelect={handleSelect}
                        />
                        <div className="mt-4 flex flex-col gap-2">
                            <button 
                                onClick={handleSave}
                                className="w-full py-3 bg-[#0A2041] text-white rounded-xl font-bold text-sm active:scale-95 transition-transform shadow-lg shadow-green-100"
                            >
                                Save
                            </button>
                            <button 
                                onClick={() => setIsOpen(false)}
                                className="w-full py-2 text-zinc-400 text-xs font-medium"
                            >
                                Batal
                            </button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}