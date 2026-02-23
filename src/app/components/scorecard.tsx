'use client'
interface ScorecardProps{
    value: number;
    category: "Sales" | "Order" | "Sold" | "Customer";
    change: number;
};

const formatRupiah = (num: number) => {
    return new Intl.NumberFormat("id-ID").format(num);
};

const cardConfigs = {
    Sales:{
        icon: <img src="/sales.svg" alt="sales icon" />,
        bgColor: "bg-[#FFE2E5]",
        label: "Total Pemasukan",
        value: (props: ScorecardProps) => `Rp ${formatRupiah(props.value)}`
    },
    Order:{
        icon: <img src="/order.svg" alt="order icon" />,
        bgColor: "bg-[#FFF4DE]",
        label: "Total Pesanan",
        value: (props: ScorecardProps) => `Rp ${formatRupiah(props.value)}`
    },
    Sold:{
        icon: <img src="/sold.svg" alt="sold icon" />,
        bgColor: "bg-[#DCFCE7]",
        label: "Laba Bersih",
        value: (props: ScorecardProps) => `${props.value}`
    },
    Customer:{
        icon: <img src="/customer.svg" alt="customer icon" />,
        bgColor: "bg-[#F3E8FF]",
        label: "Total Transaksi",
        value: (props: ScorecardProps) => `${props.value}`
    },
}


export default function Scorecard(props: ScorecardProps){
    const config = cardConfigs[props.category];
    return(
        <div className={`max-w-dvw min-w-44 max-h-32 min-h-32 rounded-2xl ${config.bgColor} flex flex-col items-start p-4`}>
            <div>
                {config.icon}
            </div>
            <h1 className="text-[#151D48] text-xl font-semibold">{config.value(props)}</h1>
            <h1 className="text-[#151D48] text-sm font-medium">{config.label}</h1>
            <h1 className="text-[#4079ED] text-xs font-medium">+{props.change}% from yesterday</h1>
        </div>
    )
}