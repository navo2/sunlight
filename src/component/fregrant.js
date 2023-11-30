import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './widget.css';

function Fregrant() {
  const Navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
        Navigate('/lastWidget'); // Navigate to "lastWidget" after 2 minutes
    }, 4000); // 2 minutes in milliseconds

    return () => clearTimeout(timer); // Clear the timer if the component unmounts
  }, [Navigate]);

  return <div className="backgroundF"></div>;
}

export default Fregrant;
