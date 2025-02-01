/* eslint-disable no-unused-vars */
import React from 'react';

const OurProduct = () => {
  const products = [
    {
      name: "Syltherine",
      description: "Stylish cafe chair",
      image: "/path/to/image1.jpg",
      price: 120,
      oldPrice: 150,
      rating: 4,
      badge: "NEW",
    },
    {
      name: "Elegant Dining Table",
      description: "Classic wooden dining table",
      image: "/path/to/image2.jpg",
      price: 300,
      oldPrice: 350,
      rating: 4,
      badge: "14%",
    },
    {
      name: "Cozy Corner Sofa",
      description: "Comfortable sectional sofa",
      image: "/path/to/image3.jpg",
      price: 550,
      oldPrice: 600,
      rating: 4,
      badge: "8%",
    },
    {
      name: "Modern Bed Frame",
      description: "Sleek and sturdy bed frame",
      image: "/path/to/image4.jpg",
      price: 250,
      oldPrice: 280,
      rating: 4,
      badge: "NEW",
    },
  ];

  return (
    <div className="p-6">
      <h3 className="text-2xl font-bold mb-6">Our Products</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((product, index) => (
          <div
            key={index}
            className="border shadow-lg rounded-2xl p-4 flex flex-col items-center"
          >
            <img
              src={product.image}
              alt={product.name}
              className="rounded-t-xl h-40 w-full object-cover mb-4"
            />
            {product.badge && (
              <span className="bg-green-600 text-white px-2 py-1 rounded-full text-xs">
                {product.badge}
              </span>
            )}
            <h4 className="text-lg font-semibold mt-2">{product.name}</h4>
            <p className="text-gray-500 mb-2">{product.description}</p>
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center">
                {Array.from({ length: 5 }, (_, index) => (
                  <span
                    key={index}
                    className={`h-5 w-5 inline-block ${
                      index < product.rating
                        ? "text-yellow-500"
                        : "text-gray-300"
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>
              <div>
                <span className="text-lg font-bold text-green-600">
                  ${product.price}
                </span>
                {product.oldPrice && (
                  <span className="line-through text-gray-400 ml-2">
                    ${product.oldPrice}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurProduct;
