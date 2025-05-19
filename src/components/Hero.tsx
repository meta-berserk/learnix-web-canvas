
import { Button } from "@/components/ui/button";

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              Digital Solutions for <span className="gradient-text">Modern Business</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
              We transform your digital presence with cutting-edge marketing strategies and exceptional web solutions.
            </p>
            <div className="flex space-x-4">
              <Button className="text-base px-8 py-6" size="lg">Get Started</Button>
              <Button variant="outline" className="text-base px-8 py-6" size="lg">Learn More</Button>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-100 rounded-full opacity-50"></div>
              <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-blue-100 rounded-full opacity-50"></div>
              <img 
                src="https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop"
                alt="Digital Marketing"
                className="w-full h-auto rounded-xl shadow-xl relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
