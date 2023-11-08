import Header from '../../components/header/header';
import Hero from '../../components/hero/hero';
import LastReview from '../../components/last-review/last-review';
import Footer from '../../components/footer/footer';

function WelcomeScreen() {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <Hero />
        <LastReview />
      </main>
      <Footer />
    </div>
  );
}

export default WelcomeScreen;
