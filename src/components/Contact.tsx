import { FC, FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, Linkedin, Send } from "lucide-react";
import FadeIn from "./animations/FadeIn";
import useMousePosition from "@/hooks/useMousePosition";
import { useIsMobile } from "@/hooks/use-mobile";

const Contact: FC = () => {
  const isMobile = useIsMobile();
  const mousePosition = useMousePosition();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const formObject = Object.fromEntries(formData.entries());

    setIsSubmitting(true);

    fetch("https://formsubmit.co/ajax/98d2f895f6f6c89691d966be40efe297", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formObject),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error))
      .finally(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      });
  };

  return (
    <section id="contact" className="py-28 bg-black relative overflow-hidden">
      <FadeIn direction="none" delay={1000} duration={2000}>
        <div
          className="absolute w-32 h-32 transition-transform duration-700 ease-out -z-5"
          style={{
            right: isMobile ? "-60px" : "10%",
            top: isMobile ? "30%" : "20%",
            transform: isMobile
              ? "none"
              : `translate(${
                  (mousePosition.x - window.innerWidth / 2) * 0.04
                }px, ${(mousePosition.y - window.innerHeight / 2) * 0.04}px)`,
          }}
        >
          <img src="/asterisk-color.svg" className="w-full h-full" />
        </div>
      </FadeIn>
      <FadeIn direction="none" delay={800} duration={1000}>
        <div
          className="absolute w-32 h-32 transition-transform duration-700 ease-out -z-5"
          style={{
            left: isMobile ? "-60px" : "10%",
            bottom: isMobile ? "10%" : "30%",
            transform: isMobile
              ? "none"
              : `translate(${
                  (mousePosition.x - window.innerWidth / 2) * 0.01
                }px, ${(mousePosition.y - window.innerHeight / 2) * 0.01}px)`,
          }}
        >
          <img src="/asterisk-color.svg" className="w-full h-full" />
        </div>
      </FadeIn>

      <div className="container">
        <FadeIn delay={200}>
          <h2 className="text-3xl md:text-5xl font-bold text-center text-gradient">Let's chat!</h2>
        </FadeIn>
        <FadeIn delay={400}>
          <p className="text-center text-slate-400 max-w-2xl mx-auto mt-4">
            Got an idea in mind? Maybe you need one for your business?
          </p>
          <p className="text-center text-slate-400 max-w-2xl mx-auto">
            Just fill out the form and we'll jump on a call as soon as possible. It's free :)
          </p>
        </FadeIn>

        <FadeIn delay={600}>
          <div className="flex gap-4 justify-center mt-8">
            <a
              href="https://t.me/gizelo"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 hover:text-accent transition-all"
            >
              <Send className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/gizelo/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 hover:text-accent transition-all"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 gap-12 mt-8 mx-auto max-w-2xl">
          <FadeIn delay={300} direction="up">
            <div className="blur-backdrop rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-6 text-white">Send Us a Message</h3>

              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-8">
                  <CheckCircle2 className="h-16 w-16 text-accent mb-4" />
                  <h4 className="text-xl font-medium text-white mb-2">Message Sent!</h4>
                  <p className="text-slate-400 text-center">
                    Thank you for reaching out. We'll get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <Input type="text" name="name" placeholder="Your Name" required />
                  </div>
                  <div>
                    <Input type="email" name="email" placeholder="Your Email" required />
                  </div>
                  <div>
                    <Input type="text" name="subject" placeholder="Subject" required />
                  </div>
                  <div>
                    <Textarea name="message" placeholder="Your Message" required />
                  </div>
                  <input type="hidden" name="_template" value="box" />
                  <Button
                    type="submit"
                    className="w-full bg-white hover:bg-slate-200 text-black"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Contact;
