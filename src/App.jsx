import React, { useState, useEffect, Suspense, lazy } from "react";

// Lazy load komponen berat
const Categories = lazy(() => import("./Categories.jsx"));
const ProductList = lazy(() => import("./ProductList"));

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
                width={1200}
                height={500}
                className="w-full h-full object-cover transition-all duration-700"
                loading={current === 0 ? "eager" : "lazy"}
                fetchpriority={current === 0 ? "high" : "auto"}
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

export default function App() {
    const carouselImages = [
        { src: "images/carousel/carousel_1.webp", alt: "Promo Kopi 1" },
        { src: "images/carousel/carousel_2.webp", alt: "Promo Kopi 2" },
        { src: "images/carousel/carousel_3.webp", alt: "Promo Kopi 3" },
    ];

    const products = [
        {
            name: "Kopi Gayo Light Roast",
            desc: "Single origin Gayo dengan rasa fruity dan acidity segar.",
            price: "Rp125.000",
            image: "images/products/kopi-gayo.webp",
            category: "Light Roast",
        },
        {
            name: "Kopi Toraja Medium Roast",
            desc: "Rasa seimbang dengan aroma rempah khas Toraja.",
            price: "Rp120.000",
            image: "images/products/kopi-toraja.webp",
            category: "Medium Roast",
        },
        {
            name: "Kopi Flores Dark Roast",
            desc: "Bold dan smoky dengan body penuh khas Flores Bajawa.",
            price: "Rp115.000",
            image: "images/products/kopi-flores.webp",
            category: "Dark Roast",
        },
        {
            name: "Kopi Kintamani Single Origin",
            desc: "Cita rasa jeruk segar khas Kintamani Bali.",
            price: "Rp130.000",
            image: "images/products/kopi-kintamani.webp",
            category: "Single Origin Indonesia",
        },
        {
            name: "Kopi Decaf Premium",
            desc: "Nikmati kopi tanpa kafein, tetap nikmat tanpa gangguan tidur.",
            price: "Rp140.000",
            image: "images/products/kopi-decaf.webp",
            category: "Decaf Coffee",
        },
        {
            name: "House Blend Signature",
            desc: "Campuran biji kopi Nusantara untuk rasa seimbang dan kompleks.",
            price: "Rp110.000",
            image: "images/products/kopi-blend.webp",
            category: "House Blend",
        },
    ];

    const categories = [
        {
            name: "Light Roast",
            description:
                "Rasa fruity, floral, dengan acidity tinggi. Cocok untuk manual brew.",
            image: "images/categories/light_roast.webp",
        },
        {
            name: "Medium Roast",
            description:
                "Seimbang antara rasa manis, asam, dan pahit. Cocok untuk espresso maupun manual brew.",
            image: "images/categories/medium_roast.webp",
        },
        {
            name: "Dark Roast",
            description:
                "Rasa bold, pahit kuat, dan smoky. Cocok untuk espresso strong dan kopi susu.",
            image: "images/categories/dark_roast.webp",
        },
        {
            name: "Single Origin Indonesia",
            description: "Kopi pilihan dari Gayo, Toraja, Kintamani, Flores, hingga Papua.",
            image: "images/categories/original.webp",
        },
    ];

    return (
        <div className="min-h-screen bg-white text-gray-900">
            {/* Header */}
            <header className="bg-[#1B1B1B] text-white p-4 sticky top-0 shadow-md">
                <nav className="container mx-auto flex justify-between items-center">
                    <h1 className="text-xl font-bold">Kopi Organik Premium</h1>
                    <ul className="flex gap-4 text-sm">
                        <li>
                            <a href="#carousel" className="hover:underline">
                                Promo
                            </a>
                        </li>
                        <li>
                            <a href="#products" className="hover:underline">
                                Produk
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="hover:underline">
                                Kontak
                            </a>
                        </li>
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
                <Suspense fallback={<div className="text-center">Loading...</div>}>
                    <Categories categories={categories} />
                </Suspense>
            </div>

            {/* Product List */}
            <section id="products" className="bg-gray-50 py-12 px-6">
                <div className="max-w-6xl mx-auto text-center">
                    <h3 className="text-2xl font-semibold mb-8">Produk Kami</h3>
                    <Suspense fallback={<div className="text-center">Loading...</div>}>
                        <ProductList products={products} />
                    </Suspense>
                </div>
            </section>

            {/* Contact */}
            <section id="contact" className="bg-[#1B1B1B] text-white py-12 px-6">
                <div className="max-w-3xl mx-auto text-center">
                    <h3 className="text-2xl font-semibold mb-4">Hubungi Kami</h3>
                    <p className="mb-6">
                        Tertarik mencoba Kopi Organik Premium? Hubungi kami sekarang!
                    </p>
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
