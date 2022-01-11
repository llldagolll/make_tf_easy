import React, {useState, FC} from 'react'

export const AvailabilityZoneForm: FC = ( props ) => {
  const [state, setState] = useState({value: ""})
  const azList = ["ap-northeast-1a", "ap-northeast-1c", "ap-northeast-1d"] 
  const handleChange = (event:any) => {
    setState({value: event.target.value})
  }


  return (
    <form className="py-4">
      <label>
        AvailabilityZone:
        <select value={state.value} onChange={handleChange} >
          {azList.map((selection) =>
            <option key={selection}>{selection}</option>
          )}
        </select>
      </label>
    </form>
  );
}
