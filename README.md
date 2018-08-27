[![Build Status](https://travis-ci.org/sitmun/sitmun-admin-app.svg?branch=master)](https://travis-ci.org/sitmun/sitmun-admin-app)
[![Quality Gate](https://sonarcloud.io/api/project_badges/measure?project=org.sitmun%3Asitmun-admin-app&metric=alert_status)](https://sonarcloud.io/dashboard?id=org.sitmun%3Asitmun-admin-app)

# SITMUN Administration Application

## Build and run (development)
- Clone the repository.
- Prepare the environment with `./gradlew assemble`.
- Run `./gradlew bootRun` and open <http://localhost:8080>.
- <http://localhost:8080/swagger-ui.html> exposes SITMUN Core API.
- <http://localhost:8080/h2-console/> is the location of the H2 console.
- A test user is available (`admin`:`admin`)

## Build and run in Docker (development)
- Clone the repository.
- Prepare the environment with `./gradlew assemble`.
- Run `./gradlew docker` to build the docker image.
- Run `./gradlew dockerRun` to start the container.
- To stop and to remove the container you can run `./gradlew dockerStop`.

## Code development

Run `./build-scripts/build-local.sh`. 
If the build is successful, it will launch a SonarQube analysis in SonarCloud. 
This requires that you have a SonarCloud user added to the SITMUN organization, and a token. 
To create a token, go to your SonarCloud account page, Security tab, and generate one. 
Then create a file in `$HOME/.gradle/gradle.properties` with this line: `systemProp.sonar.login=LONG_CHAR_STRING_THAT_IS_YOUR_SONARCLOUD_TOKEN`. 
If you already had that file, simply add the line to it.
If you the SonarCloud analysis has been properly run, you can see the report by clicking on the quality gate badge above.

## Dependencies
This project depends on these plugins (already considered in the build script):

- [sitmun-plugin-core](https://github.com/sitmun/sitmun-plugin-core)

