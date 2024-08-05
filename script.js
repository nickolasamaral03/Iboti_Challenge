const form = document.getElementById('myForm')
const alerts = document.getElementById('alerts')
const cep = document.getElementById('cep')
const estado = document.getElementById('estado')
const cidade = document.getElementById('cidade')
const bairro = document.getElementById('bairro')
const rua = document.getElementById('rua')


 async function ClickButton(event){
    form.addEventListener('submit', evento => {
        evento.preventDefault()

        const cpf = document.getElementById('cpf').value 
        const cnpj = document.getElementById('cnpj').value  
        console.log(cpf, cnpj)


        if(!/^\d{14}$/.test(cnpj)){
            // Com expressão regular, se o que tiver sido escrito no input for diferente de 14 caracteres mostra o alerta
            alerts.innerHTML= 'CNPJ INVALIDO'
            alerts.style.background = 'red'
            alerts.style.padding = '10px'
            alerts.style.color = 'white'
            alerts.style.marginBottom = '10px'
            alerts.style.textAlign= 'center'
            return false
        } 
        else{
            alerts.style.display = 'none'
        }

        if(!/^\d{11}$/.test(cpf)){
            alerts.innerHTML= 'CPF INVALIDO'
            return false
        } else{
            alerts.style.display = 'none'
        }

       

    })
    
}

cep.addEventListener('focusout', async () => {

    const response = await fetch (`https://viacep.com.br/ws/${cep.value}/json/`) //Recebe todos através de uma API com o cep do input que foi inserido
    console.log(response)
    const respondeCep = await response.json()

    console.log(respondeCep)

     estado.value = respondeCep.uf
     cidade.value = respondeCep.localidade
     bairro.value = respondeCep.bairro
     rua.value = respondeCep.complemento
})

// AJUSTAR MENSAGEM DE ERRO NO CADASTRO PARA DEIXAR COMO BOOLEANO
// AUTOCOMPLETE COM CEP
