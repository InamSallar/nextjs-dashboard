import React from "react";
import SideNav from "@/app/ui/dashboard/sidenav"

const DashboardLayout = ({children}: {
    children: React.ReactNode
}) => {
    return (
        <div className="flex flex-col h-screen md:flex-row md:overflow-hidden">
            <div className="w-full flex-none md:w-64">
                <SideNav/>
            </div>
            <dvi className="flex-grow p-6 md:overflow-y-auto md:p-12">
                {children}
            </dvi>
        </div>
    )
}


export default DashboardLayout