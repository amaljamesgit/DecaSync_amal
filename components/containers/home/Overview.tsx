import Image from "next/image";
import Link from "next/link";
import one from "@/public/images/overview/one.png";
import two from "@/public/images/overview/two.png";
import three from "@/public/images/overview/three.png";
import four from "@/public/images/overview/four.png";
import five from "@/public/images/overview/five.png";

const Overview = () => {
  return (
    <section
      className="tp-overview pt-120 pb-120 sticky-wrapper"
      id="scroll-to"
    >
      <div className="container">
        <div className="row vertical-column-gap-lg">
          <div className="col-12 col-lg-5">
            <div className="tp-overview__content sticky-item">
              <h2 className="fw-7 text-secondary title-anim mb-30 mt-8">
                How Can We help you!
              </h2>
              <p className="mt-8 cur-lg">
                Our custom software design and development teams can design,
                build, test, and deliver a product that fits both your vision
                and market demand. With our support, you will find customers,
                build income and attract new investors.
              </p>
              <div className="mt-40">
                <Link href="services" className="btn-line text-uppercase">
                  SEE WHAT WE DO
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-7 col-xxl-6 offset-xxl-1">
            <div className="tp-overview__items sticky-item">
              <div className="tp-overview-single appear-down">
                <div className="thumb">
                  <Image src={one} alt="Image" />
                </div>
                <div className="wrapper">
                  <div className="content">
                    <h4 className="mt-8 mb-12 fw-6 text-secondary">
                      <Link href="service-single">Artificial Intelligence</Link>
                    </h4>
                    <p className="text-tertiary">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                  </div>
                  <div className="cta">
                    <Link href="service-single">
                      <span className="material-symbols-outlined">
                        call_made
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="tp-overview-single appear-down">
                <div className="thumb">
                  <Image src={two} alt="Image" />
                </div>
                <div className="wrapper">
                  <div className="content">
                    <h4 className="mt-8 mb-12 fw-6 text-secondary">
                      <Link href="service-single">Product Design</Link>
                    </h4>
                    <p className="text-tertiary">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                  </div>
                  <div className="cta">
                    <Link href="service-single">
                      <span className="material-symbols-outlined">
                        call_made
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="tp-overview-single appear-down">
                <div className="thumb">
                  <Image src={three} alt="Image" />
                </div>
                <div className="wrapper">
                  <div className="content">
                    <h4 className="mt-8 mb-12 fw-6 text-secondary">
                      <Link href="service-single">
                        Mobile Application Development
                      </Link>
                    </h4>
                    <p className="text-tertiary">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                  </div>
                  <div className="cta">
                    <Link href="service-single">
                      <span className="material-symbols-outlined">
                        call_made
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="tp-overview-single appear-down">
                <div className="thumb">
                  <Image src={four} alt="Image" />
                </div>
                <div className="wrapper">
                  <div className="content">
                    <h4 className="mt-8 mb-12 fw-6 text-secondary">
                      <Link href="service-single">
                        Web Application Development
                      </Link>
                    </h4>
                    <p className="text-tertiary">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                  </div>
                  <div className="cta">
                    <Link href="service-single">
                      <span className="material-symbols-outlined">
                        call_made
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="tp-overview-single appear-down">
                <div className="thumb">
                  <Image src={five} alt="Image" />
                </div>
                <div className="wrapper">
                  <div className="content">
                    <h4 className="mt-8 mb-12 fw-6 text-secondary">
                      <Link href="service-single">Idea Evaluation</Link>
                    </h4>
                    <p className="text-tertiary">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                  </div>
                  <div className="cta">
                    <Link href="service-single">
                      <span className="material-symbols-outlined">
                        call_made
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
