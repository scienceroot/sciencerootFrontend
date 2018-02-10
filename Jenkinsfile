pipeline {
    agent {
      docker {
        image 'kkarczmarczyk/node-yarn'
      }
    }

    stages {
        stage('Installing modules') {
            steps {
                sh 'yarn install'
            }
        }
        stage('Build') {
            steps {
                sh './node_modules/.bin/ng build --prod'
            }
        }

        stage('Publish') {
            steps {
                sh "docker build --tag=scrfront:master ."
            }
        }
    }
}
