/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import appData from '../../data/app.json';

const Footer = ({ classText }) => {
  return (
    <footer className={ classText ? classText : '' }>
      <div className="container">
          <div className="row">
              <div className="col-lg-4">
                  <div className="item md-mb50">
                      <div className="title">
                          <h5>Contato</h5>
                      </div>
                          <ul>
                              
                        {/* <li>
                            <span className="icon pe-7s-map-marker"></span>
                            <div className="cont">
                                <h6>Endereço</h6>
                                <p>{ appData.address.street } . { appData.address.city }, { appData.address.state } , { appData.address.country }</p>
                            </div>
                        </li> */}
                        <li>
                            <span className="icon pe-7s-mail"></span>
                            <div className="cont">
                                <h6>Email</h6>
                                <p>{ appData.email }</p>
                            </div>
                        </li>
                        <li>
                            <span className="icon pe-7s-call"></span>
                            <div className="cont">
                                <h6>Contato</h6>
                                <p>{ appData.phone }</p>
                            </div>
                              </li>
                              
                      </ul>
                  </div>
              </div>
              <div className="col-lg-4">
                  <div className="item md-mb50">
                      
                      <ul>
                          
                          
                      </ul>
                  </div>
              </div>
              <div className="col-lg-4">
                      <div className="item">
                          <li>
                              
                          </li>
                      <div className="logo">
                          <img src={appData.lightLogo} alt="" />
                      </div>
                      <div className="social">
                          <Link href="https://www.facebook.com/agenciafwdigita" passHref>
                            <a target='_blank'><i className="fab fa-facebook-f"></i></a>
                          </Link>
                          
                          <Link href="https://www.instagram.com/agencia.fwdigital/" passHref >
                            <a target='_blank'><i className="fab fa-instagram"></i></a>
                          </Link>
                          
                      </div>
                      <div className="copy-right">
                          <p>
                              { appData.footerText }{' '}
                                <Link href="#0">
                                    <a>{ appData.themeAuthor }</a>
                                </Link>.
                          </p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </footer>
  )
}

export default Footer