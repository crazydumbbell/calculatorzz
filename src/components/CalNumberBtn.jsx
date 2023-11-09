const CalNumberBtn = ({ result, setResult, number }) => {
  const onClickNumber = () => {
    if (result === "0") {
      setResult(number);
    } else {
      setResult(result + number);
    }
  };

  return (
    <button className="btn-style" onClick={onClickNumber}>
      {number}{" "}
      {/*넘버안의 값이들어가냐 넘버가 들어가냐... 이것은 넘버안의 값이 들어가는것*/}
    </button>
  ); // 입력할때만 문자열로 해주고(계산기에 보여져야 하니까) 마지막에 계산할때만 숫자열로 계산하고 다시 문자열로변환 //
};

export default CalNumberBtn;
