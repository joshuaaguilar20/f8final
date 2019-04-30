import React, { Component } from 'react';
import L from 'leaflet'
import '../../src/app.css'
import {
    Circle,
    FeatureGroup,
    LayerGroup,
    Map,
    Popup,
    Rectangle,
    TileLayer,
    Marker
} from 'react-leaflet';

// leaflet css needed for map to display properly
import 'leaflet/dist/leaflet.css';

// reactstrap components
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";

const center = [37.330721, -121.889432]
const rectangle = [[51.49, -0.08], [51.5, -0.06]]

export const aedIcon = new L.Icon({
    iconUrl: require('../components/assets/img/aedicon.png'),
    iconRetinaUrl: require('../components/assets/img/aedicon.png'),
    iconAnchor: [0, 0],
    popupAnchor: [0, -2],
    iconSize: [20, 20],
    // shadowUrl: '../assets/marker-shadow.png',
    shadowSize: [10, 10],
    shadowAnchor: [7, 10],
})


class StreetMap extends Component {
    componentDidMount() {

        window.FB.XFBML.parse();
    }


    render() {
        return (
            <>
                <div className="content">
                    <Row>
                        <Col md="12">
                            <Card className="card-plain">
                                <CardHeader>AED Maps</CardHeader>
                                <CardBody>
                                    <div
                                        id="map"
                                        className="map"
                                        style={{ position: "relative", overflow: "hidden" }}
                                    >

                                        <Map style={{ height: "80vh" }} center={center} zoom={18}>
                                            <TileLayer
                                                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                            />
                                            <FeatureGroup color="purple">
                                                <Marker position={center} icon={aedIcon} >
                                                    <Popup>AED</Popup>
                                                </Marker>
                                            </FeatureGroup>
                                        </Map>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md="8">
                            <Card>

                                <CardHeader>
                                    <h5 className="title">Share</h5>
                                    <div class="fb-like" data-href="https://developers.facebook.com/docs/plugins/" data-width="500" data-layout="standard" data-action="like" data-size="small" data-show-faces="true" data-share="true"></div>
                                </CardHeader>
                                <CardBody>
                                    <div class="fb-comments" style={{ color: "white" }} data-href="http://savealifef8.s3-website-us-west-1.amazonaws.com" data-width="500" data-numposts="5" data-colorscheme="dark"></div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </>
        )
    }
}
export default StreetMap;