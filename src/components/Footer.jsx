import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.footerContent}>
        {/* <h2>Footer Content</h2>
        <p>Your additional information or links can go here.</p> */}
        <div style={styles.buttonContainer}>
        <button style={styles.button}>تماس با ما</button>
        <button style={styles.button}>ارتباط با ما</button>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#BD93F9',
    color: 'white',
    padding: '20px',
    textAlign: 'center',
  },
  footerContent: {
    maxWidth: '800px',
    margin: '0 auto',
  },
  buttonContainer: {
    marginTop: '20px',
  },
  button: {
    backgroundColor: 'white',
    color: 'purple',
    padding: '10px 20px',
    margin: '0 10px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default Footer;
