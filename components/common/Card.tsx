import Image from "next/image";
import { IoBedSharp } from "react-icons/io5";
import { FaBath } from "react-icons/fa";
import { IoPeopleSharp } from "react-icons/io5";
import React from "react";
import { PropertyProps } from "@/interfaces/index";
import { CardProps } from "@/interfaces/index";


export default function Card({ property }: CardProps) {
  return (
    <div className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden w-full md:w-[320px]">
      {/* Image */}
      <div className="relative">
        <Image
          src={property.image}
          alt={property.name}
          width={400}
          height={260}
          className="object-cover h-56 w-full"
        />
        {/* Discount badge */}
        {property.discount && (
          <span className="absolute top-3 left-3 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
            {property.discount}% Off
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        {/* Title */}
        <h3 className="text-lg font-semibold">{property.name}</h3>
        {/* Location */}
        <p className="text-sm text-gray-500">
          {property.address.city}, {property.address.country}
        </p>
        {/* Categories */}
        <div className="flex flex-wrap gap-2">
          {property.category.map((cat) => (
            <span
              key={cat}
              className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full"
            >
              {cat}
            </span>
          ))}
        </div>

        {/* Icons */}
        <div className="flex items-center justify-between mt-3 text-gray-600">
          <div className="flex items-center gap-1">
            <IoBedSharp />
            <span className="text-sm">{property.offers.bed}</span>
          </div>
          <div className="flex items-center gap-1">
            <FaBath />
            <span className="text-sm">{property.offers.shower}</span>
          </div>
          <div className="flex items-center gap-1">
            <IoPeopleSharp />
            <span className="text-sm">{property.offers.occupants}</span>
          </div>
        </div>

        {/* Rating and price */}
        <div className="flex items-center justify-between mt-4">
          <span className="text-yellow-500 font-medium">
            ⭐ {property.rating}
          </span>
          <span className="text-lg font-bold">
            ${property.price}
            <span className="text-sm text-gray-500">/n</span>
          </span>
        </div>
      </div>
    </div>
  );
}
