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
