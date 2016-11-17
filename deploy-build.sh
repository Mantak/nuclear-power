# put this to /home/meteor/script dir on the server

cd ../build
rm -rf bundle
tar xvf aep.tar.gz
cd bundle
(cd programs/server && cnpm install)
pm2 restart app-1
