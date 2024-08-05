const form = document.getElementById('myForm')
const alerts = document.getElementById('alerts')
const cep = document.getElementById('cep')
const estado = document.getElementById('estado')
const cidade = document.getElementById('cidade')
const bairro = document.getElementById('bairro')
const rua = document.getElementById('rua')

function ValidarCPF(cpf){
    if(!/^\d{11}$/.test(cpf)){
        // Com expressão regular, se o que tiver sido escrito no input for diferente de 11 caracteres mostra o alerta
        mostrarAlerta('CPF INVÁLIDO')
        return false
    }
    return true
}

function ValidarCNPJ(cnpj){
    if(!/^\d{14}$/.test(cnpj)){
        mostrarAlerta('CNPJ INVÁLIDO')
        return false
    } 
    return true
}

function mostrarAlerta(mensagem) {
    alerts.innerHTML = mensagem;
    alerts.style.background = 'red';
    alerts.style.padding = '10px';
    alerts.style.color = 'white';
    alerts.style.marginBottom = '10px';
    alerts.style.textAlign = 'center';
    alerts.style.display = 'block';
}

    form.addEventListener('submit', event => {
        event.preventDefault()

        const cpf = document.getElementById('cpf').value 
        const cnpj = document.getElementById('cnpj').value  
        console.log(cpf, cnpj)

        const validaCPF = ValidarCPF(cpf)
        const validaCNPJ = ValidarCNPJ(cnpj)


        if(validaCNPJ && validaCPF){
            location.reload()
        }
        // Se o CNPJ e o CPF forem válidos a página irá recarregar

    })

// Quando clicar na parte de fora do input do CEP irá concluir a ação de preencher automaticamente os inputs
cep.addEventListener('focusout', async () => {

    const response = await fetch(`https://cep.awesomeapi.com.br/json/${cep.value}`) //Recebe todos através de uma API com o cep do input que foi inserido
    const respondeCep = await response.json()

     estado.value = respondeCep.state
     cidade.value = respondeCep.city
     bairro.value = respondeCep.district
     rua.value = respondeCep.address
})


