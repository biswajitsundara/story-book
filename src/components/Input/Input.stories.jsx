import React from 'react';
import Input from './Input';

export default {
    title: 'Form/Input',
    component: Input
}

export const Small = () => <Input type="text" size='small' placeholder='small size'/>
export const medium = () => <Input type="text" size='medium' placeholder='Medium size'/>
export const large = () => <Input size='large' placeholder='Large size'/>