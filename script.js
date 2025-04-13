document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    const inputText = document.getElementById('inputText').value;
    const resultDiv = document.getElementById('result');
    if (inputText === '<script>ALERT</script>') {
      resultDiv.textContent = 'flag_HPFporkonsale';
    } else {
      resultDiv.textContent = 'Keep thinking!This question is about web security.';
    }
  });