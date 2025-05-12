import { Card } from "@/components/ui/card";
import { useEffect, useState, useRef } from "react";
import { Badge } from "@/components/ui/badge";

interface FlavorItem {
  name: string;
  description: string;
  color: string;
  popular?: boolean;
}

const Menu = () => {
  const allFlavors: FlavorItem[] = [
    // Classic flavors
    { name: "Blue Hawaii", description: "Tropical blend of coconut and pineapple", color: "bg-blue-400", popular: true },
    { name: "Strawberry", description: "Sweet, ripe strawberry flavor", color: "bg-red-400" },
    { name: "Mango", description: "Juicy tropical mango taste", color: "bg-yellow-500", popular: true },
    { name: "Grape", description: "Sweet concord grape flavor", color: "bg-purple-500" },
    { name: "Cherry", description: "Bright, sweet cherry taste", color: "bg-red-600" },
    { name: "Lime", description: "Tangy citrus lime flavor", color: "bg-green-400" },
    { name: "Tiger's Blood", description: "Strawberry and coconut blend", color: "bg-red-500", popular: true },
    { name: "Pineapple", description: "Sweet tropical pineapple", color: "bg-yellow-400" },
    // Premium flavors
    { name: "Blue Raspberry", description: "Delicious Blue Raspberry blend", color: "bg-blue-500" },
    { name: "Pina Colada", description: "The tasty Hawaiian classic", color: "bg-yellow-200" },
    { name: "Banana", description: "Sweet and fragrant banana", color: "bg-yellow-300" },
    { name: "Guava", description: "Tropical guava sweetness", color: "bg-pink-400" },
    { name: "Peach", description: "Perfectly peachy", color: "bg-orange-300" },
    { name: "Coconut", description: "Creamy tropical coconut", color: "bg-gray-100" },
    { name: "POG", description: "Passion fruit, Orange, and Guava blend", color: "bg-orange-500", popular: true },
    { name: "Mai Tai", description: "Tropical rum-inspired flavor (non-alcoholic)", color: "bg-amber-500" },
  ];

  const toppings = [
    "Sweet Cream", "Condensed Milk", "Fresh Fruit", "Coconut Flakes"
  ];

  const carouselRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  
  useEffect(() => {
    if (!isPaused && carouselRef.current) {
      const scrollInterval = setInterval(() => {
        if (carouselRef.current) {
          const scrollAmount = 1;
          carouselRef.current.scrollLeft += scrollAmount;
          
          // Reset scroll position if we've reached the end
          if (carouselRef.current.scrollLeft >= 
              carouselRef.current.scrollWidth - carouselRef.current.clientWidth) {
            carouselRef.current.scrollLeft = 0;
          }
        }
      }, 30);
      
      return () => clearInterval(scrollInterval);
    }
  }, [isPaused]);

  return (
    <section id="menu" className="py-20 bg-gradient-to-b from-tiki-light to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold text-tiki-dark mb-4">
            Our <span className="text-tiki-blue">Flavors</span>
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Experience our authentic Hawaiian shave ice with premium flavors made from the finest ingredients.
            All our syrups are crafted to deliver the perfect tropical taste. We are currently working to provide a large selection of Artificial Dye-Free, and Sugar-Free options.
          </p>
          <div className="w-24 h-1 bg-tiki-blue mx-auto mt-6"></div>
        </div>

        <div className="w-full max-w-5xl mx-auto overflow-hidden">
          <div 
            ref={carouselRef}
            className="flex overflow-x-auto py-4 scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="flex space-x-6 pr-8">
              {allFlavors.map((flavor, index) => (
                <Card 
                  key={index} 
                  className="flex-shrink-0 overflow-hidden shadow-md hover:shadow-xl transition-all 
                  duration-300 transform hover:-translate-y-2 hover:z-10 relative cursor-pointer"
                  style={{ width: "200px", height: "140px" }}
                >
                  <div className={`h-4 w-full ${flavor.color}`}></div>
                  <div className="p-4">
                    <div className="flex justify-between items-start">
                      <h3 className="font-bold text-base mb-1">{flavor.name}</h3>
                      {flavor.popular && (
                        <Badge className="bg-tiki-pink text-white hover:bg-tiki-pink/90">Popular</Badge>
                      )}
                    </div>
                    <p className="text-gray-600 text-sm">{flavor.description}</p>
                  </div>
                </Card>
              ))}
              {/* Duplicate the first few cards to create a seamless loop */}
              {allFlavors.slice(0, 5).map((flavor, index) => (
                <Card 
                  key={`dup-${index}`} 
                  className="flex-shrink-0 overflow-hidden shadow-md hover:shadow-xl transition-all 
                  duration-300 transform hover:-translate-y-2 hover:z-10 relative cursor-pointer"
                  style={{ width: "200px", height: "140px" }}
                >
                  <div className={`h-4 w-full ${flavor.color}`}></div>
                  <div className="p-4">
                    <div className="flex justify-between items-start">
                      <h3 className="font-bold text-base mb-1">{flavor.name}</h3>
                      {flavor.popular && (
                        <Badge className="bg-tiki-pink text-white hover:bg-tiki-pink/90">Popular</Badge>
                      )}
                    </div>
                    <p className="text-gray-600 text-sm">{flavor.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold text-center text-tiki-dark mb-6">
            Add-On <span className="text-tiki-pink">Toppings</span>
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {toppings.map((topping, index) => (
              <span 
                key={index}
                className="bg-tiki-light px-5 py-2 rounded-full shadow-sm border border-gray-200 text-gray-700 transition-all hover:bg-tiki-pink hover:text-white hover:border-tiki-pink cursor-pointer"
              >
                {topping}
              </span>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500 italic"></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
