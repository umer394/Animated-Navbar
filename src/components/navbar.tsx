import Link from "next/link";
import { RainbowButton } from "./magicui/rainbow-button";
import { Meteors } from "./magicui/meteors";
import { Menu } from "lucide-react";
import {
    Sheet,
   
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
   
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <div className="relative h-[70px] md:h-[80px] w-full  overflow-hidden rounded-lg border">
        <Meteors number={30} />
        <span className="bg-gradient-to-b from-black to-gray-300/80  dark:from-white dark:to-slate-900/10">
    <nav className="flex justify-between items-center p-4 lg:mx-8 xl:max-w-[1200px] xl:mx-auto">
        <h1 className="text-black font-bold text-2xl">Animated</h1>
        <ul className="space-x-10 hidden md:block">
            <Link href={""} className="text-gray-600 hover:text-black">Home</Link>
            <Link href={""} className="text-gray-600 hover:text-black">About</Link>
            <Link href={""} className="text-gray-600 hover:text-black">Blog</Link>
            <Link href={""} className="text-gray-600 hover:text-black">Contact</Link>
        </ul>
        <div>
        <RainbowButton className="hidden md:block">Animated Button</RainbowButton>
        </div>
        <div className="block md:hidden">
        <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline"><Menu/></Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
         
          <SheetDescription className="pt-10">
          <ul className="flex text-lg flex-col gap-y-3">
            <Link href={""} className="text-gray-600  hover:text-black">Home</Link>
            <Link href={""} className="text-gray-600 hover:text-black">About</Link>
            <Link href={""} className="text-gray-600 hover:text-black">Blog</Link>
            <Link href={""} className="text-gray-600 hover:text-black">Contact</Link>
        </ul>
          </SheetDescription>
        </SheetHeader>
        
        <SheetFooter>
          <RainbowButton className="mt-8 ">Button</RainbowButton>
        </SheetFooter>
      </SheetContent>
    </Sheet>
        </div>
    </nav>
    </span>
    </div>
  );
}
