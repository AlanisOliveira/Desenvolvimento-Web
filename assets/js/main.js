document.addEventListener('DOMContentLoaded', function() {
    const enviarButton = document.querySelector('button[type="submit"]');
    const mensagemCadastro = document.createElement('span');
    
    enviarButton.addEventListener('click', function(event) {
      event.preventDefault(); // Evita que o formulário seja enviado
      
      const inputs = document.querySelectorAll('input[required]');
      let camposVazios = false;
      
      inputs.forEach(input => {
        if (input.value.trim() === '') {
          camposVazios = true;
          input.classList.add('campo-vazio'); // Adiciona uma classe de estilo para indicar o campo vazio
        } else {
          input.classList.remove('campo-vazio');
        }
      });
      
      if (camposVazios) {
        mensagemCadastro.textContent = 'Preencha todos os campos';
      } else {
        mensagemCadastro.textContent = 'Cadastro feito';
      }
    });
    
    enviarButton.insertAdjacentElement('afterend', mensagemCadastro);
  });
  