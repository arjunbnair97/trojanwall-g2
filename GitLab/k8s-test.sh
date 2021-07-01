#!/bin/bash

set -f
ssh root-user@$PROD_DEPLOY_SERVER "
sudo chmod 777 -R /home/Trojanwallv2 && 
sudo chmod 777 -R /etc/kubernetes/ &&
sudo chmod 777 -R $HOME/ &&
sudo cp /etc/kubernetes/admin.conf $HOME/ &&
sudo chown $(id -u):$(id -g) $HOME/admin.conf &&
export KUBECONFIG=$HOME/admin.conf &&
cd /home/Trojanwallv2 &&
kubectl get pods -n trojanwall &&
kubectl get services -n trojanwall "

#curl -s "http://localhost:31000" | grep -q "TrojanWall" 
#"

