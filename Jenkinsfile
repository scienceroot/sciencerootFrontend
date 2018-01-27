pipeline {
    agent {
      docker {
        image 'node:9-alpine'
      }
    }

    stages {
        stage('Installing modules') {
            steps {
                configFileProvider([
                    configFile(fileId: '4a9ae773-3156-43ff-a719-f2fd9d1602a6')
                ]) {
                    sh 'echo "//npm.scienceroots.com/:_authToken=amVua2luczpzZWNyZXQ=" > .npmrc'
                    sh 'npm config set registry https://npm.scienceroots.com'
                    sh 'npm install'
                }
            }
        }
        stage('Build') {
            steps {
                sh 'ng build --prod'
            }
        }
    }
}
