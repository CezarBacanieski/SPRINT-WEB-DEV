document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
  
    // Simulação de autenticação - verifique se o username é "admin" e a senha é "password"
    if (username === "admin" && password === "123") {
      // Redirecionar para a página de dashboard (ou exibir uma mensagem de sucesso)
      alert("Login bem-sucedido! Redirecionando para o to-do-list...");
      window.location.href = "index.html"; // Redireciona para outra página
    } else {
      // Exibir mensagem de erro
      document.getElementById("error-msg").textContent = "Credenciais inválidas. Por favor, tente novamente.";
    }
  });
  