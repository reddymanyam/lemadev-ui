import { Box } from '@mui/material';
import React, { useState } from 'react';

const GenerateCircle = () => {
  const [circles, setCircles] = useState([]);

  const handleGenerateCircle = () => {
    // Generate random position and size for the circle
    const radius = Math.floor(Math.random() * 100) + 20; // Circle radius between 20px and 120px
    const x = Math.floor(Math.random() * window.innerWidth); // Random x-position within the viewport
    const y = Math.floor(Math.random() * window.innerHeight); // Random y-position within the viewport

    // Create a new circle object
    const newCircle = {
      id: Date.now(), // Unique identifier for the circle
      radius,
      x,
      y,
    };

    // Update the state to add the new circle
    setCircles((prevCircles) => [...prevCircles, newCircle]);
  };

  return (
    <Box
      minWidth="100vw"
      minHeight="100vh"
      style={{ position: 'relative', backgroundColor: '#f5f5f5' }}
      onClick={handleGenerateCircle}
    >
      <h1 style={{ position: 'absolute', top: 0, left: 0, margin: '10px' }}>
        Click to generate a circle
      </h1>

      {/* Render all circles */}
      {circles.map((circle) => (
        <Box
          key={circle.id}
          style={{
            position: 'absolute',
            width: `${circle.radius * 2}px`,
            height: `${circle.radius * 2}px`,
            borderRadius: '50%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            top: `${circle.y}px`,
            left: `${circle.x}px`,
          }}
        ></Box>
      ))}
    </Box>
  );
};

export default GenerateCircle;
