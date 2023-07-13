import React from 'react';
import Card from './Card';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Card',
  component: Card,
};

export const Default = () => (
  <Card
    imageSrc="https://media.istockphoto.com/id/1423124357/photo/eiffel-tower-with-blue-sky-classical-paris-photo-france-capital-city-esplanade-du-trocadero.webp?b=1&s=170667a&w=0&k=20&c=7GS4oL3q77LCpaoixzdu2qH7U4I4JaRTR4Orc5uHtXs=" // Replace with your desired image URL
    title="Card Title"
    onOk={action('OK clicked')}
    onCancel={action('Cancel clicked')}
  />
);
