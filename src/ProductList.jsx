import React from "react";

export default function ProductList({ products }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.map((product, i) => (
                <div
                    key={i}
                    className="bg-white rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden"
                >
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-48 object-cover"
                        width={300}
                        height={200}
                        loading="lazy"
                    />
                    <div className="p-4 text-left">
                        <h4 className="text-lg font-semibold">{product.name}</h4>
                        <p className="text-sm text-gray-600">{product.desc}</p>
                        <p className="text-green-700 font-bold mt-2">{product.price}</p>
                        <span className="inline-block mt-2 text-xs bg-gray-100 px-2 py-1 rounded-full">
              {product.category}
            </span>
                    </div>
                </div>
            ))}
        </div>
    );
}
