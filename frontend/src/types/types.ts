export type Vpc = {
    name: string
    cidrBlock: string
}

export type Subnet = {
        cidrBlock: string
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
