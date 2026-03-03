'use client'
import { useState } from "react"
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    

    const menuItems = [
        { icon: "/Graph 1.svg", label: "Dashboard", path: "/" },
        { icon: "/Chart.svg", label: "Pengeluaran", path: "/pengeluaran" },
        { icon: "/Pemasukan Icon.svg", label: "Pemasukan", path: "/pemasukan" },
        { icon: "/products.svg", label: "Products", path: "/products" },
        { icon: "/salesReport.svg", label: "Sales Report", path: "/sales-report" },
        { icon: "/messages.svg", label: "Messages", path: "/messages" },
        { icon: "/settings.svg", label: "Settings", path: "/settings" },
        { icon: "/Sign Out Icon.svg", label: "Sign Out", path: "/signout" },
    ];

    const currentItem = menuItems.find(item => item.path === pathname) || menuItems[0];
    return (
        <>
            {/* TOP NAVBAR (Hanya muncul di Mobile) */}
            <div className="flex justify-between items-center lg:hidden px-4 pt-4">
                <div className="flex gap-4">
                    <button onClick={() => setIsOpen(true)}>
                        <img src="/hamburger.svg" alt="hamburger menu" />
                    </button>
                    <h1 className="font-semibold text-2xl text-[#0A2041]">{currentItem.label}</h1>
                </div>
                <img src="/notification.svg" alt="notification icon" width={25} height={25}/>
            </div>

            {/* --- SIDEBAR OVERLAY (Hanya muncul di Mobile saat terbuka) --- */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/20 z-[60] lg:hidden transition-opacity"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* --- SIDEBAR CONTAINER --- */}
            <div className={`fixed inset-y-0 left-0 w-72 bg-white z-[70] shadow-2xl lg:shadow-none border-r border-[#EAECF0] transform transition-transform duration-300 ease-in-out p-6 
                ${isOpen ? "translate-x-0" : "-translate-x-full"} 
                lg:translate-x-0 lg:static lg:h-screen`} 
            >
                {/* Header Sidebar */}
                <div className="flex justify-between items-center mb-10">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-[#0A2041] rounded-lg" />
                        <h2 className="font-bold text-xl text-[#151D48]">Recapp</h2>
                    </div>
                    {/* Tombol Close cuma ada di Mobile */}
                    <button onClick={() => setIsOpen(false)} className="lg:hidden text-zinc-400">
                        <span className="material-symbols-outlined">close</span>
                    </button>
                </div>

                {/* List Menu */}
                <nav className="flex flex-col gap-2">
                    {menuItems.map((item, index) => {
                        const isActive = pathname === item.path;
                        return (
                            <Link
                                href={item.path}
                                key={index}
                                onClick={() => setIsOpen(false)}
                                className={`flex items-center gap-4 p-4 rounded-xl transition-all group ${
                                    isActive 
                                    ? "bg-[#0A2041] text-white shadow-lg shadow-blue-900/20" 
                                    : "text-[#737791] hover:bg-[#F3F4F6] hover:text-[#0A2041]"
                                }`}
                            >
                                <img 
                                    src={item.icon} 
                                    alt={item.label} 
                                    className={`${isActive ? "brightness-0 invert" : ""}`}
                                />
                                <span className={`text-sm ${isActive ? "font-semibold" : "font-normal"}`}>
                                    {item.label}
                                </span>
                            </Link>
                        );
                    })}
                </nav>
            </div>
        </>
    )
}