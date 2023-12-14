# Use an official OpenJDK runtime as a parent image
FROM adoptopenjdk:11-jre-hotspot

# Set the working directory to /app
WORKDIR /app

# Copy the JAR file into the container at /app
COPY maven-wrapper.jar /app/maven-wrapper.jar

# Specify the command to run your application
CMD ["java", "-jar", "maven-wrapper.jar"]
