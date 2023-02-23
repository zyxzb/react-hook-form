import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { formSchema } from '../assets/helpers/formSchema';
import emailjs from '@emailjs/browser';
import Loader from './Loader';
import { useState } from 'react';

const FormWithFormSubmit = () => {
  const [activeLoader, setActiveLoader] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const submitForm = async (data) => {
    // EmailJs Start
    setActiveLoader(true);
    try {
      const result = await emailjs.send(
        `${import.meta.env.VITE_SERVICE_ID}`,
        `${import.meta.env.VITE_TEMPLATE_ID}`,
        data,
        `${import.meta.env.VITE_PUBLIC_KEY}`,
      );
      console.log(result.text);
      setActiveLoader(false);
      alert('Thank You, the form has been successfully sent!');
      reset();
    } catch (error) {
      console.log(error);
      setActiveLoader(false);
      alert(`Something went wrong :( \n Error: ${error.text} \n Try again!`);
    }
  };
  // EmailJs End

  return (
    <>
      <div className='form'>
        <div className='title'>Sign Up (with EmailJS)</div>
        <form onSubmit={handleSubmit(submitForm)}>
          <input
            type='text'
            placeholder='First Name...'
            {...register('firstName')}
            name='firstName'
          />
          <span>{errors.firstName?.message}</span>
          <input
            type='text'
            placeholder='Last Name...'
            {...register('lastName')}
            name='lastName'
          />
          <span>{errors.lastName?.message}</span>
          <input
            type='email'
            placeholder='Email...'
            {...register('email')}
            name='email'
          />
          <span>{errors.email?.message}</span>
          <input
            type='number'
            placeholder='Age...'
            {...register('age')}
            name='age'
          />
          <span>{errors.age?.message}</span>
          <input
            type='password'
            placeholder='Password...'
            {...register('password')}
            name='password'
          />
          <span>{errors.password?.message}</span>
          <input
            type='password'
            placeholder='Confirm Password...'
            {...register('confirmPassword')}
          />
          <span>{errors.confirmPassword && 'Passwords Should Match'}</span>
          <button type='submit'>Submit</button>
        </form>
      </div>
      {activeLoader ? <Loader /> : null}
    </>
  );
};

export default FormWithFormSubmit;
