const DrawButton = ({}) => {
  const handleClick = () => {
    console.log("map button clicked ");
    // Do something when the button is clicked
  };

  return (
    <button className="custom-button" onClick={handleClick}>
      Click Me
    </button>
  );
};

export default DrawButton;
