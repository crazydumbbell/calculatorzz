const CalEnterBtn = ({
  result,
  setResult,
  operator,
  setOperator,
  temp,
  setTemp,
}) => {
  const onClickEnter = () => {
    switch (operator) {
      case "+":
        setResult(String(Number(temp) + Number(result)));
        break;
      case "-":
        setResult(String(Number(temp) - Number(result)));
        break;
      case "*":
        setResult(String(Number(temp) * Number(result)));
        break;
      case "/":
        setResult(String(parseInt(Number(temp) / Number(result),10)));
        break;
    }
    setTemp("");
    setOperator("");
  };
  return (
    <button
      className=" btn-style bg-pink-500 active:bg-pink-700"
      onClick={onClickEnter}
    >
      Enter
    </button>
  );
};

export default CalEnterBtn;
