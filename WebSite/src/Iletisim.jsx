import React from "react";
import "./style/iletisim.css";
import { Link } from "react-router-dom";

function Iletisim() {
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
          <Link to={"/isler"} className="link">
            Yaptığım İşler
          </Link>
        </div>
      </header>

      <div className="baslik">
        <i class="bi bi-telephone-fill icon"></i>
        <h1>İletişim</h1>
      </div>

      <div className="formContainer">
        <div>
            <div className="inputGrup">
              <input type="text" id="name" required placeholder="Ad soyad Giriniz:"/>
            </div>
            <div className="inputGrup">
              <input type="text" id="ePosta" required placeholder="E-Posta Giriniz:"/>
            </div>
            <div className="inputGrup">
              <input type="text" id="konu" required placeholder="Konu:"/>
            </div>
            <div className="inputGrup mesaj">
              <input type="text" id="mesaj" required placeholder="Mesajınız:"/>
            </div>
            
        </div>
      </div>

      <div className="gonderButton">
        <button>
        <h1>Gönder</h1>
        </button>
      </div>

    </div>
  );
}

export default Iletisim;
