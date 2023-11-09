import Link from 'next/link';
import dynamic from 'next/dynamic';
const Split = dynamic(() => import("../../Split"), { ssr: false });
import ContactInfoData from '../../../data/contact.json';

const ContactInfo = () => {
  return (
    <div className="col-lg-5 offset-lg-1">
      <div className="cont-info">
        <h4 className="extra-title mb-50">Contato</h4>
        <Split className="custom-font wow">
          <h3 data-splitting>Vamos conversar?</h3>
        </Split>
        <div className="item mb-40">
          <h5>
            <Link href="#0">
              <a>{ ContactInfoData.email }</a>
            </Link>
          </h5>
          <h5>{ ContactInfoData.phone }</h5>
        </div>
       
        <div className="item">
          <h6>{ ContactInfoData.address.street }, <br />{ ContactInfoData.address.city }, { ContactInfoData.address.country }</h6>
        </div>
        <div className="social mt-50">
            <Link href="https://www.facebook.com/agenciafwdigita" passHref>
            <a target='_blank' className="icon">
              <i className="fab fa-facebook-f"></i>
            </a>
          </Link>
          
          <Link href="https://www.instagram.com/agencia.fwdigital/" passHref >
            <a target='_blank' className="icon">
              <i className="fab fa-instagram"></i>
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ContactInfo