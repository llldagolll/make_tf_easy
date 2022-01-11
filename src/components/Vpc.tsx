import React, {useState, FC} from 'react'
import { AvailabilityZoneForm } from '../features/subnet/AvailabilityZone';
import { SubnetCidrBlockForm } from '../features/subnet/CidrBlock';
import { PublicIpForm } from '../features/subnet/PublicIpOnLaunch';
import { VpcCidrBlockForm } from '../features/vpc/CidrBlock';
import { VpcNameForm } from '../features/vpc/Name';

export const Vpc: FC = (props) => {
  return (
    <div>
      <h2>VPCの設定</h2>
      <br />
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
      <a href="/make">次へ</a>
    </div>
    
  );
  }
