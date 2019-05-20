import React from 'react';
import styles from './Input.css';

export const TextInput = (props) => <Input type="text" {...props} />

const Input = (props) => {
  return <input {...props} />
}

export default Input;