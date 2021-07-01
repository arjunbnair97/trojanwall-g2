#!/bin/bash


set -f
ssh root-user@$PROD_DEPLOY_SERVER "
sudo chmod 777 -R /home/Trojanwallv2 && 
sudo chmod 777 -R /etc/kubernetes/ &&
sudo chmod 777 -R $HOME/ &&
cd / && 
cd /home/Trojanwallv2 && 
git init && 
git reset --hard &&
git pull https://gitlab.com/arbnair97/trojanwallg2.git Production &&
sudo cp /etc/kubernetes/admin.conf $HOME/ &&
sudo chown $(id -u):$(id -g) $HOME/admin.conf &&
export KUBECONFIG=$HOME/admin.conf &&
cd /home/Trojanwallv2/Kubernetes/Django &&
kubectl apply -f django_deploy.yml &&
cd ../Postgres &&
kubectl apply -f pg_deploy.yml &&
kubectl get pods -n trojanwall &&
kubectl get svc -n trojanwall 
"

