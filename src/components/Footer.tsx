import { FacebookIcon, InstagramIcon, TwitterIcon } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Destek</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Yardım Merkezi</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">AirCover</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Ayrımcılık yapmama</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Engellilik desteği</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">İptal seçenekleri</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Semtinizdeki sorunu bildirin</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Ev sahipliği</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Evinizi Airbnb'ye taşıyın</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Ev sahipleri için AirCover</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Ev sahipliği kaynakları</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Topluluk forumu</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Sorumlu ev sahipliği</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Ücretsiz bir ev sahipliği dersine katılın</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Airbnb</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Basın odası</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Yeni özellikler</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Kariyer</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Yatırımcılar</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Airbnb.org acil konaklamaları</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center">
          <div className="text-sm text-gray-500">
            © 2024 Airbnb, Inc. · <a href="#" className="hover:underline">Gizlilik</a> · <a href="#" className="hover:underline">Şartlar</a> · <a href="#" className="hover:underline">Site haritası</a>
          </div>
          <div className="mt-4 sm:mt-0 flex items-center space-x-4">
            <button className="text-gray-500 hover:text-gray-900">
              <span className="sr-only">Language</span>
              🌐 Türkçe (TR)
            </button>
            <button className="text-gray-500 hover:text-gray-900">
              <span className="sr-only">Currency</span>
              ₺ TRY
            </button>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Facebook</span>
              <FacebookIcon className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Twitter</span>
              <TwitterIcon className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Instagram</span>
              <InstagramIcon className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}