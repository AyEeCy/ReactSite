import React from "react";
import "./style/isler.css";
import { Link } from "react-router-dom";

function Isler() {
  return (
    <div>
      <header>
        <span class="ahsenLogo"></span>
        <div className="navbar">
          <Link to={"/"} className="link">
            Anasayfa
          </Link>
          <Link to={"/diller"} className="link">
            Bildiğim Diller
          </Link>
          <Link to={"/hakkimda"} className="link">
            Hakkımda
          </Link>
        </div>
      </header>

      <div className="baslik">
        <i class="bi bi-archive-fill icon"></i>
        <h1>Hakkımda</h1>
      </div>

      <div className="islerContainer" id="isler">
        <div className="isleri" >
          <h1 className="baslik">
            Kartvizit <br /> Tasarımı
          </h1>
          <a href="https://drive.google.com/file/d/1UM8KxeyCsWpTxlmuPAf03LMv1d7_TQUt/view?usp=sharing" className="pdfButton" target="_blank">
            Pdf Olarak Görüntüle
          </a>
        </div>
        <div className="isleri">
          <h1 className="baslik">Köy Tanıtım Dergisi Tasarımı</h1>
          <a href="https://drive.google.com/file/d/1_qpxgPCLrWfs2k3RoVf5gHopASegIdG2/view?usp=sharing" className="pdfButton" target="_blank">
            Pdf Olarak Görüntüle
          </a>
        </div>
        <div className="isleri">
          <h1 className="baslik">
            Pictogram <br />
            Tasarımı
          </h1>
          <a href="https://drive.google.com/file/d/14smaMO5TQIqu8FMMMuaXrh4i9lVYI1ND/view?usp=sharing" className="pdfButton" target="_blank">
            Pdf Olarak Görüntüle
          </a>
        </div>
        <div className="isleri">
          <h1 className="baslik">Mobil Web Arayüzü Tasarımı</h1>
          <a href="https://drive.google.com/file/d/1SvXlM2X_nUae02yY1cjlWlQJXZRAp607/view?usp=sharing" className="pdfButton" target="_blank">
            Pdf Olarak Görüntüle
          </a>
        </div>
        <div className="isleri">
          <h1 className="baslik">Ön Ödemeli Su Sistemi Web Arayüzü Tasarımı</h1>
          <a href="https://drive.google.com/file/d/1BlV0VRmUwWlZeATEQViyid3CGeMVhAXV/view?usp=sharing" className="pdfButton" target="_blank">
            Pdf Olarak Görüntüle
          </a>
        </div>
      </div>
      <div className="dahafazla">
        <Link to={"/iletisim"} className="iletisimLink">
          Daha Fazlası İçin Bana Ulaş
        </Link>
      </div>
    </div>
  );
}

export default Isler;
