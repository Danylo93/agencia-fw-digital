import { useEffect } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const Split = dynamic(() => import("../../Split"), { ssr: false });

const CallAction = () => {
  useEffect(() => {
    const bg = document.querySelector(".call-action.bg-img");
    if (bg) bg.style.backgroundImage = `url(${bg.getAttribute("data-background")})`;
  }, []);

  return (
    <div className="call-action section-padding bg-img" data-background="/assets/img/pattern.png">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-lg-9">
            <div className="content sm-mb30">
              <Split className="wow">
                <h6 data-splitting>Vamos conversar</h6>
              </Split>
              <Split className="wow custom-font">
                <h2 data-splitting>sobre seu  <b>próximo projeto?</b>.</h2>
              </Split>
            </div>
          </div>

          <div className="col-md-4 col-lg-3 valign">
            <Link href="https://wa.me/5511964891128">
              <a target='_blank' className="btn-curve btn-lit"><span>Entre em contato</span></a>
            </Link>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default CallAction