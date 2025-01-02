import Container from "../component/container";
// Main.js
import MiddleContent from "../component/MiddleContent";
import ScrollToTop from "../component/ScrollToTop";
import LandingPage from "../component/topblock";
import gambarAnak from "../style/img/anak.jpeg"
import "../style/main.css";
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
              fontSize: "18px",
              color: "white",
              margin: "20px 0",
              textAlign: "center",
            }}
          >
            Stunting merupakan salah satu masalah yang sering dihadapin balita
            di indonesia terutama yang berusuia kurang dari 1000 hari pertama
            dari kelahiran , dampak dari stunting ini cukup beragam mulai dari
            pertumbuhan fisik yang lebih lambat dari anak lain hingga kematian,
            dikutip dari umtj.ac.id , Ibu Dian Istiqomah (Anggota Komisi IX
            DPR-RI) berkata bahwa 15-17% kasus kematian pada anak disebabkan
            oleh stunting
          </h4>
          <h5 style={{ textAlign: "center" }}>
            Source :{" "}
            <a
              target="_blank"
              className="linked"
              href="https://www.who.int/news-room/fact-sheets/detail/malnutrition?gad_source=1&gclid=Cj0KCQiAj9m7BhD1ARIsANsIIvDFUYn8ZDxGqpJUZiOj-fcrsUHm54t3vyWDK866lyIAndJZNqh_XJoaAnbGEALw_wcB#"
            >
              World Health Organization{" "}
            </a>{" "}
            ,
            <a
              target="_blank"
              className="linked"
              href="https://www.utmj.ac.id/blog/2024/09/22/15-17-kematian-anak-akibat-stunting-mahasiswa-utmj-dapat-tips-cegah-dari-bkkbn/"
            >
              Umtj.ac.id
            </a>
          </h5>
          <div style={{ marginTop: "40px" }}></div>
        </div>
      </div>
{/* fact indo */}
        <div className="factIndo"  style={{ backgroundImage: `url(${gambarAnak})` }}>
            <p>TES</p>
        </div>



      <div className="story-container">
        <div className="story-wrapper">
          <div className="flex-row">
            {/* Text Content Side */}
            <div className="content-section">
              <p className="story-text">
                Samuel may appear well and happy for a one and half year old
                child – but being shorter than his ideal height makes him look
                barely a year old.
              </p>

              <p className="story-text">
                The child in him is strong and boisterous – but only for short
                bursts of time.
              </p>

              <p className="story-text">
                After visiting his grandparents he plonks himself on the bed.
                But he tires easily and has a short attention span for his age.
              </p>

              <p className="story-text">
                Samuel's frequent bouts of illness were telling signs of danger.
              </p>

              <div className="quote-section">
                <p className="quote-text">
                  "I am very worried for Samuel's future and his health. He is
                  not eating well due to frequent fevers, and has white spots in
                  his colon."
                </p>
                <p className="quote-author">- Yeni</p>
              </div>

              <p className="story-text">
                Today for these parents the silver lining is that Samuel is
                still within his first 1000 days.
              </p>
            </div>

            {/* Image Side */}
            <div className="image-section">
              <img
                src="/samuel-image.jpg"
                alt="Samuel smiling"
                className="story-image"
              />
            </div>
          </div>
        </div>
      </div>

      <p>p</p>

      <p>p</p>

      <p>p</p>
      <p>p</p>
      <p>p</p>
      <p>p</p>
      <p>p</p>
      <p>p</p>
      <p>p</p>
      <p>p</p>
      <p>p</p>
      <p>p</p>
      <p>p</p>
      <p>p</p>
      <p>p</p>
      <p>p</p>
      <p>p</p>
      <p>p</p>
      <p>p</p>
      <p>p</p>
      <p>p</p>
      <p>p</p>
      <p>p</p>
      <p>p</p>
      <p>p</p>
      <p>p</p>
      <p>p</p>
      <p>p</p>
      <p>p</p>
      <p>p</p>
      <p>p</p>
      <p>p</p>
      <p>p</p>
      <p>p</p>
      <p>p</p>
      <p>p</p>
      <p>p</p>
      <p>p</p>
      <p>p</p>
      <p>p</p>
      <p>p</p>
      <p>p</p>
      <p>p</p>
      <p>p</p>
      <p>p</p>
      <p>p</p>
      <p>p</p>
      <p>p</p>
      <p>p</p>
      <p>p</p>
      <p>p</p>
      <p>p</p>
      <p>p</p>
    </>
  );
};

export default Main;
