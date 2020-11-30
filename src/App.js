import React from 'react'
import './App.css';
import AddModal from"./components/AddModal"
import { v4 as uuidv4 } from"uuid"
import ListMovies from"./components/ListMovies"

class App extends React.Component {
  state = {
    movies : [
      {
        id: uuidv4(),
        name:"inception",
        image:
        "https://fr.web.img6.acsta.net/c_310_420/medias/nmedia/18/72/34/14/19476654.jpg",
        rating : 4 ,
        year:"2005",

      },
      {
        id: uuidv4(),
        name:"harry potter",
        image:
        "https://fr.web.img6.acsta.net/c_310_420/pictures/18/07/02/17/25/3643090.jpg" ,
        rating: 5,
        year: "2013",

      },
      {
        id: uuidv4(),
        name:"fantastic beasts",
        image:
        "https://fr.web.img4.acsta.net/c_310_420/pictures/18/10/10/11/16/4794693.jpg",
        rating: <p>1927. Quelques mois après sa capture, le célèbre sorcier Gellert Grindelwald s'évade comme il l'avait promis et de façon spectaculaire. Réunissant de plus en plus de partisans, il est à l'origine d'attaque d'humains normaux par des sorciers et seul celui qu'il considérait autrefois comme un ami, Albus Dumbledore, semble capable de l'arrêter. Mais Dumbledore va devoir faire appel au seul sorcier ayant déjoué les plans de Grindelwald auparavant : son ancien élève Norbert Dragonneau. L'aventure qui les attend réunit Norbert avec Tina, Queenie et Jacob, mais cette mission va également tester la loyauté de chacun face aux nouveaux dangers qui se dressent sur leur chemin, dans un monde magique plus dangereux et divisé que jamais.</p>,
        year: "2016"
      },
    ]
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1>Movie App</h1>
          <ListMovies movies={this.state.movies}/>
          <AddModal />
        </header>
      </div>
    );

  }
  
}
export default App;