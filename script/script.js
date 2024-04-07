var corpo = window.document.body
var tela_login = window.document.querySelector('#tela_login')
var tela_principal = window.document.querySelector('#signos')
var erro = window.document.querySelector('#erro')
var dia = window.document.querySelector('#dia').value
var mes = window.document.querySelector('#mes').value
var ano = window.document.querySelector('#ano').value
var datta = new Date()
var ano_atual = datta.getFullYear()

var titulo_pricipal = window.document.querySelector('#containerTitulo')
var resultado = window.document.querySelector('#resultadoOdus')
var resultadoSigno = window.document.querySelector('#resultadoSigno')
var planetas = window.document.querySelector('.planetas')
var elementoSigno = window.document.querySelector('#elementoSigno')


// CAMPO DOS ELEMENTOS
var agua = window.document.querySelector('#agua')
var ar = window.document.querySelector('#ar')
var fogo = window.document.querySelector('#fogo')
var terra = window.document.querySelector('#terra')
agua.style.display = 'none'
ar.style.display = 'none'
fogo.style.display = 'none'
terra.style.display = 'none'

// CAMPO DOS PLANETAS
var sol = window.document.querySelector('#sol')
var lua = window.document.querySelector('#lua')
var marte = window.document.querySelector('#marte')
var mercurio = window.document.querySelector('#mercurio')
var jupiter = window.document.querySelector('#jupiter')
var venus = window.document.querySelector('#venus')
var saturno = window.document.querySelector('#saturno')
var plutao = window.document.querySelector('#plutao')
var urano = window.document.querySelector('#urano')
var netuno = window.document.querySelector('#netuno')
sol.style.display = 'none'
lua.style.display = 'none'
marte.style.display = 'none'
mercurio.style.display = 'none'
jupiter.style.display = 'none'
venus.style.display = 'none'
saturno.style.display = 'none'
plutao.style.display = 'none'
urano.style.display = 'none'
netuno.style.display = 'none'

// CAMPO DOS ORIXAS TITULO
var exu = window.document.querySelector('.exu')
var ibeji = window.document.querySelector('.ibeji')
var ogum = window.document.querySelector('.ogum')
var iemanja = window.document.querySelector('.iemanja')
var oxum = window.document.querySelector('.oxum')
var oxossi = window.document.querySelector('.oxossi')
var obaluae = window.document.querySelector('.obaluae')
var oxaguia = window.document.querySelector('.oxaguia')
var iansa = window.document.querySelector('.iansa')
var oxalufa = window.document.querySelector('.oxalufa')
var iansa_exu = window.document.querySelector('.iansa_exu')
var xango = window.document.querySelector('.xango')
var nana = window.document.querySelector('.nana')
var oxumare = window.document.querySelector('.oxumare')
var tempo = window.document.querySelector('.tempo')
var alafia = window.document.querySelector('.alafia')
exu.style.display = 'none'
ibeji.style.display = 'none'
ogum.style.display = 'none'
iemanja.style.display = 'none'
oxum.style.display = 'none'
oxossi.style.display = 'none'
obaluae.style.display = 'none'
oxaguia.style.display = 'none'
iansa.style.display = 'none'
oxalufa.style.display = 'none'
iansa_exu.style.display = 'none'
xango.style.display = 'none'
nana.style.display = 'none'
oxumare.style.display = 'none'
tempo.style.display = 'none'
alafia.style.display = 'none'

// CAMPO DOS CONTEUDOS
var conteudoExu = window.document.querySelector('#conteudoExu')
var conteudoIbeji = window.document.querySelector('#conteudoIbeji')
var conteudoOgum = window.document.querySelector('#conteudoOgum')
var conteudoIemanja = window.document.querySelector('#conteudoIemanja')
var conteudoOxum = window.document.querySelector('#conteudoOxum')
var conteudoOxossi = window.document.querySelector('#conteudoOxossi')
var conteudoObaluae = window.document.querySelector('#conteudoObaluae')
var conteudoOxaguia = window.document.querySelector('#conteudoOxaguia')
var conteudoIansa = window.document.querySelector('#conteudoIansa')
var conteudoOxalufa = window.document.querySelector('#conteudoOxalufa')
var conteudoIansaExu = window.document.querySelector('#conteudoIansaExu')
var conteudoXango = window.document.querySelector('#conteudoXango')
var conteudoNana = window.document.querySelector('#conteudoNana')
var conteudoOxumare = window.document.querySelector('#conteudoOxumare')
var conteudoTempo = window.document.querySelector('#conteudoTempo')
var conteudoAlafia = window.document.querySelector('#conteudoAlafia')



function calcular(){
    // SOMA DOS DIAS
    resultadoSigno.innerText = ''
    resultado.innerText = ''
    var dia = window.document.querySelector('#dia').value
    var dia1 = dia[0]
    var d1 = Number(dia1)
    var dia2 = dia[1]
    var d2 = Number(dia2)
    var soma_dia = d1 + d2
    // SOMA DO MÊS
    var mes = window.document.querySelector('#mes').value
    var mes1 = mes[0]
    var m1 = Number(mes1)
    var mes2 = mes[1]
    var m2 = Number(mes2)
    var soma_mes = m1 + m2
    // SOMA DO ANO
    var ano = window.document.querySelector('#ano').value
    var ano1 = ano[0]
    var a1 = Number(ano1)
    var ano2 = ano[1]
    var a2 = Number(ano2)
    var ano3 = ano[2]
    var a3 = Number(ano3)
    var ano4 = ano[3]
    var a4 = Number(ano4)
    var soma_ano = a1 + a2 + a3 + a4
    // SOMA TOTAL
    var total = soma_dia + soma_mes + soma_ano;
    var tot = String(total)
    var tot1 = tot[0]
    var t1 = Number(tot1)
    var tot2 = tot[1]
    var t2 = Number(tot2)
    // SOMA PRINCIPAL
    var soma_total = t1 + t2
    resultado.innerText = `${soma_total}`
    if(dia.length == 0 || mes.length == 0 || ano.length == 0){
        erro.innerText = 'Campo Incompleto'
    } else if(dia < 0 || dia > 31){
        erro.innerText = `Dia ${dia} não existe`
    } else if(mes < 0 || mes > 12){
        erro.innerText = `Mês ${mes} não existe`
    }
    else if(dia.length < 2 || mes.length < 2 || ano.length < 4){
        erro.innerHTML = `Formato incorreto<br>[Dia 00 | Mês 00 | Ano 0000]`
    } else if(ano < 1800 || ano > ano_atual){
        erro.innerText = `Limite de ano não permitido`
    } else {
        tela_login.style.display = 'none'
        tela_principal.style.display = 'block'
    }


    // CAMPO DOS ODUNS
    if(soma_total == 1){
        exu.style.display = 'flex'
        titulo_pricipal.style.background = 'red'
        titulo_pricipal.style.color = 'black'
        conteudoExu.style.display = 'flex'
        conteudoExu.style.display = 'flex'
    } else if(soma_total == 2){
        ibeji.style.display = 'flex'
        titulo_pricipal.style.background = 'lightblue'
        titulo_pricipal.style.color = 'palevioletred'
        conteudoIbeji.style.display = 'flex'
    } else if(soma_total == 3){
        ogum.style.display = 'flex'
        titulo_pricipal.style.background = 'darkblue'
        titulo_pricipal.style.color = 'white'
        conteudoOgum.style.display = 'flex'
    } else if(soma_total == 4){
        iemanja.style.display = 'flex'
        titulo_pricipal.style.background = '#0092c4'
        titulo_pricipal.style.color = 'white'
        conteudoIemanja.style.display = 'flex'
    } else if(soma_total == 5){
        oxum.style.display = 'flex'
        titulo_pricipal.style.background = 'yellow'
        titulo_pricipal.style.color = 'black'
        conteudoOxum.style.display = 'flex'
    }  else if(soma_total == 6){
        oxossi.style.display = 'flex'
        titulo_pricipal.style.background = 'green'
        titulo_pricipal.style.color = 'white'
        conteudoOxossi.style.display = 'flex'
    } else if(soma_total == 7){
        obaluae.style.display = 'flex'
        titulo_pricipal.style.background = '#704214'
        titulo_pricipal.style.color = 'white'
        conteudoObaluae.style.display = 'flex'
    } else if(soma_total == 8){
        oxaguia.style.display = 'flex'
        titulo_pricipal.style.background = '#0cb7f2'
        titulo_pricipal.style.color = 'white'
        conteudoOxaguia.style.display = 'flex'
    } else if(soma_total == 9){
        iansa.style.display = 'flex'
        titulo_pricipal.style.background = 'red'
        titulo_pricipal.style.color = 'white'
        conteudoIansa.style.display = 'flex'
    } else if(soma_total == 10){
        oxalufa.style.display = 'flex'
        titulo_pricipal.style.background = '#edeee9'
        titulo_pricipal.style.color = '#92989c'
        conteudoOxalufa.style.display = 'flex'
    } else if(soma_total == 11){
        iansa_exu.style.display = 'flex'
        titulo_pricipal.style.background = 'black'
        titulo_pricipal.style.color = 'red'
        conteudoIansaExu.style.display = 'flex'
    } else if(soma_total == 12){
        xango.style.display = 'flex'
        titulo_pricipal.style.background = '#470a00'
        titulo_pricipal.style.color = 'white'
        conteudoXango.style.display = 'flex'
    } else if(soma_total == 13){
        nana.style.display = 'flex'
        titulo_pricipal.style.background = 'purple'
        titulo_pricipal.style.color = 'white'
        conteudoNana.style.display = 'flex'
    } else if(soma_total == 14){
        oxumare.style.display = 'flex'
        conteudoOxumare.style.display = 'flex'
    } else if(soma_total == 15){
        tempo.style.display = 'flex'
        titulo_pricipal.style.background = '#3a6332'
        titulo_pricipal.style.color = 'white'
        conteudoTempo.style.display = 'flex'
    } else if(soma_total == 16){
        alafia.style.display = 'flex'
        titulo_pricipal.style.background = '#edeee9'
        titulo_pricipal.style.color = '#92989c'
        conteudoAlafia.style.display = 'flex'
    }

    // DIA E MÊS DOS SIGNOS
    var dia_sig = Number(dia)
    var mes_sig = Number(mes)

    // SIGNO DE ARIES
    if(dia_sig >= 21 && mes_sig == 3){
        resultadoSigno.innerHTML = `Aries<br>♈︎`
        fogo.style.display = 'flex'
        marte.style.display = 'flex'
    } else if(dia_sig < 21 && mes_sig == 4){
        resultadoSigno.innerHTML = `Aries<br>♈︎`
        fogo.style.display = 'flex'
        marte.style.display = 'flex'
    }

    // SIGNO DE TOURO
    if(dia_sig >= 21 && mes_sig == 4){
        resultadoSigno.innerHTML = `Touro<br>♉︎`
        terra.style.display = 'flex'
        venus.style.display = 'flex'
    } else if(dia_sig < 21 && mes_sig == 5){
        resultadoSigno.innerHTML = `Touro<br>♉︎`
        terra.style.display = 'flex'
        venus.style.display = 'flex'
    }

    // SIGNO DE GÊMEOS
    if(dia_sig >= 21 && mes_sig == 5){
        resultadoSigno.innerHTML = `Gêmeos<br>♊︎`
        ar.style.display = 'flex'
        mercurio.style.display = 'flex'
    } else if(dia_sig < 21 && mes_sig == 6){
        resultadoSigno.innerHTML = `Gêmeos<br>♊︎`
        ar.style.display = 'flex'
        mercurio.style.display = 'flex'
    }

    // SIGNO DE CÂNCER  
    if(dia_sig >= 21 && mes_sig == 6){
        resultadoSigno.innerHTML = `Câncer<br>♋︎`
        agua.style.display = 'flex'
        lua.style.display = 'flex'
    } else if(dia_sig < 23 && mes_sig == 7){
        resultadoSigno.innerHTML = `Câncer<br>♋︎`
        agua.style.display = 'flex'
        lua.style.display = 'flex'
    }

    // SIGNO DE LEÃO
    if(dia_sig >= 23 && mes_sig == 7){
        resultadoSigno.innerHTML = `Leão<br>♌︎`
        fogo.style.display = 'flex'
        sol.style.display = 'flex'
    } else if(dia_sig < 23 && mes_sig == 8){
        resultadoSigno.innerHTML = `Leão<br>♌︎`
        fogo.style.display = 'flex'
        sol.style.display = 'flex'
    }
    
    // SIGNO DE VIRGEM
    if(dia_sig >= 23 && mes_sig == 8){
        resultadoSigno.innerHTML = `Virgem<br>♍︎`
        terra.style.display = 'flex'
        mercurio.style.display = 'flex'
    } else if(dia_sig < 23 && mes_sig == 9){
        resultadoSigno.innerHTML = `Virgem<br>♍︎`
        terra.style.display = 'flex'
        mercurio.style.display = 'flex'
    }

    // SIGNO DE LIBRA
    if(dia_sig >= 23 && mes_sig == 9){
        resultadoSigno.innerHTML = `Libra<br>♎︎`
        ar.style.display = 'flex'
        venus.style.display = 'flex'
    } else if(dia_sig < 23 && mes_sig == 10){
        resultadoSigno.innerHTML = `Libra<br>♎︎`
        ar.style.display = 'flex'
        venus.style.display = 'flex'
    }

    // SIGNO DE ESCORPIÃO
    if(dia_sig >= 23 && mes_sig == 10){
        resultadoSigno.innerHTML = `Escorpião<br>♏︎`
        agua.style.display = 'flex'
        plutao.style.display = 'flex'
    } else if(dia_sig < 22 && mes_sig == 11){
        resultadoSigno.innerHTML = `Escorpião<br>♏︎`
        agua.style.display = 'flex'
        plutao.style.display = 'flex'
    }

    // SIGNO DE SAGITÁRIO
    if(dia_sig >= 22 && mes_sig == 11){
        resultadoSigno.innerHTML = `Sagitário<br>♐︎	`
        fogo.style.display = 'flex'
        jupiter.style.display = 'flex'
    } else if(dia_sig < 22 && mes_sig == 12){
        resultadoSigno.innerHTML = `Sagitário<br>♐︎	`
        fogo.style.display = 'flex'
        jupiter.style.display = 'flex'
    }

    // SIGNO DE CAPRICÓRNIO
    if(dia_sig >= 22 && mes_sig == 12){
        resultadoSigno.innerHTML = `Capricórnio<br>♑︎`
        terra.style.display = 'flex'
        saturno.style.display = 'flex'
    } else if(dia_sig < 21 && mes_sig == 1){
        resultadoSigno.innerHTML = `Capricórnio<br>♑︎`
        terra.style.display = 'flex'
        saturno.style.display = 'flex'
    }

    // SIGNO DE AQUÁRIO
    if(dia_sig >= 21 && mes_sig == 1){
        resultadoSigno.innerHTML = `Aquário<br>♒︎`
        ar.style.display = 'flex'
        urano.style.display = 'flex'
    } else if(dia_sig < 19 && mes_sig == 2){
        resultadoSigno.innerHTML = `Aquário<br>♒︎`
        ar.style.display = 'flex'
        urano.style.display = 'flex'
    }

    // SIGNO DE PEIXES
    if(dia_sig >= 19 && mes_sig == 2){
        resultadoSigno.innerHTML = `Peixes<br>♓︎`
        agua.style.display = 'flex'
        netuno.style.display = 'flex'
    } else if(dia_sig < 21 && mes_sig == 3){
        resultadoSigno.innerHTML = `Peixes<br>♓︎`
        agua.style.display = 'flex'
        netuno.style.display = 'flex'
    }
    
}
