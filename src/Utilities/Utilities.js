import React from 'react';
import './Utilities.css';

export function Button({ className, ...props}) {
  return <button className={['Button', className].join(' ')} {...props} />
}

export function QuizButton({ className, ...props}) {
  return <button className={['QuizButton', className].join(' ')} {...props} />
}

export function Input({ className, ...props }) {
  return (
    <input className={['Input', className].join(' ')} {...props} />
  )
}

export function Section({ className, List, ...props}) {
  const classes = [
    'Section',
    List && 'Section-list',
    className,
  ].filter(Boolean).join(' ')
  return (
    <section className={classes} {...props} />
  )
}

export function Required({ className, ...props }) {
  return (
    <span className={[ 'Required', className].join(' ')} {...props}>
      Required
    </span>
  )
}

export function shuffle(array) {
  array = [...array];
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}