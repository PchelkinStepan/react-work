import React, { useState } from 'react';
import './FirstSlide.scss';

const FirstSlide = () => {
  const [temperature, setTemperature] = useState('');
  const [pressure, setPressure] = useState('');
  const [humidity, setHumidity] = useState('');

  const getRandomNumber = (min, max) => {
    return (Math.random() * (max - min) + min).toFixed(1);
  };

  const handleCalculate = () => {
    const newTemperature = getRandomNumber(15.3, 24.5);
    const newPressure = getRandomNumber(88.2, 104.2);
    const newHumidity = getRandomNumber(42.4, 59.5);

    setTemperature(newTemperature);
    setPressure(newPressure);
    setHumidity(newHumidity);
  };

  return (
    <div className="slide">
      <h2 className="slide-title">Влияющие факторы</h2>
      <div className="input-group">
        <div className="input-container">
          <label>Температура</label>
          <input 
            type="number" 
            placeholder="Введите температуру" 
            value={temperature}
            readOnly
          />
        </div>
        <div className="input-container">
          <label>Давление</label>
          <input 
            type="number" 
            placeholder="Введите давление" 
            value={pressure}
            readOnly
          />
        </div>
        <div className="input-container">
          <label>Влажность</label>
          <input 
            type="number" 
            placeholder="Введите влажность" 
            value={humidity}
            readOnly
          />
        </div>
        <button className="calculate-btn" onClick={handleCalculate}>
          <span>Рассчитать</span>
        </button>
      </div>
    </div>
  );
};

export default FirstSlide;