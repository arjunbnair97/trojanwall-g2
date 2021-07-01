#!/bin/bash#Get servers list
set -f

string=$PROD_DEPLOY_SERVER
array=(${string//,/ })#Iterate servers for deploy and pull last commit
for i in "${!array[@]}"
do
   ssh centos@${array[i]} "sudo chmod 777 -R /var/www/html && cd / && cd /var/www/html && git init && git remote add origin https://gitlab.com/arbnair97/trojanwall.git && git checkout -b Production && git pull https://gitlab.com/arbnair97/trojanwall.git Production"
done

