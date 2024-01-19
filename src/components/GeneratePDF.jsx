import TextStyleConfig from "./TextStyleConfig";
import ImageUpload from "./ImageUpload";

const GeneratePDF = () => {
  return (
    <div className="container">
      <label className="label">
        Título:
        <input
          className="input"
          type="text"
          placeholder="Insira um título..."
        />
      </label>
      <label className="label">
        Descrição:
        <input
          className="input"
          type="text"
          placeholder="Insira uma descrição..."
        />
      </label>
      <TextStyleConfig />
      <ImageUpload />
      <button className="button">Gerar PDF</button>
    </div>
  );
};

export default GeneratePDF;
