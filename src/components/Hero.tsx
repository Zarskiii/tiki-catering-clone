
import { TikiButton } from "@/components/ui/tiki-button";

const Hero = () => {
  return (
    <section className="relative pt-20 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 bg-tiki-light" 
           style={{
             backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233BCEEB' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
           }}
      />

      <div className="container mx-auto px-4 pt-20 pb-24 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-12 lg:mb-0 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-tiki-dark mb-6">
              Authentic <span className="text-tiki-blue">Hawaiian</span> Shave Ice Catering
            </h1>
            <p className="text-xl mb-8 text-gray-700 max-w-lg mx-auto lg:mx-0">
              Bring the tropical taste of paradise to your next event with Zar's Tiki Shack mobile catering service.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <TikiButton size="lg" className="text-lg">Book Catering</TikiButton>
              <TikiButton size="lg" variant="outline" className="text-lg">View Menu</TikiButton>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="relative">
              {/* Main image */}
              <div className="rounded-2xl overflow-hidden shadow-2xl transform rotate-2">
                <img 
                  src="https://images.unsplash.com/photo-1527281400683-1aae777175f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" 
                  alt="Colorful Hawaiian Shave Ice" 
                  className="w-full h-auto object-cover"
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
