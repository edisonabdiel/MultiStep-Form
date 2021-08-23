import React, { useState } from 'react';

import Step from './Step';
import Preview from './Preview';
import validate from '../helpers/validate';

const Form = () => {
    // Step state
    const [step, setStep] = useState(1);
    // Form state
    const [formData, setFormData] = useState({
        stepOne: {
            race: {
                value: '',
                required: true,
                type: 'select',
                choices: [
                    { value: '', label: 'Choose your Race' },
                    { value: 'Alien', label: 'Alien' },
                    { value: 'Human', label: 'Human' },
                    { value: 'Animal', label: 'Animal' },
                    { value: 'Demon', label: 'Demon' },
                    { value: 'Angel', label: 'Angel' },
                    { value: 'Ghost', label: 'Ghost' },
                    { value: 'Fairy', label: 'Fairy' },
                ]
            },
            firstName: {
                value: '',
                required: true,
                type: 'input',
                placeholder: 'First name'
            },
            lastName: {
                value: '',
                required: true,
                type: 'input',
                placeholder: 'Last name'
            },

            email: {
                value: '',
                email: true,
                type: 'input',
                placeholder: 'Email'
            },
            password: {
                value: '',
                minLength: 6,
                type: 'input:password',
                placeholder: 'Password'
            }
        },
        stepTwo: {
            address: {
                value: '',
                required: true,
                type: 'input',
                placeholder: 'Address'
            },
            city: {
                value: '',
                required: true,
                type: 'input',
                placeholder: 'City'
            },
            planet: {
                value: '',
                required: true,
                type: 'select',
                placeholder: 'Pick your Planet or Dimension of Origin',
                choices: [
                    { value: '', label: 'Choose your Planet or Dimension of Origin' },
                    { value: 'Earth', label: 'Earth' },
                    { value: 'Hell', label: 'Hell' },
                    { value: 'Mars', label: 'Mars' },
                    { value: 'Heaven', label: 'Heaven' },
                    { value: 'Mercury', label: 'Mercury' },
                    { value: 'Neverland', label: 'Neverland' },
                    { value: 'Rather not to say', label: 'Rather not to say' },
                ]
            }
        },
        stepThree: {
            cardInfo: {
                value: '',
                minLength: 16,
                maxLength: 16,
                required: true,
                type: 'input',
                placeholder: 'Card Number'
            },
            cardExpiration: {
                value: '',
                minLength: 3,
                maxLength: 5,
                required: true,
                type: 'input',
                placeholder: 'Expiration Date'
            },
            cardSecurity: {
                value: '',
                minLength: 3,
                maxLength: 3,
                required: true,
                type: 'input',
                placeholder: 'Security Code in the back your Card eg 123...'
            }
        }
    });
    // Error state
    const [errors, setErrors] = useState({});
    // Gets called when the user inputs new data. Updates the form state.
    const changeHandler = (step, e) => {
        e.persist();

        setFormData(prev => ({
            ...prev,
            [step]: {
                ...prev[step],
                [e.target.name]: {
                    ...prev[step][e.target.name],
                    value: e.target.value
                }
            }
        }));
    }
    // Gets called when the user moves to the next step. Sets the step state to the next step. Checks for errors and sets the errors state.
    const stepChangeHandler = (values, e) => {
        e.preventDefault();
        const newErrors = validate(values);
        setErrors(newErrors);
        if (Object.keys(newErrors).length === 0) {
            setStep(step + 1);
        }
    }
    // Appends the form state to the formData state. Data can then be sent to the server to be saved (optional). Data is passed to the child components and finaly to the preview component.
    const submitHandler = (e) => {
        e.preventDefault();

        const data = new FormData();
        // stepOne
        data.append('race', formData.stepOne.race.value);
        data.append('firstName', formData.stepOne.firstName.value);
        data.append('lastName', formData.stepOne.lastName.value);
        data.append('email', formData.stepOne.email.value);
        data.append('password', formData.stepOne.password.value);
        // stepTwo
        data.append('address', formData.stepTwo.address.value);
        data.append('city', formData.stepTwo.city.value);
        data.append('planet', formData.stepTwo.planet.value);
        // stepThree
        data.append('cardInfo', formData.stepThree.cardInfo.value);
        data.append('cardExpiration', formData.stepThree.cardExpiration.value);
        data.append('cardSecurity', formData.stepThree.cardSecurity.value);

        // In here you can send data to some api 
        // For example if you have some redux action: sendData(data)
    }

    return (
        <form onSubmit={submitHandler}>
            <h1 className="is-size-2 has-text-centered mb-4">Buy your ticket to Mars</h1>
            {step === 1 && <Step
                data={formData.stepOne}
                onChange={changeHandler}
                onStepChange={stepChangeHandler}
                errors={errors}
                stepKey="stepOne"
                step={1}
            />}
            {step === 2 && <Step
                data={formData.stepTwo}
                onChange={changeHandler}
                onStepChange={stepChangeHandler}
                errors={errors}
                stepKey="stepTwo"
                onPrevStep={(step) => setStep(step)}
                step={2}
            />}
            {step === 3 && <Step
                data={formData.stepThree}
                onChange={changeHandler}
                onStepChange={stepChangeHandler}
                errors={errors}
                stepKey="stepThree"
                onPrevStep={(step) => setStep(step)}
                step={3}
            />}
            {step === 4 && <Preview
                onPrevStep={() => setStep(step - 1)}
                data={[
                    { label: 'First name', value: formData.stepOne.firstName.value },
                    { label: 'Last name', value: formData.stepOne.lastName.value },
                    { label: 'Email', value: formData.stepOne.email.value },
                    { label: 'Password', value: formData.stepOne.password.value },
                    { label: "I'm a", value: formData.stepOne.race.value },
                    { label: "Livin at", value: formData.stepTwo.address.value },
                    { label: "In", value: formData.stepTwo.planet.value },
                    { label: "Card Number", value: formData.stepThree.cardInfo.value },
                    { label: "Expiration Date", value: formData.stepThree.cardExpiration.value }
                ]}
            />}
        </form>
    );
}

export default Form;