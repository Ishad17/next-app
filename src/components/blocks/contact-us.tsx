import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

interface ContactUsProps {
  title?: string;
  description?: string;
  emailLabel?: string;
  emailDescription?: string;
  email?: string;
  officeLabel?: string;
  officeDescription?: string;
  officeAddress?: string;
  phoneLabel?: string;
  phoneDescription?: string;
  phone?: string;
  chatLabel?: string;
  chatDescription?: string;
  chatLink?: string;
}

const ContactUs = ({
  title = "Contact Us",
  description = "Contact the support team at VStack Solutions.",
  emailLabel = "Email",
  emailDescription = "We respond to all emails within 24 hours.",
  email = "vstacksolutionslk@gmail.com",
  officeLabel = "Office",
  officeDescription = "Drop by our office for a chat.",
  officeAddress = "No. 86, Mullegama, Ambatenna, Kandy, Sri Lanka",
  phoneLabel = "Phone",
  phoneDescription = "We're available Mon-Sat, 9am-6pm.",
  phone = "+94 76 605 5925",
  chatLabel = "Live Chat",
  chatDescription = "Get instant help from our support team.",
  chatLink = "Start Chat",
}: ContactUsProps) => {
  return (
    <section className="bg-teal-600 px-20">
      <div className="bg-teal-600 m-auto container">
        <div className="mb-10 pt-6">
          <h1 className="mb-3 mt-2 text-amber-50 text-balance text-3xl font-semibold md:text-4xl">
            {title}
          </h1>
          <p className="text-black max-w-xl text-lg">
            {description}
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-muted rounded-lg p-6">
            <span className="bg-accent mb-3 flex size-12 flex-col items-center justify-center rounded-full">
              <Mail className="h-6 w-auto" />
            </span>
            <p className="mb-2 text-lg font-semibold">{emailLabel}</p>
            <p className="text-muted-foreground mb-3">{emailDescription}</p>
            <a
              href={`mailto:${email}`}
              className="font-semibold hover:underline"
            >
              {email}
            </a>
          </div>
          <div className="bg-muted rounded-lg p-6">
            <span className="bg-accent mb-3 flex size-12 flex-col items-center justify-center rounded-full">
              <MapPin className="h-6 w-auto" />
            </span>
            <p className="mb-2 text-lg font-semibold">{officeLabel}</p>
            <p className="text-muted-foreground mb-3">{officeDescription}</p>
            <a href="https://www.google.com/maps/place/7%C2%B021'26.7%22N+80%C2%B036'34.7%22E/@7.357422,80.6085484,407m/data=!3m2!1e3!4b1!4m10!1m5!3m4!2zN8KwMjEnMjguMyJOIDgwwrAzNiczMy42IkU!8m2!3d7.3578611!4d80.6093333!3m3!8m2!3d7.357422!4d80.609631?entry=ttu&g_ep=EgoyMDI1MDcyOC4wIKXMDSoASAFQAw%3D%3D"  target="_blank" rel="noopener noreferrer" className="font-semibold hover:underline">
              {officeAddress}
            </a>
          </div>
          <div className="bg-muted rounded-lg p-6">
            <span className="bg-accent mb-3 flex size-12 flex-col items-center justify-center rounded-full">
              <Phone className="h-6 w-auto" />
            </span>
            <p className="mb-2 text-lg font-semibold">{phoneLabel}</p>
            <p className="text-muted-foreground mb-3">{phoneDescription}</p>
            <a href={`tel:${phone}`} className="font-semibold hover:underline">
              {phone}
            </a>
          </div>
          <div className="bg-muted rounded-lg p-6">
            <span className="bg-accent mb-3 flex size-12 flex-col items-center justify-center rounded-full">
              <MessageCircle className="h-6 w-auto" />
            </span>
            <a href="https://wa.me/94775703735?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services%3F" target="_blank" rel="noopener noreferrer" className="font-semibold hover:underline">
              <p className="mb-2 text-lg font-semibold">{chatLabel}</p>
              <p className="text-muted-foreground mb-3">{chatDescription}</p>
              {chatLink}
            </a>
          </div>
        </div>
      </div>
      

    </section>
    
  );
};

export { ContactUs };
