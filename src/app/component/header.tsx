"use client"
import { usePathname } from "next/navigation";
export const Header = () => {
    const pathName = usePathname();
    
    return (    
        <header>
            <h2 className="lg:text-2xl font-bold">Miguel Mangahas | 
                {
                    pathName === "/" ? " Technical Worksheet" :
                    
                    pathName === "/activity/a2" ? " Activity 2" : 
                    pathName === "/activity/a3" ? " Activity 3" : 

                    pathName === "/activity/a5" ? " Activity 5" : 
                    pathName === "/activity/a6" ? " Activity 6" : 
                    pathName === "/activity/a7" ? " Activity 7" : 
                    pathName === "/activity/a8" ? " Activity 8" : ""
                }

            </h2>
        </header>
    )

}