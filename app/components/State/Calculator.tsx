'use client';
import React from 'react'

import { useState } from "react";

const dumpsterData = {
      Residential: [
        { size: "10 Yard", dimensions: "12' x 8' x 4'", capacity: "3 Tons", usage: "Home cleanouts, small renovations" },
        { size: "20 Yard", dimensions: "22' x 8' x 4.5'", capacity: "4 Tons", usage: "Mid-size projects, flooring" },
        { size: "30 Yard", dimensions: "22' x 8' x 6'", capacity: "5 Tons", usage: "Large renovations, bulky items" },
        { size: "40 Yard", dimensions: "22' x 8' x 8'", capacity: "6 Tons", usage: "Construction, demolition waste" },
      ],
      Commercial: [
        { size: "10 Yard", dimensions: "12' x 8' x 4'", capacity: "4 Tons", usage: "Retail cleanouts, light debris" },
        { size: "20 Yard", dimensions: "22' x 8' x 4.5'", capacity: "6 Tons", usage: "Offices, medium construction" },
        { size: "30 Yard", dimensions: "22' x 8' x 6'", capacity: "8 Tons", usage: "Heavy-duty construction" },
        { size: "40 Yard", dimensions: "22' x 8' x 8'", capacity: "10 Tons", usage: "Industrial waste disposal" },
      ],
    };
    
const Calculator = () => {
      const dumpsterData:any = {
  Residential: [
    { size: "10 Yard", dimensions: "12' x 8' x 4'", capacity: "3 Tons", usage: "Home cleanouts, small renovations" },
    { size: "20 Yard", dimensions: "22' x 8' x 4.5'", capacity: "4 Tons", usage: "Mid-size projects, flooring" },
    { size: "30 Yard", dimensions: "22' x 8' x 6'", capacity: "5 Tons", usage: "Large renovations, bulky items" },
    { size: "40 Yard", dimensions: "22' x 8' x 8'", capacity: "6 Tons", usage: "Construction, demolition waste" },
  ],
  Commercial: [
    { size: "10 Yard", dimensions: "12' x 8' x 4'", capacity: "4 Tons", usage: "Retail cleanouts, light debris" },
    { size: "20 Yard", dimensions: "22' x 8' x 4.5'", capacity: "6 Tons", usage: "Offices, medium construction" },
    { size: "30 Yard", dimensions: "22' x 8' x 6'", capacity: "8 Tons", usage: "Heavy-duty construction" },
    { size: "40 Yard", dimensions: "22' x 8' x 8'", capacity: "10 Tons", usage: "Industrial waste disposal" },
  ],
};

      const [rentalType, setRentalType] = useState("Residential");
      const [selectedSize, setSelectedSize] = useState(null);
      const [expandedAccordion, setExpandedAccordion] = useState("size");
    
      const handleSizeSelect = (size:any) => {
        setSelectedSize(size);
        setExpandedAccordion("dimensions");
      };
    
      return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl">
            <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Roll-Off Dumpster Rental Calculator
            </h1>
    
            {/* Rental Type Selection */}
            <div className="mb-4">
              <label className="block text-lg font-semibold mb-2">Select Rental Type</label>
              <div className="flex space-x-4">
                {["Residential", "Commercial"].map((type) => (
                  <button
                    key={type}
                    className={`px-4 py-2 rounded-lg text-white font-medium ${
                      rentalType === type ? "bg-blue-600" : "bg-gray-400"
                    }`}
                    onClick={() => setRentalType(type)}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
    
            {/* Size Accordion */}
            <div className="mb-4">
              <button
                onClick={() => setExpandedAccordion(expandedAccordion === "size" ? "" : "size")}
                className="w-full text-left bg-gray-200 px-4 py-3 font-semibold rounded-md"
              >
                Dumpster Size
              </button>
              {expandedAccordion === "size" && (
                <div className="mt-2 bg-gray-100 p-4 rounded-md">
                  {dumpsterData[rentalType].map((item:any) => (
                    <button
                      key={item.size}
                      className={`block w-full text-left px-4 py-2 rounded-lg ${
                        selectedSize === item.size ? "bg-blue-500 text-white" : "bg-gray-300"
                      }`}
                      onClick={() => handleSizeSelect(item.size)}
                    >
                      {item.size}
                    </button>
                  ))}
                </div>
              )}
            </div>
    
            {/* Dimensions Accordion */}
            {selectedSize && (
              <div className="mb-4">
                <button
                  onClick={() => setExpandedAccordion(expandedAccordion === "dimensions" ? "" : "dimensions")}
                  className="w-full text-left bg-gray-200 px-4 py-3 font-semibold rounded-md"
                >
                  Dimensions
                </button>
                {expandedAccordion === "dimensions" && (
                  <div className="mt-2 bg-gray-100 p-4 rounded-md">
                    <p className="text-gray-700">
                      {dumpsterData[rentalType].find((item:any) => item.size === selectedSize)?.dimensions}
                    </p>
                  </div>
                )}
              </div>
            )}
    
            {/* Capacity Accordion */}
            {selectedSize && (
              <div className="mb-4">
                <button
                  onClick={() => setExpandedAccordion(expandedAccordion === "capacity" ? "" : "capacity")}
                  className="w-full text-left bg-gray-200 px-4 py-3 font-semibold rounded-md"
                >
                  Capacity
                </button>
                {expandedAccordion === "capacity" && (
                  <div className="mt-2 bg-gray-100 p-4 rounded-md">
                    <p className="text-gray-700">
                      {dumpsterData[rentalType].find((item:any) => item.size === selectedSize)?.capacity}
                    </p>
                  </div>
                )}
              </div>
            )}
    
            {/* Usage Accordion */}
            {selectedSize && (
              <div className="mb-4">
                <button
                  onClick={() => setExpandedAccordion(expandedAccordion === "usage" ? "" : "usage")}
                  className="w-full text-left bg-gray-200 px-4 py-3 font-semibold rounded-md"
                >
                  Usage
                </button>
                {expandedAccordion === "usage" && (
                  <div className="mt-2 bg-gray-100 p-4 rounded-md">
                    <p className="text-gray-700">
                      {dumpsterData[rentalType].find((item:any) => item.size === selectedSize)?.usage}
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      );
}

export default Calculator


