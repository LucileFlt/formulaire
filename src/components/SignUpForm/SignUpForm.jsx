import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addUser } from '../../userSlice';

const SignupForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    console.log(data);
    dispatch(addUser(data));
  };

  const validateAge = (value) => {
    return value >= 18 || 'Vous devez avoir plus de 18 ans.';
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="firstName">Prénom</label>
        <input id="firstName" {...register('firstName', { required: 'Prénom requis' })} />
        {errors.firstName && <p>{errors.firstName.message}</p>}
      </div>

      <div>
        <label htmlFor="lastName">Nom</label>
        <input id="lastName" {...register('lastName', { required: 'Nom requis' })} />
        {errors.lastName && <p>{errors.lastName.message}</p>}
      </div>

      <div>
        <label htmlFor="age">Âge</label>
        <input id="age" type="number" {...register('age', { required: 'Âge requis', validate: validateAge })} />
        {errors.age && <p>{errors.age.message}</p>}
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" {...register('email', { required: 'Email requis' })} />
        {errors.email && <p>{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="password">Mot de passe</label>
        <input id="password" type="password" {...register('password', { required: 'Mot de passe requis' })} />
        {errors.password && <p>{errors.password.message}</p>}
      </div>

      <button type="submit">S'inscrire</button>
    </form>
  );
};

export default SignupForm;



