import React, { useState } from 'react';

const SendStory = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail('');
  };

  const styles = {
    container: {
        backgroundColor: '#FFB925',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding:"50px",

    },
    formWrapper: {
      maxWidth: '600px',
      width: '100%',
      textAlign: 'center'
    },
    title: {
      color: 'white',
      fontSize: '2.5rem',
      marginBottom: '1rem'
    },
    description: {
      color: 'white',
      marginBottom: '2rem'
    },
    form: {
      display: 'flex',
      gap: '1rem',
      '@media (max-width: 600px)': {
        flexDirection: 'column'
      }
    },
    input: {
      flex: 1,
      padding: '0.5rem 1rem',
      border: 'none',
      borderRadius: '4px',
      outline: 'none',
      '&:focus': {
        boxShadow: '0 0 0 2px #cc5500'
      }
    },
    button: {
      backgroundColor: '#cc5500',
      color: 'white',
      padding: '0.5rem 1.5rem',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: '#a44400'
      }
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.formWrapper}>
        <h1 style={styles.title}>Ceritakan Kisah Anda</h1>
        <p style={styles.description}>
          Agar dapat memotivasi dan menginspirasi orang banyak
        </p>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your Story"
            required
            style={styles.input}
          />
          <button type="submit" style={styles.button}>
            Inspire me!
          </button>
        </form>
      </div>
    </div>
  );
};

export default SendStory;