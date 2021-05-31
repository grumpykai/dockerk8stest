/*pipeline {
    agent { docker { image 'node:14-alpine' } }
    stages {
        stage('build') {
            steps {
                sh 'npm --version'
            }
        }
    }
}*/
node {
    checkout scm

//    def customImage = docker.build("my-image:${env.BUILD_ID}")
    def customImage = docker.build("grumpykai/nodejstest")

    customImage.inside {
        sh 'cat Dockerfile'
    }
}