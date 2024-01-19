const TextStyleConfig = () => {
  return (
    <div className="textStyleConfig">
      <label className="config-label">
        Font Size:
        <input type="text" className="input" />
      </label>
      <label className="config-label">
        Font Color:
        <input type="color" className="color-piker" />
      </label>
      <label className="config-label">
        Bold:
        <input type="checkbox" />
      </label>
    </div>
  );
};

export default TextStyleConfig;
