
export async function loginAPI(prefixoUsuario, password) {
    const dados = { prefixoUsuario, password };
    console.log(dados)  
    const response = await fetch('https://localhost:7009/User/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados),
    });
    console.log(response)
    if (!response.ok) {
        throw new Error('Usuário ou senha incorretos');
    }

    return await response.text(); // retorna o resultado da API
}