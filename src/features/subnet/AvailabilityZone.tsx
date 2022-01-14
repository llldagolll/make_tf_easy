import React, {useState, FC} from 'react'

export const AvailabilityZoneForm: FC = ( props ) => {
  const azList = ["ap-northeast-1a", "ap-northeast-1c", "ap-northeast-1d"] 
  const [state, setState] = useState({value: azList[0]})
  const handleChange = (event:any) => {
    setState({value: event.target.value})
  }


  return (
    <>
      <label>
        AvailabilityZone:
        <select value={state.value} onChange={handleChange} >
          {azList.map((selection) =>
            <option key={selection}>{selection}</option>
          )}
        </select>
      </label>
    </>
  );
}
