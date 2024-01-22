const TextStyleConfig = ({
  fontSize,
  setFontSize,
  fontColor,
  setFontColor,
  isBold,
  setIsBold,
}) => {
  return (
    <div className="textStyleConfig">
      <label className="config-label">
        Font Size:
        <input
          type="text"
          className="input"
          value={fontSize}
          onChange={(e) => setFontSize(e.target.value)}
        />
      </label>
      <label className="config-label">
        Font Color:
        <input
          type="color"
          className="color-piker"
          value={fontColor}
          onChange={(e) => setFontColor(e.target.value)}
        />
      </label>
      <label className="config-label">
        Bold:
        <input
          type="checkbox"
          value={isBold}
          onChange={(e) => setIsBold(e.target.value)}
        />
      </label>
    </div>
  );
};

export default TextStyleConfig;
