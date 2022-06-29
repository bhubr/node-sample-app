# this script is used by the continuous integration server to
# build and publish the docker image for a commit to master.

# build and publish the docker image
# docker login -u $env:USERNAME -p $env:PASSWORD

echo "about to build & push to registry on host (port 5000):"
echo $env:HOSTNAME
docker build -t $env:HOSTNAME:5000/node-sample-app:latest .
echo "build done."
docker push $env:HOSTNAME:5000/node-sample-app:latest
echo "image pushed to registry."

# remove images from local cache
docker rmi $env:HOSTNAME/node-sample-app:latest