import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/SideBar";
import Image from "next/image";
import { TbCardsFilled } from "react-icons/tb";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = { firstName: 'Mordecai', lastName: 'Chingolo' };

  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={loggedIn} />

      <div className="flex size-full flex-col">
        <div className="root-layout">
        <TbCardsFilled size={30} className='text-gray-800'/>
          <div>
            <MobileNav user={loggedIn} />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}