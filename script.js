document.getElementById('login-btn').onclick = function() {
        document.getElementById('login-popup').style.display = 'block';
        };

        document.getElementById('close-popup').onclick = function() {
            document.getElementById('login-popup').style.display = 'none';
            };

            document.getElementById('email').oninput = function() {
                const email = this.value;
                    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                        if (emailPattern.test(email)) {
                                this.classList.remove('error');
                                        document.getElementById('login-submit-btn').disabled = false;
                                                document.getElementById('register-btn').disabled = false;
                                                        document.getElementById('recover-password-btn').disabled = false;
                                                            } else {
                                                                    this.classList.add('error');
                                                                            document.getElementById('login-submit-btn').disabled = true;
                                                                                    document.getElementById('register-btn').disabled = true;
                                                                                            document.getElementById('recover-password-btn').disabled = true;
                                                                                                }
                                                                                                };

                                                                                                document.getElementById('password').oninput = function() {
                                                                                                    const password = this.value;
                                                                                                        if (password.length === 6) {
                                                                                                                this.classList.remove('error');
                                                                                                                        document.getElementById('login-submit-btn').disabled = false;
                                                                                                                                document.getElementById('register-btn').disabled = false;
                                                                                                                                    } else {
                                                                                                                                            this.classList.add('error');
                                                                                                                                                    document.getElementById('login-submit-btn').disabled = true;
                                                                                                                                                            document.getElementById('register-btn').disabled = true;
                                                                                                                                                                }
                                                                                                                                                                };

                                                                                                                                                                document.getElementById('login-submit-btn').onclick = function() {
                                                                                                                                                                    document.getElementById('login-btn').innerText = 'Log Out';
                                                                                                                                                                        document.getElementById('login-popup').style.display = 'none';
                                                                                                                                                                            document.getElementById('login-btn').onclick = function() {
                                                                                                                                                                                    document.getElementById('login-btn').innerText = 'Login';
                                                                                                                                                                                            document.getElementById('email').value = '';
                                                                                                                                                                                                    document.getElementById('password').value = '';
                                                                                                                                                                                                            document.getElementById('login-popup').style.display = 'none';
                                                                                                                                                                                                                };
                                                                                                                                                                                                                };

