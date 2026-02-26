'use client'
import Navbar from "../components/Navbar"; // Path disesuaikan (naik satu folder)

export default function PagesLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex flex-col lg:flex-row min-h-screen">
            {/* Sidebar cuma ada di sini */}
            <Navbar />

            <main className="flex-1 p-4 lg:p-10">
                {children}
            </main>
        </div>
    );
}