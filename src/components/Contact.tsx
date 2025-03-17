
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, Mail, MapPin, Phone } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import FadeIn from "./animations/FadeIn";

const Contact: React.FC = () => {
  const { toast } = useToast();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      
      // Reset form after a delay
      setTimeout(() => {
        setFormState({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        setIsSubmitted(false);
      }, 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-gizelo-50 relative overflow-hidden">
      <div className="container">
        <div className="text-center mb-16">
          <FadeIn>
            <p className="text-gizelo-600 text-sm font-medium uppercase tracking-wider mb-3">
              Get In Touch
            </p>
          </FadeIn>
          <FadeIn delay={200}>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-gizelo-900">
              Contact Us
            </h2>
          </FadeIn>
          <FadeIn delay={400}>
            <p className="text-gizelo-600 max-w-2xl mx-auto">
              Have a project in mind? We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <FadeIn delay={300} direction="left">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-semibold mb-6 text-gizelo-800">
                Send Us a Message
              </h3>
              
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-8">
                  <CheckCircle2 className="h-16 w-16 text-green-500 mb-4" />
                  <h4 className="text-xl font-medium text-gizelo-800 mb-2">
                    Message Sent!
                  </h4>
                  <p className="text-gizelo-600 text-center">
                    Thank you for reaching out. We'll get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="border-gizelo-200 focus:border-gizelo-300"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="border-gizelo-200 focus:border-gizelo-300"
                    />
                  </div>
                  <div>
                    <Input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      value={formState.subject}
                      onChange={handleChange}
                      required
                      className="border-gizelo-200 focus:border-gizelo-300"
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      className="min-h-32 border-gizelo-200 focus:border-gizelo-300"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gizelo-800 hover:bg-gizelo-900 text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
            </div>
          </FadeIn>

          <FadeIn delay={500} direction="right">
            <div className="lg:pl-10">
              <h3 className="text-xl font-semibold mb-6 text-gizelo-800">
                Contact Information
              </h3>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-gizelo-100 p-3 rounded-lg mr-4">
                    <Mail className="h-5 w-5 text-gizelo-700" />
                  </div>
                  <div>
                    <h4 className="text-base font-medium text-gizelo-800 mb-1">
                      Email Us
                    </h4>
                    <p className="text-gizelo-600">hello@gizelo.com</p>
                    <p className="text-gizelo-600">support@gizelo.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-gizelo-100 p-3 rounded-lg mr-4">
                    <Phone className="h-5 w-5 text-gizelo-700" />
                  </div>
                  <div>
                    <h4 className="text-base font-medium text-gizelo-800 mb-1">
                      Call Us
                    </h4>
                    <p className="text-gizelo-600">+1 (555) 123-4567</p>
                    <p className="text-gizelo-600">+1 (555) 987-6543</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-gizelo-100 p-3 rounded-lg mr-4">
                    <MapPin className="h-5 w-5 text-gizelo-700" />
                  </div>
                  <div>
                    <h4 className="text-base font-medium text-gizelo-800 mb-1">
                      Visit Us
                    </h4>
                    <p className="text-gizelo-600">
                      123 Innovation Street<br />
                      San Francisco, CA 94103<br />
                      United States
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h4 className="text-base font-medium text-gizelo-800 mb-4">
                  Follow Us
                </h4>
                <div className="flex space-x-4">
                  {["twitter", "facebook", "instagram", "linkedin", "github"].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="w-10 h-10 rounded-full bg-gizelo-100 flex items-center justify-center transition-colors hover:bg-gizelo-200"
                    >
                      <span className="text-gizelo-800 capitalize text-sm">{social.charAt(0).toUpperCase()}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Contact;
