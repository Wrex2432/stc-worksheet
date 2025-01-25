"use client"
import { usePathname } from "next/navigation";
export const Filler = () => {
    const pathName = usePathname();
    return (    
        <div className="filler"></div>
    )
}