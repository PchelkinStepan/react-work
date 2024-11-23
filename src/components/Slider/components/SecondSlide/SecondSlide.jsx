import React, { useState } from 'react';
import './SecondSlide.scss';

const SecondSlide = () => {
  const [cubicMeters, setCubicMeters] = useState('');
  const [litersPerHour, setLitersPerHour] = useState('');
  const [litersPerMinute, setLitersPerMinute] = useState('');
  const [litersPerSecond, setLitersPerSecond] = useState('');

  // Функция для форматирования числа (убирает .00)
  const formatNumber = (num) => {
    const rounded = parseFloat(num).toFixed(2);
    return parseFloat(rounded) % 1 === 0 ? Math.round(num).toString() : rounded;
  };

  const calculateValues = (value, type) => {
    if (value === '') {
      setCubicMeters('');
      setLitersPerHour('');
      setLitersPerMinute('');
      setLitersPerSecond('');
      return;
    }

    const numValue = parseFloat(value);

    switch (type) {
      case 'cubicMeters':
        setCubicMeters(value);
        setLitersPerHour(formatNumber(numValue * 1000));
        setLitersPerMinute(formatNumber(numValue * 1000 / 60));
        setLitersPerSecond(formatNumber(numValue * 1000 / 3600));
        break;

      case 'litersPerHour':
        setCubicMeters(formatNumber(numValue / 1000));
        setLitersPerHour(value);
        setLitersPerMinute(formatNumber(numValue / 60));
        setLitersPerSecond(formatNumber(numValue / 3600));
        break;

      case 'litersPerMinute':
        setCubicMeters(formatNumber(numValue * 60 / 1000));
        setLitersPerHour(formatNumber(numValue * 60));
        setLitersPerMinute(value);
        setLitersPerSecond(formatNumber(numValue / 60));
        break;

      case 'litersPerSecond':
        setCubicMeters(formatNumber(numValue * 3600 / 1000));
        setLitersPerHour(formatNumber(numValue * 3600));
        setLitersPerMinute(formatNumber(numValue * 60));
        setLitersPerSecond(value);
        break;

      default:
        break;
    }
  };

  return (
    <div className="slide">
      <h2 className="slide-title">Калькулятор расхода</h2>
      <div className="input-group">
        <div className="input-container">
          <label>Введите расход</label>
          <input 
            type="number"
            placeholder="Введите значение"
            value={cubicMeters}
            onChange={(e) => calculateValues(e.target.value, 'cubicMeters')}
          />
        </div>
        <div className="input-container">
          <label>Литры в час</label>
          <input 
            type="number"
            placeholder="л/ч"
            value={litersPerHour}
            onChange={(e) => calculateValues(e.target.value, 'litersPerHour')}
          />
        </div>
        <div className="input-container">
          <label>Литры в минуту</label>
          <input 
            type="number"
            placeholder="л/мин"
            value={litersPerMinute}
            onChange={(e) => calculateValues(e.target.value, 'litersPerMinute')}
          />
        </div>
        <div className="input-container">
          <label>Литры в секунду</label>
          <input 
            type="number"
            placeholder="л/сек"
            value={litersPerSecond}
            onChange={(e) => calculateValues(e.target.value, 'litersPerSecond')}
          />
        </div>
      </div>
    </div>
  );
};

export default SecondSlide;
