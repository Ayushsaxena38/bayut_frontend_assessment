import Image from "next/image";
import { Bed, Bath, Square } from "lucide-react";

export default function PropertyCard({ price, title, location, image }: any) {
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg transition border overflow-hidden cursor-pointer group">
      <div className="relative h-48 w-full overflow-hidden">
        <Image 
          src={image} 
          alt={title} 
          fill 
          className="object-cover group-hover:scale-105 transition duration-500"
        />
        <span className="absolute bottom-2 left-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
          Ready to Move
        </span>
      </div>
      
      <div className="p-4">
        <div className="text-zinc-700 font-bold text-lg mb-1">{price} AED</div>
        <h3 className="font-semibold text-gray-800 truncate">{title}</h3>
        <p className="text-gray-500 text-sm mb-3">{location}</p>
        
        <div className="flex items-center gap-4 text-gray-600 text-sm mt-2 pt-3 border-t">
          <div className="flex items-center gap-1"><Bed size={16}/> 3</div>
          <div className="flex items-center gap-1"><Bath size={16}/> 2</div>
          <div className="flex items-center gap-1"><Square size={16}/> 1,200 sqft</div>
        </div>
      </div>
    </div>
  );
}