let inptDolar = document.querySelector('#dolar')
let iptReal = document.querySelector('#real')
window.addEventListener('load', e =>{
    apiDolar()
})

iptReal.addEventListener('focus', e =>{
    if(Number(iptReal.value) <= 0){
        iptReal.value = ''
    }
    apiDolar()
})
iptReal.addEventListener('keyup', e =>{
    if(Number(iptReal.value) <= 0){
        iptReal.value = ''
    }
    apiDolar()
})

iptReal.addEventListener('click', e =>{
    if(Number(iptReal.value) <= 0){
        iptReal.value = ''
    }
    apiDolar()
})

function carregarDolar(dolar){
    
    let resul = inptDolar.value = iptReal.value * dolar  
    return String(resul).replace('.',',')
     
}

async function apiDolar() {
    const url = await 'https://economia.awesomeapi.com.br/last/USD-BRL'
    const response = await fetch(url)
    const resul = await response.json()
    const dolar = await resul['USDBRL']['bid']
    carregarDolar(Number(dolar).toFixed(2))
}
