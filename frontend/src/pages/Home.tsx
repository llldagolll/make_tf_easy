import {VFC, useState} from 'react'
import { FormControl } from '../components/FormControl'
import { Select } from '../components/Select'
import { FormValues, Subnet, Vpc } from '../types/types'
import { json } from 'express'
import axios from 'axios'
import { makeSubnetInfo } from '../terraform/subnet'
import { makeVpcInfo } from '../terraform/vpc'

export const Home: VFC = () => {
    const azList = ["ap-northeast-1a", "ap-northeast-1c", "ap-northeast-1d"] 
    const isPublicIp = ["true", "false"]


    const [vpcData, setVpcData] = useState<Vpc>({
        vpcName: "",
        vpcCidrBlock: ""
    })

    const [subnetData, setSubnetData] = useState<Subnet>({
        subnetCidrBlock: "",
        availabilityZone: "",
        isPublicIp: ""
    })

    const handleChangeVpc = (e: any, key: string) => {
        e.preventDefault()
        console.log(vpcData)
        setVpcData({
            ...vpcData,
            [key]: e.target.value
        })
    }

    const handleChangeSubnet = (e: any, key: string) => {
        e.preventDefault()
        console.log(subnetData)
        setSubnetData({
            ...subnetData,
            [key]: e.target.value
        })
    }


    const makeFile = (terraformText: string) => {
        const title = 'main.tf';
        const blobType = 'text/plain';

        const linkTagId = 'getLocal';
        const linkTag = document.getElementById(linkTagId);
        const linkTagAttr = ['href', 'download'];

        const msSave = window.navigator;

        const stringObject = new Blob([terraformText], { type: blobType });
        const objectURL = window.URL.createObjectURL(stringObject)

        linkTag?.setAttribute(linkTagAttr[0], objectURL)
        linkTag?.setAttribute(linkTagAttr[1], title)
    }

    
    const makeTerraformText = () => {
        const [
            vpcName,
            vpcCidrBlock,
            subnetCidrBlock,
            availabilityZone,
            publicIpOnLaunch
        ] = [
            vpcData.vpcName,
            vpcData.cidrBlock,
            subnetData.cidrBlock,
            subnetData.availabilityZone,
            subnetData.isPublicIp
            ]

        const vpcInfo = makeVpcInfo(
            vpcName,
            vpcCidrBlock
        )

        const subnetInfo = makeSubnetInfo(
            vpcName,
            subnetCidrBlock,
            availabilityZone,
            publicIpOnLaunch
        )

        const terraformText = vpcInfo + subnetInfo

        return terraformText
    }

    const makeTerraformFile = () => {
        const terraformText = makeTerraformText()
        makeFile(terraformText)
    }

    const vpcInputs = [
        {
            id: 1,
            name: "vpcName",
            type: "text",
            placeHolder: "exampleVpc",
            label: "vpcName ",
            className: "formControl",
        },
        {
            id: 2,
            name: "vpcCidrBlock",
            type: "text",
            placeHolder: "10.0.0.0/16",
            label: "vpcCidrBlock",
            className: "formControl",
        },
    ]

    const subnetInputs = [
        {
            id: 1,
            name: "subnetCidrBlock",
            type: "text",
            placeHolder: "10.0.0.0/24",
            label: "subnetCidrBlock",
            className: "formControl",
        },
    ]


    return (
        <div className="homePage">
            <div className="wrapper">
                <div className="container">
                <h2>VPCの設定</h2>
                    {vpcInputs.map((input: {id: number, name: string}) => (
                        <FormControl key={input.id} {...input} value={vpcData[input.name]} onChange={handleChangeVpc} />
                    ))}
                <div className="container">
                <h2>Subnetの設定</h2>
                    {subnetInputs.map((input: {id: number, name: string}) => (
                        <FormControl key={input.id} {...input} value={subnetData[input.name]} onChange={handleChangeSubnet} />
                    ))}
                    <Select stateKey="availabilityZone" label="AvailabilityZone:" options={azList} value={subnetData.availabilityZone} onChange={handleChangeSubnet} />
                    <Select stateKey="isPublicIp" label="PublicIpOnLaunch:" options={isPublicIp} value={subnetData.isPublicIp} onChange={handleChangeSubnet} />
                </div>
            </div>
            <div className="buttonArea">
                <a href="#" id="getLocal" onClick={makeTerraformFile}>ダウンロード</a>
            </div>
        </div>
        </div>
    )
}
