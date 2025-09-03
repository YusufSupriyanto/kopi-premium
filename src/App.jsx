// src/App.jsx
import React, { useState, useEffect } from "react";

// Komponen Carousel
function Carousel({ images }) {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 3000);
        return () => clearInterval(timer);
    }, [images.length]);

    return (
        <div className="relative w-full max-w-9xl h-full mx-auto overflow-hidden rounded-2xl shadow-lg">
            <img
                src={images[current].src}
                alt={images[current].alt}
                className="w-full h-full object-cover transition-all duration-700"
                loading="lazy"
            />
            {/* tombol navigasi */}
            <button
                onClick={() =>
                    setCurrent((prev) => (prev - 1 + images.length) % images.length)
                }
                className="absolute top-1/2 left-3 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
            >
                ◀
            </button>
            <button
                onClick={() => setCurrent((prev) => (prev + 1) % images.length)}
                className="absolute top-1/2 right-3 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
            >
                ▶
            </button>
        </div>
    );
}


//categories List
function Categories({ categories }) {
    return (
        <div className="flex flex-wrap gap-6 mt-8 justify-center">
            {categories.map((cat, i) => (
                <div
                    key={i}
                    className="bg-[#2C2C2C] rounded-xl shadow-lg overflow-hidden hover:scale-105 transition
                     w-[45%] sm:w-[30%] md:w-[22%] lg:w-[22%]"
                >
                    <img
                        src={cat.image}
                        alt={cat.name}
                        className="w-full h-32 sm:h-36 md:h-40 object-cover"
                    />
                    <div className="p-3 sm:p-4">
                        <h4 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2 text-[#C5A572]">
                            {cat.name}
                        </h4>
                        <p className="text-gray-300 text-xs sm:text-sm">{cat.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}


// Komponen Product List
function ProductList({ products }) {
    return (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
            {products.map((p, idx) => (
                <div
                    key={idx}
                    className="bg-white rounded-2xl shadow hover:shadow-lg transition p-4 flex flex-col"
                >
                    <img
                        src={p.image}
                        alt={p.name}
                        className="w-full h-full object-cover rounded-lg mb-4"
                        loading="lazy"
                    />
                    <h4 className="font-bold text-lg mb-2">{p.name}</h4>
                    <p className="text-gray-600 flex-grow">{p.desc}</p>
                    <span className="font-semibold text-green-700 mt-2">{p.price}</span>
                    <button className="mt-4 bg-[#C5A572] text-[#1B1B1B]  py-2 rounded-xl hover:bg-green-800">
                        Pesan
                    </button>
                </div>
            ))}
        </div>
    );
}




export default function App() {
    const carouselImages = [
        { src: "images/carousel/carousel_1.jpg", alt: "Promo Kopi 1" },
        { src: "images/carousel/carousel_2.jpg", alt: "Promo Kopi 2" },
        { src: "images/carousel/carousel_3.jpg", alt: "Promo Kopi 3" },
    ];

    const products = [
        {
            name: "Kopi Gayo Light Roast",
            desc: "Single origin Gayo dengan rasa fruity dan acidity segar.",
            price: "Rp125.000",
            image: "images/products/kopi-gayo.jpeg",
            category: "Light Roast",
        },
        {
            name: "Kopi Toraja Medium Roast",
            desc: "Rasa seimbang dengan aroma rempah khas Toraja.",
            price: "Rp120.000",
            image: "images/products/kopi-toraja.jpg",
            category: "Medium Roast",
        },
        {
            name: "Kopi Flores Dark Roast",
            desc: "Bold dan smoky dengan body penuh khas Flores Bajawa.",
            price: "Rp115.000",
            image: "images/products/kopi-flores.jpeg",
            category: "Dark Roast",
        },
        {
            name: "Kopi Kintamani Single Origin",
            desc: "Cita rasa jeruk segar khas Kintamani Bali.",
            price: "Rp130.000",
            image: "images/products/kopi-kintamani.jpg",
            category: "Single Origin Indonesia",
        },
        {
            name: "Kopi Decaf Premium",
            desc: "Nikmati kopi tanpa kafein, tetap nikmat tanpa gangguan tidur.",
            price: "Rp140.000",
            image: "images/products/kopi-decaf.jpeg",
            category: "Decaf Coffee",
        },
        {
            name: "House Blend Signature",
            desc: "Campuran biji kopi Nusantara untuk rasa seimbang dan kompleks.",
            price: "Rp110.000",
            image: "images/products/kopi-blend.jpeg",
            category: "House Blend",
        },
    ];


    const categories = [
        {
            name: "Light Roast",
            description: "Rasa fruity, floral, dengan acidity tinggi. Cocok untuk manual brew.",
            image: "images/categories/light_roast.jpg",
        },
        {
            name: "Medium Roast",
            description: "Seimbang antara rasa manis, asam, dan pahit. Cocok untuk espresso maupun manual brew.",
            image: "images/categories/medium_roast.jpg",
        },
        {
            name: "Dark Roast",
            description: "Rasa bold, pahit kuat, dan smoky. Cocok untuk espresso strong dan kopi susu.",
            image: "images/categories/dark_roast.jpg",
        },
        {
            name: "Single Origin Indonesia",
            description: "Kopi pilihan dari Gayo, Toraja, Kintamani, Flores, hingga Papua.",
            image: "images/categories/original.jpg",
        }
    ];



    return (
        <div className="min-h-screen bg-white text-gray-900">
            {/* Header */}
            <header className="bg-[#1B1B1B] text-white p-4 sticky top-0 shadow-md">
                <nav className="container mx-auto flex justify-between items-center">
                    <h1 className="text-xl font-bold">Kopi Organik Premium</h1>
                    <ul className="flex gap-4 text-sm">
                        <li><a href="#carousel" className="hover:underline">Promo</a></li>
                        <li><a href="#products" className="hover:underline">Produk</a></li>
                        <li><a href="#contact" className="hover:underline">Kontak</a></li>
                    </ul>
                </nav>
            </header>

            {/* Hero Carousel */}
            <section id="carousel" className="py-12 px-4">
                <Carousel images={carouselImages} />
            </section>

            {/* Category */}
            <div className="max-w-6xl mx-auto text-center">
                <h3 className="text-2xl font-semibold mb-8">Categories</h3>
                <Categories categories={categories} />
            </div>

            {/* Product List */}
            <section id="products" className="bg-gray-50 py-12 px-6">
                <div className="max-w-6xl mx-auto text-center">
                    <h3 className="text-2xl font-semibold mb-8">Produk Kami</h3>
                    <ProductList products={products} />
                </div>
            </section>

            {/* Contact */}
            <section id="contact" className="bg-[#1B1B1B] text-white py-12 px-6">
                <div className="max-w-3xl mx-auto text-center">
                    <h3 className="text-2xl font-semibold mb-4">Hubungi Kami</h3>
                    <p className="mb-6">Tertarik mencoba Kopi Organik Premium? Hubungi kami sekarang!</p>
                    <a
                        href="/dummy-page"
                        className="bg-white text-green-900 px-6 py-3 rounded-xl shadow hover:bg-gray-100 transition"
                    >
                        Kunjungi Halaman Lain
                    </a>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-[#1B1B1B] text-[#B0B0B0] py-6 text-center text-sm">
                <p>&copy; 2025 Kopi Nusantara. All rights reserved.</p>
            </footer>
        </div>
    );
}
