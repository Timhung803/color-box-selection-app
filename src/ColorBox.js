const ColorBox = ({ color }) => {
  return (
    <div
      className="box colorBox"
      style={{
        backgroundColor: `${color}`,
        color: `${color}`,
      }}
    >
      {color.length > 0 ? color : "Empty Value"}
    </div>
  );
};

export default ColorBox;
