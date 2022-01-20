export type Vpc = {
    [key: string]: string
    vpcName: string
    vpcCidrBlock: string
}

export type Subnet = {
    [key: string]: string
    subnetCidrBlock: string
    availabilityZone: string
    isPublicIp: string
}



// export interface FormValues  {
//     vpcName: string
//     vpcCidrBlock: string
//     subnetCidrBlock: string
//     availabilityZone: string
//     isPublicIp: string
// }
export type FormValues = {
    [key: string]: string
    vpcCidrBlock: string
    subnetCidrBlock: string
    availabilityZone: string
    isPublicIp: string
}


export type TemplateSubnet = (
    vpcName: string,
    subnetCidrBlock: string,
    availabilityZone: string,
    publicIpOnLaunch: string,
) => string

export type TemplateVpc = (
    vpcName: string,
    cidrBlock: string,
) => string
