
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { TikiButton } from "@/components/ui/tiki-button";

const Catering = () => {
  const cateringPackages = [
    {
      name: "Keiki Package",
      description: "Perfect for smaller gatherings and children's parties",
      price: "$299",
      details: [
        "Up to 50 servings of shave ice",
        "8 classic flavors",
        "3 toppings",
        "2-hour service",
        "Decorative tiki setup",
        "Biodegradable cups & spoons"
      ]
    },
    {
      name: "Ohana Package",
      description: "Our most popular option for medium-sized events",
      price: "$549",
      featured: true,
      details: [
        "Up to 100 servings of shave ice",
        "12 flavors (classic & premium)",
        "All toppings included",
        "3-hour service",
        "Full tiki bar setup",
        "Custom event signage",
        "Biodegradable cups & spoons"
      ]
    },
    {
      name: "Luau Package",
      description: "The ultimate shave ice experience for large events",
      price: "$899",
      details: [
        "Up to 200 servings of shave ice",
        "All flavors available",
        "All toppings included",
        "4-hour service",
        "Premium tiki bar setup with decorations",
        "2 service attendants",
        "Custom menu with event branding",
        "Biodegradable cups & spoons"
      ]
    },
  ];

  return (
    <section id="catering" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-tiki-dark mb-4">
            Catering <span className="text-tiki-blue">Services</span>
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Bring the tropical taste and fun of Hawaiian shave ice to your next event! 
            Our mobile catering service brings the full tiki experience right to you.
          </p>
          <div className="w-24 h-1 bg-tiki-blue mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {cateringPackages.map((pkg, index) => (
            <Card key={index} className={`relative overflow-hidden shadow-lg ${pkg.featured ? 'ring-2 ring-tiki-blue' : ''}`}>
              {pkg.featured && (
                <div className="absolute top-0 right-0 bg-tiki-blue text-white py-1 px-4 text-sm font-medium">
                  Most Popular
                </div>
              )}
              <CardHeader className="bg-gradient-to-r from-tiki-blue/10 to-tiki-green/10 pb-4">
                <CardTitle className="text-2xl font-bold text-tiki-dark">{pkg.name}</CardTitle>
                <CardDescription>{pkg.description}</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-3xl font-bold text-tiki-dark mb-6">{pkg.price}</p>
                <ul className="space-y-3">
                  {pkg.details.map((detail, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="w-5 h-5 text-tiki-green mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span className="text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="pt-2 pb-6">
                <TikiButton variant={pkg.featured ? "default" : "outline"} className="w-full">
                  Book This Package
                </TikiButton>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-tiki-light rounded-xl p-8 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/3">
              <img 
                src="https://images.unsplash.com/photo-1536935664562-1ce92aa3e999?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=986&q=80" 
                alt="Custom Catering Options" 
                className="rounded-lg w-full h-auto shadow-md"
              />
            </div>
            
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold text-tiki-dark mb-4">Custom Event Packages</h3>
              <p className="text-gray-700 mb-6">
                Have something specific in mind? We create custom catering packages tailored to your event's unique needs. 
                From corporate functions and weddings to school events and community gatherings, we'll work with you to create 
                the perfect shave ice experience.
              </p>
              
              <div className="flex gap-4">
                <TikiButton variant="secondary">Request Custom Quote</TikiButton>
                <TikiButton variant="outline">Learn More</TikiButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Catering;
