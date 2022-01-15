exports.vpc = (vpcName, cidrBlock) => `
resource "aws_vpc" "${vpcName}" {
  cidr_block           = "${cidrBlock}"
  instance_tenancy     = "default"
  enable_dns_hostnames = true
  enable_dns_support   = true

  tags = {
    Name = "${vpcName}Vpc"
  }
}
`;


exports.subnet = (vpcName, subnetCidrBlock, availabilityZone, publicIpOnLaunch) => `
resource "aws_subnet" "subnet${vpcName}" {
  vpc_id                  = "\${aws_vpc.${vpcName}.id}\"
  cidr_block              = "${subnetCidrBlock}"
  availability_zone       = "${availabilityZone}"
  map_public_ip_on_launch = ${publicIpOnLaunch}

  tags = {
    Name = "${vpcName}Subnet"
  }
}
`;



