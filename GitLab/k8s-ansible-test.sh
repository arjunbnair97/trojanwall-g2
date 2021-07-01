#!/bin/bash
set -f 
ssh centos@$ANSIBLE_ENGINE "
sudo chmod 777 -R /home/ansadmin/ansible-workdir &&
sudo chmod 777 -R /home/ansadmin/ansible-workdir/playbooks && 
sudo chmod +x /home/ansadmin/ansible-workdir/playbooks/trojanwall-deploy.yml &&
cd /home/ansadmin/ansible-workdir &&
whoami &&
ansible-playbook ./playbooks/trojanwall-check.yml -i inventory
"
