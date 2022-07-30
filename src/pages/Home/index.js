import './style.scss';
import Header from '../../components/Header';

function Home() {
  return (
    <div className="Home__layout">

    <Header />

    <main><h1>Content</h1></main>

    <footer><h1>Footer</h1></footer>

  </div>
  );
}

export default Home;