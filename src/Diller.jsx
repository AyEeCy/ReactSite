import React from 'react'
import './style/diller.css'
import  {Link} from "react-router-dom";

function Diller() {
  return (
    <div>
      <header>
        <span class="ahsenLogo"></span>
        <div className="navbar">
          <Link to={"/"} className="link">
            Anasayfa
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
        <i class="bi bi-code-slash icon"></i>
        <h1>Bildiğim Diller</h1>
      </div>

      <div className="bildiller">
        <div className="bildil">
          <div className="bilLogoHtml bilLogo"></div>
          <h2 className="bilBaslik">Html</h2>
          <div className="bilaciklama">Yaklaşık 6 aydır HTML ile çalışıyorum. Web sayfalarının temel yapısını oluşturma konusunda oldukça rahatım ve projelerimde etkili bir yapı kurabiliyorum.</div>
        </div>
        <div className="bildil">
        <div className="bilLogoCss bilLogo"></div>
          <h2 className="bilBaslik">Css</h2>
          <div className="bilaciklama">6 aydır CSS kullanıyorum. Farklı tasarımlar oluşturma, responsive web tasarımı ve temel animasyonlar konusunda kendimi geliştirdim.</div>
        </div>
        <div className="bildil">
        <div className="bilLogoJs bilLogo"></div>
          <h2 className="bilBaslik">JavaScirpt</h2>
          <div className="bilaciklama">JavaScript'e 4 aydır hakimim. Dinamik web sayfaları oluşturma, basit kullanıcı etkileşimleri ve temel algoritmalar üzerinde çalışarak tecrübemi artırıyorum.</div>
        </div>
        <div className="bildil">
        <div className="bilLogoReact bilLogo"></div>
          <h2 className="bilBaslik">React</h2>
          <div className="bilaciklama">Henüz öğrenme aşamasındayım, ancak ilerleyen dönemde modern web uygulamaları geliştirmek için bu güçlü kütüphaneyi projelerimde kullanmayı hedefliyorum.</div>
        </div>
      </div>
      <div className="dahafazla">
          <Link to={"/iletisim"} className="iletisimLink">
                Daha Fazlası İçin Bana Ulaş
          </Link>
      </div>
    </div>
  )
}

export default Diller
