function showDonorSignup() {
    document.getElementById('donor-login').classList.add('hidden');
    document.getElementById('donor-signup').classList.remove('hidden');
}

function showDonorLogin() {
    document.getElementById('donor-signup').classList.add('hidden');
    document.getElementById('donor-login').classList.remove('hidden');
}

function showNgoSignup() {
    document.getElementById('ngo-login').classList.add('hidden');
    document.getElementById('ngo-signup').classList.remove('hidden');
}

function showNgoLogin() {
    document.getElementById('ngo-signup').classList.add('hidden');
    document.getElementById('ngo-login').classList.remove('hidden');
}
