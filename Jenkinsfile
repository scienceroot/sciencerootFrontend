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
                sh 'ng build --prod'
            }
        }
    }
}
