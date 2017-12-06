#!/bin/sh

# user jovyan from inside the container needs write access to notebooks
chmod -R 0777 ./notebooks

docker run -it --rm \
    -p 8888:8888 \
    -v "$PWD/notebooks":/home/jovyan \
    jupyter/base-notebook
