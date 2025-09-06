import React, { useState, useEffect } from 'react';
import { ShoppingCart, Heart, Star, Plus, Minus, Search, Filter, Phone, Mail, MapPin, Clock, Award, Users, Truck, Shield } from 'lucide-react';

// Mock Database
const mockProducts = [
  {
    id: 1,
    name: "Papan Akrilik Box Cream",
    price: 150000,
    image: "/src/assets/akrilik-box-cream.jpeg",
    category: "akrilik",
    rating: 4.8,
    reviews: 24,
    description: "Papan bunga akrilik ukuran 45x65 cm dengan pilihan warna bunga pink, putih, biru, cream, dan ungu. Cocok untuk berbagai momen spesial."
  },
  {
    id: 2,
    name: "Papan Bunga Akrilik Box Pink",
    price: 150000,
    image: "/src/assets/akrilik-box-pink.jpeg",
    category: "akrilik",
    rating: 4.9,
    reviews: 18,
    description: "Ukuran 45x65 cm dengan pilihan warna bunga pink, putih,biru, cream, ungu"
  },
  {
    id: 3,
    name: "Papan Bunga Akrilik Bulat Cream",
    price: 100000,
    image: "/src/assets/akrilik-bulat-cream.jpeg",
    category: "akrilik",
    rating: 5.0,
    reviews: 32,
    description: "Ukuran diamter 60cm dengan pilihan warna bunga pink, putih,biru, cream, ungu"
  },
  {
    id: 4,
    name: "Papan Bunga Akrilik Bulat Pink",
    price: 100000,
    image: "/src/assets/akrilik-bulat-pink.jpeg",
    category: "akrilik", 
    rating: 4.7,
    reviews: 15,
    description: "ukuran diamter 60cm pilihan warna bunga pink, putih,biru, cream, ungu"
  },
  {
    id: 5,
    name: "Papan Bunga Akrilik Kubah",
    price: 100000,
    image: "/src/assets/akrilik-kubah.jpeg",
    category: "akrilik",
    rating: 4.6,
    reviews: 21,
    description: "Ukuran 45x65 cm dengan pilihan warna bunga pink, putih,biru, cream, ungu"
  },
  {
    id: 6,
    name: "Papan Bunga Box Kubah",
    price:110000,
    image: "/src/assets/box-kubah.jpeg",
    category: "box",
    rating: 4.5,
    reviews: 12,
    description: "Ukuran 50x70 dengan pilihan warna bunga pink, putih, mauve, biru, coklat, hijau sage, merah"
  },
  {
    id: 7,
    name: "Papan Bunga Box Persegi",
    price: 110000,
    image: "/src/assets/box-persegi.jpeg",
    category: "box",
    rating: 5.0,
    reviews: 12,
    description: "Ukuran 50x70 dengan pilihan warna bunga pink, putih, mauve, biru, coklat, hijau sage, merah"
  },
  {
    id: 8,
    name: "Papan Bunga Box Wave",
    price: 110000,
    image: "/src/assets/box-wave.jpeg",
    category: "box",
    rating: 4.9,
    reviews: 30,
    description: "Ukuran 50x70 dengan pilihan warna bunga pink, putih, mauve, biru, coklat, hijau sage, merah"
  }
];

// Header Component
const Header = ({ cartItems, onCartToggle, currentPage, onPageChange }) => {
  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => onPageChange('home')}>
              <img 
                src="/src/assets/logo.jpeg" 
                alt="Dianttha.flo Logo" 
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <h1 className="text-2xl font-bold text-blue-400">Dianttha.flo</h1>
                <span className="text-gray-600 text-sm">Papan Bunga Akrilik</span>
              </div>
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-6">
            <button 
              onClick={() => onPageChange('home')}
              className={`transition ${currentPage === 'home' ? 'text-blue-400 font-semibold' : 'text-gray-600 hover:text-blue-400'}`}
            >
              Home
            </button>
            <button 
              onClick={() => onPageChange('products')}
              className={`transition ${currentPage === 'products' ? 'text-blue-400 font-semibold' : 'text-gray-600 hover:text-blue-400'}`}
            >
              Produk
            </button>
            <button 
              onClick={() => onPageChange('about')}
              className={`transition ${currentPage === 'about' ? 'text-blue-400 font-semibold' : 'text-gray-600 hover:text-blue-400'}`}
            >
              Tentang
            </button>
            <button 
              onClick={() => onPageChange('contact')}
              className={`transition ${currentPage === 'contact' ? 'text-blue-400 font-semibold' : 'text-gray-600 hover:text-blue-400'}`}
            >
              Kontak
            </button>
          </nav>
          
          <button 
            onClick={onCartToggle}
            className="relative bg-blue-400 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-600 transition"
          >
            <ShoppingCart className="w-5 h-5" />
            <span>Keranjang</span>
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {cartItems.length}
              </span>
            )}
          </button>
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
    <div className="bg-gray-50 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Cari papan bunga..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            />
          </div>
          
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <select
              value={selectedCategory}
              onChange={(e) => onCategoryChange(e.target.value)}
              className="pl-10 pr-8 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-transparent bg-white"
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

// Product Card Component
const ProductCard = ({ product, onAddToCart, onToggleFavorite, isFavorite }) => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR'
    }).format(price);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        <button
          onClick={() => onToggleFavorite(product.id)}
          className={`absolute top-3 right-3 p-2 rounded-full ${
            isFavorite ? 'bg-red-500 text-white' : 'bg-white text-gray-400 hover:text-red-500'
          } transition-all`}
        >
          <Heart className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
        </button>
        
        <div className="absolute bottom-3 left-3 bg-blue-400 text-white px-2 py-1 rounded-full text-xs">
          {product.category.replace('-', ' ').toUpperCase()}
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-bold text-lg text-gray-800 mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
        
        <div className="flex items-center mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating) 
                    ? 'text-yellow-400 fill-current' 
                    : 'text-gray-300'
                }`} 
              />
            ))}
          </div>
          <span className="text-sm text-gray-600 ml-2">
            {product.rating} ({product.reviews} ulasan)
          </span>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-blue-400">
            {formatPrice(product.price)}
          </span>
          <button
            onClick={() => onAddToCart(product)}
            className="bg-blue-400 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition flex items-center space-x-2"
          >
            <Plus className="w-4 h-4" />
            <span>Tambah</span>
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
      <div className="bg-white w-full max-w-md h-full overflow-y-auto">
        <div className="p-4 border-b">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">Keranjang Belanja</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-2xl"
            >
              ×
            </button>
          </div>
        </div>
        
        <div className="p-4">
          {cartItems.length === 0 ? (
            <p className="text-gray-500 text-center py-8">Keranjang masih kosong</p>
          ) : (
            <>
              {!showCheckoutForm ? (
                <>
                  {cartItems.map(item => (
                    <div key={item.id} className="flex items-center space-x-3 mb-4 pb-4 border-b">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium text-sm">{item.name}</h4>
                        <p className="text-blue-400 font-bold">{formatPrice(item.price)}</p>
                        
                        <div className="flex items-center space-x-2 mt-2">
                          <button
                            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                            className="bg-gray-200 p-1 rounded"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-2">{item.quantity}</span>
                          <button
                            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                            className="bg-gray-200 p-1 rounded"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                          <button
                            onClick={() => onRemoveItem(item.id)}
                            className="text-red-500 text-sm ml-2"
                          >
                            Hapus
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  <div className="pt-4 border-t">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-lg font-bold">Total:</span>
                      <span className="text-2xl font-bold text-blue-400">
                        {formatPrice(totalPrice)}
                      </span>
                    </div>
                    
                    <button 
                      onClick={() => setShowCheckoutForm(true)}
                      className="w-full bg-blue-400 text-white py-3 rounded-lg hover:bg-blue-500 transition"
                    >
                      Lanjut ke Checkout
                    </button>
                  </div>
                </>
              ) : (
                <div className="space-y-4">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold">Data Pemesanan</h3>
                    <button
                      onClick={() => setShowCheckoutForm(false)}
                      className="text-blue-400 text-sm"
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
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300"
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
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300"
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
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300"
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
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300"
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
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300"
                      placeholder="Catatan khusus untuk pesanan"
                      rows={2}
                    />
                  </div>

                  <div className="bg-gray-50 p-3 rounded-lg">
                    <h4 className="font-semibold mb-2">Ringkasan Pesanan:</h4>
                    {cartItems.map(item => (
                      <div key={item.id} className="flex justify-between text-sm mb-1">
                        <span>{item.name} ({item.quantity}x)</span>
                        <span>{formatPrice(item.price * item.quantity)}</span>
                      </div>
                    ))}
                    <div className="border-t pt-2 mt-2 font-bold">
                      <div className="flex justify-between">
                        <span>Total:</span>
                        <span className="text-blue-400">{formatPrice(totalPrice)}</span>
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

// New Home Page Component - Landing Style
const HomePage = ({ onPageChange }) => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-400 via-blue-500 to-blue-800 text-white overflow-hidden min-h-screen">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative container mx-auto px-4 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[70vh]">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                  Papan Bunga
                  <span className="block text-yellow-300 text-5xl lg:text-6xl">Elegan & Berkelas</span>
                </h1>
                <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed">
                  Menciptakan momen tak terlupakan dengan papan bunga premium yang dibuat khusus untuk setiap perayaan istimewa Anda.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-6">
                <button 
                  onClick={() => onPageChange('products')}
                  className="bg-white text-blue-600 px-10 py-5 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
                >
                  Jelajahi Koleksi
                </button>
                <button 
                  onClick={() => onPageChange('contact')}
                  className="bg-transparent border-3 border-white text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-white hover:text-blue-600 transition-all"
                >
                  Konsultasi Gratis
                </button>
              </div>
            </div>
            
            <div className="relative flex justify-center">
              <div className="relative">
                <div className="bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-lg rounded-full p-12 border border-white/30">
                  <div className="text-center space-y-6">
                    <div className="flex justify-center">
                      <img 
                        src="/src/assets/logo.jpeg" 
                        alt="Dianttha.flo Logo" 
                        className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-2xl"
                      />
                    </div>
                    <div className="space-y-2">
                      <div className="text-4xl font-bold">250+</div>
                      <div className="text-blue-100 text-lg">Papan Bunga Terjual</div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-300 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-pink-300 rounded-full animate-bounce"></div>
                <div className="absolute top-1/2 -right-8 w-4 h-4 bg-green-300 rounded-full animate-ping"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Mengapa Memilih Dianttha.flo?</h2>
            <p className="text-xl text-gray-600">Kepercayaan pelanggan adalah prioritas utama kami</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              <div className="bg-blue-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Pelanggan Puas</h3>
              <p className="text-gray-600 mb-4">Rating kepuasan tinggi dari ratusan pelanggan setia</p>
              <div className="text-3xl font-bold text-orange-500">4.9</div>
              <div className="text-sm text-gray-500">Rating Bintang</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 via-blue-400 to-blue-800 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-5xl font-bold mb-6">Wujudkan Momen Istimewa Anda</h2>
            <p className="text-2xl text-blue-100 leading-relaxed">
              Jangan biarkan momen spesial berlalu tanpa sentuhan keindahan. 
              Hubungi kami sekarang dan dapatkan konsultasi gratis untuk papan bunga impian Anda.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 pt-8">
              <button 
                onClick={() => onPageChange('contact')}
                className="bg-white text-blue-600 px-12 py-5 rounded-2xl font-bold text-xl hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl"
              >
                <Phone className="w-6 h-6 inline mr-3" />
                Hubungi Sekarang
              </button>
              <button 
                onClick={() => onPageChange('products')}
                className="bg-yellow-400 text-gray-800 px-12 py-5 rounded-2xl font-bold text-xl hover:bg-yellow-300 transition-all transform hover:scale-105 shadow-2xl"
              >
                <Star className="w-6 h-6 inline mr-3" />
                Lihat Katalog
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// Products Page Component
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
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-blue-400 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Katalog Produk</h1>
          <p className="text-xl">Jelajahi semua koleksi papan bunga kami</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Kategori</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-transparent"
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
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-transparent"
                >
                  {sortOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            
            <div className="text-gray-600">
              Menampilkan {filteredAndSortedProducts.length} produk
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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

// About Page Component
const AboutPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-blue-400 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Tentang Dianttha.flo</h1>
          <p className="text-xl">Menghadirkan keindahan bunga dalam setiap momen spesial</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Cerita Kami</h2>
            <div className="space-y-4 text-gray-600">
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
          
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Mengapa Memilih Kami?</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Award className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Kualitas Premium</h4>
                  <p className="text-gray-600">Menggunakan bahan akrilik berkualitas tinggi dan bunga segar pilihan</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Users className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Tim Profesional</h4>
                  <p className="text-gray-600">Didukung oleh florist berpengalaman dan tim kreatif terbaik</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Truck className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Pengiriman Tepat Waktu</h4>
                  <p className="text-gray-600">Jaminan pengiriman sesuai jadwal untuk acara penting Anda</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Shield className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Garansi Kepuasan</h4>
                  <p className="text-gray-600">Komitmen untuk memastikan Anda 100% puas dengan produk kami</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Statistik Kepercayaan</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">500+</div>
              <div className="text-gray-600">Pelanggan Puas</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">1000+</div>
              <div className="text-gray-600">Papan Bunga Dibuat</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">50+</div>
              <div className="text-gray-600">Acara Sukses</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">4.8</div>
              <div className="text-gray-600">Rating Kepuasan</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Contact Page Component dengan simulasi form
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
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Create WhatsApp message
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
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-blue-400 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Hubungi Kami</h1>
          <p className="text-xl">Kami siap membantu Anda dengan senang hati</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Informasi Kontak</h2>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Alamat</h3>
                    <p className="text-gray-600">
                      Jl.Manyar Sakti Ujung, Panam
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Phone className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Telepon</h3>
                    <p className="text-gray-600">
                      0821-7185-0071
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Instagram</h3>
                    <p className="text-gray-600">
                      @dianttha.flo
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Clock className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Jam Operasional</h3>
                    <p className="text-gray-600">
                      Senin - Jumat: 08:00 - 18:00<br />
                      Sabtu: 08:00 - 16:00<br />
                      Minggu: 10:00 - 15:00
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Kirim Pesan</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-transparent"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-transparent"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-transparent"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-transparent"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-transparent"
                  placeholder="Tuliskan pesan Anda di sini..."
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-blue-400 text-white py-3 px-6 rounded-lg hover:bg-blue-500 transition-colors font-semibold disabled:bg-gray-400 flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>{isLoading ? 'Memproses...' : 'Kirim via WhatsApp'}</span>
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Lokasi Kami</h3>
            <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
              <p className="text-gray-600">Peta Google Maps akan ditampilkan di sini</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

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
    <div className="min-h-screen bg-gray-50">
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
    </div>
  );
};

export default App;