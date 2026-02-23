'use client'
import { useState } from "react"
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const handleHamburgerClick = () => {
        setIsOpen(!isOpen);
    }

    const menuItems = [
        { icon: "/Graph 1.svg", label: "Dashboard", path: "/" },
        { icon: "/Chart.svg", label: "Pengeluaran", path: "/pengeluaran" },
        { icon: "/Pemasukan Icon.svg", label: "Pemasukan", path: "/pemasukan" },
        { icon: "/products.svg", label: "Products", path: "/products" },
        { icon: "/salesReport.svg", label: "Sales Report", path: "/sales-report" },
        { icon: "/messages.svg", label: "Messages", path: "/messages" },
        { icon: "/settings.svg", label: "Settings", path: "/settings" },
    ];

    return (
        <>
            <div className="flex justify-between align-middle">
                <div className="flex gap-4">
                    <button onClick={handleHamburgerClick}>
                        <img src="/hamburger.svg" alt="hamburger menu" />
                    </button>
                    <h1 className="font-semibold text-2xl">Dashboard</h1>
                </div>
                <img src="/notification.svg" alt="notification icon" width={25} height={25}/>
            </div>

            {/* --- SIDEBAR OVERLAY (Layar gelap pas sidebar buka) --- */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/20 z-[60] transition-opacity"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* --- SIDEBAR CONTAINER --- */}
            <div className={`fixed inset-y-0 left-0 w-72 bg-white z-[70] shadow-2xl transform transition-transform rounded-r-3xl duration-300 ease-in-out p-6 ${isOpen ? "translate-x-0" : "-translate-x-full"
                }`}>
                {/* Header Sidebar */}
                <div className="flex justify-between items-center mb-10">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-[#0A2041] rounded-lg" /> {/* Logo Dummy */}
                        <h2 className="font-bold text-xl text-[#151D48]">Recapp</h2>
                    </div>
                    <button onClick={() => setIsOpen(false)} className="text-zinc-400">
                        <span className="material-symbols-outlined">close</span>
                    </button>
                </div>

                {/* List Menu */}
                <nav className="flex flex-col gap-2">
                    {menuItems.map((item, index) => {
                        // CEK APAKAH ACTIVE
                        const isActive = pathname === item.path;

                        return (
                            <Link
                                href={item.path}
                                key={index}
                                onClick={() => setIsOpen(false)}
                                className={`flex items-center gap-4 p-4 rounded-xl transition-all group ${
                                    isActive 
                                    ? "bg-[#0A2041] text-white shadow-lg shadow-blue-900/20" // Style Active
                                    : "text-[#737791] hover:bg-[#F3F4F6] hover:text-[#0A2041]" // Style Inactive
                                }`}
                            >
                                <img 
                                    src={item.icon} 
                                    alt={item.label} 
                                    className={`${isActive ? "brightness-0 invert" : ""}`} // Bikin icon jadi putih kalau active
                                />
                                <span className={`text-sm ${isActive ? "font-semibold" : "font-normal"}`}>
                                    {item.label}
                                </span>
                            </Link>
                        );
                    })}
                </nav>

                {/* Footer Sidebar (Optional) */}
                <div className="absolute bottom-20 left-6 right-6">
                    <button className="flex items-center gap-4 p-3 w-full rounded-xl text-red-500 hover:bg-red-50 transition-colors">
                        <span className="material-symbols-outlined">logout</span>
                        <span className="font-medium text-sm">Logout</span>
                    </button>
                </div>
            </div>
        </>
    )
}