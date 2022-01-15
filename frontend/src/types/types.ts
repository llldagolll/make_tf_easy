export type Vpc = {
    name: string
    cidrBlock: string
}

export type Subnet = {
        cidrBlock: string
        availabilityZone: string
        isPublicIp: string
    }
