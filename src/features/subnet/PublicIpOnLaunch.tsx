import React, {useState, FC} from 'react'

export const PublicIpForm: FC = ( props ) => {
  const [state, setState] = useState({value: ""})
  const choices = ["有効", "無効"] 
  const handleChange = (event:any) => {
    setState({value: event.target.value})
  }


  return (
    <form className="py-4">
      <label>
        パブリックIPアドレス: 
        <select value={state.value} onChange={handleChange} >
          {choices.map((selection) =>
            <option key={selection}>{selection}</option>
          )}
        </select>
      </label>
    </form>
  );
}
