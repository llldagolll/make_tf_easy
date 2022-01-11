import React, {useState, FC} from 'react'

export const VpcNameForm: FC = (props) => {
  return (
    <form>
      <label>
        VPC NAME:
      </label>
      <input type="text" placeholder='exampleVPC' name="vpcName" />
    </form>
  );
  }
