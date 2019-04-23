import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default () => {
  const taglines = () => {
    const options = [
      'We are an obsessive digital innovation company.',
      'Design-first technologists who help innovative brands make their next move.',
      'Some other amazing quote about TAG.',
    ];
    return options[Math.floor(Math.random() * options.length)];
  };
  return (
    <>
      <Header title={taglines()} fade />
      <div>content here</div>
      <Footer />
    </>
  );
};
