#!/bin/bash


set -f
ssh ubuntu@$PROD_DEPLOY_SERVER "
sudo chmod 777 -R /home/ubuntu && 
mkdir TestProject
sudo chmod 777 -R /home/ubuntu/TestProject && 
cd /home/ubuntu/TestProject && 
git init && 
git pull https://gitlab.com/arbnair97/trojanwallg2.git Production"

