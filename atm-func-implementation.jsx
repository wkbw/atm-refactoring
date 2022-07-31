//Moved the declaration of the ATMDeposit component to a new file to separate it from the implementation of the ATMDeposit component
/* 
const ATMDeposit = ({ onChange, isDeposit, isValid }) => {
  const choice = ['Deposit', 'Cash Back'];
  console.log(`ATM isDeposit: ${isDeposit}`);
  return (
    <label className="label huge">
      <h3> {choice[Number(!isDeposit)]}</h3>
      <input id="number-input" type="number" width="200" onChange={onChange}></input>
      <input type="submit" width="200" value="Submit" id="submit-input" disabled={!isValid}></input>
    </label>
  );
};
 */
const Account = () => {

  const [deposit, setDeposit] = React.useState(0);
  const [totalState, setTotalState] = React.useState(0);
  const [isDeposit, setIsDeposit] = React.useState(true);
  const [atmMode, setAtmMode] = React.useState("");
  const [validTransaction, setValidTransaction] = React.useState(false);

  let status = `Account Balance $ ${totalState} `;
  console.log(`Account Rendered with isDeposit: ${isDeposit}`);

  const handleChange = (event) => {
    console.log(`handleChange ${event.target.value}`);
    if (Number(event.target.value) <= 0) {
      return setValidTransaction(false);
    }
    //If the Cash Back amount is less than or equal to 0, then an alert pops up letting you know you need cash
    if (atmMode === "Cash Back" && Number(event.target.value) > totalState) {
      setValidTransaction(false);
      alert("Cash Back Request Exceeds Available Balance!");
    }
    else {
      setValidTransaction(true)
    }
  setDeposit(Number(event.target.value));
};


  const handleSubmit = (event) => {
    let newTotal = isDeposit ? totalState + deposit : totalState - deposit;
    setTotalState(newTotal);
    setValidTransaction(false);
    event.preventDefault();
  };

  const handleModeSelect = (event) => {
    console.log(event.target.value);
    setAtmMode(event.target.value);
    if (event.target.value === "Deposit") {
      setIsDeposit(true);
    }
    else {
      setIsDeposit(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <>
      <h2 id="total">{status}</h2>
      <label>Select an action below to continue</label>
        <select onChange={(e) => handleModeSelect(e)} name="mode" id="mode-select">
        <option id="no-selection" value=""></option>
        <option id="deposit-selection" value="Deposit">Deposit</option>
        <option id="cashback-selection" value="Cash Back">Cash Back</option>
        </select>
        {atmMode && (<ATMDeposit 
          onChange={handleChange} 
          isDeposit={isDeposit} 
          isValid={validTransaction}
          >

          </ATMDeposit>)}
      </>
    </form>
  );
};
// ========================================
ReactDOM.render(<Account />, document.getElementById('root'));
