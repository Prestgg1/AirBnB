"use client"
import { useState } from 'react'
import { Menu, Search, Globe, User, LogOut, Settings, HelpCircle } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Image from 'next/image'
import { Link } from '@/i18n/routing'
import SearchForm from './SearchForm'
import { usePathname } from '@/i18n/routing'

export default function Navbar() {
  const [activeTab, setActiveTab] = useState("konaklama")
  const pathname = usePathname();
  return (
    <nav className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="md:hidden mr-2">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  <DropdownMenuItem>
                    Konaklama yerleri
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    Deneyimler
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              
              <Link href="/" className='flex items-center'>
              <Image
                className="h-8 w-auto"
                src="/img/pngkey.com-airbnb-logo-png-605967.png"
                alt="Airbnb"
                width={32}
                height={32}
              />
              <p className='ml-2 text-lg font-bold text-red-700 hover:text-black duration-300'>Airbnb</p>
              </Link>
            </div>
          
          </div>

          <div className="space-x-4 hidden md:flex">
        <Button
          variant={activeTab === "konaklama" ? "default" : "outline"}
          onClick={() => setActiveTab("konaklama")}
          className={`${activeTab === "konaklama" ? "bg-red-500 " : "text-black"}`}
        >
          Konaklama yerleri
        </Button>
        <Button
          
          variant={activeTab === "deneyimler" ? "default" : "outline"}
          onClick={() => setActiveTab("deneyimler")}
          className={`${activeTab === "deneyimler" ? "bg-red-500 " : "text-black"}`}
        >
          Deneyimler
            </Button>
          </div>
          <div className="flex items-center">
            <Button variant="ghost" size="sm" className="text-gray-900 hidden sm:block">
              Evinizi Airbnb'ye taşıyın
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="ml-3 text-gray-900">
                  <Globe className="h-6 w-6" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className='bg-white flex flex-col gap-4 p-4'>
                <DropdownMenuItem>
                  <Link href={pathname} locale="en" className="w-full">English</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href={pathname} locale="az" className="w-full">Azərbaycan</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="ml-3 text-gray-900">
                  <User className="h-6 w-6" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 bg-white">
                <DropdownMenuLabel>Hesabım</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profil</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Ayarlar</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <HelpCircle className="mr-2 h-4 w-4" />
                  <span>Yardım</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Çıxış</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
      <div className="border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex justify-center">
 {/*            <div className="w-full max-w-lg">
              <label htmlFor="search" className="sr-only">Search</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input
                  id="search"
                  name="search"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Search"
                  type="search"
                />
              </div>
            </div> */}
          </div>
          <SearchForm showCheckout={activeTab === "konaklama"} />
        </div>
      </div>
    </nav>
  )
}