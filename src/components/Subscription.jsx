import React, { useState } from 'react';
import './Subscription.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Subscription() {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubscribe = (event) => {
    event.preventDefault();

    // Basic email validation
    if (!email || !email.includes('@')) {
      setErrorMessage('Please enter a valid email address.');
    } else {
      // Perform your subscription logic here
      setErrorMessage(''); // Clear error message if valid email
    }
  };

  return (
    <div className='subscription-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Get the first glimpse of newly updated photos!
        </p>
        <p className='footer-subscription-text'>
          Subscribe to our newsletter!
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
              value={email}
              onChange={handleEmailChange}
            />
            <Button buttonStyle='btn--outline' onClick={handleSubscribe}>
              Subscribe
            </Button>
          </form>
          {errorMessage && <p className='error-message'>{errorMessage}</p>}
        </div>
      </section>
    </div>
  );
}

export default Subscription;

