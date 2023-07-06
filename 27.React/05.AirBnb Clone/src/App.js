import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data"

const Cards = data.map( card => {
  return <Card 
            key={card.id}
            data = {card}
            // img={card.coverImg}
            // reviewCount={card.stats.reviewCount}
            // rating={card.stats.rating}
            // country={card.location}
            // price={card.price}
            // title={card.title}
            // openSpots={card.openSpots}
            // we can also use spread method instead {...card}
         />
})
export default function App() {
  return (
    <div className="content">
      <Navbar />
      <Hero />
      <section className="cards-list">
        {Cards}
      </section>
    </div>  
  );
}