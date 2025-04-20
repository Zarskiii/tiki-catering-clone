
import { Card, CardContent } from "@/components/ui/card";

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  rating: number;
}

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      quote: "Zar's Tiki Shack was the highlight of our company picnic! The shave ice was amazing and everyone loved choosing their own flavors and toppings. The tiki setup added so much fun to our event.",
      name: "Sarah Thompson",
      title: "Corporate Event Planner",
      rating: 5
    },
    {
      quote: "We hired Zar's for our daughter's graduation party and it was a huge hit! The service was professional and the shave ice was simply delicious. Will definitely book again!",
      name: "Mike Johnson",
      title: "Happy Parent",
      rating: 5
    },
    {
      quote: "The Ohana package was perfect for our neighborhood block party. The setup was impressive and the shave ice was some of the best we've ever had. Authentic Hawaiian flavors!",
      name: "Jennifer Roberts",
      title: "Community Organizer",
      rating: 5
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-tiki-blue/10 to-tiki-green/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-tiki-dark mb-4">
            What Our <span className="text-tiki-blue">Customers Say</span>
          </h2>
          <div className="w-24 h-1 bg-tiki-blue mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white shadow-lg">
              <CardContent className="pt-6 pb-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                
                <p className="text-gray-700 italic mb-6">"{testimonial.quote}"</p>
                
                <div>
                  <p className="font-bold text-tiki-dark">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.title}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
