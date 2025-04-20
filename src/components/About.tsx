
import { TikiButton } from "@/components/ui/tiki-button";

const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-tiki-dark mb-4">
            About <span className="text-tiki-blue">Zar's Tiki Shack</span>
          </h2>
          <div className="w-24 h-1 bg-tiki-blue mx-auto"></div>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 relative">
            <div className="rounded-2xl overflow-hidden shadow-xl transform -rotate-3">
              <img 
                src="https://images.unsplash.com/photo-1563589173312-d8c415bad446?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" 
                alt="Tiki themed shave ice setup" 
                className="w-full h-auto"
              />
            </div>
            
            {/* Decorations */}
            <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-tiki-green rounded-full opacity-70 shadow-lg"></div>
          </div>
          
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-semibold text-tiki-dark mb-4">Our Story</h3>
            <p className="text-gray-700 mb-6">
              Zar's Tiki Shack brings the authentic taste of Hawaii to your events through our premium mobile shave ice catering service. Founded by Zar, a passionate foodie with a love for Hawaiian culture, our mission is to share the joy of this refreshing treat at parties, corporate events, weddings, and gatherings all across the region.
            </p>
            <p className="text-gray-700 mb-6">
              Using only the finest ingredients and authentic techniques, we create deliciously fluffy shave ice topped with premium syrups in a rainbow of flavors. Our tiki-themed mobile setup brings the spirit of aloha directly to your event, creating a unique experience your guests will never forget.
            </p>
            
            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-tiki-blue flex items-center justify-center text-white">
                  <span className="font-bold">1</span>
                </div>
                <span className="font-medium">Premium Ingredients</span>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-tiki-pink flex items-center justify-center text-white">
                  <span className="font-bold">2</span>
                </div>
                <span className="font-medium">Authentic Flavors</span>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-tiki-yellow flex items-center justify-center text-tiki-dark">
                  <span className="font-bold">3</span>
                </div>
                <span className="font-medium">Tiki Experience</span>
              </div>
            </div>
            
            <TikiButton variant="accent">Learn More</TikiButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
