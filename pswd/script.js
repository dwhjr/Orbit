document.getElementById('generate-btn').addEventListener('click', function () {
    var length = document.getElementById('password-length').value;
    var uppercase = document.getElementById('uppercase').checked;
    var numbers = document.getElementById('numbers').checked;
    var symbols = document.getElementById('symbols').checked;
    var password = generatePassword(length, uppercase, numbers, symbols);
    document.getElementById('password').textContent = password;
    document.getElementById('copy-btn').setAttribute('data-clipboard-text', password);
});

document.getElementById('copy-btn').addEventListener('click', function () {
    var passwordText = document.getElementById('password');
    var textArea = document.createElement('textarea');
    textArea.value = passwordText.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    alert('Password copied to clipboard!');
});

function generatePassword(length, uppercase, numbers, symbols) {
    var charset = 'abcdefghijklmnopqrstuvwxyz';
    var password = '';
    if (uppercase) {
        charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    if (numbers) {
        charset += '0123456789';
    }
    if (symbols) {
        charset += '!@#$%^&*()_+[]{}|;:,.<>?';
    }
    for (var i = 0; i < length; i++) {
        var randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    return password;
}
