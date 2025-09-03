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
        <div className="relative w-full max-w-3xl mx-auto overflow-hidden rounded-2xl shadow-lg">
            <img
                src={images[current].src}
                alt={images[current].alt}
                className="w-full h-64 object-cover transition-all duration-700"
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
                        className="w-full h-40 object-cover rounded-lg mb-4"
                        loading="lazy"
                    />
                    <h4 className="font-bold text-lg mb-2">{p.name}</h4>
                    <p className="text-gray-600 flex-grow">{p.desc}</p>
                    <span className="font-semibold text-green-700 mt-2">{p.price}</span>
                    <button className="mt-4 bg-green-700 text-white py-2 rounded-xl hover:bg-green-800">
                        Pesan
                    </button>
                </div>
            ))}
        </div>
    );
}

export default function App() {
    const carouselImages = [
        { src: "https://via.placeholder.com/800x400", alt: "Promo Kopi 1" },
        { src: "https://via.placeholder.com/800x400", alt: "Promo Kopi 2" },
        { src: "https://via.placeholder.com/800x400", alt: "Promo Kopi 3" },
    ];

    const products = [
        {
            name: "Kopi Arabika Premium",
            desc: "Rasa halus dengan aroma khas.",
            price: "Rp120.000",
            image: "https://via.placeholder.com/400x300",
        },
        {
            name: "Kopi Robusta Premium",
            desc: "Rasa kuat, cocok untuk energi pagi.",
            price: "Rp95.000",
            image: "https://via.placeholder.com/400x300",
        },
        {
            name: "Kopi Blend Nusantara",
            desc: "Campuran arabika & robusta terbaik.",
            price: "Rp110.000",
            image: "https://via.placeholder.com/400x300",
        },
    ];

    return (
        <div className="min-h-screen bg-white text-gray-900">
            {/* Header */}
            <header className="bg-green-900 text-white p-4 sticky top-0 shadow-md">
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
                <h2 className="text-3xl font-bold text-center mb-6">
                    Nikmati Promo Terbaik
                </h2>
                <Carousel images={carouselImages} />
            </section>

            {/* Product List */}
            <section id="products" className="bg-gray-50 py-12 px-6">
                <div className="max-w-6xl mx-auto text-center">
                    <h3 className="text-2xl font-semibold mb-8">Produk Kami</h3>
                    <ProductList products={products} />
                </div>
            </section>

            {/* Contact */}
            <section id="contact" className="bg-green-900 text-white py-12 px-6">
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
            <footer className="bg-gray-800 text-gray-300 py-6 text-center text-sm">
                <p>&copy; 2025 Kopi Nusantara. All rights reserved.</p>
            </footer>
        </div>
    );
}
