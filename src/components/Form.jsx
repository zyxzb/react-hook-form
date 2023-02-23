import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { formSchema } from '../assets/helpers/formSchema';

const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const submitForm = async (data) => {
    try {
      const message = await data;
      console.log(message);
      alert('Thank You, the form has been successfully sent!');
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='form'>
      <div className='title'>Sign Up</div>
      <form onSubmit={handleSubmit(submitForm)}>
        <input
          type='text'
          placeholder='First Name...'
          {...register('firstName')}
        />
        <span>{errors.firstName?.message}</span>
        <input
          type='text'
          placeholder='Last Name...'
          {...register('lastName')}
        />
        <span>{errors.lastName?.message}</span>
        <input type='email' placeholder='Email...' {...register('email')} />
        <span>{errors.email?.message}</span>
        <input type='number' placeholder='Age...' {...register('age')} />
        <span>{errors.age?.message}</span>
        <input
          type='password'
          placeholder='Password...'
          {...register('password')}
        />
        <span>{errors.password?.message}</span>
        <input
          type='password'
          placeholder='Confirm Password...'
          {...register('confirmPassword')}
        />
        <span>{errors.confirmPassword && 'Passwords Should Match'}</span>
        <button type='submit' id='submit'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
