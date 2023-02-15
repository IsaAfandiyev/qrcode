import ReactDOM from 'react-dom';
import {QRCodeSVG} from 'qrcode.react';
import {useEffect, useState} from "react";
function App() {
  const [value,setValue] = useState('');
  const [qrcodeVal,setqrcodeVal] = useState('')
  const handleSubmit = (event) => {
    event.preventDefault();
  }
  const handleChange = (e) => {
    setValue(e.target.value)
  }
  return (
    <div className="App">
      <form onSubmit={(event)=>{
        handleSubmit(event)
      }}>
        <label>
          enter your text:
          <input type="text" name="name" value={value} onChange={(e)=>{
            handleChange(e)
          }} />
        </label>
        <input type="submit" value="Submit" onClick={()=>{
          setqrcodeVal(value)
          setValue('')
        } }/>
      </form>
      <QRCodeSVG value={qrcodeVal} />,
    </div>
  );
}

export default App;
