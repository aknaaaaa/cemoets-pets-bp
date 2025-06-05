import { ShoppingCart } from "lucide-react";
import { Package } from "lucide-react";
import { ReceiptText } from "lucide-react";

export default function Layout() {
  return (
    <>
      <nav className="bg-white shadow-md pt-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 p-5">
            <div className="flex flex-col justify-center ml-6">
              {" "}
              {/* tambahkan ml-6 */}
              <h1 className="text-xxl font-bold text-gray-800 leading-tight">
                Cemoets Pets
              </h1>
              <p className="text-sm font-normal text-gray-800 -mt-1">
                Welcome, Budiyuwono
              </p>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <ReceiptText />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <Package />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <ShoppingCart />
              </a>
            </div>
          </div>
        </div>
      </nav>
      {/* Konten halaman lainnya */}
    </>
  );
}
