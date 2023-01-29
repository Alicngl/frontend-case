import React from "react";
import Facebook from "../../assets/facebook.webp";
import Instagram from "../../assets/instagram.webp";
import Pay from "../../assets/odeme.webp";

const Footer = () => {
  return (
    <div className="w-ful border-t-4 border-solid p-7">
      <div className="sm:flex justify-around space-y-5 sm:space-y-0">
        <div className="space-y-2 sm:border-b-0 border-b-2 border-solid p-3">
          <p>Hakkımızda</p>
          <ul className="text-sm">
            <li>Ürünler</li>
            <li>Hüküm ve Koşullar</li>
            <li>Gizlilik Politikası</li>
          </ul>
        </div>

        <div className="space-y-3 sm:border-b-0 border-b-2 border-solid p-3">
          <div className="flex  space-x-3">
            <p className="">Sosyal Medyadan Takip Edin :</p>

            <div className="flex  space-x-2">
              <a href="https://www.facebook.com/" target={"_blank"}>
                <img src={Facebook} alt="facebook" width={30} />
              </a>
              <a href="https://www.instagram.com/" target={"_blank"}>
                {" "}
                <img src={Instagram} alt="instagram" width={30} />
              </a>
            </div>
          </div>
          <p className="text-sm">2004 - 2023 | Tüm Hakları Saklıdır.</p>
          <p className="text-xs">
            Kişisel Verilerin Korunması, Gizlilik Politikası ve Çerez (Cookie)
            Kullanımı İlkeleri hakkında detaylı bilgi
          </p>
        </div>
        <div className="p-3">
          <img src={Pay} alt="instagram" width={290} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
