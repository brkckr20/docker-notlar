sed -i s/http/ftp/ /etc/apt/sources.list
apt-get update
apt-get install curl -y
curl -sL https://deb.nodesource.com/setup_10.x | bash
apt-get install nodejs -y
