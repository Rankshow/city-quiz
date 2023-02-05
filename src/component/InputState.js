import { useState } from 'react';

const Form = () => {
    const [answer, setAnswer] = useState('');
    const [error, setError] = useState(null);
    const [status, setStatus] = useState('typing');

    // condition for the status state
    if (status === 'success'){
        return <h1>You are correct</h1>
    }

    // Event to obtain the value feom the textarea

    const handleEventTextarea = (e) => {
        setAnswer(e.target.value);
    }

    // setting the Async and await to handle the onSubmit in the form
    async function handleSubmit (e) {
        e.preventDefault();
        setStatus('success');
        try {
            await submitForm(answer);
            setStatus('success');
        } catch (err) {
            setStatus('typing');
            setError(error);
        }
    }
        // returning ton the DOM
        return (
            <>
            <form onClick={handleSubmit}>
                <h1>Ranger of the Platform cosmology</h1>
                <p>Who is the first nigeria to win award</p>
                  <textarea 
                  value={answer} 
                  onChange={handleEventTextarea}
                  disabled={status === 'submitting'}
                  />
                  <button disabled={answer.length === 0 || status === 'submitting'}>
                    Submit
                  </button>
                  {error !== null && <p className='error'>{error.message}</p>}
            </form>
            </>
        );
  }
    // handling the submit event
    const submitForm = (answer) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let shouldError = answer.toLowerCase() !== 'kalu'
                if (shouldError) {
                    reject(new Error('Good guess but a wrong answer. Try agai'))
                } else {
                    resolve();
                }
            })
        })
    }

export default Form;