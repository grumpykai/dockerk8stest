pipeline {
  
  def dockerImage

  stage('Clone repository') {
    checkout scm    
  }  

  stage('Build image') {   
    dockerImage = docker.build("grumpykai/nodejstest")
  }

  stage('Verify') {   
    dockerImage.inside {
      sh "cat /usr/src/app/index.js"
    }
  }

  stage('Push image') {
    docker.withRegistry("https://registry.hub.docker.com", "git") {
      dockerImage.push("1.0.${env.BUILD_NUMBER}")
    }
  }
}