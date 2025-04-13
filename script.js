document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    const inputText = document.getElementById('inputText').value;
    const resultDiv = document.getElementById('result');
    // 使用正则表达式进行匹配
    if (/<script>ALERT\([^)]+\)<\/script>/.test(inputText)) {
        resultDiv.textContent = 'flag_HPFporkonsale';
    } else {
        resultDiv.textContent = 'Keep thinking!This question is about web security.';
    }
});
