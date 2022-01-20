import {VFC, useState} from 'react'
import { FormControl } from '../components/FormControl'
import { Select } from '../components/Select'
import { Subnet, Vpc } from '../types/types'
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
            vpcData.vpcCidrBlock,
            subnetData.subnetCidrBlock,
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
            placeholder: "exampleVpc",
            errorMessage: "vpc名を入力してください",
            label: "vpcName ",
            required:true,
            className: "formControl",
        },
        {
            id: 2,
            name: "vpcCidrBlock",
            type: "text",
            placeholder: "10.0.0.0/16",
            errorMessage: "不適切な値です。",
            label: "vpcCidrBlock",
            required:true,
            pattern: "(([1-9]?[0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([1-9]?[0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\/[0-3][0-2]",
            className: "formControl",
        },
    ]

    const subnetInputs = [
        {
            id: 1,
            name: "subnetCidrBlock",
            type: "text",
            placeholder: "10.0.0.0/24",
            errorMessage: "不適切な値です。",
            label: "subnetCidrBlock",
            required:true,
            pattern: "(([1-9]?[0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([1-9]?[0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\/[0-3][0-2]",
            className: "formControl",
        },
    ]


    return (
        <div className="app">
            <form action="">

            <h2>VPCの設定</h2>
                {vpcInputs.map((input: {id: number, name: string}) => (
                    <FormControl
                        key={input.id} {...input}
                        value={vpcData[input.name]}
                        onChange={handleChangeVpc}
                    />
                ))}
            <h2>Subnetの設定</h2>
                <div id="marginForAtag">
                    {subnetInputs.map((input: {id: number, name: string}) => (
                        <FormControl
                            key={input.id} {...input}
                            value={subnetData[input.name]}
                            onChange={handleChangeSubnet}
                        />
                    ))}
                    <Select
                        stateKey="availabilityZone"
                        label="AvailabilityZone:"
                        options={azList}
                        value={subnetData.availabilityZone}
                        onChange={handleChangeSubnet}
                    />
                    <Select
                        stateKey="isPublicIp"
                        label="PublicIpOnLaunch:"
                        options={isPublicIp}
                        value={subnetData.isPublicIp}
                        onChange={handleChangeSubnet}
                    />
                </div>
                <div id="centerA">
                    <a href="#" id="getLocal"  onClick={makeTerraformFile}>ダウンロード</a>
                </div>
            </form>
        </div>
    )
}
