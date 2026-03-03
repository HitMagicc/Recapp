"use client";
import { useRef, useState } from "react";

export default function Barang() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<Record<string, any> | null>(null);
  
  // Input Manual User
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [selectedType, setSelectedType] = useState("Bahan Baku");

  const fileInputRef = useRef<HTMLInputElement>(null);
  const BACKEND_URL = "http://192.168.0.113:8000"; 

  const handleSaveToSheets = async () => {
    if (!data) return;
    setLoading(true);
    try {
      // Kita gabungkan hasil scan AI dengan input manual user
      const payload = {
        ...data,
        selected_date: selectedDate,
        selected_type: selectedType
      };

      const response = await fetch(`${BACKEND_URL}/save`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      
      const result = await response.json();
      if (result.status === "success") {
        alert(`Berhasil masuk ke ${selectedType}!`);
        setData(null);
      }
    } catch (error) {
      alert("Gagal simpan. Cek terminal!");
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setLoading(true);
    const formData = new FormData();
    formData.append("file", file);
    try {
      const response = await fetch(`${BACKEND_URL}/scan`, { method: "POST", body: formData });
      const result = await response.json();
      setData(result);
    } catch (error) {
      alert("Gagal scan!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center flex-col justify-center bg-zinc-50 p-6 dark:bg-black text-black">
      <h1 className="text-3xl font-bold mb-8 dark:text-white">Input Inventory Mang Yana</h1>
      
      {/* FORM INPUT MANUAL */}
      <div className="bg-white p-6 rounded-3xl shadow-sm border border-zinc-200 mb-6 w-full max-w-sm flex flex-col gap-4">
        <div>
          <label className="text-xs font-bold text-zinc-400 uppercase">Tanggal Belanja</label>
          <input 
            type="date" 
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="w-full mt-1 p-3 bg-zinc-100 rounded-xl outline-none"
          />
        </div>
        <div>
          <label className="text-xs font-bold text-zinc-400 uppercase">Kategori Sheet</label>
          <select 
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="w-full mt-1 p-3 bg-zinc-100 rounded-xl outline-none"
          >
            <option value="Bahan Baku">Bahan Baku</option>
            <option value="Operasional">Operasional</option>
          </select>
        </div>
      </div>

      <input type="file" accept="image/*" capture="environment" className="hidden" ref={fileInputRef} onChange={handleFileChange} />

      <div className="flex flex-col gap-4 w-full max-w-sm">
        <button onClick={() => fileInputRef.current?.click()} disabled={loading} className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold shadow-lg active:scale-95 transition-all">
          {loading ? "Mikir..." : "📸 Scan Bon"}
        </button>

        {data && (
          <button onClick={handleSaveToSheets} disabled={loading} className="px-8 py-4 bg-green-600 text-white rounded-2xl font-bold shadow-lg animate-pulse">
            💾 Simpan ke {selectedType}
          </button>
        )}
      </div>

      {data && (
        <pre className="mt-8 p-4 bg-zinc-200 rounded-xl text-[10px] w-full max-w-sm overflow-auto max-h-40">
          {JSON.stringify(data, null, 2)}
        </pre>
      )}
    </div>
  );
}