import React, {useState, FC} from 'react'
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { AppDispatch, store } from '../../app/store';
import { saveVpcName } from './vpcSlice';

export const VpcNameForm: FC = (props) => {

  // const vpcName = useAppSelector((state) => state.vpcName.value)
  const dispatch: AppDispatch = useAppDispatch()
  const [yourVpcName, setYourVpcName] = useState('exampleVpc')
  
  const setVpcName = useAppSelector((state) => state.vpcName.value)

  const handleChange = (e:any) => {
    dispatch(saveVpcName(yourVpcName))
    console.log(setVpcName)
    e.preventDefault()
  }


  function setItemToLocalStorage(key: string, value: string): void {
    localStorage.setItem(key, value)
  }

  function handleSubmit(e: any) {
    const key = 'vpcName'
    const value = yourVpcName
    setItemToLocalStorage(key, value)
    console.log(localStorage.getItem(key))
    e.preventDefault()
  }

  return (
    <>
      <label>
        VPC NAME:
      </label>
      <input
        type="text"
        placeholder='exampleVPC'
        name="yourVpcName"
        onChange={(e) => setYourVpcName(e.target.value)}
      />
      {/* <button
        onClick={handleSubmit}>
        設定
        </button> */}
    </>
  );
  }
