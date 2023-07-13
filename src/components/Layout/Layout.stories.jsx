import React from 'react';
import Layout from './Layout';

export default {
  title: 'Layout',
  component: Layout,
};

export const Default = () => (
  <Layout
    header={<h1>This is the header</h1>}
    main={<p>This is the main content</p>}
    footer={<footer>This is the footer</footer>}
  />
);
