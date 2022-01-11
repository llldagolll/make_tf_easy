import React, {useState, FC} from 'react'

export const SubnetCidrBlockForm: FC = (props) => {
  return (
    <form>
      <label>
        CIDR_BLOCK:
      </label>
      <input type="text" placeholder='10.0.0.0/24' name="CIDER_BLOCK" />
    </form>
  );
  }
