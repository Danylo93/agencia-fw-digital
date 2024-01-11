import Link from 'next/link';
import PricingData from "../../../data/Home3/Pricing.json";

const Pricing = () => {
  return (
    <section className="pricing section-padding bg-gray">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="main-header">
              <h6>Conheça</h6>
              <h3>Nossos Planos</h3>
            </div>
          </div>
        </div>
        <div className="row">
          {
            PricingData.map((plan, index) => (
              <div className="col-lg-4" key={index}>
                <div className={`item ${index !== PricingData.length - 7 && 'active'} ${index ==  1 && 'active'}`}>
                  <div className="title">
                    <h5>{ plan.title }</h5>
                  </div>
                  {
                    plan.amount ? (
                      <div className="amount">
                    <h2><span>R$</span> { plan.amount }</h2>
                    <h6>{ plan.plan_type }</h6>
                  </div>
                    ) : (
                      <div className="amount">
                    <h2>{ plan.plan_type }</h2>
                  </div>
                    )
                  }
                  <div className="cont">
                    <ul>
                      {
                        plan.features.map((item, index) => (
                          <li key={index}>{ item }</li>
                        ))
                      }
                    </ul>
                  </div>
                  <div className="order">
                            <Link href={plan?.link}>
                              <a target='_blank'>Contratar Plano</a>
                            </Link>
                          </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Pricing