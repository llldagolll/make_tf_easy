import {VFC, useState} from 'react'
import { FormControl } from '../FormControl'
import { Select } from '../Select'
import { Vpc } from '../../types/types'
import { json } from 'express'

export const Home: VFC = () => {
    const azList = ["ap-northeast-1a", "ap-northeast-1c", "ap-northeast-1d"] 

    const [vpcData, setVpcData] = useState<Vpc>({
        name: "",
        ciderBlock: ""
    })

    const [subnetData, setSubnetData] = useState({
        ciderBlock: "",
        availabilityZone: "",
        publicIp: false
    })

    const handleChangeVpc = (e: any, key: string) => {
        e.preventDefault()
        setVpcData({
            ...vpcData,
            [key]: e.target.value
        })
    }

    const handleChangeSubnet = (e: any, key: string) => {
        e.preventDefault()
        setSubnetData({
            ...subnetData,
            [key]: e.target.value
        })
    }

    const handleSaveData = () => {
        const saveData = JSON.stringify(vpcData)

        localStorage.setItem('vpc', saveData)
    }


    return (
        <div className="homePage">
            <div className="wrapper">
                <div className="container">
                <h2>VPCの設定</h2>
                    <FormControl stateKey="ciderBlock" value={vpcData.ciderBlock} label="CIDR BLOCK:" placeholder="10.0.0.0/16" name="ciderBlock" className="formControl" onChange={handleChangeVpc}  />
                    <FormControl stateKey="name" value={vpcData.name} label="VPC NAME:" placeholder="exampleVPC" name="yourVpcName" onChange={handleChangeVpc} className="formControl" />
                </div>
                <div className="container">
                <h2>Subnetの設定</h2>
                    <FormControl stateKey="ciderBlock" value={subnetData.ciderBlock} label="CIDR BLOCK:" placeholder="10.0.0.0/24" name="ciderBlock" className="formControl" onChange={handleChangeSubnet}  />
                    <Select stateKey="availabilityZone" label="AvailabilityZone:" options={azList} value={subnetData.availabilityZone} onChange={handleChangeSubnet} />
                </div>
            </div>
            <div className="buttonArea">
                <button onClick={handleSaveData}>保存</button>
            </div>
        </div>
    )
}
