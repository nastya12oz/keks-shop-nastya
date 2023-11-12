import { useEffect } from 'react';
import { Icon, Marker, layerGroup } from 'leaflet';
import useMap from '../../hooks/use-map';
import { SHOP_MAP_URL, PRODUCTION_MAP_URL } from '../../const';
import { TShopAddress } from '../../types/map';
import { SweetShops } from '../../const';
import 'leaflet/dist/leaflet.css';
import './map.css';

const shopCustomIcon = new Icon({
  iconUrl: SHOP_MAP_URL,
  iconSize: [26, 24],
  iconAnchor: [26, 24]
});

const productionCustomIcon = new Icon({
  iconUrl: PRODUCTION_MAP_URL,
  iconSize: [26, 24],
  iconAnchor: [26, 24]
});

type MapProps = {
  place: TShopAddress;
}

function Map({place}: MapProps): JSX.Element {

  const {name, addressCoordinates} = place;
  const {map, mapRef} = useMap({ address: addressCoordinates });


  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);

      const marker = new Marker({
        lat: addressCoordinates[0],
        lng: addressCoordinates[1],
      });

      marker
        .setIcon(name === SweetShops.PRODUCTION.name ?
          productionCustomIcon :
          shopCustomIcon)
        .addTo(markerLayer);

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, addressCoordinates, name]);

  return (
    <div className="map__wrapper" ref={mapRef}></div>
  );

}

export default Map;
