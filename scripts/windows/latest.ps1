# this script is used by the continuous integration server to
# build and publish the docker image for a commit to master.

# build and publish the docker image
docker login -u $env:USERNAME -p $env:PASSWORD
docker build -t $env:USERNAME/node-sample-app:latest .
docker push $env:USERNAME/node-sample-app:latest

# remove images from local cache
docker rmi $env:USERNAME/node-sample-app:latest