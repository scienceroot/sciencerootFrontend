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
            if(env.BRANCH_NAME == 'production') {
                sh 'node_modules/.bin/ng build --prod'
            } else {
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
