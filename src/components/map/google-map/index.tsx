import React, {useMemo} from 'react'
import { GoogleMap,Marker, useLoadScript } from '@react-google-maps/api'
import { configVars } from 'common/config/enviroment-variables'
import { useAppDispatch } from 'redux/store';
import { promptModal } from 'redux/slices/common';
import { staticMapModal } from 'common/helper/modals';

//todo create a list of markers 
//todo: check how to use multiple useMemo
//todo: use geolocation to get user location and add a markerto it.
//todo: check geolocation and show blinking location on the map?

const options = {
  mapId:configVars.GOOGLE_MAP_ID,
  zoomControlOptions: {
   
    // ...otherOptions
  }
}
/*
  reference to render multiple markers https://dev.to/jessicabetts/how-to-use-google-maps-api-and-react-js-26c2
 */
function GoogleMapInteractive() {
  const dispatch = useAppDispatch();
  //use Memo so it doesn't keep calculating the position
  const center = useMemo(()=>({ lat: 32.07313268439657, lng: -81.09285765010242 }),[])
  //marker-frosty park 
  const parkMarketPosition =useMemo(()=>({ lat:32.066309,lng: -81.096695}),[]);
  //home
  const homeMarket = useMemo(()=>({ lat:32.05901901551292,lng: -81.09454088927525}),[])


  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey:configVars.GOOGLE_API_KEY,
    mapIds: [configVars.GOOGLE_MAP_ID],
    id:'mirage'
    // ...otherOptions
  })

  const renderMap = () => {
    return <GoogleMap
      mapContainerStyle={{width:"100%", height:"100vh"}}
      zoom={15.2}
      center={center}
      options={options}
      onLoad={()=>{}}
    >
      {
        // ...Your map components
        <>
        <Marker
        onClick={()=>dispatch(promptModal({modalData: staticMapModal}))}
        onLoad={()=>{console.log("can add an mini animation")}}
        position={parkMarketPosition}
        
        icon={{
            url: (require('assets/icons8-jake-96.png')),
        }}
        
      />

      <Marker
      onClick={()=>dispatch(promptModal({modalData: staticMapModal}))}
      onLoad={()=>{console.log("can add an mini animation")}}
      position={homeMarket}
      
      icon={{
          url: (require('assets/icons8-saitama-96.png')),
      }}
      
    />
    </>
      }
    </GoogleMap>
  }

  if (loadError) {
    return <div>Map cannot be loaded right now, sorry.</div>
  }

  return isLoaded ? renderMap() : null
}

export default GoogleMapInteractive;