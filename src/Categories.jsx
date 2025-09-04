import React from "react";

export default function Categories({ categories }) {
    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
                {categories.map((cat, i) => (
                    <a
                        key={i}
                        href="/dummy-category"
                        onClick={(e) => e.preventDefault()} // mencegah redirect
                        className="block bg-[#2C2C2C] rounded-xl shadow-lg overflow-hidden hover:scale-105 transition transform cursor-pointer"
                    >
                        <img
                            src={cat.image}
                            alt={cat.name}
                            width={400}
                            height={300}
                            loading="lazy"
                            className="w-full h-28 sm:h-32 md:h-36 lg:h-40 object-cover"
                        />
                        <div className="p-3 sm:p-4">
                            <h4 className="text-sm sm:text-base md:text-lg font-semibold mb-1 sm:mb-2 text-[#C5A572]">
                                {cat.name}
                            </h4>
                            <p className="text-gray-300 text-xs sm:text-sm">{cat.description}</p>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}
