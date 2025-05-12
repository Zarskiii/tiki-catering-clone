import { useState, useEffect, useRef } from "react";
import { TikiButton } from "@/components/ui/tiki-button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Copy, Check, Calendar, Users, MapPinned, Loader2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import emailjs from '@emailjs/browser';

// Replace these with your actual EmailJS credentials
const EMAILJS_SERVICE_ID = "service_xxxx";  // Update this with your Service ID
const EMAILJS_TEMPLATE_ID = "template_xxxx"; // Update this with your Template ID
const EMAILJS_PUBLIC_KEY = "xxxx";          // Update this with your Public Key

const Contact = () => {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventDate: "",
    eventType: "",
    guestCount: "",
    location: "",
    message: ""
  });
  
  const [copied, setCopied] = useState(false);
  const address = "3604 Pony Express Parkway, Eagle Mountain, UT, United States, Utah";

  // Check for URL parameters on mount to pre-fill the form
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const packageParam = searchParams.get('package');
    
    if (packageParam) {
      // Scroll to the contact form
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
      
      // Pre-fill the form with package information
      setFormData(prev => ({
        ...prev,
        eventType: "Catering",
        message: `I'm interested in the ${packageParam}. Please provide more information.`
      }));
      
      // Show a toast notification
      toast({
        title: "Package Selected",
        description: `You've selected the ${packageParam}. Please complete the form to request a quote.`,
        variant: "default",
      });
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Create an object with template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        event_date: formData.eventDate,
        event_type: formData.eventType,
        guest_count: formData.guestCount,
        location: formData.location,
        message: formData.message,
      };
      
      // Send email using EmailJS
      if (EMAILJS_SERVICE_ID === "service_xxxx") {
        // If EmailJS not configured yet, simulate success
        console.log("EmailJS not configured yet. Form data:", templateParams);
        await new Promise(resolve => setTimeout(resolve, 1500));
      } else {
        // Actually send the email
        await emailjs.send(
          EMAILJS_SERVICE_ID, 
          EMAILJS_TEMPLATE_ID, 
          templateParams, 
          EMAILJS_PUBLIC_KEY
        );
      }

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        eventDate: "",
        eventType: "",
        guestCount: "",
        location: "",
        message: ""
      });
      
      if (formRef.current) {
        formRef.current.reset();
      }
      
      // Show success toast notification
      toast({
        title: "Quote Request Sent!",
        description: "Thanks for your message! We'll get back to you within 24 hours.",
        variant: "default",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const eventTypes = [
    "Birthday Party",
    "Wedding",
    "Corporate Event",
    "School Function",
    "Community Event",
    "Festival",
    "Family Gathering",
    "Other"
  ];

  const guestCounts = [
    "Less than 50",
    "50-100",
    "100-150",
    "150-200",
    "200-500",
    "500+"
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-t from-tiki-light to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold text-tiki-dark mb-4">
            Contact <span className="text-tiki-blue">Us</span>
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Ready to bring the taste of paradise to your next event? Get in touch with us today to discuss your catering needs!
          </p>
          <div className="w-24 h-1 bg-tiki-blue mx-auto mt-6"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          <div className="lg:w-1/2">
            <div className="bg-white rounded-xl p-8 h-full shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-tiki-dark mb-6">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-tiki-blue/10 flex items-center justify-center mr-4">
                    <Mail className="w-5 h-5 text-tiki-blue" />
                  </div>
                  <div>
                    <p className="font-medium text-tiki-dark">Email Us</p>
                    <a href="mailto:aloha@zarstikishack.com" className="text-tiki-blue hover:underline">
                      aloha@zarstikishack.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-tiki-blue/10 flex items-center justify-center mr-4">
                    <Phone className="w-5 h-5 text-tiki-blue" />
                  </div>
                  <div>
                    <p className="font-medium text-tiki-dark">Call Us</p>
                    <a href="tel:8016733845" className="text-tiki-blue hover:underline">
                      (801) 673-3845
                    </a>
                  </div>
                </div>
                
                <div className="pt-4">
                  <h4 className="font-medium text-tiki-dark mb-3">Follow Us</h4>
                  <div className="flex space-x-4">
                    <a 
                      href="https://www.facebook.com/SnoasisEagleMtn/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-[#1877F2] rounded-full flex items-center justify-center text-white hover:opacity-90 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                      </svg>
                    </a>
                    <a 
                      href="https://www.yelp.com/biz/snoasis-eagle-mountain-2" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-[#D32323] rounded-full flex items-center justify-center text-white hover:opacity-90 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12 0C5.39 0 0 5.39 0 12s5.39 12 12 12 12-5.39 12-12S18.61 0 12 0zm0 22c-5.52 0-10-4.48-10-10S6.48 2 12 2s10 4.48 10 10-4.48 10-10 10zm3.59-13.5c-.75-.95-2.27-1.27-2.27-1.27L9.25 9.65l-.75 1.5s.5.34 1.5.34c.5 0 1-.14 1.25-.25.75-.25 1.25-.59 1.5-.75.65-.5.89-.69 2.84 1.01-1.5 1.68-3.34.75-4.09.25-.25-.25-.5-.5-.75-.75-.09-.05-.24-.08-.4-.07-.5 0-1.07.37-1.32.87-.25.5-.16 1 .34 1.25.5.25 3.16 1.5 4.59-.5.75-1.25.75-2.9.25-4.09zm-9.34 4.25c.25.75 2.25 1.5 2.75.75.25-.25.17-.67 0-1.17-.5-1.5-1-2.25-1.25-2.5-.25-.25-.75-.5-1.25-.25-.25.07-.49.32-.49.57-.26.81.24 2.6.24 2.6zm7.5-6c.5.25 1 .25 1.25-.25.09-.25.13-.5.25-.75.09-.25.09-.5 0-.75 0 0-.25-.75-.75-.75s-.75.75-.75.75v1.75z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-bold text-tiki-dark mb-4">Our Location</h3>
                <p className="text-gray-700 mb-4">
                  <strong>Zar's Tiki Shack & Snoasis</strong><br />
                  {address}
                </p>
                <div className="flex items-center mt-4">
                  <button 
                    onClick={handleCopyAddress}
                    className="flex items-center text-tiki-blue hover:text-tiki-blue/80 transition-colors"
                    title="Copy address"
                  >
                    {copied ? <Check className="h-5 w-5 mr-2" /> : <Copy className="h-5 w-5 mr-2" />}
                    {copied ? "Address Copied!" : "Copy Address"}
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-tiki-dark mb-6">Request Catering Quote</h3>
              
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name*
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full"
                    disabled={isSubmitting}
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address*
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full"
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="eventDate" className="block text-sm font-medium text-gray-700 mb-1">
                      Event Date
                    </label>
                    <div className="relative">
                      <Input
                        id="eventDate"
                        name="eventDate"
                        type="date"
                        value={formData.eventDate}
                        onChange={handleChange}
                        className="w-full"
                        disabled={isSubmitting}
                      />
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                        <Calendar className="h-4 w-4 text-gray-400" />
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="eventType" className="block text-sm font-medium text-gray-700 mb-1">
                      Event Type
                    </label>
                    <Select 
                      value={formData.eventType} 
                      onValueChange={(value) => handleSelectChange("eventType", value)}
                      disabled={isSubmitting}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select event type" />
                      </SelectTrigger>
                      <SelectContent>
                        {eventTypes.map((type) => (
                          <SelectItem key={type} value={type}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="guestCount" className="block text-sm font-medium text-gray-700 mb-1">
                      Guest Count
                    </label>
                    <div className="relative">
                      <Select 
                        value={formData.guestCount} 
                        onValueChange={(value) => handleSelectChange("guestCount", value)}
                        disabled={isSubmitting}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Expected guests" />
                        </SelectTrigger>
                        <SelectContent>
                          {guestCounts.map((count) => (
                            <SelectItem key={count} value={count}>
                              {count}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <div className="absolute right-9 top-1/2 transform -translate-y-1/2 pointer-events-none">
                        <Users className="h-4 w-4 text-gray-400" />
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                      Event Location
                    </label>
                    <div className="relative">
                      <Input
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        placeholder="City, State"
                        className="w-full pl-9"
                        disabled={isSubmitting}
                      />
                      <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                        <MapPinned className="h-4 w-4 text-gray-400" />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Tell us about your event*
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full"
                    placeholder="Include any specific requirements or questions you have about our catering services."
                    disabled={isSubmitting}
                  />
                </div>
                
                <TikiButton type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending Request...
                    </span>
                  ) : (
                    "Submit Request"
                  )}
                </TikiButton>
                
                <p className="text-center text-sm text-gray-500 mt-2">
                  We typically respond to inquiries within 24 hours
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
