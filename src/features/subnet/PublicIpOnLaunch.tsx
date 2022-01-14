import React, {useState, FC} from 'react'

export const PublicIpForm: FC = ( props ) => {
  const choices = ["有効", "無効"] 
  const [state, setState] = useState({value: choices[0]})
  const handleChange = (event:any) => {
    setState({value: event.target.value})
  }


  return (
    <>
      <label>
        パブリックIPアドレス: 
        <select value={state.value} onChange={handleChange} >
          {choices.map((selection) =>
            <option key={selection}>{selection}</option>
          )}
        </select>
      </label>
    </>
  );
}
