import { TikiButton } from "@/components/ui/tiki-button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative pt-20 overflow-hidden">
      {/* Hawaiian landscape background with blur effect */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{
            backgroundImage: "url('./hawaii-bg.jpg')",
            filter: "blur(8px)",
            transform: "scale(1.1)",
          }}
        />
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-tiki-dark/40" />
      </div>

      <div className="container mx-auto px-4 pt-20 pb-24 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-12 lg:mb-0 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Authentic <span className="text-tiki-pink font-bold relative" style={{
                textShadow: "1px 1px 2px rgba(0, 0, 0, 0.7)",
              }}>Hawaiian</span> Shave Ice Catering
            </h1>
            <p className="text-xl mb-4 text-white/90 max-w-lg mx-auto lg:mx-0">
              Book your next catering event! We'll come to you!
            </p>
            <p className="text-xl mb-8 text-white/90 max-w-lg mx-auto lg:mx-0">
              Or, come experience the tropical taste of paradise at our Snoasis, Eagle Mountain location!
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <Link to="/catering">
                <TikiButton size="lg" className="text-lg">Book Catering</TikiButton>
              </Link>
              <Link to="/#menu">
                <TikiButton size="lg" variant="outline" className="text-lg border-white text-white hover:bg-white hover:text-tiki-dark">View Menu</TikiButton>
              </Link>
            </div>
            <div className="mt-6 bg-white/20 backdrop-blur-sm p-4 rounded-lg inline-block">
              <p className="text-white text-sm font-medium">🌺 Book now and get 10% off your first catering event!</p>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="relative mx-auto" style={{ maxWidth: "50%" }}>
              {/* Main image - colorful shave ice */}
              <div className="rounded-2xl overflow-hidden shadow-2xl transform rotate-2 bg-white p-4">
                <img 
                  src="./IMG_5128.PNG" 
                  alt="Colorful Hawaiian Shave Ice" 
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
              
              {/* Floating decoration elements */}
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-tiki-yellow rounded-full opacity-80 shadow-lg"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-tiki-pink rounded-full opacity-70 shadow-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
