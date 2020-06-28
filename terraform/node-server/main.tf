resource "aws_instance" "default" {
  ami = var.ami-id
  iam_instance_profile = var.iam-instance-profile
  instance_type = var.instance-type
  key_name = var.key-pair
  private_ip = var.private-ip
  subnet_id = var.subnet-id
  vpc_security_group_ids = var.vpc-security-group-ids

  user_data = <<EOF
#!/bin/bash
cd /tmp
echo '
#!/bin/bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
source ~/.bashrc
nvm install 12.18.1
curl -o- -L https://yarnpkg.com/install.sh | bash
sudo yum install -y ruby wget
cd ~
wget https://aws-codedeploy-us-east-2.s3.us-east-2.amazonaws.com/latest/install
chmod +x ./install
sudo ./install auto
sudo ln -s ~/.nvm/versions/node/v12.18.1/bin/node /usr/bin
sudo ln -s ~/.nvm/versions/node/v12.18.1/bin/npm /usr/bin
sudo ln -s ~/.yarn/bin/yarn /usr/bin
sudo yarn global add pm2
sudo ln -s /usr/local/bin/pm2 /usr/bin
' >> init.sh
chmod +x init.sh
/bin/su -c "/tmp/init.sh" - ec2-user
rm init.sh
EOF

  tags = {
    Name = var.name
  }
}