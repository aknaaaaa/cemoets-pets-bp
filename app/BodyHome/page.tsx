import Image from "next/image";

export default function BodyHome() {
  // Data produk contoh
  const products = [
    {
      id: 1,
      name: "Whiskas",
      price: "Rp 20.000",
      originalPrice: "Rp 25.000",
      image: "/image/W1.jpg",
      rating: 4.8,
      reviews: 234,
      discount: "31%",
      badge: "Best Seller",
    },
    {
      id: 2,
      name: "Whiskas",
      price: "Rp 20.000",
      originalPrice: "Rp 25.000",
      image: "/image/W1.jpg",
      rating: 4.9,
      reviews: 156,
      discount: "20%",
      badge: "New",
    },
    {
      id: 3,
      name: "Whiskas",
      price: "Rp 20.000",
      originalPrice: "Rp 25.000",
      image: "/image/W1.jpg",
      rating: 4.7,
      reviews: 89,
      discount: "32%",
      badge: "Hot Deal",
    },
    {
      id: 4,
      name: "Whiskas",
      price: "Rp 20.000",
      originalPrice: "Rp 25.000",
      image: "/image/W1.jpg",
      rating: 4.6,
      reviews: 201,
      discount: "29%",
      badge: "Limited",
    },
    {
      id: 5,
      name: "Whiskas",
      price: "Rp 20.000",
      originalPrice: "Rp 25.000",
      image: "/image/W1.jpg",
      rating: 4.8,
      reviews: 145,
      discount: "27%",
      badge: "Featured",
    },
    {
      id: 6,
      name: "Whiskas",
      price: "Rp 20.000",
      originalPrice: "Rp 25.000",
      image: "/image/W1.jpg",
      rating: 4.9,
      reviews: 78,
      discount: "24%",
      badge: "Pro Choice",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group cursor-pointer"
          >
            {/* Product Image */}
            <div className="relative overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={300}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />

              {/* Badge */}
              <div className="absolute top-2 left-2">
                <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                  {product.badge}
                </span>
              </div>

              {/* Discount Badge */}
              <div className="absolute top-2 right-2">
                <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                  -{product.discount}
                </span>
              </div>

              {/* Quick Actions */}
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <button className="bg-white text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                  Lihat Detail
                </button>
              </div>
            </div>

            {/* Product Info */}
            <div className="p-4">
              {/* Product Name */}
              <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 text-sm">
                {product.name}
              </h3>

              {/* Rating */}
              <div className="flex items-center mb-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-3 h-3 ${
                        i < Math.floor(product.rating)
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-xs text-gray-500 ml-1">
                  ({product.reviews})
                </span>
              </div>

              {/* Price */}
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-bold text-red-600">
                    {product.price}
                  </span>
                </div>
                <div className="text-sm text-gray-500 line-through">
                  {product.originalPrice}
                </div>
              </div>

              {/* Add to Cart Button */}
              <button className="w-full mt-3 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors duration-200 text-sm">
                + Keranjang
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      <div className="text-center mt-8">
        <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-semibold transition-colors duration-200">
          Lihat Produk Lainnya
        </button>
      </div>
    </div>
  );
}
