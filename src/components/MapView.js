import React, { PureComponent } from 'react';
// TODO: remove this & replace with tailwind
import { Container, Col, Row, Button } from 'reactstrap';

import ReactMapGL, {Marker} from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';
// import Geocoder from 'react-mapbox-gl-geocoder';

// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;

// const mapStyle = {
//     width: '100%',
//     height: 800
// }

const mapboxApiKey = 'pk.eyJ1Ijoic3RldmVuNDM1NCIsImEiOiJjazhwZzg5djcxZjFlM21renZzMmIyZGNmIn0.2fVgMsjPnEs3g_7vF6Rz9g'

const params = {
    country: "ca"
}

const CustomMarker = ({index, marker}) => {
  return (
    <Marker
      longitude={marker.longitude}
      latitude={marker.latitude}>
      <div className="marker">
        <span><b>{index + 1}</b></span>
      </div>
    </Marker>
  )
};

// TODO: move this to the utils one
function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }

class MapView extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        latitude: 45.50884,
        longitude: -73.58781,
        zoom: 15
      },
      tempMarker: null,
      markers:[]
    };

    const { width, height } = getWindowDimensions()

    this.mapStyle = {
        width: '100%',
        height: height - 50
    }

    console.log("STEVENDEBUG mapboxApiKey ", mapboxApiKey);
  }

  onSelected = (viewport, item) => {
      this.setState({
        viewport,
        tempMarker: {
          name: item.place_name,
          longitude: item.center[0],
          latitude: item.center[1]
        }
      })
  }

  add = () => {
    var { tempMarker } = this.state

    this.setState(prevState => ({
        markers: [...prevState.markers, tempMarker],
        tempMarker: null
    }))
  }

  render() {
    const { viewport, tempMarker, markers } = this.state;
    return(
      <Container fluid={true}>
        {/* <Row>
          <Col><h2>Mapbox Tutorial</h2></Col>
        </Row> */}
        {/* <Row className="py-4">
          <Col xs={2}>
            <Geocoder
                mapboxApiAccessToken={mapboxApiKey}
                onSelected={this.onSelected}
                viewport={viewport}
                hideOnSelect={true}
                value=""
                queryParams={params}
            />
          </Col>
          <Col>
           <Button color="primary" onClick={this.add}>Add</Button>
          </Col>
        </Row> */}
        <Row>
          <Col>
            <ReactMapGL
              mapboxApiAccessToken={mapboxApiKey}
              mapStyle="mapbox://styles/mapbox/streets-v11"
              {...viewport}
              {...this.mapStyle}
              onViewportChange={(viewport) => this.setState({viewport})}
            >
              { tempMarker &&
                <Marker
                  longitude={tempMarker.longitude}
                  latitude={tempMarker.latitude}>
                  <div className="marker temporary-marker"><span></span></div>
                </Marker>
              }
              {
                this.state.markers.map((marker, index) => {
                  return(
                    <CustomMarker
                      key={`marker-${index}`}
                      index={index}
                      marker={marker}
                    />
                  )
                })
              }
            </ReactMapGL>
          </Col>
        </Row>
      </Container>
   );
  }
}

export default MapView;
