'use client'
import Table from "@/app/components/table";
import Link from "next/link";
import { useState } from "react";

export default function InputPengeluaran() {
    const [modalNewOpen, setModalNewOpen] = useState(false);
    const [modalAttachmentOpen, setModalAttachmentOpen] = useState(false);
    return (
        <div>
            <div className="bg-[#FCFCFC] shadow-lg w-full h-16 justify-between px-5 items-center flex">
                <Link
                    href="/pengeluaran"
                    className="w-10 h-10 flex items-center justify-center hover:bg-zinc-100 rounded-full transition-all active:scale-90"
                >
                    <span className="material-symbols-outlined">
                        close
                    </span>
                </Link>
                <h1>
                    Input Data Pengeluaran
                </h1>
                <span className="material-symbols-outlined text-[#FCFCFC] w-10 h-10 flex items-center justify-center">
                    close
                </span>
            </div>
            <div className="flex-1 p-4 lg:p-10">
                <div className="flex flex-col gap-3">
                    <div className="flex flex-col gap-1.5">
                        <h3 className="text-sm font-semibold">Jenis Pengeluaran</h3>
                        <select name="" id="" className="w-full rounded-xl border border-[#D0D5DD] px-5 py-3">
                            <option value="">Bahan Baku</option>
                            <option value="">Operasional</option>
                        </select>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-row gap-2 justify-between align-middle">
                            <button onClick={() => setModalAttachmentOpen(true)} className="border w-full flex justify-center py-2 text-[#1BA488] border-[#C3D3E2] rounded-xl items-center">
                                <span className="material-symbols-outlined">
                                    attachment
                                </span>
                                Attachment
                            </button>
                            <button onClick={() => setModalNewOpen(true)} className="border w-full flex justify-center py-2 text-[#1BA488] border-[#C3D3E2] rounded-xl items-center">
                                <span className="material-symbols-outlined">
                                    add
                                </span>
                                Add New
                            </button>
                        </div>
                        <Table />
                    </div>
                    <div className="flex flex-row gap-2 justify-between align-middle">
                        <Link href="/pengeluaran" className="border w-full flex justify-center py-1 text-black border-[#0A2041] rounded-xl items-center">
                            Cancel
                        </Link>
                        <button className="border w-full flex justify-center py-1 text-white bg-[#0A2041] border-[#0A2041] rounded-xl items-center">
                            Save
                        </button>
                    </div>
                </div>
            </div>
            {modalNewOpen && (
                <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
                    {/* Backdrop Transparan Gelap */}
                    <div
                        className="absolute inset-0 bg-black/60 animate-in fade-in duration-200"
                        onClick={() => setModalNewOpen(false)}
                    />

                    {/* Konten Modal */}
                    <div className="relative bg-white w-full max-w-md rounded-4xl p-8 shadow-2xl animate-in zoom-in-95 duration-200">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl font-bold text-[#151D48]">Tambah Item</h2>
                            <button onClick={() => setModalNewOpen(false)} className="text-zinc-400">
                                <span className="material-symbols-outlined">close</span>
                            </button>
                        </div>

                        <div className="flex flex-col gap-4">
                            <div className="flex flex-col gap-1.5">
                                <label className="text-sm font-semibold text-[#737791]">Category</label>
                                <select className="w-full border border-[#D0D5DD] rounded-xl px-4 py-3 outline-none focus:border-[#0A2041]">
                                    <option value="">Ayam</option>
                                    <option value="">Sapi</option>
                                    <option value="">Kambing</option>
                                </select>
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label className="text-sm font-semibold text-[#737791]">Item</label>
                                <select className="w-full border border-[#D0D5DD] rounded-xl px-4 py-3 outline-none focus:border-[#0A2041]">
                                    <option value="">Ayam Broiler</option>
                                    <option value="">Ayam Kampung</option>
                                    <option value="">Daging Sapi</option>
                                    <option value="">Daging Kambing</option>
                                </select>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-sm font-semibold text-[#737791]">Jumlah (Kg)</label>
                                    <input type="number" placeholder="0" className="w-full border border-[#D0D5DD] rounded-xl px-4 py-3 outline-none" />
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-sm font-semibold text-[#737791]">Harga Satuan</label>
                                    <input type="number" placeholder="Rp" className="w-full border border-[#D0D5DD] rounded-xl px-4 py-3 outline-none" />
                                </div>
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <label className="text-sm font-semibold text-[#737791]">Jumlah</label>
                                <input type="number" placeholder="0" className="w-full border border-[#D0D5DD] bg-[#EDEEF0] rounded-xl px-4 py-3 outline-none" />
                            </div>

                            <button
                                onClick={() => setModalNewOpen(false)}
                                className="w-full bg-[#0A2041] text-white py-4 rounded-2xl font-bold mt-4 shadow-lg active:scale-95 transition-all"
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            )}
            {modalAttachmentOpen && (
                <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
                    <div
                        className="absolute inset-0 bg-black/60 animate-in fade-in duration-200"
                        onClick={() => setModalAttachmentOpen(false)}
                    />
                    <div className="relative bg-white w-full max-w-md rounded-4xl p-8 shadow-2xl animate-in zoom-in-95 duration-200">
                        <div className="flex justify-between items-center mb-2">
                            <h2 className="text-xl font-bold text-[#151D48]">Select Document Source</h2>
                            <button onClick={() => setModalAttachmentOpen(false)} className="text-zinc-400">
                                <span className="material-symbols-outlined">close</span>
                            </button>
                        </div>

                        <p className="text-sm font-normal text-[#7A7A7A] text-center">Please select a method to add a new document</p>

                        <div className="flex flex-col items-center">
                            <button className="w-full bg-[#E6FFFA] text-black py-3 rounded-xl font-bold mt-4 shadow-lg active:scale-95 transition-all border border-[#D0D5DD]">
                                <div className="flex gap-3">
                                    <div className="p-3 bg-[#78D9C5] flex items-center justify-center rounded-lg ml-3">
                                        <span className="material-symbols-outlined">
                                            photo_camera
                                        </span>
                                    </div>
                                    <div className="flex flex-col text-left justify-center">
                                        <h3 className="text-sm font-medium">
                                            Scan Document
                                        </h3>
                                        <h5 className="text-[8px] font-normal text-[#7A7A7A]">
                                            Please select a method to add a new document.
                                        </h5>
                                    </div>
                                </div>
                            </button>
                            <button className="w-full  text-black py-3 rounded-xl font-bold mt-4 shadow-lg active:scale-95 transition-all border border-[#D0D5DD]">
                                <div className="flex gap-3">
                                    <div className="p-3 bg-[#F5F5F5] flex items-center justify-center rounded-lg ml-3">
                                        <span className="material-symbols-outlined">
                                            upload_file
                                        </span>
                                    </div>
                                    <div className="flex flex-col text-left justify-center">
                                        <h3 className="text-sm font-medium">
                                            Upload Files
                                        </h3>
                                        <h5 className="text-[8px] font-normal text-[#7A7A7A]">
                                            Select PDF or Image file from your phone.
                                        </h5>
                                    </div>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}