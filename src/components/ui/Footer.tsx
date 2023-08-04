import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { socialItems } from "../../utils/socialItemArr";

import "../../styles/footer.scss";
export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__mailSection">
        <div className="container">
          <h2 className="footer__mailSection__title">
            Sign up for our mailing list
          </h2>
          <p>Be the first to hear about new product</p>

          <div className="footer__mailSection__search">
            <InputText placeholder="Your Email" />
            <Button severity="secondary">SIGN UP</Button>
          </div>

          <div className="footer__mailSection__followSection">
            <h2 className="footer__mailSection__followSection__title">
              Follow Us:
            </h2>

            <span className="footer__mailSection__followSection__icons">
              {socialItems.map((item) => (
                <Button
                  key={item.name}
                  size="small"
                  icon={item.icon}
                  // className="bg-white text-primary"
                  severity="secondary"
                />
              ))}
            </span>
          </div>
        </div>
      </div>

      <div className="footer__links container">
        <div className="footer__links__container">
          <div className="footer__links__categories">
            <h2>Categories</h2>
            <ul>
              <li>
                <a>Women</a>
              </li>
              <li>
                <a>Men</a>
              </li>
              <li>
                <a>Kids</a>
              </li>
              <li>
                <a>Sale</a>
              </li>
            </ul>
          </div>

          <div className="footer__links__contactUs">
            <h2>Categories</h2>
            <ul>
              <li>
                <a>1-222-333-4444</a>
              </li>
              <li>
                <a>Send a Message</a>
              </li>
            </ul>
          </div>

          <div className="footer__links__about">
            <h2>About</h2>
            <ul>
              <li>
                <a>Dev Team</a>
              </li>
              <li>
                <a>Git Repo</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__author">
          <p>Made by Leopoldo Miranda</p>
          <p>All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};
