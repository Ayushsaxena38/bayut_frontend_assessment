import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PropertyCard from "@/components/PropertyCart";

export default function Home() {
  // app/page.tsx

  const properties = [
    { 
      id: 1, 
      price: "1,250,000", 
      title: "Luxury Apartment in Marina", 
      location: "Dubai Marina, Dubai", 
      // Dubai Skyline/High-rise view
      img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800" 
    },
    { 
      id: 2, 
      price: "85,000", 
      title: "Spacious 1BHK for Rent", 
      location: "JVC, Dubai", 
      // Clean interior apartment
      img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800" 
    },
    { 
      id: 3, 
      price: "3,500,000", 
      title: "Modern Villa with Pool", 
      location: "Palm Jumeirah", 
      // Modern House Exterior
      img: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800" 
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />

      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Popular Properties</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {properties.map((prop) => (
            <PropertyCard 
              key={prop.id}
              price={prop.price}
              title={prop.title}
              location={prop.location}
              image={prop.img}
            />
          ))}
        </div>
      </section>

      {/* Quick Footer for structure */}
      <footer className="bg-gray-900 text-white py-8 mt-12 text-center">
        <p>&copy; 2024 Bayut Clone Assessment. All rights reserved.</p>
      </footer>
    </main>
  );
}