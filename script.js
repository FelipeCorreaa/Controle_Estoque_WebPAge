document.addEventListener('DOMContentLoaded', function() {
    const apiUrl = 'http://localhost:8080/api/products'; // Substitua pela URL da sua API

    document.getElementById('btnAdd').addEventListener('click', function() {
        // Redirecionar para a página de adicionar produto
        window.location.href = 'addProduct.html';
    });

    document.getElementById('btnView').addEventListener('click', function() {
        const productId = prompt('Digite o ID do Produto:');
        if (productId) {
            window.location.href = `viewProduct.html?id=${productId}`;
        }
    });

    document.getElementById('btnList').addEventListener('click', function() {
        window.location.href = 'listProducts.html';
    });

    document.getElementById('btnDelete').addEventListener('click', function() {
        const productId = prompt('Digite o ID do Produto:');
        if (productId) {
            fetch(`${apiUrl}/${productId}`, {
                method: 'DELETE'
            })
            .then(response => response.json())
            .then(data => {
                alert(data.message);
            })
            .catch(error => console.error('Erro:', error));
        }
    });

    // Adicionando funcionalidade para adicionar produto
    document.getElementById('addProductForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const productName = document.getElementById('productName').value;
        const productPrice = parseFloat(document.getElementById('productPrice').value);

        fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nome: productName,
                preco: productPrice
            })
        })
        .then(response => response.json())
        .then(data => {
            alert(data.message);
        })
        .catch(error => console.error('Erro:', error));
    });
});
