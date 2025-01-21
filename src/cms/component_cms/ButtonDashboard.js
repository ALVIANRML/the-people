import '../../css/ButtonDashboard.css';
import React, { useState } from 'react';

export function ButtonDashboard({ text, onClick }) {
    return (
      <div className="container" onClick={onClick} >
        <h4>{text}</h4>
      </div>
    );
  }
