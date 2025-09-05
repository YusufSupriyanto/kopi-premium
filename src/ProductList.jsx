import React from "react";

export default function ProductList({ products }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.map((product, i) => (
                <div
                    key={i}
                    className="bg-white rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden flex flex-col"
                >
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-48 object-cover"
                        width={300}
                        height={200}
                        loading="lazy"
                    />
                    <div className="p-4 text-left flex-1 flex flex-col justify-between">
                        <div>
                            <h4 className="text-lg font-semibold">{product.name}</h4>
                            <p className="text-sm text-gray-600">{product.desc}</p>
                            <p className="text-green-700 font-bold mt-2">{product.price}</p>
                            <span className="inline-block mt-2 text-xs bg-gray-100 px-2 py-1 rounded-full">
                                {product.category}
                            </span>
                        </div>

                        <div className="mt-4 flex gap-2">
                            {/* Tombol Add to Cart */}
                            <button className="flex-1 bg-red-600 text-white py-2 rounded-xl shadow hover:bg-red-700 transition">
                                🛒 Add to Cart
                            </button>

                            {/* Tombol Beli Sekarang */}
                            <button className="flex-1 bg-green-700 text-white py-2 rounded-xl shadow hover:bg-green-800 transition">
                                Beli Sekarang
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
