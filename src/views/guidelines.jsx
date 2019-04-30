import React from "react";
// react plugin for creating notifications over the dashboard
import NotificationAlert from "react-notification-alert";

// reactstrap components
import {
  Alert,
  UncontrolledAlert,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col
} from "reactstrap";

class guideLines extends React.Component {
  notify = place => {
    var color = Math.floor(Math.random() * 5 + 1);
    var type;
    switch (color) {
      case 1:
        type = "primary";
        break;
      case 2:
        type = "success";
        break;
      case 3:
        type = "danger";
        break;
      case 4:
        type = "warning";
        break;
      case 5:
        type = "info";
        break;
      default:
        break;
    }
    var options = {};
    options = {
      place: place,

      type: type,
      icon: "tim-icons icon-bell-55",
      autoDismiss: 7
    };
    this.refs.notificationAlert.notificationAlert(options);
  };
  render() {
    return (
      <>
        <div className="content">
          <Col md="12">
            <Card>
              <CardBody>
                <div className="places-buttons">
                  <Row>
                    <Col className="ml-auto mr-auto text-center" md="6">
                      <CardTitle tag="h4">
                        Documentation Sources<p className="category">
                          Click to view latest professional Standard
                          </p>
                      </CardTitle>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="ml-auto mr-auto" lg="8">
                      <Row>
                        <Col md="4">
                          <Button
                            block
                            color="primary"
                            href={`https://www.acls-pals-bls.com/algorithms/bls/#chokingadultchild`}
                          >
                            Choking: Adult to Child
                            </Button>
                        </Col>
                        <Col md="4">
                          <Button

                            color="primary"
                            href={`https://eccguidelines.heart.org/wp-content/uploads/2015/10/2015-AHA-Guidelines-Highlights-English.pdf`}>
                            Professional guide
                            </Button>
                        </Col>
                        <Col md="4">
                          <Button

                            color="primary"
                            href={`https://www.redcross.org/content/dam/redcross/atg/PDF_s/Health___Safety_Services/Training/Adult_ready_reference.pdf`}>
                            Bleeding, CPR, Poisoning
                            </Button>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  <Row>

                  </Row>
                </div>
              </CardBody>
            </Card>
          </Col>
        </div>
      </>
    );
  }
}

export default guideLines;
