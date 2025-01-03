import Container from "../component/container";
// Main.js
import MiddleContent from "../component/MiddleContent";
import ScrollToTop from "../component/ScrollToTop";
import LandingPage from "../component/topblock";
import gambarAnak from "../style/img/anak.jpeg"
import indonesiaImg from "../style/img/indonesia.avif"
import fotoYeni1 from "../style/img/fotoYeni1.jpg"
import yeni3 from "../style/img/yeni3.jpg"
import yeni2 from "../style/img/yeni2.jpg"
import "../style/main.css";
import SendStory from "../component/SendStory";
const Main = () => {
  return (
    <>
      <ScrollToTop />
      <Container>
        <LandingPage />
      </Container>
      <div className="story-container">
        <div className="story-wrapper">
          <h1
            style={{ fontSize: "38px", color: "#f97316", textAlign: "center" }}
          >
            Apa itu Stunting
          </h1>
          <h4
            style={{
              fontSize: "16px",
              color: "#e0e0e0",
              margin: "20px 0",
              textAlign: "center",
            }}
          >Stunting adalah kondisi gagal tumbuh pada anak akibat<span className="orange"> kekurangan gizi kronis, infeksi berulang, dan stimulasi psikososial yang tidak memadai </span>, terutama pada 1000 hari pertama kehidupan, yang merupakan periode penting dalam perkembangan anak. Menurut WHO, stunting didefinisikan sebagai tinggi badan anak yang berada di bawah minus dua standar deviasi dari median standar pertumbuhan anak.Dampak dari stunting sangat serius, mulai dari pertumbuhan fisik yang lebih lambat dibandingkan anak seusianya hingga risiko kematian. Menurut Ibu Dian Istiqomah (Anggota Komisi IX DPR-RI) yang dikutip dari umtj.ac.id, 15-17% kasus kematian pada anak di dunia disebabkan oleh stunting
          </h4>
          <h5 style={{ textAlign: "center" }}>
            Source :{" "}
            <a
              target="_blank"
              className="linked"
              href="https://www.who.int/news-room/fact-sheets/detail/malnutrition?gad_source=1&gclid=Cj0KCQiAj9m7BhD1ARIsANsIIvDFUYn8ZDxGqpJUZiOj-fcrsUHm54t3vyWDK866lyIAndJZNqh_XJoaAnbGEALw_wcB#"
            >
              World Health Organization{}
            </a>{" "}, &nbsp;
            <a
              target="_blank"
              className="linked"
              href="https://www.utmj.ac.id/blog/2024/09/22/15-17-kematian-anak-akibat-stunting-mahasiswa-utmj-dapat-tips-cegah-dari-bkkbn/"
            >Umtj.ac.id
            </a>
          </h5>
          <div style={{ marginTop: "40px" }}></div>
        </div>
      </div>
{/* fact indo */}
        <div className="factIndo"  style={{ backgroundImage: `url(${indonesiaImg})`,height:"90vh" }}>
            <div className="centeredinImg">
                <div className="boxCenteredinImg">
                    <p>Faktanya Di Indonesia Stunting merupalah masalah yang cukup penting dimana <span className="orange">  1 dari 4 </span> anak yang lahir di indonesia dinyatakan <span className="orange">Stunting</span></p>
                </div>
            </div>
        </div>
        <div className="story-container">
        <div className="story-wrapper">
          <div className="flex-row">
          <div className="image-section">
              <img
                src={fotoYeni1}
                style={{width:"90%"}}
                alt="Samuel smiling"
                className="story-image"
              />
            </div>
            <div className="content-section">
              <p className="story-text">
              </p>

              <p className="story-text">
              Di sebuah desa terpencil di rote ,Indonesia, terdapat sebuah keluarga yang bernama Yeni Nalle dan suaminya , Agus Nggadas , yang memiliki seorang putra bernama Samuel yang baru berusia 17 bulan. Meski Ceria, Samuel mengalamin sebuah ganguan pertumbuhan (Stunting) pada tubuhnya dengan salah satu bukti jelasnya adalah ukuran tubuhnya lebih pendek dibandingkan dengan anak anak seusianya
              </p>

              <p className="story-text">
              Perjalanan hidup Yeni dipenuhi cobaan. Sebelum Samuel, ia kehilangan tiga anak karena masalah kesehatan yang tidak diketahui. Kehilangan itu menjadi luka mendalam yang sangat berat untuk ditanggung oleh seorang ibu. Pengalaman tersebut membuat Yeni semakin bertekad untuk berjuang demi Samuel.
              </p>

              <p className="story-text">
              Saat mengandung Samuel, Yeni menderita Kekurangan Energi Kronis (KEK), sebuah kondisi kritis yang berdampak pada kesehatannya dan perkembangan anak yang dikandungnya. Namun, dengan kekuatan dan cinta seorang ibu, Yeni berusaha keras untuk memberikan yang terbaik bagi Samuel.

              </p>
              <p className="story-text">
              akibat akses pengetahuan yang sulit di dapatkan di desa tersebut terkait bagaimana mengatasi Stunting menjadi kendala yang berarti bagi Yeni 
              </p>
            </div>
           
          </div>
        </div>
      </div>
      <div className="factIndo"  style={{ backgroundImage: `url(${yeni2})`,height:"80vh" }}>
            <div className="centeredinImg">
                <div className="boxCenteredinImg">
                    <p>Salah Satu cara pemerintah untuk menekan program stunting adalah dengan melalui <span className="orange">  Poster Pinter </span> dimana berisikan tentang bahaya stunting dan juga informasi lainya terkait stunting</p>
                </div>
            </div>
        </div>
      <div className="story-container">
        <div className="story-wrapper">
          <div className="flex-row">
            {/* Text Content Side */}
            
            <div className="content-section">
              <p className="story-text">
              </p>
              <p className="story-text">
              Sebuah poster pintar yang terpajang di dapurnya menjadi titik awal perubahan. Poster tersebut membantu Yeni memahami kondisi Samuel, memantau pertumbuhannya, dan memberikan informasi tentang pentingnya gizi serta kebersihan. "Berkat poster ini, kami lebih paham cara memberikan makanan yang lebih baik dan menjaga kebersihan," ujar Yeni.
              </p>
              <p className="story-text">
              Namun, poster itu hanyalah alat bantu. Untuk memastikan kondisi Samuel, Yeni rutin membawa anaknya ke Posyandu dengan menempuh perjalanan yang cukup panjang ,posyandu sebuah layanan kesehatan masyarakat yang dikelola oleh petugas gizi, bidan, dan relawan seperti dirinya. Kini, Yeni juga aktif menjadi relawan di Posyandu, membantu ibu-ibu lain di desanya agar lebih sadar akan pentingnya mencegah stunting.              </p>
              <div className="quote-section">
                <p className="quote-text">
                  "Saya Harap Dengan Intervesi yang tepat anak saya, dan seluruh anak di Indonesia dapat terbebas dari stunting"
                </p>
                <p className="quote-author">- Yeni</p>
              </div>
              <h5 style={{ textAlign: "center" }}>
            Source :{" "}
            <a
              target="_blank"
              className="linked"
              href="https://www.who.int/news-room/fact-sheets/detail/malnutrition?gad_source=1&gclid=Cj0KCQiAj9m7BhD1ARIsANsIIvDFUYn8ZDxGqpJUZiOj-fcrsUHm54t3vyWDK866lyIAndJZNqh_XJoaAnbGEALw_wcB#"
            >
              World Health Organization{}
            </a>{" "}, &nbsp;
            <a
              target="_blank"
              className="linked"
              href="https://www.utmj.ac.id/blog/2024/09/22/15-17-kematian-anak-akibat-stunting-mahasiswa-utmj-dapat-tips-cegah-dari-bkkbn/"
            >Umtj.ac.id
            </a>
          </h5>
            </div>

            {/* Image Side */}
            <div className="image-section">
              <img
                src={yeni3}
                style={{width:"100%"}}
                alt="Samuel smiling"
                className="story-image"
              />
            </div>
          </div>
        </div>
        <SendStory/>
        <div className="outlinefooter" style={{paddingTop:"20px",backgroundColor:"white"}}>
     <div className="footer" style={{padding:"20px" ,color:"#f97316",borderTop: "4px dashed #FFB925"}}>
      @2024 Copyright 
    </div>
     </div>
      </div>
    </>
  );
};

export default Main;
