import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Mid from './components/Mid.jsx'
import Card from './components/Card.jsx'
import dataDB from './dataDB.js'
import './App.css'
console.log(dataDB)

function App() {
  const dataElement = dataDB.map((item) => {
    return (
    <Card
      key={item.id}
      id = {item.id}
      title = {item.title}
      description = {item.description}
      price = {item.price}
      img={item.coverImg}
      rating = {item.stats.rating}
      ratingCount = {item.stats.reviewCount}
      country = {item.location}
      />
    )
})
  return (
    <>
    <Nav />
    <Hero />
    <Mid />
    <div className="main-card-container">
    {dataElement}
    </div>
    </>
  )
}

export default App

// id: 1,
// title: "Life Lessons with Katie Zaferes",
// description: "I will share with you what I call \"Positively Impactful Moments of Disappointment.\" Throughout my career, many of my highest moments only came after setbacks and losses. But learning from those difficult moments is what gave me the ability to rise above them and reach my goals.",
// price: 136,
// coverImg: "katie-zaferes.png",
// stats:
