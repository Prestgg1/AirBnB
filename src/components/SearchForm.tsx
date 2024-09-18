
import { CalendarIcon, MapPinIcon, UsersIcon,Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"




export default function SearchForm({ showCheckout }: { showCheckout: boolean }) {
    return (
      <div className="flex items-center space-x-2 bg-white rounded-lg shadow-md p-2">
        <div className="flex-1">
          <div className="flex items-center">
            <MapPinIcon className="h-5 w-5 text-gray-400 mr-2" />
            <Input type="text" placeholder="Gidilecek yerleri arayın" className="border-none" />
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <div className="flex items-center">
            <CalendarIcon className="h-5 w-5 text-gray-400 mr-2" />
            <Input type="date" placeholder="Tarih ekleyin" className="border-none text-black" />
          </div>
          {showCheckout && (
            <div className="flex items-center">
              <CalendarIcon className="h-5 w-5 text-gray-400 mr-2" />
              <Input type="date" placeholder="Çıkış tarihi" className="border-none text-black" />
            </div>
          )}
          <div className="flex items-center">
            <UsersIcon className="h-5 w-5 text-gray-400 mr-2" />
            <Input type="number" placeholder="Misafir ekleyin" className="text-black border-none" min="1" />
          </div>
        </div>
        <Button type="submit" className="bg-primary text-primary-foreground rounded-full font-bold">
          <Search className="h-5 w-5 text-primary-foreground" />
        </Button>
      </div>
    )
  }