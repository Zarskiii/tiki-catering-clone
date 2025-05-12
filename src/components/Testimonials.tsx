import { Card, CardContent } from "@/components/ui/card";
import { TikiButton } from "@/components/ui/tiki-button";
import { Star, ExternalLink, Facebook, MessageSquare } from "lucide-react";

interface Testimonial {
  quote: string;
  name: string;
  date: string;
  rating: number;
  source: "Google";
}

const Testimonials = () => {
  // These should be real Google reviews from your business
  const testimonials: Testimonial[] = [
    {
      quote: "Zar's Tiki Shack was the highlight of our company picnic! The shave ice was amazing and everyone loved choosing their own flavors and toppings. The tiki setup added so much fun to our event.",
      name: "Sarah Thompson",
      date: "September 2023",
      rating: 5,
      source: "Google"
    },
    {
      quote: "We hired Zar's for our daughter's graduation party and it was a huge hit! The service was professional and the shave ice was simply delicious. Will definitely book again!",
      name: "Mike Johnson",
      date: "July 2023",
      rating: 5,
      source: "Google"
    },
    {
      quote: "The Ohana package was perfect for our neighborhood block party. The setup was impressive and the shave ice was some of the best we've ever had. Authentic Hawaiian flavors!",
      name: "Jennifer Roberts",
      date: "August 2023",
      rating: 5,
      source: "Google"
    },
  ];

  // Social media and review URLs
  const googleReviewsUrl = "https://maps.app.goo.gl/DJWZDMWfGqufqpmu7";
  const facebookUrl = "https://www.facebook.com/SnoasisEagleMtn/";
  const yelpUrl = "https://www.yelp.com/biz/snoasis-eagle-mountain-2";

  return (
    <section className="py-16 bg-gradient-to-r from-tiki-blue/10 to-tiki-green/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-tiki-dark mb-4">
            What Our <span className="text-tiki-blue">Customers Say</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <Star className="h-6 w-6 fill-yellow-500 text-yellow-500" />
            <Star className="h-6 w-6 fill-yellow-500 text-yellow-500" />
            <Star className="h-6 w-6 fill-yellow-500 text-yellow-500" />
            <Star className="h-6 w-6 fill-yellow-500 text-yellow-500" />
            <Star className="h-6 w-6 fill-yellow-500/50 text-yellow-500/50" />
            <span className="text-tiki-dark font-bold ml-2">4.5</span>
            <span className="text-gray-700">from Google Reviews</span>
          </div>
          <div className="w-24 h-1 bg-tiki-blue mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white shadow-lg">
              <CardContent className="pt-6 pb-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>
                  <div className="flex items-center">
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-600 font-medium">
                      Google Review
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-700 italic mb-6">"{testimonial.quote}"</p>
                
                <div className="flex justify-between items-end">
                  <div>
                    <p className="font-bold text-tiki-dark">{testimonial.name}</p>
                    <p className="text-xs text-gray-500">{testimonial.date}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 text-center">
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <a 
              href={googleReviewsUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              <TikiButton variant="outline" className="inline-flex items-center gap-2">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0z" fill="#4285F4"/>
                  <path d="M12 4.8c-4.853 0-8.8 3.947-8.8 8.8 0 4.853 3.947 8.8 8.8 8.8 4.853 0 8.8-3.947 8.8-8.8 0-4.853-3.947-8.8-8.8-8.8zm0 15.2c-3.53 0-6.4-2.87-6.4-6.4s2.87-6.4 6.4-6.4 6.4 2.87 6.4 6.4-2.87 6.4-6.4 6.4z" fill="#ffffff"/>
                  <path d="M12 8.13c-2.579 0-4.667 2.088-4.667 4.667 0 2.579 2.088 4.667 4.667 4.667 2.579 0 4.667-2.088 4.667-4.667 0-2.579-2.088-4.667-4.667-4.667z" fill="#ffffff"/>
                </svg>
                Google Reviews
                <ExternalLink className="h-4 w-4" />
              </TikiButton>
            </a>
            
            <a 
              href={facebookUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              <TikiButton variant="outline" className="inline-flex items-center gap-2 border-[#1877F2] text-[#1877F2] hover:bg-[#1877F2] hover:text-white">
                <Facebook className="h-5 w-5" />
                Facebook
                <ExternalLink className="h-4 w-4" />
              </TikiButton>
            </a>
            
            <a 
              href={yelpUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              <TikiButton variant="outline" className="inline-flex items-center gap-2 border-[#D32323] text-[#D32323] hover:bg-[#D32323] hover:text-white">
                <MessageSquare className="h-5 w-5" />
                Yelp
                <ExternalLink className="h-4 w-4" />
              </TikiButton>
            </a>
          </div>
          
          <p className="text-sm text-gray-500 mt-4">
            Love our service? Please leave us a review on Google, Facebook, or Yelp!
          </p>
          
          <div className="mt-10 max-w-3xl mx-auto">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2861.991921903713!2d-111.9773749239917!3d40.361770371448614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x874d7d04b2c53a3d%3A0xd66a5d292443c9b0!2sSnoasis!5e1!3m2!1sen!2sus!4v1747009480175!5m2!1sen!2sus" 
              width="100%" 
              height="350" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg shadow-md"
              title="Zar's Tiki Shack DBA Snoasis"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
