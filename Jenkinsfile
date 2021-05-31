node {
  
  def dockerImage

  stage('Clone repository') {
    checkout scm    
  }  

  stage('Build image') {   
    dockerImage = docker.build("grumpykai/nodejstest")
  }

  stage('Push image') {
    docker.withRegistry('https://registry.hub.docker.com', 'git') {
      dockerImage.push("latest")
    }
  }
}