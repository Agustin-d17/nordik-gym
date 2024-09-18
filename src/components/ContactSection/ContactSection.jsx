import { useState, useRef } from "react"
import { MapPin, Facebook, Instagram, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Alert, AlertDescription } from "@/components/ui/alert"
import emailjs from '@emailjs/browser';

const ContactSection = () => {
    const [isSubmitted, setIsSubmitted] = useState(false)
    const form = useRef();
    const handleSubmit = (event) => {
        event.preventDefault()

        setIsSubmitted(true)

        emailjs.sendForm('service_338k7bd', 'template_jkc6zts', form.current, 'Cc3lLfJ0dMdPowgwt')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        setTimeout(() => setIsSubmitted(false), 3000)
    }

    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background" id='contacto'>
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">Contáctanos</h2>
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="space-y-4">
                <div className="aspect-video overflow-hidden rounded-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.8101420563256!2d-74.07715812579493!3d4.605737042983955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f99a7eccfe58f%3A0x99cb72b35351e45e!2sGym!5e0!3m2!1sen!2sco!4v1684997458396!5m2!1sen!2sco"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>Calle 53 #7-30, Bogotá, Colombia</span>
                </div>
              </div>
              <div className="space-y-4">
                {isSubmitted ? (
                  <Alert>
                    <AlertDescription>
                      Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.
                    </AlertDescription>
                  </Alert>
                ) : (
                  <form onSubmit={handleSubmit} ref={form} className="space-y-4">
                    <Input placeholder="Nombre" required name='user_name'/>
                    <Input type="email" placeholder="Email" required name='user_email'/>
                    <Input placeholder="Teléfono" name='user_phonenumber'/>
                    <Textarea placeholder="Mensaje" required name='message'/>
                    <Button type="submit" className="w-full">Enviar mensaje</Button>
                  </form>
                )}
                <div className="flex justify-center space-x-4 mt-6">
                  <Button variant="outline" size="icon" asChild>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                      <Facebook className="w-4 h-4" />
                      <span className="sr-only">Facebook</span>
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                      <Instagram className="w-4 h-4" />
                      <span className="sr-only">Instagram</span>
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-4 h-4" />
                      <span className="sr-only">WhatsApp</span>
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )
}

export default ContactSection