const Footer = () => {
  const aStyle = "bg-white text-black py-1 flex flex-wrap";
  const h2Style = "text-xl font-bold py-2 text-C2-default";
  return (
    <>
      <footer className="text-white flex">
        <div className="px-5 py-20 flex flex-wrap flex-col md:flex-row w-full">
          <div className="flex flex-wrap lg:w-full lg:justify-around lg:items-baseline">
            <div className="lg:w-1/6  lg:mx-0 mx-20 lg:pl-5 lg:pb-0 pb-10">
              <h2 className={h2Style}>Get in touch</h2>
              <ul>
                <li>
                  <a href="https://www.apple.com" className={aStyle}>
                    About Us
                  </a>
                </li>
                <li>
                  <a href="https://www.apple.com" className={aStyle}>
                    Careers
                  </a>
                </li>
                <li>
                  <a href="https://www.apple.com" className={aStyle}>
                    Press Releases
                  </a>
                </li>
              </ul>
            </div>
            <div className="lg:w-1/6  lg:mx-0 mx-20 lg:pb-0 pb-10">
              <h2 className={h2Style}>Connections</h2>
              <ul>
                <li>
                  <a href="https://www.apple.com" className={aStyle}>
                    About Us
                  </a>
                </li>
                <li>
                  <a href="https://www.apple.com" className={aStyle}>
                    Careers
                  </a>
                </li>
                <li>
                  <a href="https://www.apple.com" className={aStyle}>
                    Press Releases
                  </a>
                </li>
              </ul>
            </div>
            <div className="lg:w-1/6  lg:mx-0 mx-20 lg:pb-0 pb-10">
              <h2 className={h2Style}>Get in touch</h2>
              <ul>
                <li>
                  <a href="https://www.apple.com" className={aStyle}>
                    About Us
                  </a>
                </li>
                <li>
                  <a href="https://www.apple.com" className={aStyle}>
                    Careers
                  </a>
                </li>
                <li>
                  <a href="https://www.apple.com" className={aStyle}>
                    Press Releases
                  </a>
                </li>
              </ul>
            </div>
            <div className="lg:w-1/6  lg:mx-0 mx-20">
              <h2 className={h2Style}>Account</h2>
              <ul>
                <li>
                  <a href="https://www.apple.com" className={aStyle}>
                    Your account
                  </a>
                </li>
                <li>
                  <a href="https://www.apple.com" className={aStyle}>
                    Returns Center
                  </a>
                </li>
                <li>
                  <a href="https://www.apple.com" className={aStyle}>
                    100% Purchase Protection
                  </a>
                </li>
                <li>
                  <a href="https://www.apple.com" className={aStyle}>
                    Chat with us
                  </a>
                </li>
                <li>
                  <a href="https://www.apple.com" className={aStyle}>
                    Help
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
