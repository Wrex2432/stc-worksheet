"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
export const Footer = () => {
    const pathName = usePathname();
    const handleLink = () => {
        return ( 
            pathName === "/activity/a2" ? "https://github.com/Wrex2432/stc-worksheet/tree/main/src/app/activity/a2" : 
            pathName === "/activity/a3" ? "https://github.com/Wrex2432/stc-worksheet/tree/main/src/app/activity/a3" : 
            pathName === "/activity/a4" ? "https://github.com/Wrex2432/stc-worksheet/tree/main/src/app/activity/a4" : 
            pathName === "/activity/a5" ? "https://github.com/Wrex2432/stc-worksheet/tree/main/src/app/activity/a5" : 
            pathName === "/activity/a6" ? "https://github.com/Wrex2432/stc-worksheet/tree/main/src/app/activity/a6" : 
            pathName === "/activity/a7" ? "/" : 
            pathName === "/activity/a8" ? "https://github.com/Wrex2432/stc-worksheet/tree/main/src/app/activity/a8" : "https://github.com/Wrex2432/stc-worksheet"
        )

    }
    return (    
        <footer>
            {
                pathName === "/" ? 
                <Link href="https://github.com/Wrex2432/stc-worksheet" target="_blank" className="button-style">
                    <i className='bx bxl-github'></i> 
                </Link>
                : 
                <>
                    <Link href="/" className="button-style">
                        <i className="bx bx-home"></i>
                    </Link>
                    <Link href={handleLink()} target="_blank" className="button-style">
                        <i className='bx bxl-github'></i> 
                    </Link>
                </>
                
            }
        </footer>
    )
}
