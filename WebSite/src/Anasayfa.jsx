import React from "react";
import "./style/App.css";
import { Link } from "react-router-dom";

function Anasayfa() {
  return (
    <div>
      <div>
        <header>
          <span class="ahsenLogo"></span>
          <Link to={"/iletisim"} className="iletisimlink">
            <div class="button">
              <p>Bana Ulaşın</p>
            </div>
          </Link>
        </header>

        <main>
          <h1>Merhaba, Ben Ahmet Eren Can!</h1>
          <h5>Bir Web Tasarımcı ve Geliştiriciyim</h5>
        </main>

        <footer>
          {/* <Link to={'/contact'} className='link'>İletişim</Link>*/}
          <div class="anasayfaButton">
            <Link to={"/diller"} className="link">
              <i class="bi bi-code-slash icon"></i>
              <p>Bildiğim Diller</p>
            </Link>
          </div>
          <div class="anasayfaButton">
            <Link to={"/hakkimda"} className="link">
              <i class="bi bi-person-fill icon"></i>
              <p>Hakkımda</p>
            </Link>
          </div>
          <div class="anasayfaButton">
            <Link to={"/isler"} className="link">
              <i class="bi bi-archive-fill icon"></i>
              <p>Yaptığım İşler</p>
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Anasayfa;
