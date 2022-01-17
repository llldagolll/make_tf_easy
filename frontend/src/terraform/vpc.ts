import { TemplateVpc } from "../types/types";

export const makeVpcInfo: TemplateVpc = (vpcName, cidrBlock) => `
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

