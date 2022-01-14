import React, {useState, FC} from 'react'
import { AvailabilityZoneForm } from '../features/subnet/AvailabilityZone';
import { SubnetCidrBlockForm } from '../features/subnet/CidrBlock';
import { PublicIpForm } from '../features/subnet/PublicIpOnLaunch';
import { VpcCidrBlockForm } from '../features/vpc/CidrBlock';
import { VpcNameForm } from '../features/vpc/VpcName';

export const Vpc: FC = (props) => {

  // const setItemToLocalStorage = (key: Array<string>, value: Array<string>): void => {
  //   localStorage.setItem(key, value)
  // }

  const handleSubmit = (e: any) => {
    e.preventDefault()
  }


  return (
    <div>
      <h2>VPCの設定</h2>
      <br />
      <form action="" className='py-4'>
        <VpcCidrBlockForm />
        <br />
        <VpcNameForm />
        <h2>Subnetの設定</h2>
        <br />
        <AvailabilityZoneForm />
        <br />
        <SubnetCidrBlockForm />
        <br />
        <PublicIpForm />
        <button
          onClick={handleSubmit}>
          設定
        </button>
      </form>
      <a href="/make">次へ</a>
    </div>
    
  );
  }
