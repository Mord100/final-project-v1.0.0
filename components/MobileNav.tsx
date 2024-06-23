'use client'

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { sidebarLinks } from "@/constants"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { TbCardsFilled } from "react-icons/tb";
import { HiMenuAlt3 } from "react-icons/hi";

const MobileNav = ({ user }: MobileNavProps) => {
  const pathname = usePathname();

  return (
    <section className="w-fulll max-w-[264px]">
      <Sheet>
        <SheetTrigger>
        <HiMenuAlt3 size={30} className="text-gray-900" />
        </SheetTrigger>
        <SheetContent side="left" className="border-none bg-white">
          <Link href="/" className="cursor-pointer border-b-2 pb-4 flex items-center gap-1 px-4">
          <TbCardsFilled size={30} className='text-gray-900'/>
            <h1 className="text-26  font-bold text-gray-900">Justbanking</h1>
          </Link>
          <div className="mobilenav-sheet">
            <SheetClose asChild>
              <nav className="flex h-full flex-col gap-6 pt-10 text-white">
                  {sidebarLinks.map((item) => {
                const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`)

                return (
                  <SheetClose asChild key={item.route}>
                    <Link href={item.route} key={item.label}
                      className={cn('mobilenav-sheet_close w-full', { 'bg-gray-900': isActive })}
                    >
                        <Image 
                          src={item.imgURL}
                          alt={item.label}
                          width={20}
                          height={20}
                          className={cn({
                            'brightness-[3] invert-0': isActive
                          })}
                        />
                      <p className={cn("text-16 font-semibold text-gray-900", { "text-white": isActive })}>
                        {item.label}
                      </p>
                    </Link>
                  </SheetClose>
                )
              })}

              USER
              </nav>
            </SheetClose>

            FOOTER
          </div>
        </SheetContent>
      </Sheet>
    </section>
  )
}

export default MobileNav