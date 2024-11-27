import React from 'react';
import './FourthSlide.scss';

const FourthSlide = () => {
  return (
    <div className="slide standards-slide">
      <h2 className="slide-title">Эталоны</h2>
      <div className="input-group">
        <div className="input-container">
          <label>Давление</label>
          <input 
            type="text" 
            value="36520.07.2Р.00589127, 54409.13.2Р.00855769" 
            readOnly
          />
        </div>
        <div className="input-container">
          <label>Вычислители</label>
          <input 
            type="text" 
            value="17567.09.2Р.00819038, 17567.09.3Р.00819037, 17567.09.5Р.00819036" 
            readOnly
          />
        </div>
        <div className="input-container">
          <label>Теплосчетчики</label>
          <input 
            type="text" 
            value="77099.19.ВЭ.00949857, 49400.12.2Р.01150329, 49400.12.2Р.01150328" 
            readOnly
          />
        </div>
        <div className="input-container">
          <label>Термометры</label>
          <input 
            type="text" 
            value="49400.12.2Р.01150329, 49400.12.2Р.01150328" 
            readOnly
          />
        </div>
        <div className="input-container">
          <label>Расходомеры</label>
          <input 
            type="text" 
            value="77099.19.ВЭ.00949857" 
            readOnly
          />
        </div>
      </div>
    </div>
  );
};

export default FourthSlide;
