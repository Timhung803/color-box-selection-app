const AddColor = ({color, setColor}) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="addColor"></label>
      <input
        autoFocus
        className="box addColor"
        id="addColor"
        type="text"
        placeholder="Add colour name"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
    </form>
  );
};

export default AddColor;
