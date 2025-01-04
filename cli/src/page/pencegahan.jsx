import ScrollToTop from "../component/ScrollToTop"
import Container from "../component/container"
import Card from "../component/Card"
import cegah1 from "../style/img/cegah6.png";
import cegah2 from "../style/img/cek.png";
import cegah3 from "../style/img/cegah4.png";
import cegah4 from "../style/img/obat.png";
import cegah5 from "../style/img/cegah3.png";
import cegah6 from "../style/img/asi.png";

import "../style/pencegahan.css"
import TabInterface from "../component/TabInterface";
const Pencegahan=()=>{
    return(
      <>
            <ScrollToTop />
      <Container>
      <h1 className="title">Penyebab Stunting</h1>
      <div className="card-container">
      <Card 
  title="Makan-makanan bergizi"
  description="Mengatur makanan yang masuk ke dalam perut sang bayi sangatlah penting untuk dijaga baik saat masih didalam kandungan maupun ketika sudah mulai beranjak dewasa"
  imageUrl={cegah1}
/>
<Card 
  title="Mengecek Pertumbuhan Secara Rutin"
  description="Disarankan untuk rutin memeriksa pertumbuhan sang balita dalam 1000 hari pertamanya agar dapat memantau tumbuh kembang sang anak secara optimal."
  imageUrl={cegah2}
/>  
<Card 
  title="Melakukan Imunisasi"
  description="Memberikan imunisasi sesuai jadwal adalah langkah penting untuk melindungi anak dari berbagai penyakit yang dapat memengaruhi pertumbuhannya."
  imageUrl={cegah3}
/>  
<Card 
  title="Minum TTD"
  description="Ibu hamil dianjurkan untuk mengonsumsi tablet tambah darah (TTD) guna mencegah anemia yang dapat memengaruhi kesehatan ibu dan bayi."
  imageUrl={cegah4}
/>  
<Card 
  title="Menjaga Kebersihan"
  description="Menerapkan kebiasaan hidup bersih, seperti mencuci tangan dan menjaga kebersihan lingkungan, dapat mencegah penyakit yang memengaruhi tumbuh kembang anak."
  imageUrl={cegah5}
/>  
<Card 
  title="Memberikan ASI Eksklusif"
  description="ASI eksklusif selama 6 bulan pertama memberikan nutrisi terbaik dan memperkuat sistem kekebalan tubuh bayi."
  imageUrl={cegah6}
/>
        </div>
        <TabInterface/>
        </Container>
      </>
    )
}
export default Pencegahan