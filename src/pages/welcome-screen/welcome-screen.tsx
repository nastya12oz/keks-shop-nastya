import Header from '../../components/header/header';
import Hero from '../../components/hero/hero';
import LastReview from '../../components/last-review/last-review';
import Footer from '../../components/footer/footer';
import RandomMainSection from '../../components/random-main-section/random-main-section';
import MapComponent from '../../components/map-component/map.component';

function WelcomeScreen() {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <Hero />
        <RandomMainSection />
        <LastReview />
        <MapComponent />
      </main>
      <Footer />
    </div>
  );
}

export default WelcomeScreen;
