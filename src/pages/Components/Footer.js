//import { useState } from "react";
import Link from "../Components/Link";

const Footer = () => {
  return (
    <>
      <div className="pt-12 flex w-screen">
        <div className="border-t border-b border-gray-200 py-10 w-full">
          <div className="mx-24 flex flex-col md:flex-row items-baseline justify-between">
            <div className="flex mt-6">
              <ul>
                <div className="text-xl font-bold my-2">Get in touch</div>
                <li>
                  <Link
                    id="https://www.apple.com"
                    className="text-C2-C border-none -ml-3"
                    content="About Us"
                  />
                </li>
                <li>
                  <Link
                    id="https://www.apple.com"
                    className="text-C2-C border-none -ml-3"
                    content="Careers"
                  />
                </li>
                <li>
                  <Link
                    id="https://www.apple.com"
                    className="text-C2-C border-none -ml-3"
                    content="Press Releases"
                  />
                </li>
              </ul>
            </div>
            <div className="flex mt-6">
              <ul>
                <div className="text-xl font-bold my-2">Connections</div>
                <li>
                  <Link
                    id="https://www.apple.com"
                    className="text-C2-C border-none -ml-3"
                    content="About Us"
                  />
                </li>
                <li>
                  <Link
                    id="https://www.apple.com"
                    className="text-C2-C border-none -ml-3"
                    content="Careers"
                  />
                </li>
                <li>
                  <Link
                    id="https://www.apple.com"
                    className="text-C2-C border-none -ml-3"
                    content="Press Releases"
                  />
                </li>
              </ul>
            </div>
            <div className="flex mt-6">
              <ul>
                <div className="text-xl font-bold my-2">Get in touch</div>
                <li>
                  <Link
                    id="https://www.apple.com"
                    className="text-C2-C border-none -ml-3"
                    content="About Us"
                  />
                </li>
                <li>
                  <Link
                    id="https://www.apple.com"
                    className="text-C2-C border-none -ml-3"
                    content="Careers"
                  />
                </li>
                <li>
                  <Link
                    id="https://www.apple.com"
                    className="text-C2-C border-none -ml-3"
                    content="Press Releases"
                  />
                </li>
              </ul>
            </div>
            <div className="flex mt-6">
              <ul>
                <div className="text-xl font-bold my-2">Account</div>
                <li>
                  <Link
                    id="https://www.apple.com"
                    className="text-C2-C border-none -ml-3"
                    content="Your account"
                  />
                </li>
                <li>
                  <Link
                    id="https://www.apple.com"
                    className="text-C2-C border-none -ml-3"
                    content="Returns Center"
                  />
                </li>
                <li>
                  <Link
                    id="https://www.apple.com"
                    className="text-C2-C border-none -ml-3"
                    content="100% Purchase Protection"
                  />
                </li>
                <li>
                  <Link
                    id="https://www.apple.com"
                    className="text-C2-C border-none -ml-3"
                    content="Chat with us"
                  />
                </li>
                <li>
                  <Link
                    id="https://www.apple.com"
                    className="text-C2-C border-none -ml-3"
                    content="Help"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
