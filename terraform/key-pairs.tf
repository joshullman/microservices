resource "aws_key_pair" "micro-key" {
  key_name = "micro-key"
  public_key = file("./micro.pem")
}