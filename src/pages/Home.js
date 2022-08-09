import Header from '../components/Header';

function Home() {
  return (
    <div className='home__layout'>
      <Header />
      <main>
        <section id='section1'>
          <h1>Section 1</h1>
        </section>
        <section id='section2'>
          <h1>Section 2</h1>
        </section>
      </main>
      <footer />
    </div>
  );
}

export default Home;