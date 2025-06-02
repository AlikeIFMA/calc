document.addEventListener('DOMContentLoaded', function() {
    // Elementos do DOM
    const loginButton = document.getElementById('loginButton');
    const loginPopup = document.getElementById('loginPopup');
    const closePopup = document.getElementById('closePopup');
    const emailInput = document.getElementById('emailInput');
    const passwordInput = document.getElementById('passwordInput');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const submitLogin = document.getElementById('submitLogin');
    const registerButton = document.getElementById('registerButton');
    const recoverButton = document.getElementById('recoverButton');
    
    // Estado do login
    let isLoggedIn = false;
    const username = "Tester";
    
    // Abrir popup de login
    loginButton.addEventListener('click', function() {
        if (isLoggedIn) {
            // Logout
            isLoggedIn = false;
            loginButton.textContent = 'Login';
            updateUserInfo();
        } else {
            // Mostrar popup
            loginPopup.style.display = 'flex';
        }
    });
    
    // Fechar popup
    closePopup.addEventListener('click', function() {
        loginPopup.style.display = 'none';
        resetForm();
    });
    
    // Validar email em tempo real
    emailInput.addEventListener('input', validateEmail);
    
    // Validar senha em tempo real
    passwordInput.addEventListener('input', validatePassword);
    
    // Função para validar email
    function validateEmail() {
        const email = emailInput.value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (!emailRegex.test(email)) {
            emailInput.classList.add('error');
            emailError.textContent = 'Email inválido';
            return false;
        } else {
            emailInput.classList.remove('error');
            emailError.textContent = '';
            return true;
        }
    }
    
    // Função para validar senha
    function validatePassword() {
        const password = passwordInput.value;
        
        if (password.length < 6) {
            passwordInput.classList.add('error');
            passwordError.textContent = 'A senha deve ter 6 dígitos';
            return false;
        } else {
            passwordInput.classList.remove('error');
            passwordError.textContent = '';
            return true;
        }
    }
    
    // Habilitar/desabilitar botões conforme validação
    function updateButtons() {
        const isEmailValid = validateEmail();
        const isPasswordValid = validatePassword();
        
        recoverButton.disabled = !isEmailValid;
        submitLogin.disabled = !(isEmailValid && isPasswordValid);
        registerButton.disabled = !(isEmailValid && isPasswordValid);
    }
    
    // Atualizar informações do usuário no cabeçalho
    function updateUserInfo() {
        if (isLoggedIn) {
            const userInfo = document.createElement('div');
            userInfo.className = 'user-info';
            userInfo.innerHTML = `
                <span class="user-name">${username}</span>
                <button class="login-button">Log Out</button>
            `;
            
            // Substituir o botão de login pelo user-info
            loginButton.replaceWith(userInfo);
            
            // Adicionar evento de logout ao novo botão
            document.querySelector('.user-info .login-button').addEventListener('click', function() {
                isLoggedIn = false;
                userInfo.replaceWith(loginButton);
                loginButton.textContent = 'Login';
            });
        }
    }
    
    // Resetar formulário
    function resetForm() {
        emailInput.value = '';
        passwordInput.value = '';
        emailInput.classList.remove('error');
        passwordInput.classList.remove('error');
        emailError.textContent = '';
        passwordError.textContent = '';
        submitLogin.disabled = true;
        registerButton.disabled = true;
        recoverButton.disabled = true;
    }
    
    // Evento de input para atualizar botões
    emailInput.addEventListener('input', updateButtons);
    passwordInput.addEventListener('input', updateButtons);
    
    // Botão de login
    submitLogin.addEventListener('click', function() {
        isLoggedIn = true;
        loginPopup.style.display = 'none';
        loginButton.textContent = 'Log Out';
        updateUserInfo();
        resetForm();
    });
    
    // Botão de cadastrar
    registerButton.addEventListener('click', function() {
        isLoggedIn = true;
        loginPopup.style.display = 'none';
        loginButton.textContent = 'Log Out';
        updateUserInfo();
        resetForm();
        alert('Cadastro realizado com sucesso!');
    });
    
    // Botão de recuperar senha
    recoverButton.addEventListener('click', function() {
        alert(`Um email de recuperação foi enviado para ${emailInput.value}`);
        resetForm();
        loginPopup.style.display = 'none';
    });
    
    // Fechar popup ao clicar fora
    window.addEventListener('click', function(event) {
        if (event.target === loginPopup) {
            loginPopup.style.display = 'none';
            resetForm();
        }
    });
});

// Dropdown functionality for mobile
document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.dropdown, .nested-dropdown');
    
    dropdowns.forEach(dropdown => {
        const btn = dropdown.querySelector('.dropbtn, .nested-btn');
        const content = dropdown.querySelector('.dropdown-content, .nested-content');
        const arrow = dropdown.querySelector('.arrow');
        
        // For mobile touch devices
        btn.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                content.style.display = content.style.display === 'block' ? 'none' : 'block';
                arrow.style.transform = content.style.display === 'block' ? 'rotate(90deg)' : 'rotate(0)';
            }
        });
    });
    
    // Close dropdowns when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.matches('.dropbtn, .nested-btn, .dropbtn *, .nested-btn *')) {
            const dropdowns = document.querySelectorAll('.dropdown-content, .nested-content');
            const arrows = document.querySelectorAll('.dropdown .arrow, .nested-dropdown .arrow');
            
            dropdowns.forEach(dropdown => {
                dropdown.style.display = 'none';
            });
            
            arrows.forEach(arrow => {
                arrow.style.transform = 'rotate(0)';
            });
        }
    });
});