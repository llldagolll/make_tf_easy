import React, {useState, FC} from 'react'
import { useAppSelector } from '../app/hooks';
import { store } from '../app/store';
  
interface tf {
  keyName:string
}


export const MakeTerraformFile: FC<tf> = (props) => {

  console.log(props.keyName)
  const setVpcName = localStorage.getItem(props.keyName)
  return (
    <>
      <p>Hello, world</p>
      <p>{ setVpcName }</p>
      <a href="/">戻る</a>
    </>
  );
  }
