function showTab(tabName) {
  // Remove a classe "active" de todas as abas e conteúdos
  const tabs = document.querySelectorAll('.tab-links li');
  const contentPanes = document.querySelectorAll('.tab-pane');
  
  tabs.forEach(tab => tab.classList.remove('active'));  // Remove "active" de todas as abas
  contentPanes.forEach(pane => pane.classList.remove('active'));  // Remove "active" de todos os conteúdos
  
  // Adiciona a classe "active" à aba clicada e ao conteúdo correspondente
  document.querySelector(`.tab-links li[onclick="showTab('${tabName}')"]`).classList.add('active');
  document.getElementById(tabName).classList.add('active');
}
