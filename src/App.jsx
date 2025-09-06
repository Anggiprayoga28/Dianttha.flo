import React, { useState, useEffect } from 'react';
import { ShoppingCart, Heart, Star, Plus, Minus, Search, Filter, Phone, Mail, MapPin, Clock, Award, Users, Truck, Shield, Sparkles } from 'lucide-react';

// Mock Database
const mockProducts = [
  {
    id: 1,
    name: "Papan Akrilik Box Cream",
    price: 150000,
    image: "/akrilik-box-cream.png",
    category: "akrilik",
    rating: 4.8,
    reviews: 24,
    description: "Papan bunga akrilik ukuran 45x65 cm dengan pilihan warna bunga pink, putih, biru, cream, dan ungu. Cocok untuk berbagai momen spesial."
  },
  {
    id: 2,
    name: "Papan Bunga Akrilik Box Pink",
    price: 150000,
    image: "/akrilik-box-pink.png",
    category: "akrilik",
    rating: 4.9,
    reviews: 18,
    description: "Ukuran 45x65 cm dengan pilihan warna bunga pink, putih,biru, cream, ungu"
  },
  {
    id: 3,
    name: "Papan Bunga Akrilik Bulat Cream",
    price: 100000,
    image: "/akrilik-bulat-cream.png",
    category: "akrilik",
    rating: 5.0,
    reviews: 32,
    description: "Ukuran diamter 60cm dengan pilihan warna bunga pink, putih,biru, cream, ungu"
  },
  {
    id: 4,
    name: "Papan Bunga Akrilik Bulat Pink",
    price: 100000,
    image: "/akrilik-bulat-pink.png",
    category: "akrilik", 
    rating: 4.7,
    reviews: 15,
    description: "ukuran diamter 60cm pilihan warna bunga pink, putih,biru, cream, ungu"
  },
  {
    id: 5,
    name: "Papan Bunga Akrilik Kubah",
    price: 100000,
    image: "/akrilik-kubah.png",
    category: "akrilik",
    rating: 4.6,
    reviews: 21,
    description: "Ukuran 45x65 cm dengan pilihan warna bunga pink, putih,biru, cream, ungu"
  },
  {
    id: 6,
    name: "Papan Bunga Box Kubah",
    price:110000,
    image: "/box-kubah.png",
    category: "box",
    rating: 4.5,
    reviews: 12,
    description: "Ukuran 50x70 dengan pilihan warna bunga pink, putih, mauve, biru, coklat, hijau sage, merah"
  },
  {
    id: 7,
    name: "Papan Bunga Box Persegi",
    price: 110000,
    image: "/box-persegi.png",
    category: "box",
    rating: 5.0,
    reviews: 12,
    description: "Ukuran 50x70 dengan pilihan warna bunga pink, putih, mauve, biru, coklat, hijau sage, merah"
  },
  {
    id: 8,
    name: "Papan Bunga Box Wave",
    price: 110000,
    image: "/box-wave.png",
    category: "box",
    rating: 4.9,
    reviews: 30,
    description: "Ukuran 50x70 dengan pilihan warna bunga pink, putih, mauve, biru, coklat, hijau sage, merah"
  }
];

// Floating Petals Animation Component - Bentuk Bunga
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
            animationDuration: `${3 + Math.random() * 2}s`
          }}
        >
          <div className="relative w-6 h-6 lg:w-8 lg:h-8">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-1 h-1 bg-pink-600 rounded-full"></div>
            </div>
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-4 lg:w-3 lg:h-5 bg-pink-300 rounded-full opacity-60 animate-pulse"
                style={{
                  top: '50%',
                  left: '50%',
                  transformOrigin: '50% 100%',
                  transform: `translate(-50%, -100%) rotate(${i * 60}deg)`
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

  return <span>{count}{suffix}</span>;
};

// Header Component - Mobile Responsive
const Header = ({ cartItems, onCartToggle, currentPage, onPageChange }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 border-b-2 border-pink-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 lg:space-x-4">
            <div className="flex items-center space-x-2 lg:space-x-3 cursor-pointer group" onClick={() => onPageChange('home')}>
              <div className="relative">
                <img 
                  src="/logo.png" 
                  alt="Dianttha.flo Logo" 
                  className="w-8 h-8 lg:w-10 lg:h-10 rounded-full object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 rounded-full bg-pink-200 opacity-0 group-hover:opacity-20 transition-opacity"></div>
              </div>
              <div>
                <h1 className="text-lg lg:text-2xl font-bold text-pink-500 group-hover:text-pink-600 transition-colors">Dianttha.flo</h1>
                <span className="text-gray-600 text-xs lg:text-sm">Papan Bunga Akrilik</span>
              </div>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <button 
              onClick={() => onPageChange('home')}
              className={`transition-all duration-300 hover:scale-105 ${
                currentPage === 'home' 
                  ? 'text-pink-500 font-semibold border-b-2 border-pink-300' 
                  : 'text-gray-600 hover:text-pink-500'
              }`}
            >
              Home
            </button>
            <button 
              onClick={() => onPageChange('products')}
              className={`transition-all duration-300 hover:scale-105 ${
                currentPage === 'products' 
                  ? 'text-pink-500 font-semibold border-b-2 border-pink-300' 
                  : 'text-gray-600 hover:text-pink-500'
              }`}
            >
              Produk
            </button>
            <button 
              onClick={() => onPageChange('about')}
              className={`transition-all duration-300 hover:scale-105 ${
                currentPage === 'about' 
                  ? 'text-pink-500 font-semibold border-b-2 border-pink-300' 
                  : 'text-gray-600 hover:text-pink-500'
              }`}
            >
              Tentang
            </button>
            <button 
              onClick={() => onPageChange('contact')}
              className={`transition-all duration-300 hover:scale-105 ${
                currentPage === 'contact' 
                  ? 'text-pink-500 font-semibold border-b-2 border-pink-300' 
                  : 'text-gray-600 hover:text-pink-500'
              }`}
            >
              Kontak
            </button>
          </nav>

          <div className="flex items-center space-x-2">
            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-pink-500 hover:text-pink-600 transition-colors"
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <div className={`h-0.5 bg-current transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
                <div className={`h-0.5 bg-current transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
                <div className={`h-0.5 bg-current transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
              </div>
            </button>
            
            {/* Cart Button */}
            <button 
              onClick={onCartToggle}
              className="relative bg-gradient-to-r from-pink-400 to-pink-500 text-white px-3 py-2 lg:px-4 lg:py-2 rounded-lg flex items-center space-x-1 lg:space-x-2 hover:from-pink-500 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <ShoppingCart className="w-4 h-4 lg:w-5 lg:h-5" />
              <span className="text-sm lg:text-base">Keranjang</span>
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs animate-pulse">
                  {cartItems.length}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <nav className="pt-4 pb-2 border-t border-pink-100 mt-4">
            <div className="flex flex-col space-y-3">
              <button 
                onClick={() => {
                  onPageChange('home');
                  setIsMobileMenuOpen(false);
                }}
                className={`text-left py-2 px-4 rounded-lg transition-all duration-300 ${
                  currentPage === 'home' 
                    ? 'bg-pink-100 text-pink-600 font-semibold' 
                    : 'text-gray-600 hover:text-pink-500 hover:bg-pink-50'
                }`}
              >
                Home
              </button>
              <button 
                onClick={() => {
                  onPageChange('products');
                  setIsMobileMenuOpen(false);
                }}
                className={`text-left py-2 px-4 rounded-lg transition-all duration-300 ${
                  currentPage === 'products' 
                    ? 'bg-pink-100 text-pink-600 font-semibold' 
                    : 'text-gray-600 hover:text-pink-500 hover:bg-pink-50'
                }`}
              >
                Produk
              </button>
              <button 
                onClick={() => {
                  onPageChange('about');
                  setIsMobileMenuOpen(false);
                }}
                className={`text-left py-2 px-4 rounded-lg transition-all duration-300 ${
                  currentPage === 'about' 
                    ? 'bg-pink-100 text-pink-600 font-semibold' 
                    : 'text-gray-600 hover:text-pink-500 hover:bg-pink-50'
                }`}
              >
                Tentang
              </button>
              <button 
                onClick={() => {
                  onPageChange('contact');
                  setIsMobileMenuOpen(false);
                }}
                className={`text-left py-2 px-4 rounded-lg transition-all duration-300 ${
                  currentPage === 'contact' 
                    ? 'bg-pink-100 text-pink-600 font-semibold' 
                    : 'text-gray-600 hover:text-pink-500 hover:bg-pink-50'
                }`}
              >
                Kontak
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

// Search and Filter Component
const SearchFilter = ({ searchTerm, onSearchChange, selectedCategory, onCategoryChange }) => {
  const categories = [
    { value: '', label: 'Semua Kategori' },
    { value: 'akrilik', label: 'Akrilik' },
    { value: 'box', label: 'Box' },
  ];

  return (
    <div className="bg-pink-50 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-pink-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Cari papan bunga..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-pink-200 rounded-lg focus:ring-2 focus:ring-pink-300 focus:border-transparent"
            />
          </div>
          
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-pink-400 w-5 h-5" />
            <select
              value={selectedCategory}
              onChange={(e) => onCategoryChange(e.target.value)}
              className="pl-10 pr-8 py-3 border border-pink-200 rounded-lg focus:ring-2 focus:ring-pink-300 focus:border-transparent bg-white"
            >
              {categories.map(category => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

// Product Card Component - Mobile Responsive
const ProductCard = ({ product, onAddToCart, onToggleFavorite, isFavorite }) => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR'
    }).format(price);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 border border-pink-100">
      <div className="relative">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-40 lg:h-48 object-cover transition-transform duration-500 hover:scale-110"
        />
        <button
          onClick={() => onToggleFavorite(product.id)}
          className={`absolute top-3 right-3 p-2 rounded-full transition-all duration-300 transform hover:scale-110 ${
            isFavorite 
              ? 'bg-pink-500 text-white shadow-lg' 
              : 'bg-white text-pink-400 hover:text-pink-500 hover:bg-pink-50'
          }`}
        >
          <Heart className={`w-4 h-4 lg:w-5 lg:h-5 ${isFavorite ? 'fill-current' : ''}`} />
        </button>
        
        <div className="absolute bottom-3 left-3 bg-gradient-to-r from-pink-400 to-pink-500 text-white px-2 lg:px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
          {product.category.replace('-', ' ').toUpperCase()}
        </div>
      </div>
      
      <div className="p-3 lg:p-4">
        <h3 className="font-bold text-base lg:text-lg text-gray-800 mb-2 hover:text-pink-600 transition-colors line-clamp-2">{product.name}</h3>
        <p className="text-gray-600 text-xs lg:text-sm mb-3 line-clamp-2">{product.description}</p>
        
        <div className="flex items-center mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`w-3 h-3 lg:w-4 lg:h-4 transition-colors ${
                  i < Math.floor(product.rating) 
                    ? 'text-yellow-400 fill-current' 
                    : 'text-gray-300'
                }`} 
              />
            ))}
          </div>
          <span className="text-xs lg:text-sm text-gray-600 ml-2">
            {product.rating} ({product.reviews} ulasan)
          </span>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-lg lg:text-2xl font-bold text-pink-500">
            {formatPrice(product.price)}
          </span>
          <button
            onClick={() => onAddToCart(product)}
            className="bg-gradient-to-r from-pink-400 to-pink-500 text-white px-3 lg:px-4 py-2 rounded-lg hover:from-pink-500 hover:to-pink-600 transition-all duration-300 flex items-center space-x-1 lg:space-x-2 transform hover:scale-105 shadow-md hover:shadow-lg"
          >
            <Plus className="w-3 h-3 lg:w-4 lg:h-4" />
            <span className="text-sm lg:text-base">Tambah</span>
          </button>
        </div>
      </div>
    </div>
  );
};

// Cart Component dengan simulasi pengiriman WhatsApp
const Cart = ({ isOpen, cartItems, onClose, onUpdateQuantity, onRemoveItem }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    notes: ''
  });
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR'
    }).format(price);
  };

  const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  const handleInputChange = (e) => {
    setCustomerInfo({
      ...customerInfo,
      [e.target.name]: e.target.value
    });
  };

  const sendOrderToWhatsApp = () => {
    if (!customerInfo.name || !customerInfo.phone) {
      alert('Mohon lengkapi data nama dan nomor telepon');
      return;
    }

    setIsLoading(true);
    
    try {
      // Prepare order details for WhatsApp
      const cartItemsText = cartItems.map(item => 
        `- ${item.name} (${item.quantity}x) = ${formatPrice(item.price * item.quantity)}`
      ).join('\n');

      const orderMessage = `*PESANAN BARU - Dianttha.flo*\n\n` +
        `*Detail Pelanggan:*\n` +
        `Nama: ${customerInfo.name}\n` +
        `Email: ${customerInfo.email || '-'}\n` +
        `Telepon: ${customerInfo.phone}\n` +
        `Alamat: ${customerInfo.address || '-'}\n\n` +
        `*Detail Pesanan:*\n${cartItemsText}\n\n` +
        `*Total: ${formatPrice(totalPrice)}*\n\n` +
        `*Catatan:* ${customerInfo.notes || '-'}\n\n` +
        `*Tanggal Pesanan:* ${new Date().toLocaleDateString('id-ID')}`;

      // WhatsApp business number (ganti dengan nomor WhatsApp bisnis Anda)
      const whatsappNumber = '6282171850071'; // Format: 62 untuk Indonesia
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(orderMessage)}`;
      
      // Open WhatsApp
      window.open(whatsappUrl, '_blank');

      alert('Pesanan akan dikirim melalui WhatsApp. Silakan lanjutkan di aplikasi WhatsApp yang terbuka.');
      
      // Reset form and cart
      setCustomerInfo({
        name: '',
        email: '',
        phone: '',
        address: '',
        notes: ''
      });
      setShowCheckoutForm(false);
      onClose();
      
    } catch (error) {
      console.error('Error preparing order:', error);
      alert('Terjadi kesalahan. Silakan coba lagi atau hubungi kami langsung.');
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
      <div className="bg-white w-full max-w-md h-full overflow-y-auto border-l-4 border-pink-300">
        <div className="p-4 border-b bg-gradient-to-r from-pink-50 to-pink-100">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-pink-600">Keranjang Belanja</h2>
            <button
              onClick={onClose}
              className="text-pink-500 hover:text-pink-700 text-2xl transition-colors"
            >
              ×
            </button>
          </div>
        </div>
        
        <div className="p-4">
          {cartItems.length === 0 ? (
            <div className="text-center py-8">
              <div className="text-pink-300 mb-4">
                <ShoppingCart className="w-16 h-16 mx-auto" />
              </div>
              <p className="text-gray-500">Keranjang masih kosong</p>
            </div>
          ) : (
            <>
              {!showCheckoutForm ? (
                <>
                  {cartItems.map(item => (
                    <div key={item.id} className="flex items-center space-x-3 mb-4 pb-4 border-b border-pink-100">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-lg border border-pink-200"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium text-sm">{item.name}</h4>
                        <p className="text-pink-500 font-bold">{formatPrice(item.price)}</p>
                        
                        <div className="flex items-center space-x-2 mt-2">
                          <button
                            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                            className="bg-pink-100 p-1 rounded hover:bg-pink-200 transition-colors"
                          >
                            <Minus className="w-3 h-3 text-pink-600" />
                          </button>
                          <span className="px-2 font-semibold">{item.quantity}</span>
                          <button
                            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                            className="bg-pink-100 p-1 rounded hover:bg-pink-200 transition-colors"
                          >
                            <Plus className="w-3 h-3 text-pink-600" />
                          </button>
                          <button
                            onClick={() => onRemoveItem(item.id)}
                            className="text-red-500 text-sm ml-2 hover:text-red-700 transition-colors"
                          >
                            Hapus
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  <div className="pt-4 border-t border-pink-100">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-lg font-bold">Total:</span>
                      <span className="text-2xl font-bold text-pink-500">
                        {formatPrice(totalPrice)}
                      </span>
                    </div>
                    
                    <button 
                      onClick={() => setShowCheckoutForm(true)}
                      className="w-full bg-gradient-to-r from-pink-400 to-pink-500 text-white py-3 rounded-lg hover:from-pink-500 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                      Lanjut ke Checkout
                    </button>
                  </div>
                </>
              ) : (
                <div className="space-y-4">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-pink-600">Data Pemesanan</h3>
                    <button
                      onClick={() => setShowCheckoutForm(false)}
                      className="text-pink-500 text-sm hover:text-pink-700 transition-colors"
                    >
                      Kembali
                    </button>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={customerInfo.name}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-pink-200 rounded-lg focus:ring-2 focus:ring-pink-300"
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
                      className="w-full px-3 py-2 border border-pink-200 rounded-lg focus:ring-2 focus:ring-pink-300"
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
                      className="w-full px-3 py-2 border border-pink-200 rounded-lg focus:ring-2 focus:ring-pink-300"
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
                      className="w-full px-3 py-2 border border-pink-200 rounded-lg focus:ring-2 focus:ring-pink-300"
                      placeholder="Alamat lengkap untuk pengiriman"
                      rows={3}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Catatan Tambahan
                    </label>
                    <textarea
                      name="notes"
                      value={customerInfo.notes}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-pink-200 rounded-lg focus:ring-2 focus:ring-pink-300"
                      placeholder="Catatan khusus untuk pesanan"
                      rows={2}
                    />
                  </div>

                  <div className="bg-pink-50 p-3 rounded-lg border border-pink-200">
                    <h4 className="font-semibold mb-2 text-pink-700">Ringkasan Pesanan:</h4>
                    {cartItems.map(item => (
                      <div key={item.id} className="flex justify-between text-sm mb-1">
                        <span>{item.name} ({item.quantity}x)</span>
                        <span>{formatPrice(item.price * item.quantity)}</span>
                      </div>
                    ))}
                    <div className="border-t border-pink-200 pt-2 mt-2 font-bold">
                      <div className="flex justify-between">
                        <span>Total:</span>
                        <span className="text-pink-500">{formatPrice(totalPrice)}</span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={sendOrderToWhatsApp}
                    disabled={isLoading}
                    className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition disabled:bg-gray-400 flex items-center justify-center space-x-2"
                  >
                    <Phone className="w-5 h-5" />
                    <span>{isLoading ? 'Memproses...' : 'Pesan via WhatsApp'}</span>
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

// New Home Page Component - Landing Style with Animations
const HomePage = ({ onPageChange }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      {/* Hero Section with Animations */}
      <div className="relative bg-gradient-to-br from-pink-200 via-pink-300 to-pink-500 text-white overflow-hidden min-h-screen">
        <FloatingPetals />
        <div className="absolute inset-0 bg-black/10"></div>
        
        {/* Animated Flower Elements */}
        <div className="absolute top-10 left-4 lg:left-10 opacity-30 animate-bounce" style={{ animationDelay: '1s' }}>
          <div className="relative w-16 h-16 lg:w-20 lg:h-20">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-3 h-3 bg-pink-600 rounded-full"></div>
            </div>
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-6 h-12 lg:w-8 lg:h-14 bg-pink-400 rounded-full opacity-80"
                style={{
                  top: '50%',
                  left: '50%',
                  transformOrigin: '50% 100%',
                  transform: `translate(-50%, -100%) rotate(${i * 45}deg)`
                }}
              ></div>
            ))}
          </div>
        </div>
        
        <div className="absolute top-20 right-4 lg:right-16 opacity-40 animate-pulse" style={{ animationDelay: '2s' }}>
          <div className="relative w-12 h-12 lg:w-16 lg:h-16">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
            </div>
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-4 h-8 lg:w-5 lg:h-10 bg-pink-300 rounded-full opacity-90"
                style={{
                  top: '50%',
                  left: '50%',
                  transformOrigin: '50% 100%',
                  transform: `translate(-50%, -100%) rotate(${i * 60}deg)`
                }}
              ></div>
            ))}
          </div>
        </div>
        
        <div className="absolute bottom-20 left-4 lg:left-20 opacity-20 animate-bounce" style={{ animationDelay: '0.5s' }}>
          <div className="relative w-10 h-10 lg:w-12 lg:h-12">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-2 h-2 bg-pink-200 rounded-full"></div>
            </div>
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-3 h-6 lg:w-4 lg:h-8 bg-white rounded-full opacity-80"
                style={{
                  top: '50%',
                  left: '50%',
                  transformOrigin: '50% 100%',
                  transform: `translate(-50%, -100%) rotate(${i * 72}deg)`
                }}
              ></div>
            ))}
          </div>
        </div>
        
        <div className="relative container mx-auto px-4 py-12 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[60vh] lg:min-h-[70vh]">
            <div className={`space-y-6 lg:space-y-8 text-center lg:text-left transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
              <div className="space-y-4 lg:space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                  <span className="inline-block animate-pulse">Papan Bunga</span>
                  <span className="block text-pink-100 text-3xl md:text-4xl lg:text-5xl xl:text-6xl animate-bounce" style={{ animationDelay: '0.5s' }}>
                    Elegan & Berkelas
                  </span>
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl text-pink-50 leading-relaxed animate-fade-in-up px-4 lg:px-0" style={{ animationDelay: '1s' }}>
                  Menciptakan momen tak terlupakan dengan papan bunga premium yang dibuat khusus untuk setiap perayaan istimewa Anda.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 px-4 lg:px-0">
                <button 
                  onClick={() => onPageChange('products')}
                  className="bg-white text-pink-600 px-6 lg:px-10 py-4 lg:py-5 rounded-xl font-bold text-base lg:text-lg hover:bg-pink-50 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl animate-bounce-in"
                  style={{ animationDelay: '1.5s' }}
                >
                  <Sparkles className="w-5 h-5 lg:w-6 lg:h-6 inline mr-2 lg:mr-3" />
                  Jelajahi Koleksi
                </button>
                <button 
                  onClick={() => onPageChange('contact')}
                  className="bg-transparent border-2 lg:border-3 border-white text-white px-6 lg:px-10 py-4 lg:py-5 rounded-xl font-bold text-base lg:text-lg hover:bg-white hover:text-pink-600 transition-all animate-slide-in-right"
                  style={{ animationDelay: '2s' }}
                >
                  <Phone className="w-5 h-5 lg:w-6 lg:h-6 inline mr-2 lg:mr-3" />
                  Konsultasi Gratis
                </button>
              </div>
            </div>
            
            <div className={`relative flex justify-center mt-8 lg:mt-0 transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
              <div className="relative">
                <div className="bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-lg rounded-full p-8 lg:p-12 border border-white/30 animate-float">
                  <div className="text-center space-y-4 lg:space-y-6">
                    <div className="flex justify-center">
                      <div className="relative">
                        <img 
                          src="/logo.png" 
                          alt="Dianttha.flo Logo" 
                          className="w-24 h-24 lg:w-32 lg:h-32 rounded-full object-cover border-4 border-white shadow-2xl transition-transform hover:scale-110"
                        />
                        <div className="absolute inset-0 rounded-full bg-pink-300 opacity-20 animate-ping"></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-3xl lg:text-4xl font-bold">
                        <AnimatedCounter end={250} suffix="+" />
                      </div>
                      <div className="text-pink-50 text-base lg:text-lg">Papan Bunga Terjual</div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-2 -right-2 lg:-top-4 lg:-right-4 w-6 h-6 lg:w-8 lg:h-8 bg-pink-200 rounded-full animate-bounce"></div>
                <div className="absolute -bottom-4 -left-4 lg:-bottom-6 lg:-left-6 w-4 h-4 lg:w-6 lg:h-6 bg-white rounded-full animate-pulse"></div>
                <div className="absolute top-1/2 -right-6 lg:-right-8 w-3 h-3 lg:w-4 lg:h-4 bg-pink-100 rounded-full animate-ping"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="bg-white py-12 lg:py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pink-200 via-pink-300 to-pink-400"></div>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4 animate-fade-in-up">Mengapa Memilih Dianttha.flo?</h2>
            <p className="text-lg lg:text-xl text-gray-600 animate-fade-in-up px-4 lg:px-0" style={{ animationDelay: '0.5s' }}>Kepercayaan pelanggan adalah prioritas utama kami</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-6 lg:p-8 text-center transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border border-pink-200 animate-slide-in-up">
              <div className="bg-gradient-to-r from-pink-400 to-pink-500 w-16 h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center mx-auto mb-4 lg:mb-6 shadow-lg animate-bounce">
                <Award className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-2 lg:mb-3">Pelanggan Puas</h3>
              <p className="text-gray-600 mb-3 lg:mb-4 text-sm lg:text-base">Rating kepuasan tinggi dari ratusan pelanggan setia</p>
              <div className="text-2xl lg:text-3xl font-bold text-pink-500">
                <AnimatedCounter end={5} />
              </div>
              <div className="text-xs lg:text-sm text-gray-500">Rating Bintang</div>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-6 lg:p-8 text-center transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border border-pink-200 animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="bg-gradient-to-r from-pink-400 to-pink-500 w-16 h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center mx-auto mb-4 lg:mb-6 shadow-lg animate-bounce" style={{ animationDelay: '0.5s' }}>
                <Users className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-2 lg:mb-3">Pelanggan Setia</h3>
              <p className="text-gray-600 mb-3 lg:mb-4 text-sm lg:text-base">Klien yang terus mempercayai layanan kami</p>
              <div className="text-2xl lg:text-3xl font-bold text-pink-500">
                <AnimatedCounter end={500} suffix="+" />
              </div>
              <div className="text-xs lg:text-sm text-gray-500">Pelanggan</div>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-6 lg:p-8 text-center transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border border-pink-200 animate-slide-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="bg-gradient-to-r from-pink-400 to-pink-500 w-16 h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center mx-auto mb-4 lg:mb-6 shadow-lg animate-bounce" style={{ animationDelay: '1s' }}>
                <Truck className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-2 lg:mb-3">Pengiriman Tepat</h3>
              <p className="text-gray-600 mb-3 lg:mb-4 text-sm lg:text-base">Selalu tepat waktu untuk acara penting Anda</p>
              <div className="text-2xl lg:text-3xl font-bold text-pink-500">99%</div>
              <div className="text-xs lg:text-sm text-gray-500">Ketepatan Waktu</div>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-6 lg:p-8 text-center transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border border-pink-200 animate-slide-in-up" style={{ animationDelay: '0.6s' }}>
              <div className="bg-gradient-to-r from-pink-400 to-pink-500 w-16 h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center mx-auto mb-4 lg:mb-6 shadow-lg animate-bounce" style={{ animationDelay: '1.5s' }}>
                <Shield className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-2 lg:mb-3">Garansi Kualitas</h3>
              <p className="text-gray-600 mb-3 lg:mb-4 text-sm lg:text-base">Jaminan kualitas terbaik untuk setiap produk</p>
              <div className="text-2xl lg:text-3xl font-bold text-pink-500">100%</div>
              <div className="text-xs lg:text-sm text-gray-500">Garansi</div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Products Preview */}
      <div className="bg-pink-50 py-12 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4 animate-fade-in-up">Koleksi Unggulan</h2>
            <p className="text-lg lg:text-xl text-gray-600 animate-fade-in-up px-4 lg:px-0" style={{ animationDelay: '0.5s' }}>Papan bunga terpopuler pilihan pelanggan</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-8 lg:mb-12">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 border border-pink-200 animate-slide-in-left">
              <div className="h-40 lg:h-48 bg-gradient-to-br from-pink-100 to-pink-200 flex items-center justify-center">
                <Sparkles className="w-12 h-12 lg:w-16 lg:h-16 text-pink-500" />
              </div>
              <div className="p-4 lg:p-6">
                <h3 className="text-lg lg:text-xl font-bold text-gray-800 mb-2">Akrilik Premium</h3>
                <p className="text-gray-600 mb-3 lg:mb-4 text-sm lg:text-base">Desain elegan dengan bahan akrilik berkualitas tinggi</p>
                <div className="text-xl lg:text-2xl font-bold text-pink-500 mb-3 lg:mb-4">Mulai Rp 100.000</div>
                <button 
                  onClick={() => onPageChange('products')}
                  className="w-full bg-gradient-to-r from-pink-400 to-pink-500 text-white py-2 lg:py-3 rounded-lg hover:from-pink-500 hover:to-pink-600 transition-all text-sm lg:text-base"
                >
                  Lihat Koleksi
                </button>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 border border-pink-200 animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="h-40 lg:h-48 bg-gradient-to-br from-pink-100 to-pink-200 flex items-center justify-center">
                <Heart className="w-12 h-12 lg:w-16 lg:h-16 text-pink-500" />
              </div>
              <div className="p-4 lg:p-6">
                <h3 className="text-lg lg:text-xl font-bold text-gray-800 mb-2">Box Eksklusif</h3>
                <p className="text-gray-600 mb-3 lg:mb-4 text-sm lg:text-base">Rangkaian bunga dalam box dengan sentuhan mewah</p>
                <div className="text-xl lg:text-2xl font-bold text-pink-500 mb-3 lg:mb-4">Mulai Rp 110.000</div>
                <button 
                  onClick={() => onPageChange('products')}
                  className="w-full bg-gradient-to-r from-pink-400 to-pink-500 text-white py-2 lg:py-3 rounded-lg hover:from-pink-500 hover:to-pink-600 transition-all text-sm lg:text-base"
                >
                  Lihat Koleksi
                </button>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 border border-pink-200 animate-slide-in-right md:col-span-2 lg:col-span-1" style={{ animationDelay: '0.4s' }}>
              <div className="h-40 lg:h-48 bg-gradient-to-br from-pink-100 to-pink-200 flex items-center justify-center">
                <Star className="w-12 h-12 lg:w-16 lg:h-16 text-pink-500" />
              </div>
              <div className="p-4 lg:p-6">
                <h3 className="text-lg lg:text-xl font-bold text-gray-800 mb-2">Custom Design</h3>
                <p className="text-gray-600 mb-3 lg:mb-4 text-sm lg:text-base">Desain khusus sesuai keinginan dan tema acara Anda</p>
                <div className="text-xl lg:text-2xl font-bold text-pink-500 mb-3 lg:mb-4">Konsultasi Gratis</div>
                <button 
                  onClick={() => onPageChange('contact')}
                  className="w-full bg-gradient-to-r from-pink-400 to-pink-500 text-white py-2 lg:py-3 rounded-lg hover:from-pink-500 hover:to-pink-600 transition-all text-sm lg:text-base"
                >
                  Hubungi Kami
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 text-white py-12 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <FloatingPetals />
        
        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-6 lg:space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6 animate-pulse">Wujudkan Momen Istimewa Anda</h2>
            <p className="text-lg md:text-xl lg:text-2xl text-pink-50 leading-relaxed animate-fade-in-up px-4 lg:px-0">
              Jangan biarkan momen spesial berlalu tanpa sentuhan keindahan. 
              Hubungi kami sekarang dan dapatkan konsultasi gratis untuk papan bunga impian Anda.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 lg:gap-6 pt-6 lg:pt-8 px-4 lg:px-0">
              <button 
                onClick={() => onPageChange('contact')}
                className="bg-white text-pink-600 px-8 lg:px-12 py-4 lg:py-5 rounded-2xl font-bold text-lg lg:text-xl hover:bg-pink-50 transition-all transform hover:scale-105 shadow-2xl animate-bounce-in"
              >
                <Phone className="w-5 h-5 lg:w-6 lg:h-6 inline mr-2 lg:mr-3" />
                Hubungi Sekarang
              </button>
              <button 
                onClick={() => onPageChange('products')}
                className="bg-pink-200 text-pink-800 px-8 lg:px-12 py-4 lg:py-5 rounded-2xl font-bold text-lg lg:text-xl hover:bg-pink-100 transition-all transform hover:scale-105 shadow-2xl animate-bounce-in"
                style={{ animationDelay: '0.5s' }}
              >
                <Sparkles className="w-5 h-5 lg:w-6 lg:h-6 inline mr-2 lg:mr-3" />
                Lihat Katalog
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-in-left {
          0% { opacity: 0; transform: translateX(-50px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes slide-in-right {
          0% { opacity: 0; transform: translateX(50px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes slide-in-up {
          0% { opacity: 0; transform: translateY(50px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounce-in {
          0% { opacity: 0; transform: scale(0.3); }
          50% { opacity: 1; transform: scale(1.05); }
          70% { transform: scale(0.9); }
          100% { opacity: 1; transform: scale(1); }
        }
        
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-fade-in-up { animation: fade-in-up 1s ease-out forwards; }
        .animate-slide-in-left { animation: slide-in-left 1s ease-out forwards; }
        .animate-slide-in-right { animation: slide-in-right 1s ease-out forwards; }
        .animate-slide-in-up { animation: slide-in-up 1s ease-out forwards; }
        .animate-bounce-in { animation: bounce-in 1s ease-out forwards; }
      `}</style>
    </>
  );
};

// Products Page, About Page, Contact Page components tetap sama seperti sebelumnya...
// (Saya skip karena tidak ada perubahan dari versi sebelumnya)

// Main App Component
const App = () => {
  const [products] = useState(mockProducts);
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [currentPage, setCurrentPage] = useState('home');

  const addToCart = (product) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === product.id);
      if (existingItem) {
        return prev.map(item =>
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
    setCartItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const toggleFavorite = (id) => {
    setFavorites(prev =>
      prev.includes(id)
        ? prev.filter(fav => fav !== id)
        : [...prev, id]
    );
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'products':
        return (
          <ProductsPage
            products={products}
            onAddToCart={addToCart}
            onToggleFavorite={toggleFavorite}
            favorites={favorites}
          />
        );
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return (
          <HomePage
            onPageChange={setCurrentPage}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-pink-50">
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
      
      {/* Footer - Mobile Responsive */}
      <footer className="bg-gradient-to-r from-pink-400 to-pink-500 text-white py-8 lg:py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
                <img 
                  src="/logo.png" 
                  alt="Dianttha.flo Logo" 
                  className="w-8 h-8 lg:w-10 lg:h-10 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-lg lg:text-xl font-bold">Dianttha.flo</h3>
                  <span className="text-pink-200 text-xs lg:text-sm">Papan Bunga Akrilik</span>
                </div>
              </div>
              <p className="text-pink-100 mb-4 text-sm lg:text-base">
                Menciptakan momen tak terlupakan dengan papan bunga premium untuk setiap perayaan istimewa Anda.
              </p>
            </div>
            
            <div className="text-center md:text-left">
              <h4 className="text-base lg:text-lg font-semibold mb-4">Navigasi</h4>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => setCurrentPage('home')}
                    className="text-pink-200 hover:text-white transition-colors text-sm lg:text-base"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setCurrentPage('products')}
                    className="text-pink-200 hover:text-white transition-colors text-sm lg:text-base"
                  >
                    Produk
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setCurrentPage('about')}
                    className="text-pink-200 hover:text-white transition-colors text-sm lg:text-base"
                  >
                    Tentang
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setCurrentPage('contact')}
                    className="text-pink-200 hover:text-white transition-colors text-sm lg:text-base"
                  >
                    Kontak
                  </button>
                </li>
              </ul>
            </div>
            
            <div className="text-center md:text-left">
              <h4 className="text-base lg:text-lg font-semibold mb-4">Kontak</h4>
              <ul className="space-y-2">
                <li className="flex items-center justify-center md:justify-start space-x-2">
                  <Phone className="w-3 h-3 lg:w-4 lg:h-4" />
                  <span className="text-pink-200 text-sm lg:text-base">0821-7185-0071</span>
                </li>
                <li className="flex items-center justify-center md:justify-start space-x-2">
                  <Mail className="w-3 h-3 lg:w-4 lg:h-4" />
                  <span className="text-pink-200 text-sm lg:text-base">@dianttha.flo</span>
                </li>
                <li className="flex items-center justify-center md:justify-start space-x-2">
                  <MapPin className="w-3 h-3 lg:w-4 lg:h-4" />
                  <span className="text-pink-200 text-sm lg:text-base">Jl.Manyar Sakti Ujung, Panam</span>
                </li>
              </ul>
            </div>
            
            <div className="text-center md:text-left">
              <h4 className="text-base lg:text-lg font-semibold mb-4">Jam Operasional</h4>
              <div className="space-y-1 text-pink-200 text-sm lg:text-base">
                <p>Senin - Jumat: 08:00 - 18:00</p>
                <p>Sabtu: 08:00 - 16:00</p>
                <p>Minggu: 10:00 - 15:00</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-pink-300 mt-6 lg:mt-8 pt-6 lg:pt-8 text-center">
            <p className="text-pink-200 text-sm lg:text-base">
              &copy; 2024 Dianttha.flo. Semua hak cipta dilindungi.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Products Page Component - Mobile Responsive
const ProductsPage = ({ products, onAddToCart, onToggleFavorite, favorites }) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortBy, setSortBy] = useState('name');

  const categories = [
    { value: '', label: 'Semua Kategori' },
    { value: 'akrilik', label: 'Akrilik' },
    { value: 'box', label: 'Box' },
  ];

  const sortOptions = [
    { value: 'name', label: 'Nama A-Z' },
    { value: 'price-low', label: 'Harga Termurah' },
    { value: 'price-high', label: 'Harga Termahal' },
    { value: 'rating', label: 'Rating Tertinggi' },
  ];

  const filteredAndSortedProducts = products
    .filter(product => !selectedCategory || product.category === selectedCategory)
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        default:
          return a.name.localeCompare(b.name);
      }
    });

  return (
    <div className="bg-pink-50 min-h-screen">
      <div className="bg-gradient-to-r from-pink-400 to-pink-500 text-white py-8 lg:py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">Katalog Produk</h1>
          <p className="text-lg lg:text-xl">Jelajahi semua koleksi papan bunga kami</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6 lg:py-8">
        <div className="bg-white p-4 lg:p-6 rounded-lg shadow-md mb-6 lg:mb-8 border border-pink-200">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Kategori</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-3 lg:px-4 py-2 border border-pink-200 rounded-lg focus:ring-2 focus:ring-pink-300 focus:border-transparent text-sm lg:text-base"
                >
                  {categories.map(category => (
                    <option key={category.value} value={category.value}>
                      {category.label}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Urutkan</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 lg:px-4 py-2 border border-pink-200 rounded-lg focus:ring-2 focus:ring-pink-300 focus:border-transparent text-sm lg:text-base"
                >
                  {sortOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            
            <div className="text-gray-600 text-sm lg:text-base">
              Menampilkan {filteredAndSortedProducts.length} produk
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
          {filteredAndSortedProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              onToggleFavorite={onToggleFavorite}
              isFavorite={favorites.includes(product.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// About Page Component - Mobile Responsive
const AboutPage = () => {
  return (
    <div className="bg-pink-50 min-h-screen">
      <div className="bg-gradient-to-r from-pink-400 to-pink-500 text-white py-8 lg:py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">Tentang Dianttha.flo</h1>
          <p className="text-lg lg:text-xl">Menghadirkan keindahan bunga dalam setiap momen spesial</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12 lg:mb-16">
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4 lg:mb-6">Cerita Kami</h2>
            <div className="space-y-4 text-gray-600 text-sm lg:text-base">
              <p>
                Dianttha.flo hadir sebagai solusi terpercaya untuk memenuhi kebutuhan papan bunga berkualitas tinggi. 
                Dengan pengalaman bertahun-tahun dalam industri dekorasi bunga, kami memahami betapa pentingnya 
                momen-momen spesial dalam hidup Anda.
              </p>
              <p>
                Setiap papan bunga yang kami ciptakan dibuat dengan penuh perhatian terhadap detail, menggunakan 
                bahan-bahan pilihan dan teknik terbaik. Kami percaya bahwa bunga bukan hanya sekadar dekorasi, 
                tetapi juga cara untuk mengekspresikan perasaan dan menciptakan kenangan yang tak terlupakan.
              </p>
              <p>
                Visi kami adalah menjadi partner terpercaya dalam setiap perayaan dan momen istimewa Anda, 
                dengan menyediakan papan bunga yang tidak hanya indah secara visual, tetapi juga bermakna.
              </p>
            </div>
          </div>
          
          <div className="bg-white p-6 lg:p-8 rounded-lg shadow-lg border border-pink-200">
            <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-4 lg:mb-6">Mengapa Memilih Kami?</h3>
            <div className="space-y-4 lg:space-y-6">
              <div className="flex items-start space-x-3 lg:space-x-4">
                <div className="bg-pink-100 p-2 lg:p-3 rounded-full">
                  <Award className="w-5 h-5 lg:w-6 lg:h-6 text-pink-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 text-sm lg:text-base">Kualitas Premium</h4>
                  <p className="text-gray-600 text-xs lg:text-sm">Menggunakan bahan akrilik berkualitas tinggi dan bunga segar pilihan</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 lg:space-x-4">
                <div className="bg-pink-100 p-2 lg:p-3 rounded-full">
                  <Users className="w-5 h-5 lg:w-6 lg:h-6 text-pink-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 text-sm lg:text-base">Tim Profesional</h4>
                  <p className="text-gray-600 text-xs lg:text-sm">Didukung oleh florist berpengalaman dan tim kreatif terbaik</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 lg:space-x-4">
                <div className="bg-pink-100 p-2 lg:p-3 rounded-full">
                  <Truck className="w-5 h-5 lg:w-6 lg:h-6 text-pink-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 text-sm lg:text-base">Pengiriman Tepat Waktu</h4>
                  <p className="text-gray-600 text-xs lg:text-sm">Jaminan pengiriman sesuai jadwal untuk acara penting Anda</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 lg:space-x-4">
                <div className="bg-pink-100 p-2 lg:p-3 rounded-full">
                  <Shield className="w-5 h-5 lg:w-6 lg:h-6 text-pink-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 text-sm lg:text-base">Garansi Kepuasan</h4>
                  <p className="text-gray-600 text-xs lg:text-sm">Komitmen untuk memastikan Anda 100% puas dengan produk kami</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 lg:p-8 border border-pink-200">
          <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-4 lg:mb-6 text-center">Statistik Kepercayaan</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 text-center">
            <div>
              <div className="text-2xl lg:text-3xl font-bold text-pink-500 mb-2">
                <AnimatedCounter end={500} suffix="+" />
              </div>
              <div className="text-gray-600 text-sm lg:text-base">Pelanggan Puas</div>
            </div>
            <div>
              <div className="text-2xl lg:text-3xl font-bold text-pink-500 mb-2">
                <AnimatedCounter end={1000} suffix="+" />
              </div>
              <div className="text-gray-600 text-sm lg:text-base">Papan Bunga Dibuat</div>
            </div>
            <div>
              <div className="text-2xl lg:text-3xl font-bold text-pink-500 mb-2">
                <AnimatedCounter end={50} suffix="+" />
              </div>
              <div className="text-gray-600 text-sm lg:text-base">Acara Sukses</div>
            </div>
            <div>
              <div className="text-2xl lg:text-3xl font-bold text-pink-500 mb-2">
                <AnimatedCounter end={4.8} />
              </div>
              <div className="text-gray-600 text-sm lg:text-base">Rating Kepuasan</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Contact Page Component - Mobile Responsive
const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert('Mohon lengkapi semua field yang wajib diisi');
      return;
    }

    setIsLoading(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const whatsappMessage = `*PESAN BARU - Dianttha.flo*\n\n` +
        `*Detail Pengirim:*\n` +
        `Nama: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Telepon: ${formData.phone || '-'}\n` +
        `Subjek: ${formData.subject}\n\n` +
        `*Pesan:*\n${formData.message}\n\n` +
        `*Tanggal:* ${new Date().toLocaleDateString('id-ID')}`;

      const whatsappNumber = '6282171850071';
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
      
      window.open(whatsappUrl, '_blank');
      
      alert('Pesan akan dikirim melalui WhatsApp. Silakan lanjutkan di aplikasi WhatsApp yang terbuka.');
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
    } catch (error) {
      console.error('Error preparing message:', error);
      alert('Terjadi kesalahan. Silakan coba lagi atau hubungi kami langsung.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-pink-50 min-h-screen">
      <div className="bg-gradient-to-r from-pink-400 to-pink-500 text-white py-8 lg:py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">Hubungi Kami</h1>
          <p className="text-lg lg:text-xl">Kami siap membantu Anda dengan senang hati</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-6 lg:mb-8">Informasi Kontak</h2>
            
            <div className="space-y-4 lg:space-y-6">
              <div className="bg-white p-4 lg:p-6 rounded-lg shadow-md border border-pink-200">
                <div className="flex items-start space-x-3 lg:space-x-4">
                  <div className="bg-pink-100 p-2 lg:p-3 rounded-full">
                    <MapPin className="w-5 h-5 lg:w-6 lg:h-6 text-pink-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2 text-sm lg:text-base">Alamat</h3>
                    <p className="text-gray-600 text-sm lg:text-base">
                      Jl.Manyar Sakti Ujung, Panam
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 lg:p-6 rounded-lg shadow-md border border-pink-200">
                <div className="flex items-start space-x-3 lg:space-x-4">
                  <div className="bg-pink-100 p-2 lg:p-3 rounded-full">
                    <Phone className="w-5 h-5 lg:w-6 lg:h-6 text-pink-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2 text-sm lg:text-base">Telepon</h3>
                    <p className="text-gray-600 text-sm lg:text-base">
                      0821-7185-0071
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 lg:p-6 rounded-lg shadow-md border border-pink-200">
                <div className="flex items-start space-x-3 lg:space-x-4">
                  <div className="bg-pink-100 p-2 lg:p-3 rounded-full">
                    <Mail className="w-5 h-5 lg:w-6 lg:h-6 text-pink-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2 text-sm lg:text-base">Instagram</h3>
                    <p className="text-gray-600 text-sm lg:text-base">
                      @dianttha.flo
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 lg:p-6 rounded-lg shadow-md border border-pink-200">
                <div className="flex items-start space-x-3 lg:space-x-4">
                  <div className="bg-pink-100 p-2 lg:p-3 rounded-full">
                    <Clock className="w-5 h-5 lg:w-6 lg:h-6 text-pink-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2 text-sm lg:text-base">Jam Operasional</h3>
                    <p className="text-gray-600 text-sm lg:text-base">
                      Senin - Jumat: 08:00 - 18:00<br />
                      Sabtu: 08:00 - 16:00<br />
                      Minggu: 10:00 - 15:00
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 lg:p-8 rounded-lg shadow-lg border border-pink-200">
            <h2 className="text-xl lg:text-2xl font-bold text-gray-800 mb-4 lg:mb-6">Kirim Pesan</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nama Lengkap *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 lg:px-4 py-2 lg:py-3 border border-pink-200 rounded-lg focus:ring-2 focus:ring-pink-300 focus:border-transparent text-sm lg:text-base"
                  placeholder="Masukkan nama lengkap Anda"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 lg:px-4 py-2 lg:py-3 border border-pink-200 rounded-lg focus:ring-2 focus:ring-pink-300 focus:border-transparent text-sm lg:text-base"
                  placeholder="contoh@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Nomor Telepon
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-3 lg:px-4 py-2 lg:py-3 border border-pink-200 rounded-lg focus:ring-2 focus:ring-pink-300 focus:border-transparent text-sm lg:text-base"
                  placeholder="+62 812-3456-7890"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subjek *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 lg:px-4 py-2 lg:py-3 border border-pink-200 rounded-lg focus:ring-2 focus:ring-pink-300 focus:border-transparent text-sm lg:text-base"
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
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Pesan *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-3 lg:px-4 py-2 lg:py-3 border border-pink-200 rounded-lg focus:ring-2 focus:ring-pink-300 focus:border-transparent text-sm lg:text-base"
                  placeholder="Tuliskan pesan Anda di sini..."
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-pink-400 to-pink-500 text-white py-2 lg:py-3 px-4 lg:px-6 rounded-lg hover:from-pink-500 hover:to-pink-600 transition-colors font-semibold disabled:bg-gray-400 flex items-center justify-center space-x-2 text-sm lg:text-base"
              >
                <Phone className="w-4 h-4 lg:w-5 lg:h-5" />
                <span>{isLoading ? 'Memproses...' : 'Kirim via WhatsApp'}</span>
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 lg:mt-16">
          <div className="bg-white rounded-lg shadow-lg p-6 lg:p-8 border border-pink-200">
            <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-4 lg:mb-6 text-center">Lokasi Kami</h3>
            <div className="bg-gradient-to-br from-pink-100 to-pink-200 h-48 lg:h-64 rounded-lg flex items-center justify-center border border-pink-300">
              <div className="text-center">
                <MapPin className="w-12 h-12 lg:w-16 lg:h-16 text-pink-500 mx-auto mb-4" />
                <p className="text-gray-600 text-sm lg:text-base">Peta Google Maps akan ditampilkan di sini</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;