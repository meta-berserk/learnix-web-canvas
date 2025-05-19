
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    title: "Digital Marketing",
    description: "Strategic digital campaigns that drive results with targeted SEO, PPC, and social media marketing.",
    icon: "📈"
  },
  {
    title: "Web Development",
    description: "Custom websites and web applications built with the latest technologies for optimal performance.",
    icon: "💻"
  },
  {
    title: "UI/UX Design",
    description: "User-centered design that creates intuitive and beautiful digital experiences for your customers.",
    icon: "🎨"
  },
  {
    title: "Content Strategy",
    description: "Compelling content that tells your brand story and connects with your target audience.",
    icon: "📝"
  }
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container-section">
        <h2 className="section-title">
          About <span className="gradient-text">Learnix-IT</span>
        </h2>
        
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-lg text-gray-600">
            Learnix-IT is a premier digital solutions company specializing in web development and digital marketing.
            With over 10 years of experience, we've helped hundreds of businesses transform their online presence
            and achieve their goals through innovative technology solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
