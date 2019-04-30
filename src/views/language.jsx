import React from "react";
// react plugin used to create google maps
import Test from '../components/test';

// reactstrap components
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";

class Lang extends React.Component {

    render() {
        return (
            <>
                <div className="content">
                    <Row>
                        <Test />
                    </Row>
                </div>
            </>
        );
    }
}

export default Lang;