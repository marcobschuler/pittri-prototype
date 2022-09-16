import Footer from '../components/Footer';
import Header from '../components/Header';

function Home() {
  return (
    <div className='home__layout'>
      <Header />
      <main>
        <section className='hero' />

        <section className='sponsorship' />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
