import { TemplateSubnet } from "../types/types";

export const makeSubnetInfo:TemplateSubnet = (vpcName, subnetCidrBlock, availabilityZone, publicIpOnLaunch) => `
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
