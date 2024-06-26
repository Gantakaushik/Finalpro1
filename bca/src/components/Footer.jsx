import React from "react";
import "../styles/footer.css";
import { AiFillHeart, AiFillInstagram } from "react-icons/ai";
import logo from '../assets/HireXzo_Solutions_LLP_No_BG.png'
import { IoMailOutline } from "react-icons/io5";
import { IoMdSend } from "react-icons/io";
import { MdLocalPhone } from "react-icons/md";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaTelegramPlane,
  FaDiscord,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
const Footer = () => {
  const solutions = [
    {
      name: "About us",
      link: "https://hirexzo.com/",
    },
    {
      name: "Privacy policy",
      link: "/privacy-policy",
    },
    {
      name: "Terms & conditions",
      link: "/terms-n-conditions",
    },
    
  ];

  // const products = [
  //   {
  //     name: "technology platform",
  //     link: "https://unstop.com/virtual-event-platform",
  //   },
  //   {
  //     name: "online recruitment platform",
  //     link: "https://unstop.com/recruitment-automation",
  //   },
  //   {
  //     name: "quizzing / assessments",
  //     link: "https://unstop.com/online-assessment-platform",
  //   },
  //   {
  //     name: "online hackathons / coding",
  //     link: "https://unstop.com/organize-hackathon-virtual-coding-platform-and-assessment-tests",
  //   },
  //   {
  //     name: "business simulation games",
  //     link: "https://unstop.com/business-simulation-games/business-strategy",
  //   },
  // ];

  const participate = [
    {
      name: "competitions & challenges",
      link: "/",
    },
    {
      name: "quizzes",
      link: "/",
    },
    {
      name: "hackathons",
      link: "/",
    },
    {
      name: "Events",
      link: "/",
    },
    
  ];

  const apply = [
    {
      name: "internships",
      link: "/job-portal",
    },
    {
      name: "jobs",
      link: "/job-portal",
    },
    {
      name: "scholarships",
      link: "/job-portal",
    },
  ];

  const learn = [
    {
      name: "Core Python",
      link: "/course1",
    },
    {
      name: "Advance Python",
      link: "/course1",
    },
    {
      name: "Machine Learning",
      link: "/course1",
    },
    {
      name: "Deep Learning",
      link: "/course1",
    },
    
  ];



  // const properties = [
  //   {
  //     name: "Unstop Awards 2023",
  //     link: "https://unstop.com/awards/2023",
  //   },
  //   {
  //     name: "Unstop Campus Employer Branding Report 2022",
  //     link: "https://unstop.com/campus-employer-branding-report-2022",
  //   },
  //   {
  //     name: "Education Loan EMI Calculator",
  //     link: "https://unstop.com/tools/education-loan-emi-calculator",
  //   },
  //   {
  //     name: "Unstop Igniters Club",
  //     link: "https://unstop.com/unstop-igniters-club",
  //   },
  //   {
  //     name: "Online Quizzing Festival",
  //     link: "https://unstop.com/online-quizzing-festival",
  //   },
  //   {
  //     name: "Online Hackathon Festival",
  //     link: "https://unstop.com/online-hackathon-festival",
  //   },
  // ];

  return (
    <footer>
      <div className="footer">
        <div className="footer-top">
          <div className="footer-top-left">
            {/* <div className="footer-logo">
              <img
                src={logo} alt="logo"
              />
            </div> */}
            {/* <p className="dash">
              Built with{" "}
              <span className="heart-icon">
                <AiFillHeart />
              </span>{" "}
              in India for the world
            </p> */}
            <h3>Stay Connected</h3>
            <div className="footer-contact-links">
              <a
                href="mailto:sales@HireXzo.com"
                className="mail"
                target="_blank"
                rel="noreferrer"
              >
                <IoMailOutline />
                sales@HireXzo.com
              </a>
              <a
                href="tel:6302097651"
                className="mail"
              >
                <MdLocalPhone />
                +91-6302097651 <span> (Mon to Fri, 9 AM to 6 PM)</span>
              </a>
            </div>
            <div className="footer-social-links dash">
              
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillInstagram />
              </a>
              <a
                href="https://www.linkedin.com/company/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://t.me/+ON15qceSy-IyZjY9"
                target="_blank"
                rel="noreferrer"
              >
                <FaTelegramPlane />
              </a>
              <a
                href="https://discord.com/invite/"
                target="_blank"
                rel="noreferrer"
              >
                <FaDiscord />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.youtube.com/c/"
                target="_blank"
                rel="noreferrer"
              >
                <FaYoutube />
              </a>
            </div>
            {/* <h3>Stay Updated</h3> */}
            {/* <p className="updated">
              We'll send you updates on the latest opportunities to showcase
              your talent and get hired and rewarded regularly.
            </p> */}
            {/* <div className="newsletter">
              <a
                href="https://unstop.com/about/newsletter"
                target="_blank"
                rel="noreferrer"
              >
                Sign up for our newsletter
                <IoMdSend />
              </a>
            </div>
            <div className="footer-left-btns dash">
              <a
                href="https://unstop.com/blog/share-your-story-and-get-featured"
                className="btn"
                target="_blank"
                rel="noreferrer"
              >
                Share Your Story Now
              </a>
              <a
                href="https://unstop.com/manage/opportunity/all/create"
                className="btn"
              >
                <HiOutlineSpeakerphone />
                Publish Opportunity
              </a>
            </div>
            <h3>Download Unstop App</h3>
            <div className="footer-download dash">
              <a
                href="https://play.google.com/store/apps/details?id=com.dare2compete.app"
                className="google-play"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/google-play.svg"
                  alt="google play"
                />
              </a>
              <a
                href="https://apps.apple.com/in/app/dare2compete/id1601170365"
                className="app-store"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/app-store.svg"
                  alt="app store"
                />
              </a>
            </div> */}
              
            {/* <p className="dash best-viewed"></p> */}
            <p className="copyright">
              Copyright © 2023 HireXzo Solutions Ltd - All rights reserved.
            </p>
          </div>
          <div className="footer-top-right">
            <div className="footer-right-top">
              <div className="footer-solution-product">
                <div className="footer-solutions">
                  <h4>Company</h4>
                  <div className="footer-solutions-links links-cont">
                    {solutions.map((ele) => {
                      return (
                        <Link  onClick={scrollToTop }
                          to={ele.link}
                          key={ele.name}
                        >
                          {ele.name}
                        </Link>
                      );
                    })}
                  </div>
                </div>
                {/* <div className="footer-products">
                  <h4>Our products</h4>
                  <div className="footer-products-links links-cont">
                    {products.map((ele) => {
                      return (
                        <a
                          href={ele.link}
                          target="_blank"
                          rel="noreferrer"
                          key={ele.name}
                        >
                          {ele.name}
                        </a>
                      );
                    })}
                  </div>
                </div> */}
              </div>
              {/* <div className="footer-participate-apply"> */}
                <div className="footer-participate">
                  <h4>participate</h4>
                  <div className="footer-participate-links links-cont">
                    {participate.map((ele) => {
                      return (
                        <Link  onClick={scrollToTop }
                          to={ele.link}
                          key={ele.name}
                        >
                          {ele.name}
                        </Link>
                      );
                    })}
                  </div>
                </div>
                <div className="footer-apply">
                  <h4>apply</h4>
                  <div className="footer-apply-links links-cont">
                    {apply.map((ele) => {
                      return (
                        <Link onClick={scrollToTop }
                          to={ele.link}
                          key={ele.name}
                        >
                          {ele.name}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              {/* </div> */}
              {/* <div className="footer-learn-practice"> */}
                <div className="footer-learn">
                  <h4>learn</h4>
                  <div className="footer-learn-links links-cont">
                    {learn.map((ele) => {
                      return (
                        <Link
                          to={ele.link}
                          key={ele.name}
                        >
                          {ele.name}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              
              {/* </div> */}
            </div>
            <div className="footer-right-bottom">
              {/* <div className="footer-properties">
                <div className="footer-products">
                  <h4>our properties</h4>
                  <div className="footer-products-links links-cont">
                    {properties.map((ele) => {
                      return (
                        <a
                          href={ele.link}
                          target="_blank"
                          rel="noreferrer"
                          key={ele.name}
                        >
                          {ele.name}
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div> */}
              {/* <div className="footer-other-links">
                <div className="same-row-links">
                  <a
                    href="https://unstop.com/about"
                    className="divider"
                  >
                    About Us
                  </a>
                  <a
                    href="https://unstop.com/about/contact-us"
                    className="divider"
                  >
                    Contact Us
                  </a>
                  <a
                    href="https://unstop.com/about/unstop-careers"
                    className="footer-careers"
                  >
                    Careers
                    <span className="hiring">We're hiring</span>
                  </a>
                </div>
                <div className="same-row-links">
                  <a
                    href="https://unstop.com/about/clients"
                    className="divider"
                  >
                    Clientele
                  </a>
                  <a href="https://unstop.com/our-partners/become-a-partner">
                    Partner With Us
                  </a>
                </div>
                <div className="same-row-links">
                  <a
                    href="https://unstop.com/our-partners"
                    className="divider"
                  >
                    Partners
                  </a>
                  <a
                    href="https://unstop.com/faq"
                    className="divider"
                  >
                    FAQs
                  </a>
                  <a href="https://unstop.com/our-partners/branding-guidelines">
                    Branding Guidelines
                  </a>
                </div>
                <div className="same-row-links">
                  <a
                    href="https://unstop.com/about/testimonials"
                    className="divider"
                  >
                    Testimonials
                  </a>
                  <a href="https://unstop.com/p/featured-partners-446568">
                    Featured Partners
                  </a>
                </div>
                <a href="https://unstop.com/unstop-rewards-program">
                  Unstop Rewards Program
                </a>
                <a href="https://unstop.com/unstoppitchsharktank">
                  Unstop on Shark Tank
                </a>
                <div className="same-row-links">
                  <a
                    href="https://unstop.com/legal/terms-of-use"
                    className="divider"
                  >
                    Terms & Conditions
                  </a>
                  <a href="https://unstop.com/legal/privacy-policy">
                    Privacy Policy
                  </a>
                </div>
                <a href="https://unstop.com/directory/competitions/a/1">
                  Sitemap
                </a>
              </div> */}
            </div>
          </div>
    
        </div>
        <div className="company-name">
          <h1>HireXzo</h1>
        </div>
        {/* <div className="footer-bottom container">
          <div className="footer-bottom-left">
            <img
              src="https://d8it4huxumps7.cloudfront.net/uploads/images/d2c-icons/d2c-payments-icon.svg"
              alt="payments assurance"
            />
            <img
              src="https://d8it4huxumps7.cloudfront.net/uploads/images/d2c-icons/payments-icon.svg"
              alt="payment methods"
            />
          </div>
          <div className="footer-bottom-right">
            <img
              src="https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/gdpr-logo.png?d=300x300"
              alt="data protection"
            />
            <img
              src="https://d8it4huxumps7.cloudfront.net/uploads/images/6231c2a5bdf94_iso_27001.svg"
              alt="information security"
            />
            <img
              src="https://d8it4huxumps7.cloudfront.net/uploads/images/6231c2c0b51ff_iso_9001.svg"
              alt="iso certified"
            />
          </div>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
