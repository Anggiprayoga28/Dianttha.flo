import React, { useState, useEffect } from "react";
import {
  ShoppingCart,
  Heart,
  Star,
  Plus,
  Minus,
  Search,
  Filter,
  Phone,
  Mail,
  MapPin,
  Clock,
  Award,
  Users,
  Truck,
  Shield,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Quote,
  Menu,
  X,
} from "lucide-react";

// Mock Database
const mockProducts = [
  {
    id: 1,
    name: "Papan Akrilik Box Cream",
    price: 150000,
    images: ["/akrilik-box-cream.png"],
    category: "akrilik",
    rating: 4.8,
    reviews: 24,
    description:
      "Papan bunga akrilik ukuran 45x65 cm dengan pilihan warna bunga pink, putih, biru, cream, dan ungu. Cocok untuk berbagai momen spesial.",
  },
  {
    id: 2,
    name: "Papan Bunga Akrilik Box Pink",
    price: 150000,
    images: ["/akrilik-box-pink.png"],
    category: "akrilik",
    rating: 4.9,
    reviews: 18,
    description:
      "Ukuran 45x65 cm dengan pilihan warna bunga pink, putih,biru, cream, ungu",
  },
  {
    id: 3,
    name: "Papan Bunga Akrilik Bulat Cream",
    price: 100000,
    images: ["/akrilik-bulat-cream.png"],
    category: "akrilik",
    rating: 5.0,
    reviews: 32,
    description:
      "Ukuran diameter 60cm dengan pilihan warna bunga pink, putih,biru, cream, ungu",
  },
  {
    id: 4,
    name: "Papan Bunga Akrilik Bulat Pink",
    price: 100000,
    images: ["/akrilik-bulat-pink.png"],
    category: "akrilik",
    rating: 4.7,
    reviews: 15,
    description:
      "ukuran diameter 60cm pilihan warna bunga pink, putih,biru, cream, ungu",
  },
  {
    id: 5,
    name: "Papan Bunga Akrilik Persegi Biru",
    price: 100000,
    images: ["/akrilik-persegi-biru.png", "/akrilik-persegi-biru2.png"],
    category: "akrilik",
    rating: 4.6,
    reviews: 21,
    description:
      "Ukuran 45x65cm dengan pilihan warna bunga pink, putih,biru, cream, ungu",
  },
  {
    id: 6,
    name: "Papan Bunga Akrilik Kubah",
    price: 100000,
    images: ["/akrilik-kubah.png"],
    category: "akrilik",
    rating: 4.6,
    reviews: 21,
    description:
      "Ukuran 45x65 cm dengan pilihan warna bunga pink, putih,biru, cream, ungu",
  },
  {
    id: 7,
    name: "Papan Bunga Box Kubah",
    price: 110000,
    images: [
      "/box-kubah.png",
      "/box-kubah2.png",
      "/box-kubah3.png",
      "/box-kubah4.png",
      "/box-kubah5.png",
    ],
    category: "box",
    rating: 5,
    reviews: 12,
    description:
      "Ukuran 50x70 dengan pilihan warna bunga pink, putih, mauve, biru, coklat, hijau sage, merah",
  },
  {
    id: 8,
    name: "Papan Bunga Box Persegi",
    price: 110000,
    images: ["/box-persegi.png"],
    category: "box",
    rating: 5.0,
    reviews: 12,
    description:
      "Ukuran 50x70 dengan pilihan warna bunga pink, putih, mauve, biru, coklat, hijau sage, merah",
  },
  {
    id: 9,
    name: "Papan Bunga Box Wave",
    price: 110000,
    images: ["/box-wave.png", "/box-wave2.png", "/box-wave3.png"],
    category: "box",
    rating: 4.9,
    reviews: 30,
    description:
      "Ukuran 50x70 dengan pilihan warna bunga pink, putih, mauve, biru, coklat, hijau sage, merah",
  },
];

// Mock Testimonials Data
const mockTestimonials = [
  {
    id: 1,
    name: "Sarah Putri",
    role: "Graduation",
    image: "/testi1.png",
    rating: 5,
    text: "Papan bunga dari Dianttha.flo benar-benar memukau! Kualitasnya premium dan sesuai dengan ekspektasi kami. Tim sangat responsif dan profesional.",
    event: "Graduation",
    date: "Oktober 2024",
  },
  {
    id: 2,
    name: "Budi Santoso",
    role: "Graduation",
    image: "/testi2.png",
    rating: 5,
    text: "Sudah berkali-kali menggunakan jasa Dianttha.flo untuk berbagai acara. Selalu tepat waktu dan hasil selalu memuaskan klien kami.",
    event: "Graduation",
    date: "November 2024",
  },
  {
    id: 3,
    name: "Maya Sari",
    role: "Graduation",
    image: "/testi3.png",
    rating: 5,
    text: "Untuk ulang tahun anak saya, papan bunga akrilik bulat dari sini sangat cantik. Anak saya dan teman-temannya sangat senang!",
    event: "Graduation",
    date: "September 2024",
  },
  {
    id: 4,
    name: "Andi Pratama",
    role: "Graduation",
    image: "/testi4.png",
    rating: 5,
    text: "Pelayanan luar biasa! Dari konsultasi hingga pengiriman semua berjalan lancar. Papan bunganya jadi focal point di acara kami.",
    event: "Graduation",
    date: "Desember 2024",
  },
  {
    id: 5,
    name: "Lisa Chen",
    role: "Semprotulation",
    image: "/testi5.png",
    rating: 4,
    text: "Kualitas papan bunga sangat bagus dan sesuai dengan brief yang diberikan. Akan recommend ke klien-klien lainnya.",
    event: "Semprotulation",
    date: "Oktober 2024",
  },
  {
    id: 6,
    name: "Rahman Hakim",
    role: "Wedding",
    image: "/testi6.png",
    rating: 5,
    text: "Untuk grand opening kantor baru, papan bunga box dari Dianttha.flo memberikan kesan mewah dan elegan. Terima kasih!",
    event: "Wedding",
    date: "November 2024",
  },
  {
    id: 7,
    name: "Rahman Hakim",
    role: "Graduation",
    image: "/testi7.png",
    rating: 5,
    text: "Untuk grand opening kantor baru, papan bunga box dari Dianttha.flo memberikan kesan mewah dan elegan. Terima kasih!",
    event: "Graduation",
    date: "November 2024",
  },
  {
    id: 8,
    name: "Rahman Hakim",
    role: "Semprotulation",
    image: "/testi8.png",
    rating: 5,
    text: "Untuk grand opening kantor baru, papan bunga box dari Dianttha.flo memberikan kesan mewah dan elegan. Terima kasih!",
    event: "semprotulation",
    date: "November 2024",
  },
  {
    id: 9,
    name: "Rahman Hakim",
    role: "Graduation",
    image: "/testi9.png",
    rating: 5,
    text: "Untuk grand opening kantor baru, papan bunga box dari Dianttha.flo memberikan kesan mewah dan elegan. Terima kasih!",
    event: "Graduation",
    date: "November 2024",
  },
];

// Floating Petals Animation Component
const FloatingPetals = () => {
  const petals = Array.from({ length: 6 }, (_, i) => i);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {petals.map((petal) => (
        <div
          key={petal}
          className="absolute animate-bounce"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${3 + Math.random() * 2}s`,
          }}
        >
          <div className="relative w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-1 h-1 bg-[#CA7C83] rounded-full"></div>
            </div>
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-1.5 h-3 sm:w-2 sm:h-4 lg:w-3 lg:h-5 bg-[#EEB6BB] rounded-full opacity-60 animate-pulse"
                style={{
                  top: "50%",
                  left: "50%",
                  transformOrigin: "50% 100%",
                  transform: `translate(-50%, -100%) rotate(${i * 60}deg)`,
                }}
              ></div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

// Animated Counter Component
const AnimatedCounter = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime = null;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

// Header Component - Improved Mobile Responsive
const Header = ({ cartItems, onCartToggle, currentPage, onPageChange }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu when page changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [currentPage]);

  return (
    <>
      <header className="bg-[url('/sampul-header.png')] bg-center shadow-lg sticky top-0 z-50 border-b-2 border-[#F9DADD]">
        <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div
                className="flex items-center space-x-2 sm:space-x-3 cursor-pointer group"
                onClick={() => onPageChange("home")}
              >
                <div className="relative">
                  <img
                    src="/logo.png"
                    alt="Dianttha.flo Logo"
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover transition-transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 rounded-full bg-[#EEB6BB] opacity-0 group-hover:opacity-20 transition-opacity"></div>
                </div>
                <div className="hidden sm:block">
                  <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#CA7C83] group-hover:text-[#8B575C] transition-colors">
                    Dianttha.flo
                  </h1>
                  <span className="text-gray-600 text-xs sm:text-sm">
                    Papan Bunga Akrilik Pekanbaru
                  </span>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-6">
              {["home", "products", "testimonials", "about", "contact"].map((page) => (
                <button
                  key={page}
                  onClick={() => onPageChange(page)}
                  className={`transition-all duration-300 hover:scale-105 capitalize ${
                    currentPage === page
                      ? "text-[#CA7C83] font-semibold border-b-2 border-[#EEB6BB]"
                      : "text-gray-600 hover:text-[#CA7C83]"
                  }`}
                >
                  {page === "home" ? "Home" : 
                   page === "products" ? "Produk" :
                   page === "testimonials" ? "Testimoni" :
                   page === "about" ? "Tentang" :
                   "Kontak"}
                </button>
              ))}
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              {/* Cart Button */}
              <button
                onClick={onCartToggle}
                className="relative bg-gradient-to-r from-[#CA7C83] to-[#8B575C] text-white px-2 sm:px-3 lg:px-4 py-2 lg:py-2 rounded-lg flex items-center space-x-1 sm:space-x-2 hover:from-[#8B575C] hover:to-[#6D4447] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="hidden sm:inline text-sm lg:text-base">Keranjang</span>
                {cartItems.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center text-xs animate-pulse">
                    {cartItems.length}
                  </span>
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-[#CA7C83] hover:text-[#8B575C] transition-colors"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5 sm:w-6 sm:h-6" />
                ) : (
                  <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="border-t border-[#F9DADD] bg-white">
            <div className="container mx-auto px-3 sm:px-4 py-3">
              <div className="flex flex-col space-y-1">
                {[
                  { key: "home", label: "Home" },
                  { key: "products", label: "Produk" },
                  { key: "testimonials", label: "Testimoni" },
                  { key: "about", label: "Tentang" },
                  { key: "contact", label: "Kontak" }
                ].map(({ key, label }) => (
                  <button
                    key={key}
                    onClick={() => {
                      onPageChange(key);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`text-left py-3 px-4 rounded-lg transition-all duration-300 ${
                      currentPage === key
                        ? "bg-[#F9DADD] text-[#8B575C] font-semibold"
                        : "text-gray-600 hover:text-[#CA7C83] hover:bg-[#F9DADD]"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

// Product Card Component - Enhanced Mobile Responsive
const ProductCard = ({
  product,
  onAddToCart,
  onToggleFavorite,
  isFavorite,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageError, setImageError] = useState(false);

  const formatPrice = (price) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === product.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02] border border-[#F9DADD] group">
      <div className="relative">
        {/* Main Image Display */}
        <div className="relative w-full h-48 sm:h-52 md:h-56 lg:h-60 overflow-hidden">
          {imageError ? (
            <div className="w-full h-full bg-gradient-to-br from-[#F9DADD] to-[#EEB6BB] flex items-center justify-center">
              <div className="text-center">
                <Sparkles className="w-8 h-8 sm:w-12 sm:h-12 text-[#CA7C83] mx-auto mb-2" />
                <span className="text-sm text-[#CA7C83]">Foto Produk</span>
              </div>
            </div>
          ) : (
            <img
              src={product.images[currentImageIndex]}
              alt={`${product.name} - ${currentImageIndex + 1}`}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              onError={() => setImageError(true)}
            />
          )}

          {/* Navigation Arrows - Only show if multiple images and not on mobile */}
          {product.images.length > 1 && !imageError && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-1 sm:p-2 transition-all duration-300 opacity-0 group-hover:opacity-100"
              >
                <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-1 sm:p-2 transition-all duration-300 opacity-0 group-hover:opacity-100"
              >
                <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
              </button>
            </>
          )}

          {/* Image Indicators */}
          {product.images.length > 1 && !imageError && (
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1">
              {product.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToImage(index)}
                  className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${
                    index === currentImageIndex
                      ? "bg-white scale-110"
                      : "bg-white/50 hover:bg-white/80"
                  }`}
                />
              ))}
            </div>
          )}

          {/* Favorite Button */}
          <button
            onClick={() => onToggleFavorite(product.id)}
            className={`absolute top-2 sm:top-3 right-2 sm:right-3 p-1.5 sm:p-2 rounded-full transition-all duration-300 transform hover:scale-110 ${
              isFavorite
                ? "bg-[#CA7C83] text-white shadow-lg"
                : "bg-white text-[#CA7C83] hover:text-[#8B575C] hover:bg-[#F9DADD]"
            }`}
          >
            <Heart
              className={`w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 ${
                isFavorite ? "fill-current" : ""
              }`}
            />
          </button>

          {/* Category Badge */}
          <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 bg-gradient-to-r from-[#CA7C83] to-[#8B575C] text-white px-2 sm:px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
            {product.category.replace("-", " ").toUpperCase()}
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-3 sm:p-4">
        <h3 className="font-bold text-sm sm:text-base lg:text-lg text-gray-800 mb-2 hover:text-[#CA7C83] transition-colors line-clamp-2 leading-tight">
          {product.name}
        </h3>
        <p className="text-gray-600 text-xs sm:text-sm mb-3 line-clamp-2 leading-relaxed">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 sm:w-4 sm:h-4 transition-colors ${
                  i < Math.floor(product.rating)
                    ? "text-yellow-400 fill-current"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-xs sm:text-sm text-gray-600 ml-2">
            {product.rating} ({product.reviews})
          </span>
        </div>

        {/* Price and Add Button */}
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-lg sm:text-xl lg:text-2xl font-bold text-[#CA7C83]">
              {formatPrice(product.price)}
            </span>
          </div>
          <button
            onClick={() => onAddToCart(product)}
            className="bg-gradient-to-r from-[#CA7C83] to-[#8B575C] text-white px-3 sm:px-4 py-2 rounded-lg hover:from-[#8B575C] hover:to-[#6D4447] transition-all duration-300 flex items-center space-x-1 sm:space-x-2 transform hover:scale-105 shadow-md hover:shadow-lg text-sm sm:text-base"
          >
            <Plus className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="hidden sm:inline">Tambah</span>
          </button>
        </div>
      </div>
    </div>
  );
};

// Testimonials Page Component - Mobile Optimized
const TestimonialsPage = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === mockTestimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === 0 ? mockTestimonials.length - 1 : prev - 1
    );
  };

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
  };

  return (
    <div className="bg-[#F9DADD] min-h-screen">
      {/* Header Section */}
      <div className="bg-[url('/gelas.png')] bg-cover bg-no-repeat bg-center text-white py-8 sm:py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-4">
            Testimoni Pelanggan
          </h1>
          <p className="text-sm sm:text-lg lg:text-xl">
            Chat dan feedback langsung dari pelanggan setia kami
          </p>
        </div>
      </div>

      {/* Featured Testimonial Slider */}
      <div className="container mx-auto px-4 py-6 sm:py-8 lg:py-12">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-[#EEB6BB] mb-6 sm:mb-8 lg:mb-12">
          <div className="relative">
            {/* Main Testimonial Display */}
            <div className="relative h-80 sm:h-96 lg:h-[600px] flex justify-center bg-[url('/sampul-bunga2.png')] bg-bottom from-gray-100 to-gray-200 p-4 lg:p-8">
              <div className="relative max-w-xs sm:max-w-md lg:max-w-lg h-full">
                <img
                  src={mockTestimonials[currentTestimonial].image}
                  alt={`Chat screenshot ${mockTestimonials[currentTestimonial].name}`}
                  className="w-200 h-full object-cover rounded-lg shadow-xl border-4 border-white"
                  style={{ aspectRatio: "3/4" }}
                />
                
                {/* Badges */}
                <div className="absolute -top-2 -left-2 sm:-top-3 sm:-left-3 bg-green-500 text-white px-2 sm:px-3 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold shadow-lg">
                  WhatsApp Chat
                </div>
                <div className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 bg-[#CA7C83] text-white px-2 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold shadow-lg">
                  {mockTestimonials[currentTestimonial].event}
                </div>
                
                {/* Rating Badge */}
                <div className="absolute top-2 sm:top-4 right-2 sm:right-4">
                  <div className="flex items-center bg-white/95 rounded-full px-2 sm:px-3 py-1 sm:py-2 shadow-lg">
                    <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current mr-1" />
                    <span className="text-xs sm:text-sm font-semibold text-gray-800">
                      {mockTestimonials[currentTestimonial].rating}/5
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#CA7C83] rounded-full p-2 sm:p-3 shadow-lg transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#CA7C83] rounded-full p-2 sm:p-3 shadow-lg transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
            </button>
          </div>

          {/* Testimonial Indicators */}
          <div className="flex justify-center p-4 sm:p-6 space-x-2">
            {mockTestimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? "bg-[#CA7C83] scale-125"
                    : "bg-gray-300 hover:bg-[#EEB6BB]"
                }`}
              />
            ))}
          </div>
        </div>

        {/* All Testimonials Grid */}
        <div className="mb-6 sm:mb-8 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 text-center mb-6 sm:mb-8">
            Galeri Chat Testimoni
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 lg:gap-6">
            {mockTestimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-[#EEB6BB] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 cursor-pointer"
                onClick={() => goToTestimonial(index)}
              >
                <div className="relative p-2 sm:p-3 bg-gradient-to-br from-gray-50 to-gray-100">
                  <div className="relative">
                    <img
                      src={testimonial.image}
                      alt={`Chat ${testimonial.name}`}
                      className="w-full h-32 sm:h-40 lg:h-48 xl:h-56 object-cover rounded-lg shadow-md border border-gray-200"
                      style={{ aspectRatio: "3/4" }}
                    />
                    <div className="absolute top-1 sm:top-2 left-1 sm:left-2 bg-green-500 text-white px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full text-xs font-semibold">
                      WA
                    </div>
                    <div className="absolute top-1 sm:top-2 right-1 sm:right-2">
                      <div className="flex items-center bg-white/90 rounded-full px-1.5 sm:px-2 py-0.5 sm:py-1">
                        <Star className="w-2 h-2 sm:w-3 sm:h-3 text-yellow-400 fill-current mr-0.5 sm:mr-1" />
                        <span className="text-xs font-semibold text-gray-800">
                          {testimonial.rating}
                        </span>
                      </div>
                    </div>
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-[#CA7C83]/20 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                      <div className="bg-white/90 px-2 sm:px-3 py-1 sm:py-2 rounded-full">
                        <span className="text-xs sm:text-sm font-semibold text-[#CA7C83]">
                          Lihat Detail
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 border border-[#EEB6BB] mb-6 sm:mb-8 lg:mb-12">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 text-center">
            Tingkat Kepuasan Pelanggan
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 text-center">
            <div>
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#CA7C83] mb-2">
                <AnimatedCounter end={5} />
              </div>
              <div className="text-gray-600 text-xs sm:text-sm lg:text-base">
                Rating Rata-rata
              </div>
              <div className="flex justify-center mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-2 h-2 sm:w-3 sm:h-3 text-yellow-400 fill-current"
                  />
                ))}
              </div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#CA7C83] mb-2">
                <AnimatedCounter end={98} suffix="%" />
              </div>
              <div className="text-gray-600 text-xs sm:text-sm lg:text-base">
                Tingkat Kepuasan
              </div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#CA7C83] mb-2">
                <AnimatedCounter end={250} suffix="+" />
              </div>
              <div className="text-gray-600 text-xs sm:text-sm lg:text-base">
                Chat Positif
              </div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#CA7C83] mb-2">
                <AnimatedCounter end={95} suffix="%" />
              </div>
              <div className="text-gray-600 text-xs sm:text-sm lg:text-base">
                Repeat Customer
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-[#CA7C83] to-[#8B575C] text-white rounded-2xl p-6 sm:p-8 lg:p-12">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4">
              Ingin Chat Testimoni Anda Tampil di Sini?
            </h3>
            <p className="text-sm sm:text-lg lg:text-xl text-[#EEB6BB] mb-6">
              Rasakan sendiri pengalaman berbelanja papan bunga premium di
              Dianttha.flo dan bagikan pengalaman Anda!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <button className="bg-white text-[#CA7C83] px-4 sm:px-8 py-2 sm:py-3 rounded-xl font-bold hover:bg-[#F9DADD] transition-all transform hover:scale-105 text-sm sm:text-base">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 inline mr-2" />
                Chat via WhatsApp
              </button>
              <button className="bg-[#EEB6BB] text-[#6D4447] px-4 sm:px-8 py-2 sm:py-3 rounded-xl font-bold hover:bg-[#F9DADD] transition-all transform hover:scale-105 text-sm sm:text-base">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 inline mr-2" />
                Lihat Produk
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Cart Component - Mobile Optimized dengan Form Fields Lengkap
const Cart = ({
  isOpen,
  cartItems,
  onClose,
  onUpdateQuantity,
  onRemoveItem,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    notes: "",
    deliveryDate: "",
    deliveryTime: "",
    eventType: "",
    specialRequests: "",
  });
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);

  const formatPrice = (price) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleInputChange = (e) => {
    setCustomerInfo({
      ...customerInfo,
      [e.target.name]: e.target.value,
    });
  };

  const sendOrderToWhatsApp = () => {
    if (!customerInfo.name || !customerInfo.phone) {
      alert("Mohon lengkapi data nama dan nomor telepon");
      return;
    }

    setIsLoading(true);

    try {
      const cartItemsText = cartItems
        .map(
          (item) =>
            `- ${item.name} (${item.quantity}x) = ${formatPrice(
              item.price * item.quantity
            )}`
        )
        .join("\n");

      const orderMessage =
        `*PESANAN BARU - Dianttha.flo*\n\n` +
        `*Detail Pelanggan:*\n` +
        `Nama: ${customerInfo.name}\n` +
        `Email: ${customerInfo.email || "-"}\n` +
        `Telepon: ${customerInfo.phone}\n` +
        `Alamat: ${customerInfo.address || "-"}\n\n` +
        `*Detail Acara:*\n` +
        `Jenis Acara: ${customerInfo.eventType || "-"}\n` +
        `Tanggal Pengiriman: ${customerInfo.deliveryDate || "-"}\n` +
        `Waktu Pengiriman: ${customerInfo.deliveryTime || "-"}\n\n` +
        `*Detail Pesanan:*\n${cartItemsText}\n\n` +
        `*Total: ${formatPrice(totalPrice)}*\n\n` +
        `*Catatan:* ${customerInfo.notes || "-"}\n` +
        `*Permintaan Khusus:* ${customerInfo.specialRequests || "-"}\n\n` +
        `*Tanggal Pesanan:* ${new Date().toLocaleDateString("id-ID")}`;

      const whatsappNumber = "6282171850071";
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        orderMessage
      )}`;

      window.open(whatsappUrl, "_blank");

      alert(
        "Pesanan akan dikirim melalui WhatsApp. Silakan lanjutkan di aplikasi WhatsApp yang terbuka."
      );

      setCustomerInfo({
        name: "",
        email: "",
        phone: "",
        address: "",
        notes: "",
        deliveryDate: "",
        deliveryTime: "",
        eventType: "",
        specialRequests: "",
      });
      setShowCheckoutForm(false);
      onClose();
    } catch (error) {
      console.error("Error preparing order:", error);
      alert("Terjadi kesalahan. Silakan coba lagi atau hubungi kami langsung.");
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Mobile Overlay */}
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
        <div className="bg-white w-full sm:max-w-md h-full overflow-y-auto border-l-4 border-[#EEB6BB]">
          {/* Header */}
          <div className="sticky top-0 bg-gradient-to-r from-[#F9DADD] to-[#EEB6BB] p-4 border-b z-10">
            <div className="flex items-center justify-between">
              <h2 className="text-lg sm:text-xl font-bold text-[#8B575C]">
                Keranjang Belanja
              </h2>
              <button
                onClick={onClose}
                className="text-[#CA7C83] hover:text-[#8B575C] p-1 transition-colors"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-4">
            {cartItems.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-[#EEB6BB] mb-4">
                  <ShoppingCart className="w-16 h-16 mx-auto" />
                </div>
                <p className="text-gray-500 mb-4">Keranjang masih kosong</p>
                <button
                  onClick={onClose}
                  className="bg-gradient-to-r from-[#CA7C83] to-[#8B575C] text-white px-6 py-2 rounded-lg hover:from-[#8B575C] hover:to-[#6D4447] transition-all"
                >
                  Mulai Belanja
                </button>
              </div>
            ) : (
              <>
                {!showCheckoutForm ? (
                  <>
                    {/* Cart Items */}
                    <div className="space-y-4 mb-6">
                      {cartItems.map((item) => (
                        <div
                          key={item.id}
                          className="flex items-center space-x-3 pb-4 border-b border-[#F9DADD]"
                        >
                          <img
                            src={item.images ? item.images[0] : item.image}
                            alt={item.name}
                            className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg border border-[#EEB6BB] flex-shrink-0"
                          />
                          <div className="flex-1 min-w-0">
                            <h4 className="font-medium text-sm sm:text-base truncate">
                              {item.name}
                            </h4>
                            <p className="text-[#CA7C83] font-bold text-sm sm:text-base">
                              {formatPrice(item.price)}
                            </p>

                            <div className="flex items-center justify-between mt-2">
                              <div className="flex items-center space-x-2">
                                <button
                                  onClick={() =>
                                    onUpdateQuantity(item.id, item.quantity - 1)
                                  }
                                  className="bg-[#F9DADD] p-1 rounded hover:bg-[#EEB6BB] transition-colors"
                                >
                                  <Minus className="w-3 h-3 text-[#8B575C]" />
                                </button>
                                <span className="px-2 font-semibold text-sm">
                                  {item.quantity}
                                </span>
                                <button
                                  onClick={() =>
                                    onUpdateQuantity(item.id, item.quantity + 1)
                                  }
                                  className="bg-[#F9DADD] p-1 rounded hover:bg-[#EEB6BB] transition-colors"
                                >
                                  <Plus className="w-3 h-3 text-[#8B575C]" />
                                </button>
                              </div>
                              <button
                                onClick={() => onRemoveItem(item.id)}
                                className="text-red-500 text-xs sm:text-sm hover:text-red-700 transition-colors"
                              >
                                Hapus
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Total and Checkout */}
                    <div className="sticky bottom-0 bg-white pt-4 border-t border-[#F9DADD]">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-lg font-bold">Total:</span>
                        <span className="text-xl sm:text-2xl font-bold text-[#CA7C83]">
                          {formatPrice(totalPrice)}
                        </span>
                      </div>

                      <button
                        onClick={() => setShowCheckoutForm(true)}
                        className="w-full bg-gradient-to-r from-[#CA7C83] to-[#8B575C] text-white py-3 rounded-lg hover:from-[#8B575C] hover:to-[#6D4447] transition-all duration-300 transform hover:scale-105 shadow-lg font-semibold"
                      >
                        Lanjut ke Checkout
                      </button>
                    </div>
                  </>
                ) : (
                  /* Checkout Form dengan Form Fields Lengkap */
                  <div className="space-y-4">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-lg font-bold text-[#8B575C]">
                        Data Pemesanan
                      </h3>
                      <button
                        onClick={() => setShowCheckoutForm(false)}
                        className="text-[#CA7C83] text-sm hover:text-[#8B575C] transition-colors"
                      >
                        Kembali
                      </button>
                    </div>

                    {/* Personal Information */}
                    <div className="bg-[#F9DADD]/30 p-3 rounded-lg border border-[#EEB6BB]">
                      <h4 className="font-semibold text-[#8B575C] mb-3 text-sm">
                        Informasi Pribadi
                      </h4>
                      
                      <div className="space-y-3">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Nama Lengkap *
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={customerInfo.name}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-[#EEB6BB] rounded-lg focus:ring-2 focus:ring-[#CA7C83] text-sm"
                            placeholder="Masukkan nama lengkap"
                            required
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Email
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={customerInfo.email}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-[#EEB6BB] rounded-lg focus:ring-2 focus:ring-[#CA7C83] text-sm"
                            placeholder="contoh@email.com"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Nomor Telepon *
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={customerInfo.phone}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-[#EEB6BB] rounded-lg focus:ring-2 focus:ring-[#CA7C83] text-sm"
                            placeholder="08123456789"
                            required
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Alamat Pengiriman
                          </label>
                          <textarea
                            name="address"
                            value={customerInfo.address}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-[#EEB6BB] rounded-lg focus:ring-2 focus:ring-[#CA7C83] text-sm"
                            placeholder="Alamat lengkap untuk pengiriman"
                            rows={3}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Event Information */}
                    <div className="bg-[#F9DADD]/30 p-3 rounded-lg border border-[#EEB6BB]">
                      <h4 className="font-semibold text-[#8B575C] mb-3 text-sm">
                        Informasi Acara
                      </h4>
                      
                      <div className="space-y-3">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Jenis Acara
                          </label>
                          <select
                            name="eventType"
                            value={customerInfo.eventType}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-[#EEB6BB] rounded-lg focus:ring-2 focus:ring-[#CA7C83] text-sm"
                          >
                            <option value="">Pilih jenis acara</option>
                            <option value="graduation">Wisuda</option>
                            <option value="wedding">Pernikahan</option>
                            <option value="birthday">Ulang Tahun</option>
                            <option value="opening">Grand Opening</option>
                            <option value="anniversary">Anniversary</option>
                            <option value="congratulation">Ucapan Selamat</option>
                            <option value="other">Lainnya</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Tanggal Pengiriman
                          </label>
                          <input
                            type="date"
                            name="deliveryDate"
                            value={customerInfo.deliveryDate}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-[#EEB6BB] rounded-lg focus:ring-2 focus:ring-[#CA7C83] text-sm"
                            min={new Date().toISOString().split('T')[0]}
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Waktu Pengiriman
                          </label>
                          <select
                            name="deliveryTime"
                            value={customerInfo.deliveryTime}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-[#EEB6BB] rounded-lg focus:ring-2 focus:ring-[#CA7C83] text-sm"
                          >
                            <option value="">Pilih waktu pengiriman</option>
                            <option value="pagi">Pagi (08:00 - 11:00)</option>
                            <option value="siang">Siang (11:00 - 14:00)</option>
                            <option value="sore">Sore (14:00 - 17:00)</option>
                            <option value="malam">Malam (17:00 - 20:00)</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Additional Notes */}
                    <div className="bg-[#F9DADD]/30 p-3 rounded-lg border border-[#EEB6BB]">
                      <h4 className="font-semibold text-[#8B575C] mb-3 text-sm">
                        Catatan Tambahan
                      </h4>
                      
                      <div className="space-y-3">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Catatan Umum
                          </label>
                          <textarea
                            name="notes"
                            value={customerInfo.notes}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-[#EEB6BB] rounded-lg focus:ring-2 focus:ring-[#CA7C83] text-sm"
                            placeholder="Catatan khusus untuk pesanan"
                            rows={2}
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Permintaan Khusus
                          </label>
                          <textarea
                            name="specialRequests"
                            value={customerInfo.specialRequests}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-[#EEB6BB] rounded-lg focus:ring-2 focus:ring-[#CA7C83] text-sm"
                            placeholder="Misal: warna bunga tertentu, tulisan khusus, dll"
                            rows={2}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Order Summary */}
                    <div className="bg-[#F9DADD] p-3 rounded-lg border border-[#EEB6BB]">
                      <h4 className="font-semibold mb-2 text-[#8B575C] text-sm">
                        Ringkasan Pesanan:
                      </h4>
                      {cartItems.map((item) => (
                        <div
                          key={item.id}
                          className="flex justify-between text-xs mb-1"
                        >
                          <span className="truncate mr-2">
                            {item.name} ({item.quantity}x)
                          </span>
                          <span className="flex-shrink-0">
                            {formatPrice(item.price * item.quantity)}
                          </span>
                        </div>
                      ))}
                      <div className="border-t border-[#EEB6BB] pt-2 mt-2 font-bold">
                        <div className="flex justify-between text-sm">
                          <span>Total:</span>
                          <span className="text-[#CA7C83]">
                            {formatPrice(totalPrice)}
                          </span>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={sendOrderToWhatsApp}
                      disabled={isLoading}
                      className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition disabled:bg-gray-400 flex items-center justify-center space-x-2 font-semibold"
                    >
                      <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span>
                        {isLoading ? "Memproses..." : "Pesan via WhatsApp"}
                      </span>
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

// Home Page Component tetap sama seperti sebelumnya...
const HomePage = ({ onPageChange }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-[url('/sampul-bunga2.png')] bg-center from-[#EEB6BB] via-[#CA7C83] to-[#8B575C] text-white overflow-hidden min-h-screen">
        <FloatingPetals />
        <div className="absolute inset-0 bg-black/10"></div>

        <div className="relative container mx-auto px-4 py-8 sm:py-12 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center min-h-[70vh] lg:min-h-[70vh]">
            <div
              className={`space-y-4 sm:space-y-6 lg:space-y-8 text-center lg:text-left transition-all duration-1000 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-full opacity-0"
              }`}
            >
              <div className="space-y-3 sm:space-y-4 lg:space-y-6">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                  <span className="inline-block animate-pulse">
                    Papan Bunga
                  </span>
                  <span
                    className="block text-[#CA7C83] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl animate-bounce"
                    style={{ animationDelay: "0.5s" }}
                  >
                    Elegan & Berkelas
                  </span>
                </h1>
                <p
                  className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#EEB6BB] leading-relaxed animate-fade-in-up px-2 lg:px-0"
                  style={{ animationDelay: "1s" }}
                >
                  Menciptakan momen tak terlupakan dengan papan bunga premium
                  yang dibuat khusus untuk setiap perayaan istimewa Anda.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 px-2 lg:px-0">
                <button
                  onClick={() => onPageChange("products")}
                  className="bg-white text-[#CA7C83] px-4 sm:px-6 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-xl font-bold text-sm sm:text-base lg:text-lg hover:bg-[#F9DADD] transition-all transform hover:scale-105 shadow-lg hover:shadow-xl animate-bounce-in"
                  style={{ animationDelay: "1.5s" }}
                >
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 inline mr-2 lg:mr-3" />
                  Jelajahi Koleksi
                </button>
                <button
                  onClick={() => onPageChange("contact")}
                  className="bg-transparent border-2 lg:border-3 border-white text-white px-4 sm:px-6 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-xl font-bold text-sm sm:text-base lg:text-lg hover:bg-white hover:text-[#CA7C83] transition-all animate-slide-in-right"
                  style={{ animationDelay: "2s" }}
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 inline mr-2 lg:mr-3" />
                  Konsultasi Gratis
                </button>
              </div>
            </div>

            <div
              className={`relative flex justify-center mt-6 sm:mt-8 lg:mt-0 transition-all duration-1000 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-full opacity-0"
              }`}
            >
              <div className="relative">
                <div className="bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-lg rounded-full p-6 sm:p-8 lg:p-12 border border-white/30 animate-float">
                  <div className="text-center space-y-3 sm:space-y-4 lg:space-y-6">
                    <div className="flex justify-center">
                      <div className="relative">
                        <img
                          src="/logo.png"
                          alt="Dianttha.flo Logo"
                          className="w-16 h-16 sm:w-20 sm:h-20 lg:w-32 lg:h-32 rounded-full object-cover border-4 border-white shadow-2xl transition-transform hover:scale-110"
                        />
                        <div className="absolute inset-0 rounded-full bg-[#EEB6BB] opacity-20 animate-ping"></div>
                      </div>
                    </div>
                    <div className="space-y-1 sm:space-y-2">
                      <div className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                        <AnimatedCounter end={250} suffix="+" />
                      </div>
                      <div className="text-[#F9DADD] text-sm sm:text-base lg:text-lg">
                        Papan Bunga Terjual
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-2 -right-2 lg:-top-4 lg:-right-4 w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 bg-[#EEB6BB] rounded-full animate-bounce"></div>
                <div className="absolute -bottom-4 -left-4 lg:-bottom-6 lg:-left-6 w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6 bg-white rounded-full animate-pulse"></div>
                <div className="absolute top-1/2 -right-6 lg:-right-8 w-2 h-2 sm:w-3 sm:h-3 lg:w-4 lg:h-4 bg-[#F9DADD] rounded-full animate-ping"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="bg-white py-8 sm:py-12 lg:py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#EEB6BB] via-[#CA7C83] to-[#8B575C]"></div>
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-2 sm:mb-4 animate-fade-in-up">
              Mengapa Memilih Dianttha.flo?
            </h2>
            <p className="text-sm sm:text-lg lg:text-xl text-gray-600 animate-fade-in-up px-4 lg:px-0"
              style={{ animationDelay: "0.5s" }}
            >
              Kepercayaan pelanggan adalah prioritas utama kami
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {/* Trust indicators cards */}
            <div className="bg-gradient-to-br from-[#F9DADD] to-[#EEB6BB] rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 text-center transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border border-[#EEB6BB] animate-slide-in-up">
              <div className="bg-gradient-to-r from-[#CA7C83] to-[#8B575C] w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 lg:mb-6 shadow-lg animate-bounce">
                <Award className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" />
              </div>
              <h3 className="text-base sm:text-xl lg:text-2xl font-bold text-gray-800 mb-1 sm:mb-2 lg:mb-3">
                Pelanggan Puas
              </h3>
              <p className="text-gray-600 mb-2 sm:mb-3 lg:mb-4 text-xs sm:text-sm lg:text-base">
                Rating kepuasan tinggi dari ratusan pelanggan setia
              </p>
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#CA7C83]">
                <AnimatedCounter end={5} />
              </div>
              <div className="text-xs sm:text-sm text-gray-500">
                Rating Bintang
              </div>
            </div>

            <div
              className="bg-gradient-to-br from-[#F9DADD] to-[#EEB6BB] rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 text-center transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border border-[#EEB6BB] animate-slide-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <div
                className="bg-gradient-to-r from-[#CA7C83] to-[#8B575C] w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 lg:mb-6 shadow-lg animate-bounce"
                style={{ animationDelay: "0.5s" }}
              >
                <Users className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" />
              </div>
              <h3 className="text-base sm:text-xl lg:text-2xl font-bold text-gray-800 mb-1 sm:mb-2 lg:mb-3">
                Pelanggan Setia
              </h3>
              <p className="text-gray-600 mb-2 sm:mb-3 lg:mb-4 text-xs sm:text-sm lg:text-base">
                Klien yang terus mempercayai layanan kami
              </p>
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#CA7C83]">
                <AnimatedCounter end={500} suffix="+" />
              </div>
              <div className="text-xs sm:text-sm text-gray-500">Pelanggan</div>
            </div>

            <div
              className="bg-gradient-to-br from-[#F9DADD] to-[#EEB6BB] rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 text-center transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border border-[#EEB6BB] animate-slide-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <div
                className="bg-gradient-to-r from-[#CA7C83] to-[#8B575C] w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 lg:mb-6 shadow-lg animate-bounce"
                style={{ animationDelay: "1s" }}
              >
                <Truck className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" />
              </div>
              <h3 className="text-base sm:text-xl lg:text-2xl font-bold text-gray-800 mb-1 sm:mb-2 lg:mb-3">
                Pengiriman Tepat
              </h3>
              <p className="text-gray-600 mb-2 sm:mb-3 lg:mb-4 text-xs sm:text-sm lg:text-base">
                Selalu tepat waktu untuk acara penting Anda
              </p>
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#CA7C83]">
                99%
              </div>
              <div className="text-xs sm:text-sm text-gray-500">
                Ketepatan Waktu
              </div>
            </div>

            <div
              className="bg-gradient-to-br from-[#F9DADD] to-[#EEB6BB] rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 text-center transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border border-[#EEB6BB] animate-slide-in-up"
              style={{ animationDelay: "0.6s" }}
            >
              <div
                className="bg-gradient-to-r from-[#CA7C83] to-[#8B575C] w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 lg:mb-6 shadow-lg animate-bounce"
                style={{ animationDelay: "1.5s" }}
              >
                <Shield className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" />
              </div>
              <h3 className="text-base sm:text-xl lg:text-2xl font-bold text-gray-800 mb-1 sm:mb-2 lg:mb-3">
                Garansi Kualitas
              </h3>
              <p className="text-gray-600 mb-2 sm:mb-3 lg:mb-4 text-xs sm:text-sm lg:text-base">
                Jaminan kualitas terbaik untuk setiap produk
              </p>
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#CA7C83]">
                100%
              </div>
              <div className="text-xs sm:text-sm text-gray-500">Garansi</div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Products Preview */}
      <div className="bg-[#F9DADD] py-8 sm:py-12 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-2 sm:mb-4 animate-fade-in-up">
              Koleksi Unggulan
            </h2>
            <p
              className="text-sm sm:text-lg lg:text-xl text-gray-600 animate-fade-in-up px-4 lg:px-0"
              style={{ animationDelay: "0.5s" }}
            >
              Papan bunga terpopuler pilihan pelanggan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8 lg:mb-12">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 border border-[#EEB6BB] animate-slide-in-left">
              <div className="h-32 sm:h-40 lg:h-48 bg-gradient-to-br from-[#F9DADD] to-[#EEB6BB] flex items-center justify-center">
                <Sparkles className="w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 text-[#CA7C83]" />
              </div>
              <div className="p-3 sm:p-4 lg:p-6">
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-800 mb-2">
                  Akrilik Premium
                </h3>
                <p className="text-gray-600 mb-2 sm:mb-3 lg:mb-4 text-xs sm:text-sm lg:text-base">
                  Desain elegan dengan bahan akrilik berkualitas tinggi
                </p>
                <div className="text-lg sm:text-xl lg:text-2xl font-bold text-[#CA7C83] mb-2 sm:mb-3 lg:mb-4">
                  Mulai Rp 100.000
                </div>
                <button
                  onClick={() => onPageChange("products")}
                  className="w-full bg-gradient-to-r from-[#CA7C83] to-[#8B575C] text-white py-2 lg:py-3 rounded-lg hover:from-[#8B575C] hover:to-[#6D4447] transition-all text-sm lg:text-base"
                >
                  Lihat Koleksi
                </button>
              </div>
            </div>

            <div
              className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 border border-[#EEB6BB] animate-slide-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="h-32 sm:h-40 lg:h-48 bg-gradient-to-br from-[#F9DADD] to-[#EEB6BB] flex items-center justify-center">
                <Heart className="w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 text-[#CA7C83]" />
              </div>
              <div className="p-3 sm:p-4 lg:p-6">
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-800 mb-2">
                  Box Eksklusif
                </h3>
                <p className="text-gray-600 mb-2 sm:mb-3 lg:mb-4 text-xs sm:text-sm lg:text-base">
                  Rangkaian bunga dalam box dengan sentuhan mewah
                </p>
                <div className="text-lg sm:text-xl lg:text-2xl font-bold text-[#CA7C83] mb-2 sm:mb-3 lg:mb-4">
                  Mulai Rp 110.000
                </div>
                <button
                  onClick={() => onPageChange("products")}
                  className="w-full bg-gradient-to-r from-[#CA7C83] to-[#8B575C] text-white py-2 lg:py-3 rounded-lg hover:from-[#8B575C] hover:to-[#6D4447] transition-all text-sm lg:text-base"
                >
                  Lihat Koleksi
                </button>
              </div>
            </div>

            <div
              className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 border border-[#EEB6BB] animate-slide-in-right md:col-span-2 lg:col-span-1"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="h-32 sm:h-40 lg:h-48 bg-gradient-to-br from-[#F9DADD] to-[#EEB6BB] flex items-center justify-center">
                <Star className="w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 text-[#CA7C83]" />
              </div>
              <div className="p-3 sm:p-4 lg:p-6">
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-800 mb-2">
                  Custom Design
                </h3>
                <p className="text-gray-600 mb-2 sm:mb-3 lg:mb-4 text-xs sm:text-sm lg:text-base">
                  Desain khusus sesuai keinginan dan tema acara Anda
                </p>
                <div className="text-lg sm:text-xl lg:text-2xl font-bold text-[#CA7C83] mb-2 sm:mb-3 lg:mb-4">
                  Konsultasi Gratis
                </div>
                <button
                  onClick={() => onPageChange("contact")}
                  className="w-full bg-gradient-to-r from-[#CA7C83] to-[#8B575C] text-white py-2 lg:py-3 rounded-lg hover:from-[#8B575C] hover:to-[#6D4447] transition-all text-sm lg:text-base"
                >
                  Hubungi Kami
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-[#CA7C83] via-[#8B575C] to-[#6D4447] text-white py-8 sm:py-12 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <FloatingPetals />

        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6 lg:space-y-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 lg:mb-6 animate-pulse">
              Wujudkan Momen Istimewa Anda
            </h2>
            <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-[#F9DADD] leading-relaxed animate-fade-in-up px-4 lg:px-0">
              Jangan biarkan momen spesial berlalu tanpa sentuhan keindahan.
              Hubungi kami sekarang dan dapatkan konsultasi gratis untuk papan
              bunga impian Anda.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 lg:gap-6 pt-4 sm:pt-6 lg:pt-8 px-4 lg:px-0">
              <button
                onClick={() => onPageChange("contact")}
                className="bg-white text-[#CA7C83] px-4 sm:px-8 lg:px-12 py-3 sm:py-4 lg:py-5 rounded-2xl font-bold text-sm sm:text-lg lg:text-xl hover:bg-[#F9DADD] transition-all transform hover:scale-105 shadow-2xl animate-bounce-in"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 inline mr-2 lg:mr-3" />
                Hubungi Sekarang
              </button>
              <button
                onClick={() => onPageChange("products")}
                className="bg-[#EEB6BB] text-[#6D4447] px-4 sm:px-8 lg:px-12 py-3 sm:py-4 lg:py-5 rounded-2xl font-bold text-sm sm:text-lg lg:text-xl hover:bg-[#F9DADD] transition-all transform hover:scale-105 shadow-2xl animate-bounce-in"
                style={{ animationDelay: "0.5s" }}
              >
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 inline mr-2 lg:mr-3" />
                Lihat Katalog
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slide-in-left {
          0% {
            opacity: 0;
            transform: translateX(-50px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slide-in-right {
          0% {
            opacity: 0;
            transform: translateX(50px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slide-in-up {
          0% {
            opacity: 0;
            transform: translateY(50px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes bounce-in {
          0% {
            opacity: 0;
            transform: scale(0.3);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }
        .animate-slide-in-left {
          animation: slide-in-left 1s ease-out forwards;
        }
        .animate-slide-in-right {
          animation: slide-in-right 1s ease-out forwards;
        }
        .animate-slide-in-up {
          animation: slide-in-up 1s ease-out forwards;
        }
        .animate-bounce-in {
          animation: bounce-in 1s ease-out forwards;
        }
      `}</style>
    </>
  );
};

// Sisanya komponen lain tetap sama seperti ProductsPage, AboutPage, ContactPage...
// (Saya skip karena sudah panjang, tapi strukturnya sama dengan yang sebelumnya)

// Main App Component
const App = () => {
  const [products] = useState(mockProducts);
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState("home");

  const addToCart = (product) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);
      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(id);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    );
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case "products":
        return (
          <ProductsPage
            products={products}
            onAddToCart={addToCart}
            onToggleFavorite={toggleFavorite}
            favorites={favorites}
          />
        );
      case "testimonials":
        return <TestimonialsPage />;
      case "about":
        return <AboutPage />;
      case "contact":
        return <ContactPage />;
      default:
        return <HomePage onPageChange={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#F9DADD]">
      <Header
        cartItems={cartItems}
        onCartToggle={() => setIsCartOpen(!isCartOpen)}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />

      {renderCurrentPage()}

      <Cart
        isOpen={isCartOpen}
        cartItems={cartItems}
        onClose={() => setIsCartOpen(false)}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeFromCart}
      />

      {/* Footer - Mobile Responsive sama seperti sebelumnya */}
      <footer className="bg-gradient-to-r from-[#CA7C83] to-[#8B575C] text-white py-6 sm:py-8 lg:py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            <div className="text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start space-x-2 sm:space-x-3 mb-3 sm:mb-4">
                <img
                  src="/logo.png"
                  alt="Dianttha.flo Logo"
                  className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold">Dianttha.flo</h3>
                  <span className="text-[#EEB6BB] text-xs sm:text-sm">
                    Papan Bunga Akrilik
                  </span>
                </div>
              </div>
              <p className="text-[#F9DADD] mb-3 sm:mb-4 text-xs sm:text-sm lg:text-base">
                Menciptakan momen tak terlupakan dengan papan bunga premium
                untuk setiap perayaan istimewa Anda.
              </p>
            </div>

            <div className="text-center sm:text-left">
              <h4 className="text-sm sm:text-base lg:text-lg font-semibold mb-3 sm:mb-4">
                Navigasi
              </h4>
              <ul className="space-y-1 sm:space-y-2">
                {[
                  { key: "home", label: "Home" },
                  { key: "products", label: "Produk" },
                  { key: "testimonials", label: "Testimoni" },
                  { key: "about", label: "Tentang" },
                  { key: "contact", label: "Kontak" }
                ].map(({ key, label }) => (
                  <li key={key}>
                    <button
                      onClick={() => setCurrentPage(key)}
                      className="text-[#EEB6BB] hover:text-white transition-colors text-xs sm:text-sm lg:text-base"
                    >
                      {label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <h4 className="text-sm sm:text-base lg:text-lg font-semibold mb-3 sm:mb-4">
                Kontak
              </h4>
              <ul className="space-y-1 sm:space-y-2">
                <li className="flex items-center justify-center sm:justify-start space-x-2">
                  <Phone className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                  <span className="text-[#EEB6BB] text-xs sm:text-sm lg:text-base">
                    0821-7185-0071
                  </span>
                </li>
                <li className="flex items-center justify-center sm:justify-start space-x-2">
                  <Mail className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                  <span className="text-[#EEB6BB] text-xs sm:text-sm lg:text-base">
                    @dianttha.flo
                  </span>
                </li>
                <li className="flex items-center justify-center sm:justify-start space-x-2">
                  <MapPin className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                  <span className="text-[#EEB6BB] text-xs sm:text-sm lg:text-base">
                    Jl.Manyar Sakti Ujung, Panam
                  </span>
                </li>
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <h4 className="text-sm sm:text-base lg:text-lg font-semibold mb-3 sm:mb-4">
                Jam Operasional
              </h4>
              <div className="space-y-1 text-[#EEB6BB] text-xs sm:text-sm lg:text-base">
                <p>Senin - Jumat: 08:00 - 18:00</p>
                <p>Sabtu: 08:00 - 16:00</p>
                <p>Minggu: 10:00 - 15:00</p>
              </div>
            </div>
          </div>

          <div className="border-t border-[#EEB6BB] mt-4 sm:mt-6 lg:mt-8 pt-4 sm:pt-6 lg:pt-8 text-center">
            <p className="text-[#EEB6BB] text-xs sm:text-sm lg:text-base">
              &copy; 2024 Dianttha.flo. Semua hak cipta dilindungi.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Products Page Component - Mobile Optimized
const ProductsPage = ({
  products,
  onAddToCart,
  onToggleFavorite,
  favorites,
}) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortBy, setSortBy] = useState("name");

  const categories = [
    { value: "", label: "Semua Kategori" },
    { value: "akrilik", label: "Akrilik" },
    { value: "box", label: "Box" },
  ];

  const sortOptions = [
    { value: "name", label: "Nama A-Z" },
    { value: "price-low", label: "Harga Termurah" },
    { value: "price-high", label: "Harga Termahal" },
    { value: "rating", label: "Rating Tertinggi" },
  ];

  const filteredAndSortedProducts = products
    .filter(
      (product) => !selectedCategory || product.category === selectedCategory
    )
    .sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "rating":
          return b.rating - a.rating;
        default:
          return a.name.localeCompare(b.name);
      }
    });

  return (
    <div className="bg-[#F9DADD] min-h-screen">
      <div className="bg-[url('/gelas.png')] bg-center bg-cover text-white py-6 sm:py-8 lg:py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-4">
            Katalog Produk
          </h1>
          <p className="text-sm sm:text-lg lg:text-xl">
            Jelajahi semua koleksi papan bunga kami
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-4 sm:py-6 lg:py-8">
        {/* Filter and Sort Controls */}
        <div className="bg-white p-3 sm:p-4 lg:p-6 rounded-lg shadow-md mb-4 sm:mb-6 lg:mb-8 border border-[#EEB6BB]">
          <div className="flex flex-col space-y-3 sm:space-y-4 md:space-y-0 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
              <div className="flex-1 sm:flex-none">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Kategori
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-3 lg:px-4 py-2 border border-[#EEB6BB] rounded-lg focus:ring-2 focus:ring-[#CA7C83] focus:border-transparent text-sm lg:text-base"
                >
                  {categories.map((category) => (
                    <option key={category.value} value={category.value}>
                      {category.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex-1 sm:flex-none">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Urutkan
                </label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-3 lg:px-4 py-2 border border-[#EEB6BB] rounded-lg focus:ring-2 focus:ring-[#CA7C83] focus:border-transparent text-sm lg:text-base"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="text-gray-600 text-sm lg:text-base text-center sm:text-left">
              Menampilkan {filteredAndSortedProducts.length} produk
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {filteredAndSortedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              onToggleFavorite={onToggleFavorite}
              isFavorite={favorites.includes(product.id)}
            />
          ))}
        </div>

        {filteredAndSortedProducts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-[#EEB6BB] mb-4">
              <Search className="w-16 h-16 mx-auto" />
            </div>
            <p className="text-gray-500 mb-4">Tidak ada produk yang ditemukan</p>
            <button
              onClick={() => {
                setSelectedCategory("");
                setSortBy("name");
              }}
              className="bg-gradient-to-r from-[#CA7C83] to-[#8B575C] text-white px-6 py-3 rounded-lg hover:from-[#8B575C] hover:to-[#6D4447] transition-all"
            >
              Reset Filter
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

// About Page Component - Mobile Optimized  
const AboutPage = () => {
  return (
    <div className="bg-[#F9DADD] min-h-screen">
      <div className="bg-[url('/gelas.png')] bg-center bg-cover text-white py-6 sm:py-8 lg:py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-4">
            Tentang Dianttha.flo
          </h1>
          <p className="text-sm sm:text-lg lg:text-xl">
            Menghadirkan keindahan bunga dalam setiap momen spesial
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6 sm:py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-12 lg:mb-16">
          <div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-3 sm:mb-4 lg:mb-6">
              Cerita Kami
            </h2>
            <div className="space-y-3 sm:space-y-4 text-gray-600 text-sm sm:text-base">
              <p>
                Dianttha.flo hadir sebagai solusi terpercaya untuk memenuhi
                kebutuhan papan bunga berkualitas tinggi. Dengan pengalaman
                bertahun-tahun dalam industri dekorasi bunga, kami memahami
                betapa pentingnya momen-momen spesial dalam hidup Anda.
              </p>
              <p>
                Setiap papan bunga yang kami ciptakan dibuat dengan penuh
                perhatian terhadap detail, menggunakan bahan-bahan pilihan dan
                teknik terbaik. Kami percaya bahwa bunga bukan hanya sekadar
                dekorasi, tetapi juga cara untuk mengekspresikan perasaan dan
                menciptakan kenangan yang tak terlupakan.
              </p>
              <p>
                Visi kami adalah menjadi partner terpercaya dalam setiap
                perayaan dan momen istimewa Anda, dengan menyediakan papan bunga
                yang tidak hanya indah secara visual, tetapi juga bermakna.
              </p>
            </div>
          </div>

          <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-lg shadow-lg border border-[#EEB6BB]">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-3 sm:mb-4 lg:mb-6">
              Mengapa Memilih Kami?
            </h3>
            <div className="space-y-3 sm:space-y-4 lg:space-y-6">
              <div className="flex items-start space-x-3 lg:space-x-4">
                <div className="bg-[#F9DADD] p-2 lg:p-3 rounded-full flex-shrink-0">
                  <Award className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-[#CA7C83]" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 text-sm sm:text-base">
                    Kualitas Premium
                  </h4>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    Menggunakan bahan akrilik berkualitas tinggi dan bunga segar
                    pilihan
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 lg:space-x-4">
                <div className="bg-[#F9DADD] p-2 lg:p-3 rounded-full flex-shrink-0">
                  <Users className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-[#CA7C83]" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 text-sm sm:text-base">
                    Tim Profesional
                  </h4>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    Didukung oleh florist berpengalaman dan tim kreatif terbaik
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 lg:space-x-4">
                <div className="bg-[#F9DADD] p-2 lg:p-3 rounded-full flex-shrink-0">
                  <Truck className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-[#CA7C83]" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 text-sm sm:text-base">
                    Pengiriman Tepat Waktu
                  </h4>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    Jaminan pengiriman sesuai jadwal untuk acara penting Anda
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 lg:space-x-4">
                <div className="bg-[#F9DADD] p-2 lg:p-3 rounded-full flex-shrink-0">
                  <Shield className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-[#CA7C83]" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 text-sm sm:text-base">
                    Garansi Kepuasan
                  </h4>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    Komitmen untuk memastikan Anda 100% puas dengan produk kami
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8 border border-[#EEB6BB]">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-3 sm:mb-4 lg:mb-6 text-center">
            Statistik Kepercayaan
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 text-center">
            <div>
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#CA7C83] mb-2">
                <AnimatedCounter end={250} suffix="+" />
              </div>
              <div className="text-gray-600 text-xs sm:text-sm lg:text-base">
                Pelanggan Puas
              </div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#CA7C83] mb-2">
                <AnimatedCounter end={250} suffix="+" />
              </div>
              <div className="text-gray-600 text-xs sm:text-sm lg:text-base">
                Papan Bunga Dibuat
              </div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#CA7C83] mb-2">
                <AnimatedCounter end={250} suffix="+" />
              </div>
              <div className="text-gray-600 text-xs sm:text-sm lg:text-base">
                Acara Sukses
              </div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#CA7C83] mb-2">
                <AnimatedCounter end={5} />
              </div>
              <div className="text-gray-600 text-xs sm:text-sm lg:text-base">
                Rating Kepuasan
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Contact Page Component - Mobile Optimized
const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      alert("Mohon lengkapi semua field yang wajib diisi");
      return;
    }

    setIsLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      const whatsappMessage =
        `*PESAN BARU - Dianttha.flo*\n\n` +
        `*Detail Pengirim:*\n` +
        `Nama: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Telepon: ${formData.phone || "-"}\n` +
        `Subjek: ${formData.subject}\n\n` +
        `*Pesan:*\n${formData.message}\n\n` +
        `*Tanggal:* ${new Date().toLocaleDateString("id-ID")}`;

      const whatsappNumber = "6282171850071";
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        whatsappMessage
      )}`;

      window.open(whatsappUrl, "_blank");

      alert(
        "Pesan akan dikirim melalui WhatsApp. Silakan lanjutkan di aplikasi WhatsApp yang terbuka."
      );

      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error preparing message:", error);
      alert("Terjadi kesalahan. Silakan coba lagi atau hubungi kami langsung.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-[#F9DADD] min-h-screen">
      <div className="bg-[url('/gelas.png')] bg-center bg-cover text-white py-6 sm:py-8 lg:py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-4">Hubungi Kami</h1>
          <p className="text-sm sm:text-lg lg:text-xl">
            Kami siap membantu Anda dengan senang hati
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6 sm:py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          <div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-4 sm:mb-6 lg:mb-8">
              Informasi Kontak
            </h2>

            <div className="space-y-3 sm:space-y-4 lg:space-y-6">
              <div className="bg-white p-3 sm:p-4 lg:p-6 rounded-lg shadow-md border border-[#EEB6BB]">
                <div className="flex items-start space-x-3 lg:space-x-4">
                  <div className="bg-[#F9DADD] p-2 lg:p-3 rounded-full flex-shrink-0">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-[#CA7C83]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1 sm:mb-2 text-sm sm:text-base">
                      Alamat
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm lg:text-base">
                      Jl.Manyar Sakti Ujung, Panam
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-3 sm:p-4 lg:p-6 rounded-lg shadow-md border border-[#EEB6BB]">
                <div className="flex items-start space-x-3 lg:space-x-4">
                  <div className="bg-[#F9DADD] p-2 lg:p-3 rounded-full flex-shrink-0">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-[#CA7C83]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1 sm:mb-2 text-sm sm:text-base">
                      Telepon
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm lg:text-base">
                      0821-7185-0071
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-3 sm:p-4 lg:p-6 rounded-lg shadow-md border border-[#EEB6BB]">
                <div className="flex items-start space-x-3 lg:space-x-4">
                  <div className="bg-[#F9DADD] p-2 lg:p-3 rounded-full flex-shrink-0">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-[#CA7C83]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1 sm:mb-2 text-sm sm:text-base">
                      Instagram
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm lg:text-base">
                      @dianttha.flo
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-3 sm:p-4 lg:p-6 rounded-lg shadow-md border border-[#EEB6BB]">
                <div className="flex items-start space-x-3 lg:space-x-4">
                  <div className="bg-[#F9DADD] p-2 lg:p-3 rounded-full flex-shrink-0">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-[#CA7C83]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1 sm:mb-2 text-sm sm:text-base">
                      Jam Operasional
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm lg:text-base">
                      Senin - Jumat: 08:00 - 18:00
                      <br />
                      Sabtu: 08:00 - 16:00
                      <br />
                      Minggu: 10:00 - 15:00
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-lg shadow-lg border border-[#EEB6BB]">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-3 sm:mb-4 lg:mb-6">
              Kirim Pesan
            </h2>

            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 lg:space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2"
                >
                  Nama Lengkap *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 lg:px-4 py-2 lg:py-3 border border-[#EEB6BB] rounded-lg focus:ring-2 focus:ring-[#CA7C83] focus:border-transparent text-sm lg:text-base"
                  placeholder="Masukkan nama lengkap Anda"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 lg:px-4 py-2 lg:py-3 border border-[#EEB6BB] rounded-lg focus:ring-2 focus:ring-[#CA7C83] focus:border-transparent text-sm lg:text-base"
                  placeholder="contoh@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2"
                >
                  Nomor Telepon
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-3 lg:px-4 py-2 lg:py-3 border border-[#EEB6BB] rounded-lg focus:ring-2 focus:ring-[#CA7C83] focus:border-transparent text-sm lg:text-base"
                  placeholder="+62 812-3456-7890"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2"
                >
                  Subjek *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 lg:px-4 py-2 lg:py-3 border border-[#EEB6BB] rounded-lg focus:ring-2 focus:ring-[#CA7C83] focus:border-transparent text-sm lg:text-base"
                >
                  <option value="">Pilih subjek pesan</option>
                  <option value="pemesanan">Pemesanan Produk</option>
                  <option value="konsultasi">Konsultasi Desain</option>
                  <option value="pengiriman">Informasi Pengiriman</option>
                  <option value="keluhan">Keluhan/Saran</option>
                  <option value="lainnya">Lainnya</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2"
                >
                  Pesan *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-3 lg:px-4 py-2 lg:py-3 border border-[#EEB6BB] rounded-lg focus:ring-2 focus:ring-[#CA7C83] focus:border-transparent text-sm lg:text-base resize-none"
                  placeholder="Tuliskan pesan Anda di sini..."
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-[#CA7C83] to-[#8B575C] text-white py-2 sm:py-3 px-4 lg:px-6 rounded-lg hover:from-[#8B575C] hover:to-[#6D4447] transition-colors font-semibold disabled:bg-gray-400 flex items-center justify-center space-x-2 text-sm lg:text-base"
              >
                <Phone className="w-4 h-4 lg:w-5 lg:h-5" />
                <span>{isLoading ? "Memproses..." : "Kirim via WhatsApp"}</span>
              </button>
            </form>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 lg:mt-16">
          <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8 border border-[#EEB6BB]">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-3 sm:mb-4 lg:mb-6 text-center">
              Lokasi Kami
            </h3>
            <div className="bg-gradient-to-br from-[#F9DADD] to-[#EEB6BB] h-32 sm:h-48 lg:h-64 rounded-lg flex items-center justify-center border border-[#EEB6BB]">
              <div className="text-center">
                <MapPin className="w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 text-[#CA7C83] mx-auto mb-2 sm:mb-4" />
                <p className="text-gray-600 text-xs sm:text-sm lg:text-base">
                  Peta Google Maps akan ditampilkan di sini
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;