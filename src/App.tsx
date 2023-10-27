
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [image, setImage] = useState('');
  useEffect(() => {
    fetch('https://api.thecatapi.com/v1/images/search')
      .then((res) => res.json())
      .then((data) => {
        setImage(data[0].url);
        console.log('Dados coletados com sucesso');
      })
      .catch((error) => {
        console.error('Ocorreu um erro ao coletar os dados', error);
      });
  }, []);

  return (
    <>
      <div>
        <h1>Meu cat</h1>
        <img src={image} alt="Cat" />
        <p>Clique aqui para ver outro cat</p>
      </div>
    </>
  );
}

export default App;

