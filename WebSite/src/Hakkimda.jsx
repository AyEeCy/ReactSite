import React from "react";
import "./style/hakkimda.css";
import { Link } from "react-router-dom";

function Hakkimda() {
  return (
    <div>
      <header>
        <span className="ahsenLogo"></span>
        <div className="navbar">
          <Link to={"/"} className="link">
            Anasayfa
          </Link>
          <Link to={"/diller"} className="link">
            Bildiğim Diller
          </Link>
          
          <Link to={"/isler"} className="link">
            Yaptığım İşler
          </Link>
        </div>
      </header>
      <div className="baslik">
        <i class="bi bi-person-fill icon"></i>
        <h1>Hakkımda</h1>
      </div>
      <div className="content">
        <div className="yazilar">
          <p>
            Merhaba! Ben Ahmet Eren, web geliştirme dünyasına yeni adım atmış ve
            HTML, CSS, ve JavaScript gibi temel teknolojiler ile modern web
            siteleri oluşturmayı hedefleyen bir geliştiriciyim. Kullanıcı dostu
            ve görsel açıdan çekici tasarımlar yaratmak benim için büyük bir
            motivasyon kaynağı. Şu anda, bireylerin ihtiyaçlarını karşılamayı
            hedefleyen yenilikçi projeler üzerinde çalışıyorum. Web sitelerimi
            sadece estetik bir bakış açısıyla değil, aynı zamanda işlevsellik ve
            erişilebilirlik açısından da güçlü kılmaya özen gösteriyorum.
            Kodlama sürecinde detaylara verdiğim önem ve çözüm odaklı
            yaklaşımım, projelerimde fark yaratmama yardımcı oluyor. Öğrenmeyi
            seven biri olarak kendimi geliştirmeye devam ediyor ve yeni
            teknolojileri keşfetmek için sabırsızlanıyorum. Eğer birlikte
            çalışmak veya projelerimi incelemek isterseniz, benimle iletişime
            geçebilirsiniz!
          </p>
        </div>
        <span class="resim"></span>
      </div>
      <div className="sosyal">
        <a href="https://www.instagram.com/ahmeteren6837/" target="_blank">
          <i class="bi bi-instagram icon"></i>
        </a>
        <a href="https://www.facebook.com/ahmeteren.can.146" target="_blank">
          <i class="bi bi-facebook icon"></i>
        </a>

        <a href="https://www.linkedin.com/" target="_blank">
          <i class="bi bi-linkedin icon"></i>
        </a>
      </div>
      <div className="dahafazla">
        <Link to={"/iletisim"} className="iletisimLink">
          Daha Fazlası İçin Bana Ulaş
        </Link>
      </div>
    </div>
  );
}

export default Hakkimda;
