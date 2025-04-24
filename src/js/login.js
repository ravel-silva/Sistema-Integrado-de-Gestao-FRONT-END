import { loginAPI } from './user-api.js';


async function logar(event) {
   event.preventDefault();

   const usuario = document.getElementById('usuario').value;
   const senha = document.getElementById('senha').value;

   try {
      
      const token = await loginAPI(usuario, senha);

      console.log('Token', token);
      localStorage.setItem('token', token)

      window.location.href = "pages/equipes.html"
   } catch (error) {
      alert('Falha no login: ' + error.message);
   }
}
document.querySelector('form.login').addEventListener('submit', logar);


