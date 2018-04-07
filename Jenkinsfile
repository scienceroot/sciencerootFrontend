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

        if(env.BRANCH_NAME == 'production') {
            stage('Build production') {
              sh 'node_modules/.bin/ng build --prod'
            }
        } else {
            stage('Build staging') {
              sh 'node_modules/.bin/ng build --prod --environment staging'
            }
        }

        stage('Publish') {
            steps {
                sh "docker build --tag=docker.scienceroots.com/scrfront:${env.BRANCH_NAME} ."
            }
        }
    }
}
