pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building..',
                sh 'ng build --prod'
            }
        }
    }
}
