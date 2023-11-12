import ShopAddress from '../shop-address/shop-address';
import Map from '../map/map';
import { SweetShops } from '../../const';
import { useState } from 'react';

function MapComponent(): JSX.Element {

  const [displayedAddress, setDisplayedAddress] = useState(SweetShops.FIRST_SHOP);


  return(
    <section className="map">
      <div className="container">
        <h2 className="map__title">адреса</h2>
        <Map place={displayedAddress} />
        <ul className="map__addresses">
          <ShopAddress displayedAddress={SweetShops.FIRST_SHOP.address}>
            <input type="radio" value="user-agreement-10" id="user-agreement-id-10" name="user-agreement" onChange={() => setDisplayedAddress(SweetShops.FIRST_SHOP)} checked={displayedAddress.name === SweetShops.FIRST_SHOP.name} />
            <label className="custom-toggle__label" htmlFor="user-agreement-id-10">{SweetShops.FIRST_SHOP.name}</label>
          </ShopAddress>
          <ShopAddress displayedAddress={SweetShops.SECOND_SHOP.address}>
            <input type="radio" value="user-agreement-10" id="user-agreement-id-12" name="user-agreement" onChange={() => setDisplayedAddress(SweetShops.SECOND_SHOP)} checked={displayedAddress.name === SweetShops.SECOND_SHOP.name} />
            <label className="custom-toggle__label" htmlFor="user-agreement-id-12">{SweetShops.SECOND_SHOP.name}</label>
          </ShopAddress>
          <ShopAddress displayedAddress={SweetShops.PRODUCTION.address}>
            <input type="radio" value="user-agreement-10" id="user-agreement-id-13" name="user-agreement" onChange={() => setDisplayedAddress(SweetShops.PRODUCTION)} checked={displayedAddress.name === SweetShops.PRODUCTION.name} />
            <label className="custom-toggle__label" htmlFor="user-agreement-id-13">{SweetShops.PRODUCTION.name}</label>
          </ShopAddress>
        </ul>
      </div>
    </section>

  );
}

export default MapComponent;
