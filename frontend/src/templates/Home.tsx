import {VFC, useState} from 'react'
import { FormControl } from '../components/FormControl'
import { Select } from '../components/Select'
import { Subnet, Vpc } from '../types/types'
import { json } from 'express'
import axios from 'axios'

export const Home: VFC = () => {
    const azList = ["ap-northeast-1a", "ap-northeast-1c", "ap-northeast-1d"] 
    const isPublicIp = ["true", "false"]


    const [vpcData, setVpcData] = useState<Vpc>({
        name: "",
        cidrBlock: ""
    })

    const [subnetData, setSubnetData] = useState<Subnet>({
        cidrBlock: "",
        availabilityZone: "",
        isPublicIp: ""
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
        const vpcDataForLocalStorage = JSON.stringify(vpcData)
        const subnetDataForLocalStorage = JSON.stringify(subnetData)

        localStorage.setItem('vpc', vpcDataForLocalStorage)
        localStorage.setItem('subnet', subnetDataForLocalStorage)
    }

    const convertObjData = ():Array<Object> => {
        handleSaveData();
        const vpcData = localStorage.getItem('vpc');
        const subnetData = localStorage.getItem('subnet');
        const objVpcData:any  = JSON.parse(vpcData!)
        const objSubnetData:any  = JSON.parse(subnetData!)

        return [objVpcData, objSubnetData]
    }

    // const makeTextFile = () => {
    //     const [objVpcData, objSubnetData] = convertObjData();

    //     const string = "ダウンロードできたかな？"

    //     const title = 'testfile.tf';
    //     const blobType = 'text/plain';

    //     const linkTagId = 'getLocal';
    //     const linkTag = document.getElementById(linkTagId);
    //     const linkTagAttr = ['href', 'download'];

    //     const msSave = window.navigator;

    //     const stringObject = new Blob([string], { type: blobType });
    //     const objectURL = window.URL.createObjectURL(stringObject)

    //     linkTag?.setAttribute(linkTagAttr[0], objectURL)
    //     linkTag?.setAttribute(linkTagAttr[1], title)
    // }

    // const testAxios = () => {
    //     axios
    //     .get('http://localhost:5000/tf/postAllData')             //リクエストを飛ばすpath
    //     .then(response => {
    //         console.log(response.data);
    //     })                               //成功した場合、postsを更新する（then）
    //     .catch(() => {
    //         console.log('通信に失敗しました');
    //     });               
    // }

    const sendAllData = () => {
        const [objVpcData, objSubnetData] = convertObjData();
        axios.post('http://localhost:5000/tf/postAllData', {
            withCredentials: true,
            vpc: objVpcData,
            subnet: objSubnetData
            })
            .then(function (response) {
            console.log(response);
            })
            .catch(function (error) {
            console.log(error);
            });
    }

    const consoleTestFile = () => {
        axios
        .get('http://localhost:5000/tf/testMakeFile')             //リクエストを飛ばすpath
        .then(response => {
            console.log(response.data);
        })                               //成功した場合、postsを更新する（then）
        .catch(() => {
            console.log('通信に失敗しました');
        });               
    }

    const consoleTf = () => {
        const [objVpcData, objSubnetData] = convertObjData();
        console.log(objVpcData, objSubnetData)
        axios.post('http://localhost:5000/tf/consoleTf', {
            withCredentials: true,
            vpc: objVpcData,
            subnet: objSubnetData
            })
            .then(function (response) {
            console.log(response);
            })
            .catch(function (error) {
            console.log(error);
            });
    }



    const MakeTestFile = () => {
        const [objVpcData, objSubnetData] = convertObjData();
        axios.post('http://localhost:5000/tf/MakeTestFile', {
            withCredentials: true,
            vpc: objVpcData,
            subnet: objSubnetData
            })
            .then(function (response: any) {
                console.log(response.data);
                makeFile(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });

    }


    const makeFile = (terraformText: string) => {
        const title = 'main.tf';
        const blobType = 'text/plain';

        const linkTagId = 'getLocal';
        const linkTag = document.getElementById(linkTagId);
        const linkTagAttr = ['href', 'download'];

        // const string = "hello"

        const msSave = window.navigator;

        const stringObject = new Blob([terraformText], { type: blobType });
        const objectURL = window.URL.createObjectURL(stringObject)

        linkTag?.setAttribute(linkTagAttr[0], objectURL)
        linkTag?.setAttribute(linkTagAttr[1], title)
    }

    return (
        <div className="homePage">
            <div className="wrapper">
                <div className="container">
                <h2>VPCの設定</h2>
                    <FormControl stateKey="cidrBlock" value={vpcData.cidrBlock} label="CIDR BLOCK:" placeholder="10.0.0.0/16" name="cidrBlock" className="formControl" onChange={handleChangeVpc}  />
                    <FormControl stateKey="name" value={vpcData.name} label="VPC NAME:" placeholder="exampleVPC" name="yourVpcName" onChange={handleChangeVpc} className="formControl" />
                </div>
                <div className="container">
                <h2>Subnetの設定</h2>
                    <FormControl stateKey="cidrBlock" value={subnetData.cidrBlock} label="CIDR BLOCK:" placeholder="10.0.0.0/24" name="cidrBlock" className="formControl" onChange={handleChangeSubnet}  />
                    <Select stateKey="availabilityZone" label="AvailabilityZone:" options={azList} value={subnetData.availabilityZone} onChange={handleChangeSubnet} />
                    <Select stateKey="isPublicIp" label="PublicIpOnLaunch:" options={isPublicIp} value={subnetData.isPublicIp} onChange={handleChangeSubnet} />
                </div>
            </div>
            <div className="buttonArea">
                {/* <button onClick={handleSaveData}>保存</button> */}
                <button onClick={sendAllData}>送信</button>
                <button onClick={consoleTestFile}>testMakeFile</button>
                <button onClick={consoleTf}>consoleTf</button>
                <button onClick={MakeTestFile}>MakeTestFile</button>
                <a href="#" id="getLocal" onClick={MakeTestFile}>ダウンロード</a>
            </div>
        </div>
    )
}
