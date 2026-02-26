'use client'
import { useState } from "react";
import CustomDatePicker from "./CustomDatePicker";

export default function Table() {
    const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 2;
    const dataInventory = [
        { id: 1, category: "Sayuran", item: "Wortel", kg: 5, price: 12000, total: 60000 },
        { id: 2, category: "Daging", item: "Ayam Fillet", kg: 2, price: 45000, total: 90000 },
        { id: 3, category: "Bumbu", item: "Bawang Merah", kg: 1.5, price: 30000, total: 45000 },
    ];
    const filteredData = dataInventory.filter(data => 
        data.item.toLowerCase().includes(searchQuery.toLowerCase()) ||
        data.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // 3. Logika Pagination
    const totalPages = Math.ceil(filteredData.length / rowsPerPage);
    const startIndex = (currentPage - 1) * rowsPerPage;
    const currentData = filteredData.slice(startIndex, startIndex + rowsPerPage);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
        setCurrentPage(1); // Reset ke halaman 1 tiap kali nyari
    };
    return (
        <div className="flex flex-col">
            <div className="flex gap-2">
                {/* Search Input Container */}
                <div className="relative flex items-center">
                    {/* Icon Search */}
                    <span className="material-symbols-outlined absolute left-3 text-zinc-400 text-[20px] pointer-events-none">
                        search
                    </span>

                    {/* Input Field - Kasih padding kiri (pl-10) biar teks gak tabrakan sama icon */}
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-32 lg:w-64 h-10 pl-10 border-[#E7E7E7] bg-[#F9FBFF] border rounded-lg text-sm focus:outline-none focus:border-[#0A2041] transition-all"
                    />
                </div>

                <select name="sort" id="sort" className="h-10 border-[#E7E7E7] bg-[#F9FBFF] border rounded-lg px-2 text-sm text-[#737791]">
                    <option value="new">Newest</option>
                    <option value="old">Oldest</option>
                </select>

                <CustomDatePicker onDateChange={(date) => setSelectedDate(date)} />
            </div>
            <div className="w-full overflow-x-auto rounded-xl ">
                <table className="w-full text-left border-collapse">
                    <thead className="border-b border-[#EEEEEE]">
                        <tr>
                            <th className="px-6 py-4 text-sm font-semibold text-[#B5B7C0]">Category</th>
                            <th className="px-6 py-4 text-sm font-semibold text-[#B5B7C0]">Item</th>
                            <th className="px-6 py-4 text-sm font-semibold text-[#B5B7C0]">Kg</th>
                            <th className="px-6 py-4 text-sm font-semibold text-[#B5B7C0]">Harga Satuan</th>
                            <th className="px-6 py-4 text-sm font-semibold text-[#B5B7C0]">Jumlah</th>
                            <th className="px-6 py-4 text-sm font-semibold text-[#B5B7C0]">Aksi</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-[#EEEEEE] border-b border-[#C3D3E2]/50">
                        {dataInventory.map((data) => (
                            <tr key={data.id} className="hover:bg-zinc-50 transition-colors">
                                <td className="px-6 py-4 text-sm text-[#151D48] font-medium">{data.category}</td>
                                <td className="px-6 py-4 text-sm text-[#737791]">{data.item}</td>
                                <td className="px-6 py-4 text-sm text-[#737791]">{data.kg} Kg</td>
                                <td className="px-6 py-4 text-sm text-[#737791]">Rp {data.price.toLocaleString('id-ID')}</td>
                                <td className="px-6 py-4 text-sm text-[#1BA488] font-bold">Rp {data.total.toLocaleString('id-ID')}</td>
                                <td className="px-6 py-4">
                                    <div className="flex gap-2">
                                        <button className="text-sm font-medium text-[#1BA488] px-2 py-1 rounded-lg border border-[#C3D3E2]">Edit</button>
                                        <button className="text-sm font-medium text-[#A4201B] px-2 py-1 rounded-lg border border-[#C3D3E2]">Delete</button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="flex flex-col lg:flex-row justify-between items-center gap-4 mt-2">
                <p className="text-sm text-[#B5B7C0] font-medium">
                    Showing {startIndex + 1} to {Math.min(startIndex + rowsPerPage, filteredData.length)} of {filteredData.length} entries
                </p>
                
                <div className="flex items-center gap-2">
                    <button 
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        className="px-3 py-1 rounded-lg bg-[#F5F5F5] text-[#404B7C] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-100"
                    >
                        &lt;
                    </button>
                    
                    {[...Array(totalPages)].map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentPage(i + 1)}
                            className={`w-8 h-8 flex items-center justify-center rounded-lg text-xs font-bold transition-all ${
                                currentPage === i + 1 
                                ? "bg-[#5932EA] text-white" 
                                : "bg-[#F5F5F5] text-[#404B7C] border-[#EEEEEE] border hover:bg-zinc-200"
                            }`}
                        >
                            {i + 1}
                        </button>
                    ))}

                    <button 
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        className="px-3 py-1 rounded-lg bg-[#F5F5F5] text-[#404B7C] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-100"
                    >
                        &gt;
                    </button>
                </div>
            </div>
        </div>
    )
}