import React from 'react';
import {Button} from 'react-bootstrap';
import FaceAPIComponent from './FaceAPIComponent'
import FlexView from 'react-flexview'

class WebcamIdentification extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            detection:0,
            condition:0
        };

        this.submitRegistration = this.submitRegistration.bind(this);

        this.DetectionCondition = {"LOADING":0, "FAR":1, "CLOSE":2, "SUCCESS":3};

        this.DetectionButtonState = ['default', 'danger', 'danger', 'success'];

        this.DetectionStateText = ['Loading...', 'Unable To Verify', 'Unable To Verify', 'Verified!'];

        this.detectionChange = this.detectionChange.bind(this);
        this.getDetection = this.getDetection.bind(this);
    }

    detectionChange(cnd)
    {
        this.setState({condition: cnd});
    }

    getDetection()
    {
        this.faceAPICmp.getDetection();
    }

    submitRegistration(detection)
    {
        this.props.onSubmit(detection);
    }

    render() {

        return (
            <FlexView hAlignContent='center'>
                <div style={{width: "640px"}}>
                    <FaceAPIComponent mode="identification" descriptor={this.props.descriptor}
                                      farScore={0.60}
                                      closeScore={0.50}
                                      onDetectionChange={this.detectionChange}
                    />
                </div>
            </FlexView>
        );
    }
}

export default WebcamIdentification;