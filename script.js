const FIXED_KEY = 'T3VP2-JMUCL-8E5AQ';

document.getElementById('show-key-btn').addEventListener('click', () => {
    document.getElementById('key-input').value = FIXED_KEY;
    document.getElementById('result').textContent = 'License key displayed!';
    document.getElementById('result').style.color = '#fff';
});

document.getElementById('validate-btn').addEventListener('click', () => {
    const key = document.getElementById('key-input').value;
    if (key === FIXED_KEY) {
        document.getElementById('result').textContent = 'Valid License Key!';
        document.getElementById('result').style.color = '#0f0'; // Green for success
    } else {
        document.getElementById('result').textContent = 'Invalid License Key!';
        document.getElementById('result').style.color = '#f00'; // Red for error
    }
});