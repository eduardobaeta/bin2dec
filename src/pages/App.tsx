import React, { ChangeEvent, SyntheticEvent, useState } from 'react'
import { Container } from './Style';

function App() {

  const [binari, setBinari] = useState("");
  const [decimal, setDecimal] = useState("0");

  function binToDec(event: SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    let result = 0;
    const calc = binari.split('').reverse().map((value, index) => parseInt(value) * (Math.pow(2, index)));
    calc.forEach(element => {
      result += element;
    });
    setDecimal(result.toString())
  }

  function handleChangeBinari(event: ChangeEvent<HTMLInputElement>) {
    const isValid = /[^0-1]/g.test(event.target.value);
    setBinari(!isValid ? event.target.value : binari);
  }

  return (
    <Container>
      <form onSubmit={binToDec} action="">
        <div>
          <label htmlFor="binari">Input a binari number:</label>
          <input
            value={binari} type="text"
            maxLength={8} name="binari"
            id="binari"
            onChange={handleChangeBinari}
            required
            placeholder="Enter 0 or 1" />
          <button >Convert</button>
        </div>
        <div>
          <label htmlFor="decimal">Decimal number:</label>
          <p className='decimal'>{decimal}</p>
        </div>
      </form>
    </Container>
  )
}

export default App
