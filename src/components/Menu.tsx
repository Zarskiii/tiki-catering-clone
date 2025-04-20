
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface FlavorItem {
  name: string;
  description: string;
  color: string;
}

const Menu = () => {
  const classicFlavors: FlavorItem[] = [
    { name: "Blue Hawaii", description: "Tropical blend of coconut and pineapple", color: "bg-blue-400" },
    { name: "Strawberry", description: "Sweet, ripe strawberry flavor", color: "bg-red-400" },
    { name: "Mango", description: "Juicy tropical mango taste", color: "bg-yellow-500" },
    { name: "Grape", description: "Sweet concord grape flavor", color: "bg-purple-500" },
    { name: "Cherry", description: "Bright, sweet cherry taste", color: "bg-red-600" },
    { name: "Lime", description: "Tangy citrus lime flavor", color: "bg-green-400" },
    { name: "Tiger's Blood", description: "Strawberry and coconut blend", color: "bg-red-500" },
    { name: "Pineapple", description: "Sweet tropical pineapple", color: "bg-yellow-400" },
  ];

  const premiumFlavors: FlavorItem[] = [
    { name: "Lava Flow", description: "Strawberry, coconut and banana blend", color: "bg-red-500" },
    { name: "Passion Orange", description: "Tangy passion fruit and orange", color: "bg-orange-400" },
    { name: "Lychee", description: "Sweet and fragrant lychee", color: "bg-pink-300" },
    { name: "Guava", description: "Tropical guava sweetness", color: "bg-pink-400" },
    { name: "Matcha", description: "Authentic Japanese green tea", color: "bg-green-600" },
    { name: "Coconut", description: "Creamy tropical coconut", color: "bg-gray-100" },
    { name: "POG", description: "Passion fruit, Orange, and Guava blend", color: "bg-orange-500" },
    { name: "Mai Tai", description: "Tropical rum-inspired flavor (non-alcoholic)", color: "bg-amber-500" },
  ];

  const toppings = [
    "Sweet Cream", "Condensed Milk", "Mochi Pieces", "Fresh Fruit", "Coconut Flakes", "Li Hing Mui Powder"
  ];

  return (
    <section id="menu" className="py-16 bg-tiki-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-tiki-dark mb-4">
            Our <span className="text-tiki-blue">Menu</span>
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Experience our authentic Hawaiian shave ice with premium flavors made from the finest ingredients. 
            Choose from our selection of classic and premium options.
          </p>
          <div className="w-24 h-1 bg-tiki-blue mx-auto mt-4"></div>
        </div>

        <Tabs defaultValue="classic" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="classic" className="text-lg py-3">Classic Flavors</TabsTrigger>
            <TabsTrigger value="premium" className="text-lg py-3">Premium Flavors</TabsTrigger>
          </TabsList>
          
          <TabsContent value="classic">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {classicFlavors.map((flavor, index) => (
                <Card key={index} className="overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                  <div className={`h-4 w-full ${flavor.color}`}></div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg mb-1">{flavor.name}</h3>
                    <p className="text-gray-600 text-sm">{flavor.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="premium">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {premiumFlavors.map((flavor, index) => (
                <Card key={index} className="overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                  <div className={`h-4 w-full ${flavor.color}`}></div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg mb-1">{flavor.name}</h3>
                    <p className="text-gray-600 text-sm">{flavor.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-12 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center text-tiki-dark mb-6">
            Add-On <span className="text-tiki-pink">Toppings</span>
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {toppings.map((topping, index) => (
              <span 
                key={index}
                className="bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200 text-gray-700"
              >
                {topping}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
