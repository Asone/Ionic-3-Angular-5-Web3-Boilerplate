
FROM ubuntu:14.04
MAINTAINER Nils Eriksson
ENV REFRESHED_AT 2015-11-02

# Set the locale
RUN locale-gen en_US.UTF-8
ENV LANG en_US.UTF-8
ENV LANGUAGE en_US:en
ENV LC_ALL en_US.UTF-8


# Install basics
RUN DEBIAN_FRONTEND=noninteractive apt-get -qq update
RUN DEBIAN_FRONTEND=noninteractive apt-get install -y \
                                    git \
                                    npm \
                                    wget \
                                    curl \
                                    ruby \
                                    python-software-properties \
                                    software-properties-common \
                                    expect \
                                    ant \
                                    wget \
                                    libc6-i386 \
                                    lib32stdc++6 \
                                    lib32gcc1 \
                                    lib32ncurses5 \
                                    lib32z1 \
                                    qemu-kvm \
                                    kmod

ENV NODE_VERSION=0.12.7 \
    NPM_VERSION=2.14.1 \
    IONIC_VERSION=1.7.8 \
    BOWER_VERSION=1.5.2 \
    CORDOVA_VERSION=5.3.3 \
    CORDOVA_UTILS_VERSION=2.1.0 \
    GRUNT_VERSION=0.1.13 \
    GULP_VERSION=3.9.0 \
    ANDROID_VERSION=22.6.2 \
    SDK_BUILD_VERSION=22.0.0\
    JAVA_VERSION=8

RUN curl --retry 3 -SLO "http://nodejs.org/dist/v$NODE_VERSION/node-v$NODE_VERSION-linux-x64.tar.gz" \
    && tar -xzf "node-v$NODE_VERSION-linux-x64.tar.gz" -C /usr/local --strip-components=1 \
    && rm "node-v$NODE_VERSION-linux-x64.tar.gz" \
    && npm install -g npm@"$NPM_VERSION" \
    && npm install -g grunt-cli@"$GRUNT_VERSION" bower@"$BOWER_VERSION" cordova@"$CORDOVA_VERSION" ionic@"$IONIC_VERSION" gulp@"$GULP_VERSION" \
    && npm install cordova-config-utils@"$CORDOVA_UTILS_VERSION" \
    && npm cache clear

RUN gem install sass

EXPOSE 8100
EXPOSE 35729

#ANDROID
#JAVA
RUN DEBIAN_FRONTEND=noninteractive apt-get install python-software-properties software-properties-common -y
RUN DEBIAN_FRONTEND=noninteractive add-apt-repository ppa:webupd8team/java -y
RUN apt-get update


# Accept the Java licenses
RUN echo oracle-java6-installer shared/accepted-oracle-license-v1-1 select true | /usr/bin/debconf-set-selections
RUN echo oracle-java7-installer shared/accepted-oracle-license-v1-1 select true | /usr/bin/debconf-set-selections
RUN echo oracle-java8-installer shared/accepted-oracle-license-v1-1 select true | /usr/bin/debconf-set-selections
RUN apt-get install oracle-java${JAVA_VERSION}-installer -y


#ANDROID STUFF
RUN DEBIAN_FRONTEND=noninteractive dpkg --add-architecture i386 && apt-get install -y --force-yes expect ant wget libc6-i386 lib32stdc++6 lib32gcc1 lib32ncurses5 lib32z1 qemu-kvm kmod

#Enter /opt where we will save our android stuff
WORKDIR /opt


# Install Android SDK
RUN wget --output-document=android-sdk.tgz --quiet http://dl.google.com/android/android-sdk_r24.2-linux.tgz && tar xzf android-sdk.tgz && rm -f android-sdk.tgz

# Setup environment
ENV ANDROID_HOME /opt/android-sdk-linux
ENV PATH ${PATH}:${ANDROID_HOME}/tools:${ANDROID_HOME}/platform-tools

RUN echo ANDROID_HOME="${ANDROID_HOME}" >> /etc/environment





#install Android SDK components
#ENV ANDROID_SDK_COMPONENTS tools,platform-tools,build-tools-22,android-23,android-22,extra-android-support,extra-android-m2repository,extra-google-#m2repository,google-play-services,google-repository,android-support-library,android-support-repository,extra-google-google_play_services,extra

#Licence script
RUN mkdir tools
COPY android-accept-licenses.sh /opt/tools/android-accept-licenses.sh
RUN chmod 777 /opt/tools/android-accept-licenses.sh

ENV update asd

#BE EXTRACAREFUL THAT EVERYTHING GETS INSTALLED HERE !
RUN ["/opt/tools/android-accept-licenses.sh", "android update sdk --all --no-ui --filter tools,platform-tools,build-tools-23.0.0,build-tools-22.0.0,android-23,android-22,extra-android-support,extra-android-m2repository,extra-google-m2repository,google-play-services,google-repository,android-support-library,android-support-repository,extra-google-google_play_services,extra"]



# Support Gradle
ENV TERM dumb
ENV JAVA_OPTS -Xms256m -Xmx512m

## DEV TOOLS
RUN DEBIAN_FRONTEND=noninteractive apt-get install -y vim




# -----------------------------------------------------------------------------
# Clean up
# -----------------------------------------------------------------------------
RUN apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

RUN mkdir /App
WORKDIR /App


#create a non sudo user
RUN useradd -m docker && echo "docker:docker" | chpasswd && adduser docker sudo
RUN chown -R docker:docker /opt/* /usr/local/
USER docker





CMD ["ionic", "serve"]


