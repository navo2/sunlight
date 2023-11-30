import React, { useState } from "react";
import { Container, Row, Col, CardImg } from 'reactstrap'
import ScratchCard from 'react-scratchcard';
import BG from '../assets/Untitled.png'
import './widget.css'
import { Link } from 'react-router-dom';

function Widget() {
  const [completed, setCompleted] = useState(false);

  const settings = {
    width: '300px',
    height: '250px',
    image: BG,
    finishPercent: 40,
    onComplete: () => {
      console.log('The card is now clear!');
      setCompleted(true); // Set the completed state to true
    }
  };

  return (
    <div className="background">
      <Row>
        <Col xs="6" className="text-center pt-2">
          <button style={{ height: '40px', width: '40px', border: 'none', background: 'none' }} />
        </Col>
        {completed && (
          <Col xs="6" className="text-center pt-2">
            <Link to="/fregrant">
              <button
                style={{ height: '40px', width: '40px', border: 'none', background: 'none', paddingLeft: '70px' }}
              />
            </Link>
          </Col>
        )}
      </Row>
      <Row>
        <Col>
          <div className="dirty">
            <ScratchCard {...settings} />
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Widget;
