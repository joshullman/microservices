#!/bin/sh

deployment_dir=/opt/micro/users-service
if [ -d "$deployment_dir"] && [ -x "$deployment_dir" ]; then
  cd $deployment_dir

  rm -rf *
fi 