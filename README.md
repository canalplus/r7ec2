# r7ec2
Use grunt-ec2 to handle EC2 instances (stop at night, ...)

See [grunt-ec2 reference](https://github.com/canalplus/grunt-ec2/blob/master/README.markdown) for a complete list of grunt tasks.

# Installation

Create a credential file named <code>r7-credentials.json</code> in the root of the directory.

```
{
  "AWS_DEFAULT_REGION":     "eu-west-1",
  "AWS_ACCESS_KEY_ID":      "TOBECOMPLETED",
  "AWS_SECRET_ACCESS_KEY":  "TOBECOMPLETED",
  "AWS_SECURITY_GROUP":     "canallabs_sg_ssh",
  "ELASTIC_IP":             false
}
```

Take care you shall associate a policy with the user you completed the <code>AWS_ACCESS_KEY_ID</code> and <code>AWS_SECURITY_GROUP</code>.

Here is an example of policy:
```
{
    "Version": "1",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "ec2:AssociateAddress",
                "ec2:CreateImage",
                "ec2:CreateTags",
                "ec2:DescribeAvailabilityZones",
                "ec2:DescribeImages",
                "ec2:DescribeInstanceAttribute",
                "ec2:DescribeInstanceStatus",
                "ec2:DescribeInstances",
                "ec2:DescribeNetworkInterfaceAttribute",
                "ec2:DescribeNetworkInterfaces",
                "ec2:DescribeRouteTables",
                "ec2:DescribeSecurityGroups",
                "ec2:DescribeSnapshots",
                "ec2:DescribeTags",
                "ec2:DescribeVolumeAttribute",
                "ec2:DescribeVolumeStatus",
                "ec2:DescribeVolumes",
                "ec2:StartInstances",
                "ec2:StopInstances"
            ],
            "Resource": [
                "*"
            ]
        }
    ]
}
```
