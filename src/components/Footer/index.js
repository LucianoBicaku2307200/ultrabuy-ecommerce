import Tag from "../Tag";

const tagVlues = [
  "Apple",
  "Orange",
  "Pineapple",
  "Plum",
  "Carrot",
  "Watermelon",
  "Tomato",
  "Potato",
  "Apple",
  "Orange",
  "Pineapple",
  "Plum",
  "Carrot",
  "Watermelon",
  "Tomato",
  "Potato",
  "Apple",
  "Orange",
  "Pineapple",
  "Plum",
  "Carrot",
];

const Footer = ({ tagValues }) => {
  const aStyle =
    "text-C2-default py-1 flex flex-wrap text-sm md:justify-start justify-center hover:underline";
  const h3Style = "font-bold py-2 text-black md:text-justify text-center";

  return (
    <>
      <footer className="text-white flex">
        <div className="md:px-8 sm:px-5 lg:py-14 py-10 flex w-full flex-col">
          <div className="flex flex-wrap w-full md:justify-around md:items-baseline sm:flex-row pb-6">
            <div className="flex justify-center lg:w-1/4 sm:w-1/2 w-full lg:pb-0 pb-10">
              <div className="flex flex-col w-auto md:w-1/2 lg:w-auto">
                <h3 className={h3Style}>Get in touch</h3>
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
            </div>
            <div className="flex justify-center lg:w-1/4 sm:w-1/2 w-full lg:pb-0 pb-10">
              <div className="flex flex-col w-auto md:w-1/2 lg:w-auto">
                <h2 className={h3Style}>Connections</h2>
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
            </div>
            <div className="flex justify-center lg:w-1/4 sm:w-1/2 w-full lg:pb-0 pb-10">
              <div className="flex flex-col w-auto md:w-1/2 lg:w-auto">
                <h2 className={h3Style}>Get in touch</h2>
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
            </div>
            <div className="flex justify-center lg:w-1/4 sm:w-1/2 w-full lg:pb-0 pb-10">
              <div className="flex flex-col w-auto md:w-1/2 lg:w-auto">
                <h2 className={h3Style}>Account</h2>
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
          <div className="flex flex-col sm:mx-20 mx-7">
            <div className="flex md:justify-start justify-center pb-5">
              <h1 className="font-semibold md:text-2xl text-lg text-black">
                Product tags
              </h1>
            </div>
            <div className="flex flex-wrap items-center gap-3 w-full">
              {tagVlues.map((value) => (
                <div className="px-1 py-1">
                  <Tag
                    value={value}
                    onClick={() => console.log("13213")}
                    displayIcon={false}
                    wrapperClassName="px-3 py-1 rounded-xl bg-C1-E cursor-pointer"
                    textClassName="text-black font-medium"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
