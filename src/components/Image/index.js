const Image = ({ icon, className, alt }) => {
  return (
    <img
      className={"hover:shadow-lg " + className}
      src={process.env.PUBLIC_URL + `/images/${icon}`}
      alt={alt}
    />
  );
};

export default Image;
