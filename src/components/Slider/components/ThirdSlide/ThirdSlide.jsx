import React, { useState } from 'react';
import './ThirdSlide.scss';

const ThirdSlide = () => {
  const [reference, setReference] = useState('');
  const [measured, setMeasured] = useState('');
  const [error, setError] = useState('');

  const calculateError = (ref, meas) => {
    if (ref && meas) {
      const referenceValue = parseFloat(ref);
      const measuredValue = parseFloat(meas);
      if (referenceValue !== 0) {
        const errorValue = ((measuredValue - referenceValue) / referenceValue) * 100;
        setError(errorValue.toFixed(2));
      }
    } else {
      setError('');
    }
  };

  const handleReferenceChange = (e) => {
    const value = e.target.value;
    setReference(value);
    calculateError(value, measured);
  };

  const handleMeasuredChange = (e) => {
    const value = e.target.value;
    setMeasured(value);
    calculateError(reference, value);
  };

  return (
    <div className="slide">
      <h2 className="slide-title">Расчет погрешности</h2>
      <div className="input-group">
        <div className="input-container">
          <label>Показания эталона л.</label>
          <input
            type="number"
            value={reference}
            onChange={handleReferenceChange}
            placeholder="Введите значение"
          />
        </div>
        <div className="input-container">
          <label>Показания расходомера л.</label>
          <input
            type="number"
            value={measured}
            onChange={handleMeasuredChange}
            placeholder="Введите значение"
          />
        </div>
        <div className="input-container">
          <label>Погрешность %</label>
          <input
            type="number"
            value={error}
            readOnly
            placeholder="0.00"
          />
        </div>
      </div>
    </div>
  );
};

export default ThirdSlide;
