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
];

const Footer = () => {
  const aStyle =
    "bg-white text-black py-1 flex flex-wrap text-sm md:justify-start justify-center";
  const h3Style = "font-bold py-2 text-C2-default md:text-justify text-center";

  return (
    <>
      <footer className="text-white flex">
        <div className="md:px-10 sm:px-5 lg:py-20 py-10 flex w-full flex-col">
          <div className="flex flex-wrap w-full lg:justify-around lg:items-baseline lg:pl-14 sm:flex-row">
            <div className="lg:w-1/4 sm:w-1/2 w-full lg:pb-0 pb-10">
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
            <div className="lg:w-1/4 sm:w-1/2 w-full lg:pb-0 pb-10">
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
            <div className="lg:w-1/4 sm:w-1/2 w-full lg:pb-0 pb-10">
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
            <div className="lg:w-1/4 sm:w-1/2 w-full">
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
          <div className="flex flex-col">
            <div className="flex md:justify-start justify-center pb-5">
              <h1 className="font-semibold lg:text-4xl md:text-2xl text-lg text-black">
                Footer tags
              </h1>
            </div>
            <div className="flex flex-wrap items-center justify-around w-full">
              {tagVlues.map((value) => (
                <div className="px-2 py-2">
                  <Tag
                    value={value}
                    onClick={() => console.log("13213")}
                    displayIcon={false}
                    wrapperClassName="px-2 py-1 rounded-lg bg-C1-E cursor-pointer"
                    textClassName="mr-2 text-black"
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
