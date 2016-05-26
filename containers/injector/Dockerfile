FROM		ubuntu:14.04
MAINTAINER	Eric Rudisill <erudisill@cphandheld.com>

ENV HOME /src

# Crossbar.io connection defaults
ENV CBURL ws://crossbar:8080/ws
ENV CBREALM realm1

# Install security updates and required packages
RUN         apt-get update && \
            apt-get -y upgrade && \
            apt-get -y install -q build-essential libffi-dev libssl-dev python-dev python-pip


# install Autobahn|Python
RUN 	pip install -U pip && \
	pip install -U setuptools && \
	pip install twisted==16.2.0 && \
	pip install autobahn==0.14.0

# fix InsecurePlatformWarning from pip
ENV 	PYTHONWARNINGS="ignore:a true SSLContext object"
RUN	pip install pyopenssl ndg-httpsclient pyasn1

# and finally upgrade service_identity
RUN	pip install -U service_identity


#ADD	./src /src

WORKDIR	./src

CMD ["bash", "/src/run"]
