import { Metadata } from "next";
import '@/app/globals.css'
import Header from "@/components/Header";
import Foooter from "@/components/Foooter";
import Display from "@/components/Display";

export const metadata: Metadata = {
  title: {
    default: "Gcfree",
    template: "%s - Gcfree"
  },
  description: "Gcfree Is a Free Gift Card Provider"
}



const layout = ({ children } : any) => {
  return (
    <html lang="en" suppressHydrationWarning={false} className="bg-gray-100">
      <body>
        {/* <Header/> */}
        <Display/>
        {children}
        {/* <Foooter/> */}
      </body>
    </html>
  )
}

export default layout
