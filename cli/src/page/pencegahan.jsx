import ScrollToTop from "../component/ScrollToTop"
import Container from "../component/container"
import Card from "../component/Card"
import gambar4 from "../style/img/4.png";
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
  title="Example Card"
  description="This is a sample card description."
  imageUrl={gambar4}
/>
<Card 
  title="Example Card"
  description="This is a sample card description."
  imageUrl={gambar4}
/>  <Card 
  title="Example Card"
  description="This is a sample card description."
  imageUrl={gambar4}
/>  <Card 
  title="Example Card"
  description="This is a sample card description."
  imageUrl={gambar4}
/>  <Card 
  title="Example Card"
  description="This is a sample card description."
  imageUrl={gambar4}
/>  <Card 
  title="Example Card"
  description="This is a sample card description."
  imageUrl={gambar4}
/>
        </div>
        <TabInterface/>
        
 


        </Container>
      </>
    )
}
export default Pencegahan