import { useState } from 'react';
import './App.css';

function App() {
  const [answer, setAsnwer] = useState('');
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('typing');
   
  // condition fro the state
  if (status === 'success') {
    return <h1 className='success'>That is correct</h1>
  }

  // async function to handle the updater state
  async function handleSubmit (e) {
    e.preventDefault();
    setStatus('submiting');
   try {
    await submitForm(answer);
    setStatus('success')
   } catch (err) {
    setError('typing');
    setError(err);
   }
  }

  // this function get the value of the textarea
  function handleTextareaChange (e) {
    setAsnwer(e.target.value);
  }

  return ( 
    <>
    <div className="App">
      <h1>Guessing name of a country</h1>
        <p>Which country won the 2022 Football world cup?</p>
        <form onSubmit={handleSubmit}>
          <textarea
           value={answer} onChange={handleTextareaChange} disabled={status === 'submitting'}/> <br />
            <button className='btn' disabled={answer.length === 0 || status === 'submitting'}>
               submit
            </button>
            {error !== null && <p className='Error'>{error.message}</p>}
        </form>
    </div>
    </>
  );
}

// function for the submitForm
function submitForm (answer) {
  //pretend it's hitting the network.
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let shouldeError = answer.toLowerCase() !== 'argentina'
      if (shouldeError) {
        reject(new Error('Almost close to the answer. Try again'))
      } else {
        resolve();
      }
    }, 1500);
  });
}

export default App;
