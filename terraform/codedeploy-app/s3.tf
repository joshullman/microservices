resource "aws_s3_bucket" "deploy-bucket" {
  bucket = "micro-${var.app-name}-deployment"
  force_destroy = true
}