const Heading = ({ children, type}) => {
  let HeadingElement;
  switch (type) {
    case "h1":
      HeadingElement = "h1";
      break;
    case "h2":
      HeadingElement = "h2";
      break;
    case "h3":
      HeadingElement = "h3";
      break;
    case "h4":
      HeadingElement = "h4";
      break;
    case "h5":
      HeadingElement = "h5";
      break;
    case "h6":
      HeadingElement = "h6";
      break;
    default:
      HeadingElement = "h5";
      break;
  }
  return <HeadingElement className="font-weight-bold">
    {children}
  </HeadingElement>;
};
export default Heading;
