# Use Ubuntu 20.04 as the base image
FROM ubuntu:20.04

# Set the working directory to /app
WORKDIR /app

# Copy the JAR file into the container at /app
COPY maven-wrapper.jar /app/maven-wrapper.jar

# Install OpenJDK 11
RUN apt-get update && \
    apt-get install -y openjdk-11-jre

# Specify the command to run your application
CMD ["java", "-jar", "maven-wrapper.jar"]