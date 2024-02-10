import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';
import { CalendlyEmbed } from 'react-calendly';


const Contact = () => {
  return (
    <section className="contact section-padding">
      <div className="container">
        <div className="row">
          {/* Contact Form */}
          <ContactForm />
          
          {/* Contact Info */}
          <ContactInfo />
        </div>
      </div>
    </section>
  )
}

export default Contact