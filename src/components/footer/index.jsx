import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row gutter-24 align-items-center ">
            <div className="col-lg-6">
              <div className="social-wrap">
                <ul className="social social--style-1">
                  <li className="social__item">
                    <a
                      target="_blank"
                      href="https://www.facebook.com/"
                      className="social__link"
                    >
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                  </li>
                  <li className="social__item">
                    <a
                      target="_blank"
                      href="https://www.twitter.com/"
                      className="social__link"
                    >
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                  </li>
                  <li className="social__item">
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/"
                      className="social__link"
                    >
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li className="social__item">
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/"
                      className="social__link"
                    >
                      <i className="fa-brands fa-github"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 text-lg-end">
              <div className="col-12">
                <p className="copyright-text mb-0">
                  Copyright ©<span className="currentYear"></span>{" "}
                  <Link to="/" rel="nofollow">
                    Golam Rabbani
                  </Link>
                  . All Rights Reserved
                </p>
              </div>
            </div>
            {/* end col */}
          </div>
          {/* end row */}
        </div>
        {/* end container */}
      </footer>
      {/* end footer */}
    </>
  );
};

export default Footer;
