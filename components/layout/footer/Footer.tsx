"use client";
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import thumb from "@/public/images/footer/thumb.png";
import location from "@/public/images/footer/location.png";
import phone from "@/public/images/footer/phone.png";
import gmail from "@/public/images/footer/gmail.png";
import arrow from "@/public/images/footer/arrow.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.set(".foot-fade", {
      x: -100,
      opacity: 0,
    });

    ScrollTrigger.batch(".foot-fade", {
      start: "-100px bottom",
      onEnter: (elements) =>
        gsap.to(elements, {
          x: 0,
          opacity: 1,
          stagger: 0.3,
        }),
    });
  }, []);

  return (
    <footer className="footer position-relative overflow-x-clip">
      <div className="container">
        <div className="row vertical-column-gap-lg">
          <div className="col-12 col-lg-6 col-xxl-5">
            <div className="pt-120">
              <span className="text-xl d-block mt-8 text-white text-capitalize fm fw-5 cur-lg">
                Let our specialists solve the problems and tackle the challenges
                that hold you from conquering the world.
              </span>
              <div className="mt-60 foot-group">
                <div className="anime">
                  <span className="foot-fade"></span>
                  <span className="foot-fade"></span>
                  <span className="foot-fade"></span>
                  <span className="foot-fade"></span>
                  <span className="foot-fade"></span>
                  <span className="foot-fade"></span>
                </div>
                <Link href="contact-us" className="btn-anim">
                  Let&apos;s Talk
                  <i className="fa-solid fa-arrow-trend-up"></i>
                  <span></span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 offset-xxl-1">
            <div className="footer__thumb">
              <div className="parallax-image-wrap">
                <div className="parallax-image-inner">
                  <Image
                    src={thumb}
                    priority
                    className="unset parallax-image"
                    alt="Image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row vertical-column-gap-lg pt-120">
          <div className="col-12 col-lg-6">
            <div>
              <h2 className="fm fw-7 text-white title-anim mt-8">
                We&apos;re Your Partner for Innovation and Fast Growth.
              </h2>
            </div>
          </div>
          <div className="col-12 col-lg-3 offset-lg-1">
            <ul className="mt-8">
              <li>
                <Link href="about-us">About Us</Link>
              </li>
              <li>
                <Link href="services">It Service</Link>
              </li>
              <li>
                <Link href="career">Career</Link>
              </li>
              <li>
                <Link href="case-study">Case Studies</Link>
              </li>
            </ul>
          </div>
          <div className="col-12 col-lg-2">
            <ul className="mt-8">
              <li>
                <Link href="case-study">Resources</Link>
              </li>
              <li>
                <Link href="services">Our Services</Link>
              </li>
              <li>
                <Link href="blog">Blog</Link>
              </li>
              <li>
                <Link href="contact-us">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="footer__inner pt-120">
              <div className="row vertical-column-gap-lg">
                <div className="col-12 col-md-6 col-lg-4">
                  <div className="footer__inner-single">
                    <div className="thumb">
                      <Image src={location} alt="Image" />
                    </div>
                    <div className="content">
                      <h5 className="mt-8 fm fw-6 text-white mb-24">
                        Location
                      </h5>
                      <p className="text-quinary">
                        <Link
                          href="https://goo.gl/maps/16KHwiUcctAojuLj8"
                          target="_blank"
                        >
                          2118 Thornridge Cir. Syre bint, Connecticut 35624
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                  <div className="footer__inner-single">
                    <div className="thumb">
                      <Image src={phone} alt="Image" />
                    </div>
                    <div className="content">
                      <h5 className="mt-8 fm fw-6 text-white mb-24">Phone</h5>
                      <p className="text-quinary mb-12">
                        <Link href="tel:123-456-789">(USA) +123 456 789</Link>
                      </p>
                      <p className="text-quinary">
                        <Link href="tel:123-456-789">
                          (CANADA) +231 2415 7645
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                  <div className="footer__inner-single">
                    <div className="thumb">
                      <Image src={gmail} alt="Image" />
                    </div>
                    <div className="content">
                      <h5 className="mt-8 fm fw-6 text-white mb-24">Email</h5>
                      <p className="text-quinary mb-12 text-lowercase">
                        <Link href="mailto:email.@gmail.com">
                          hello.email.@gmail.com
                        </Link>
                      </p>
                      <p className="text-quinary text-lowercase">
                        <Link href="mailto:email.@gmail.com">
                          email.@gmail.com
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="footer-copyright">
              <div className="row align-items-center vertical-column-gap">
                <div className="col-12 col-lg-6">
                  <div className="footer__copyright-text text-center text-lg-start">
                    <p className="text-quinary mt-8">
                      &copy; <span id="copyrightYear">{currentYear}</span>{" "}
                      <Link href="/" className="fw-6">
                        Itify
                      </Link>
                      . All rights reserved
                    </p>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="social justify-content-center justify-content-lg-end">
                    <Link href="https://www.twitter.com/" target="_blank">
                      <i className="fa-brands fa-twitter"></i>
                    </Link>
                    <Link href="https://www.instagram.com/" target="_blank">
                      <i className="fa-brands fa-instagram"></i>
                    </Link>
                    <Link href="https://www.facebook.com/" target="_blank">
                      <i className="fa-brands fa-facebook-messenger"></i>
                    </Link>
                    <Link href="https://www.youtube.com/" target="_blank">
                      <i className="fa-brands fa-youtube"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image src={arrow} alt="Image" className="arrow" />
    </footer>
  );
};

export default Footer;
