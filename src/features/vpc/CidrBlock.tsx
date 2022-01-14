import React, {useState, FC} from 'react'

export const VpcCidrBlockForm: FC = (props) => {
  return (
    <>
      <label>
        CIDR BLOCK:
      </label>
      <input type="text" placeholder='10.0.0.0/16' name="ciderBlock" />
    </>
  );
  }
