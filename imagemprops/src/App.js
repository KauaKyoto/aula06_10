import NoticiaComponente from './components/NoticiaComponentes';
import Img from './img/briar.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className="title"> Kyoto's Notice | League of Legends </h1>
      <NoticiaComponente
      titulo="Estudante de Etec larga escola para virar 'Pró Player' de League of Legends"
      imagem={Img}
      alt="Briar League of Legends"
      descricao="No dia 06/10/2023 às 14:35, o estudante Kauã, mais conhecido como 'Kyoto' decide largar a escola para se tornar um
      jogador profissional de League of Legends, após o ex-jogador profissional e streamer 'Kami' chamá-lo para duo."
      categoria="Viral" />
    </div>
  );
}

export default App;
