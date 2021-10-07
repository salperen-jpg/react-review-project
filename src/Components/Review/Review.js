import React, { useState } from 'react';
import people from '../data';
import './Review.css';

const Review = () => {
  const [index, setIndex] = useState(0);
  let newIndex;
  const nextPerson = () => {
    setIndex((index) => {
      if (index < people.length - 1) {
        newIndex = index + 1;
      } else {
        newIndex = 0;
      }
      return newIndex;
    });
  };

  const randomPersonHandler = () => {
    let randomNumber = Math.floor(Math.random() * 4);
    setIndex(randomNumber);
  };

  const prevPerson = () => {
    setIndex((index) => {
      if (index > 0) {
        newIndex = index - 1;
      } else {
        newIndex = people.length - 1;
      }
      return newIndex;
    });
  };

  const { job, name, image, text } = people[index];
  return (
    <div className='review'>
      <div className='image-container'>
        <img src={image} alt={name} />
        <span>
          <i class='fas fa-quote-right'></i>
        </span>
      </div>
      <h2>{name}</h2>
      <p className='job'> {job}</p>
      <p>{text}</p>
      <div className='buttons'>
        <button className='primary-btn' onClick={nextPerson}>
          <i class='fas fa-chevron-right'></i>
        </button>
        <button className='primary-btn' onClick={prevPerson}>
          <i class='fas fa-chevron-left'></i>
        </button>
      </div>
      <button className='random-person' onClick={randomPersonHandler}>
        Give me a random person{' '}
      </button>
    </div>
  );
};

export default Review;
