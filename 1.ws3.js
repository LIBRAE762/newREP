let actur = document.getElementById("atTUR")

let acBP = document.getElementById("atBP")

let atAA = document.getElementById("atAA")

let b1 = document.getElementById("B1")
let b2 = document.getElementById("B2")
let b3 = document.getElementById("B3")
let b4 = document.getElementById("B4")

let painel = document.getElementById("painel")

atAA.disabled = true
atAA.style.color = "gray"

actur.disabled = true
actur.style.color = "gray"

acBP.disabled = true
acBP.style.color = "gray"

b1.disabled = true
b2.disabled = true
b3.disabled = true
b4.disabled = true
    
b1.style.color = "gray"
b2.style.color = "gray"
b3.style.color = "gray"
b4.style.color = "gray"


function tester() {
    painel.innerHTML = "sistema eletrico do navio ON/OFF."
}
function gerador() {
    painel.innerHTML = "geradores de energia do navio."
}
function CS() {
    painel.innerHTML = "sistema de energia do convés superior do navio, acima do andar principal do navio."
}  
function CP() {
    painel.innerHTML = "sistema de energia do convés principal do navio, andar principal do navio."
}
function CI() {
    painel.innerHTML = "sistema de energia do convés inferior do navio, abaixo do andar principal do navio."
}  


function B1() {
    painel.innerHTML = "a primeira torreta pricipal localizada proxima da proa."
}
function B1S() {
    painel.innerHTML = "status atual da bateria principal 1."
}
function B2() {
    painel.innerHTML = "a segunda torreta após a primeira torreta localizada na proa."
}
function B2S() {
    painel.innerHTML = "status atual da bateria principal 2."
}
function B3() {
    painel.innerHTML = "a terceira torreta principal localizada proxima a popa."
}
function B3S() {
    painel.innerHTML = "status atual da bateria principal 3."
}


function BBB() {
    painel.innerHTML = "são as torretas segundarias do navio, 6 no total."
}
function BEB() {
    painel.innerHTML = "status da mira das torretas, se está tracado em um alvo ou não."
}
function AD() {
    painel.innerHTML = "o quanto de munição ainda resta para todas as torretas segundarias."
}
function BBS() {
    painel.innerHTML = "status do disparo automatico, se está disparando ou não."
}
function BES() {
    painel.innerHTML = "butão que ativa/desativa o disparo automatico."
}


function TBB() {
    painel.innerHTML = "turbina BomBordo(esquerda) do navio."
}
function C12() {
    painel.innerHTML = "caldeira 1 e caldeira 2, que alimentam a turbina BomBordo do navio."
}
function TUC() {
    painel.innerHTML = "turbina central, localizado no centro da turbina BB e EB."
}
function C34() {
    painel.innerHTML = "caldeira 3 e caldeira 4, que alimentam a turbina central do navio."
}
function TEB() {
    painel.innerHTML = "turbina EsteBordo(direita) do navio."
}
function C56() {
    painel.innerHTML = "caldeira 5 e caldeira 6, que alimentam a turbina EsteBordo"
}



function trigger() {
    let Waa = document.getElementById("wAA")
    let ACaa = document.getElementById("acAA")
    let Maa = document.getElementById("mAA")
    let Naa = document.getElementById("nAA")

    let energia = document.getElementById("energia")
    let active = document.getElementById("active")

    let stat0 = document.getElementById("stat0")
    let stat1 = document.getElementById("stat1")
    let stat2 = document.getElementById("stat2")
    let stat3 = document.getElementById("stat3")
    let stat4 = document.getElementById("stat4")
    let stat5 = document.getElementById("stat5")
    let stat6 = document.getElementById("stat6")
    let stat7 = document.getElementById("stat7")
    let stat8 = document.getElementById("stat8")
    let stat9 = document.getElementById("stat9")
    let stat10 = document.getElementById("stat10")
    let stat11 = document.getElementById("stat11")
    let stat12 = document.getElementById("stat12")
    let stat13 = document.getElementById("stat13")
    let stat14 = document.getElementById("stat14")
    let stat15 = document.getElementById("stat15")
    let stat16 = document.getElementById("stat16")
    let stat17 = document.getElementById("stat17")
    let stat18 = document.getElementById("stat18")
    let stat19 = document.getElementById("stat19")
    let stat20 = document.getElementById("stat20")

    if (b1.disabled === true) {
        let SCRIPTenergia = document.getElementById("energia").innerHTML = "ligando..."
        painel.innerHTML = "ativando energia..."
        energia.style.color = "yellow"
        const playPOWERon = document.getElementById("playPOWERon");playPOWERon.play()
        setTimeout(() => {
             if (b1.disabled === true) {
                TURtrue = true
                BPtrue = true
                TURNtrue = true
                NAVtrue = true

                atAA.disabled = false
                atAA.style.color = "limegreen"


                let SCRIPTenergia1 = document.getElementById("energia").innerHTML = "ativado"
                painel.innerHTML = "aqui onde você está lendo é o painel estatistico, este painel informa tudo que está acontecendo no navio."

                ACaa.style.display = "block"
                Waa.style.display = "block"
                Maa.style.display = "block"
                Naa.style.display = "block"

                energia.style.color = "lime"
                active.innerHTML = "desativar"

                actur.disabled = false
                actur.style.color = "limegreen"

                acBP.disabled = false
                acBP.style.color = "limegreen"

                b1.disabled = false
                b2.disabled = false
                b3.disabled = false
                b4.disabled = false

                b1.style.color = "limegreen"
                b2.style.color = "limegreen"
                b3.style.color = "limegreen"
                b4.style.color = "limegreen"

                stat0.style.display = "block"
                stat1.style.display = "block"
                stat2.style.display = "block"
                stat3.style.display = "block"
                stat3.style.display = "block"
                stat3.style.display = "block"
                stat3.style.display = "block"
                stat4.style.display = "block"
                stat5.style.display = "block"
                stat6.style.display = "block"
                stat7.style.display = "block"
                stat8.style.display = "block"
                stat9.style.display = "block"
                stat10.style.display = "block"
                stat11.style.display = "block"
                stat12.style.display = "block"
                stat13.style.display = "block"
                stat14.style.display = "block"
                stat15.style.display = "block"
                stat16.style.display = "block"
                stat17.style.display = "block"
                stat18.style.display = "block"
                stat19.style.display = "block"
                stat20.style.display = "block"
            }
        }, 4000);
    }

    if (b1.disabled === false) {
        let neoSCRIPT = document.getElementById("energia").innerHTML = "desativando..."
        energia.style.color = "yellow"
        const playPOWERoff = document.getElementById("playPOWERoff");playPOWERoff.play()
        setTimeout(() => {
            if (b1.disabled === false) {
                TURtrue = false
                BPtrue = false
                TURNtrue = false
                NAVtrue = false

                atAA.disabled = true
                atAA.style.color = "gray"


                let SCRIPTenergia2 = document.getElementById("energia").innerHTML = "desativado"

                ACaa.style.display = "none"
                Waa.style.display = "none"
                Maa.style.display = "none"
                Naa.style.display = "none"

                energia.style.color = "red"
                active.innerHTML = "ativar"

                actur.disabled = true
                actur.style.color = "gray"

                acBP.disabled = true
                acBP.style.color = "gray"

                b1.disabled = true
                b2.disabled = true
                b3.disabled = true
                b4.disabled = true

                b1.style.color = "gray"
                b2.style.color = "gray"
                b3.style.color = "gray"
                b4.style.color = "gray"

                stat0.style.display = "none"
                stat1.style.display = "none"
                stat2.style.display = "none"
                stat3.style.display = "none"
                stat4.style.display = "none"
                stat5.style.display = "none"
                stat6.style.display = "none"
                stat7.style.display = "none"
                stat8.style.display = "none"
                stat9.style.display = "none"
                stat10.style.display = "none"
                stat11.style.display = "none"
                stat12.style.display = "none"
                stat13.style.display = "none"
                stat14.style.display = "none"
                stat15.style.display = "none"
                stat16.style.display = "none"
                stat17.style.display = "none"
                stat18.style.display = "none"
                stat19.style.display = "none"
                stat20.style.display = "none"
            }
        }, 3000);
    }
}


let aTUR = document.getElementById("activeTUR")
let aTURon = false

let turbb = document.getElementById("TBB")
let c12 = document.getElementById("C12")
let c12k = document.getElementById("C12K")

let turc = document.getElementById("TUC")
let c34 = document.getElementById("C34")
let c34k = document.getElementById("C34K")

let tureb = document.getElementById("TEB")
let c56 = document.getElementById("C56")
let c56k = document.getElementById("C56K")

let TURtrue = false
function activeTUR() {
 if (turbb.style.color === "red" && TURtrue === true) {
    aTURon = true
    
    turbb.innerHTML = "ativando..."
    c12.innerHTML = "ativando..."

    turc.innerHTML = "ativando..."
    c34.innerHTML = "ativando..."

    tureb.innerHTML = "ativando..."
    c56.innerHTML = "ativando..."


    turbb.style.color = "yellow"
    c12.style.color = "yellow"

    turc.style.color = "yellow"
    c34.style.color = "yellow"

    tureb.style.color = "yellow"
    c56.style.color = "yellow"

    setTimeout(() => {
        turbb.innerHTML = "sem energia"
        c12.innerHTML = "0"
        c12k.style.display = "none"

        turc.innerHTML = "sem energia"
        c34.innerHTML = "0"
        c34k.style.display = "none"

        tureb.innerHTML = "sem energia"
        c56.innerHTML = "0"
        c56k.style.display = "none"

        aTUR.innerHTML = "desativar"
        
    }, 6000);
    } else {
        if (TURtrue === true) {
            turbb.innerHTML = "desativando..."
        c12.innerHTML = "desativando..."

        turc.innerHTML = "desativando..."
        c34.innerHTML = "desativando..."

        tureb.innerHTML = "desativando..."
        c56.innerHTML = "desativando..."
        setTimeout(() => {
            turbb.innerHTML = "desativada"
            c12.innerHTML = "inativa"
            c12k.style.display = "none"

            turc.innerHTML = "desativada"
            c34.innerHTML = "inativa"
            c34k.style.display = "none"

            tureb.innerHTML = "desativada"
            c56.innerHTML = "inativa"
            c56k.style.display = "none"


            turbb.style.color = "red"
            c12.style.color = "red"

            turc.style.color = "red"
            c34.style.color = "red"

            tureb.style.color = "red"
            c56.style.color = "red"

            aTUR.innerHTML = "ativar"
            aTURon = false

            pullTURB1.style.display = "none"
            CAL12.style.display = "none"

            pullTURB2.style.display = "none"
            CAL34.style.display = "none"

            pullTURB3.style.display = "none"
            CAL56.style.display = "none"
        }, 6000);
        } else {
            painel.innerHTML = "sem eletricidade."
        }
        

    }

}

let inb1 = document.getElementById("inB1")
let sb1 = document.getElementById("sb1")

let inb2 = document.getElementById("inB2")
let sb2 = document.getElementById("sb2")

let inb3 = document.getElementById("inB3")
let sb3 = document.getElementById("sb3")

let aBP = document.getElementById("activeBP")

let turnBP = false
let TURNtrue = false
function activeBP() {
    if (turnBP === false && TURNtrue === true) {
        turnBP = true
        inb1.innerHTML = "inoperante"
        sb1.innerHTML = "conectando com BP1..."

        inb2.innerHTML = "inoperante"
        sb2.innerHTML = "conectando com BP2..."

        inb3.innerHTML = "inoperante"
        sb3.innerHTML = "conectando com BP3..."

        sb1.style.color = "yellow"
        sb2.style.color = "yellow"
        sb3.style.color = "yellow"

        setTimeout(() => {
            inb1.innerHTML = "operante"
            sb1.innerHTML = "descarregado"

            inb2.innerHTML = "operante"
            sb2.innerHTML = "descarregado"

            inb3.innerHTML = "operante"
            sb3.innerHTML = "descarregado"

            inb1.style.color = "limegreen"
            inb2.style.color = "limegreen"
            inb3.style.color = "limegreen"

            aBP.innerHTML = "desativar"
        }, 5000);
    } else {
        turnBP = false
        if (TURNtrue === true) {
            inb1.innerHTML = "..."
            sb1.innerHTML = "desconectando com BP1."

            inb2.innerHTML = "..."
            sb2.innerHTML = "desconectando com BP2."

            inb3.innerHTML = "..."
            sb3.innerHTML = "desconectando com BP3."

            sb1.style.color = "yellow"
            sb2.style.color = "yellow"
            sb3.style.color = "yellow"

            inb1.style.color = "red"
            inb2.style.color = "red"
            inb3.style.color = "red"
            setTimeout(() => {
                sb1.innerHTML = "BP1 desconectado"
                sb2.innerHTML = "BP2 desconectado"
                sb3.innerHTML = "BP3 desconectado"

                sb1.style.color = "red"
                sb2.style.color = "red"
                sb3.style.color = "red"
            }, 5000);
        } else {
            painel.innerHTML = "sistema eletrico desativado."
        }
        
        
    }
}

let Rsovet = document.getElementById("Rsovet")
let sovet = document.getElementById("sovet")
let sovet1 = document.getElementById("sovet1")
let sovet1old = document.getElementById("sovet11")
let sovet2 = document.getElementById("sovet2")
let sovet3 = document.getElementById("sovet3")

let inv = document.getElementById("auv")
let dev = document.getElementById("div")
let lev = document.getElementById("lev")

let cve = document.getElementById("cve")
let inc = document.getElementById("inc")
let dec = document.getElementById("dec")
let nivelVEL = document.getElementById("nivelVEL")

let NAVtrue = false
function newpainel() {
    if (cve.style.display === "none" && NAVtrue === true) {
        cve.style.display = "block"
        inc.style.display = "block"
        dec.style.display = "block"
        nivelVEL.style.display = "block"
        showINDE.style.display = "block"
        inINDE.style.display = "block"
        deINDE.style.display = "block"

        secs.style.display = "none"
        secp.style.display = "none"
        seci.style.display = "none"

        bateria1.style.display = "none"
        bateria2.style.display = "none"
        bateria3.style.display = "none"
        
        D1.style.display = "none"
        D2.style.display = "none"
        D3.style.display = "none"

        STATTYPER.style.display = "none"

        pullTURB1.style.display = "none"
        CAL12.style.display = "none"

        pullTURB2.style.display = "none"
        CAL34.style.display = "none"

        pullTURB3.style.display = "none"
        CAL56.style.display = "none"

        title.style.display = "none"
        pes.style.display = "none"
        hes.style.display = "none"
        coal.style.display = "none"

        AAB.style.display = "none"
        AAS.style.display = "none"
        AAQ.style.display = "none"
        showdeinesAA = true

        ZWEITEcanonen.style.display = "none"
        showZC = true
    } else {
        cve.style.display = "none"
        inc.style.display = "none"
        dec.style.display = "none"
        nivelVEL.style.display = "none"
        showINDE.style.display = "none"
        inINDE.style.display = "none"
        deINDE.style.display = "none"
        if (NAVtrue === false) {
            painel.innerHTML = "a energia está desativada."
        }
    }
}




const limitVEL = 2
const MINvel = -1
let actualVEL = 0
let independetVEL = 0
let velocimeterINDE = document.getElementById("inlev")
let showINDE = document.getElementById("indeVEL")
function increaseVEL() {
if ((actualVEL < limitVEL || actualVEL < 3 )&& (move1 === true || move2 === true || move3 ===true)) {
    independetVEL = independetVEL + 1
    let INDEvel = parseInt(velocimeterINDE.innerText)
    let newINDE = INDEvel + 1
    velocimeterINDE.innerText = newINDE
    

    if (actualVEL === -1) {
        actualVEL = actualVEL + 1
        let newLEV = parseInt(lev.innerText)
        let newerLEV = newLEV + 1
        lev.innerText = newerLEV
        setTimeout(() => {
            Rsovet.style.display = "none"
            sovet1.style.display = "block"
        }, 4000);
    }

    

    if((move1 === true || move2 === true || move3 === true) && independetVEL === 1){
        actualVEL = actualVEL + 1
        let newLEV = parseInt(lev.innerText)
        let newerLEV = newLEV + 1
        lev.innerText = newerLEV
        
        VEL1()
        function VEL1() {
            if (actualVEL === 1 && (move1 === true || move2 === true || move3 === true)) {
                
                setTimeout(() => {
                    sovet1.style.display = "none"
                    sovet2.style.display = "block"
                    sovet3.style.display = "none"
                    if (actualVEL === 1) {
                        vel11()
                    }
                }, 5000);
              function vel11() {
                  setTimeout(() => {
                    sovet1.style.display = "none"
                    sovet2.style.display = "block"
                    sovet3.style.display = "none"
                    if (actualVEL === 1 && (move1 === true || move2 === true || move3 === true)) {
                        vel11()
                    } else if (move1 === false && move2 === false && move3 === false) {
                        console.log("else ???")
                        setTimeout(() => {
                            sovet1.style.display = "block"
                            sovet2.style.display = "none"
                            sovet3.style.display = "none"
                        }, 5000);
                        setTimeout(() => {
                            sovet1old.style.display = "block"
                            sovet1.style.display = "none"
                            sovet2.style.display = "none"
                            sovet3.style.display = "none"
                        }, 8000);
                        setTimeout(() => {
                            sovet.style.display = "block"
                            sovet1old.style.display = "none"
                            sovet1.style.display = "none"
                            sovet2.style.display = "none"
                            sovet3.style.display = "none"
                        }, 11000);
                    }
                }, 10);    
                }
            }
        }
    } 


  if (actualVEL === 2 || independetVEL === 2) {
    velo2()
   function velo2() {
    if ((actualVEL === 2 || independetVEL === 2) && move1 === true && move2 === true && move3 === true) {
        actualVEL = actualVEL + 1
        let newLEV = parseInt(lev.innerText)
        let newerLEV = newLEV + 1
        lev.innerText = newerLEV
       if (actualVEL === 2  && move1 === true && move2 === true && move3 === true) {
        VEL2()
            function VEL2() {
        if(actualVEL === 2 && move1 === true && move2 === true && move3 === true) {
            setTimeout(() => {
                sovet2.style.display = "none"
                sovet3.style.display = "block"
                if (actualVEL === 2) {
                   vel22() 
                }
            }, 5000);
            function vel22() {
                if (actualVEL === 2) {
                    setTimeout(() => {
                        sovet.style.display = "none"
                        sovet1old.style.display = "none"
                        sovet1.style.display = "none"
                        sovet2.style.display = "none"
                        sovet3.style.display = "block"
                        vel22()
                    }, 10);
                    if (move1 === false && move2 === false && move3 === false) {
                        setTimeout(() => {
                            sovet1.style.display = "none"
                            sovet2.style.display = "block"
                            sovet3.style.display = "none"
                        }, 5000);
                        setTimeout(() => {
                            sovet1old.style.display = "none"
                            sovet1.style.display = "block"
                            sovet2.style.display = "none"
                            sovet3.style.display = "none"
                        }, 8000);
                        setTimeout(() => {
                            sovet.style.display = "none"
                            sovet1old.style.display = "block"
                            sovet1.style.display = "none"
                            sovet2.style.display = "none"
                            sovet3.style.display = "none"
                        }, 11000);
                        setTimeout(() => {
                            sovet.style.display = "block"
                            sovet1old.style.display = "none"
                            sovet1.style.display = "none"
                            sovet2.style.display = "none"
                            sovet3.style.display = "none"
                        }, 13000);
                        
                        
                    }
                    if (move1 === false || move2 === false || move3 === false && (actualVEL === 2)) {
                            actualVEL = actualVEL - 1
                            let newLEV = parseInt(lev.innerText)
                            let newerLEV = newLEV - 1
                            lev.innerText = newerLEV
                            independetVEL = independetVEL - 1
                            let INDEvel = parseInt(velocimeterINDE.innerText)
                            let newINDE = INDEvel - 1
                            velocimeterINDE.innerText = newINDE 
                            setTimeout(() => {
                                sovet1.style.display = "none"
                                sovet2.style.display = "block"
                                sovet3.style.display = "none"
                                if (actualVEL === 1) {
                                    conVEL22()
                                }
                            }, 5000);
                            function conVEL22() {
                                setTimeout(() => {
                                    sovet.style.display = "none"
                                    sovet1old.style.display = "none"
                                    sovet1.style.display = "none"
                                    sovet2.style.display = "block"
                                    sovet3.style.display = "none"
                                    if (move1 === false && move2 === false && move3 === false) {
                                        actualVEL = actualVEL - 1
                                        let newLEV = parseInt(lev.innerText)
                                        let newerLEV = newLEV - 1
                                        lev.innerText = newerLEV
                                        independetVEL = independetVEL - 1
                                        let INDEvel = parseInt(velocimeterINDE.innerText)
                                        let newINDE = INDEvel - 1
                                        velocimeterINDE.innerText = newINDE 
                                    setTimeout(() => {
                                        sovet1.style.display = "block"
                                        sovet2.style.display = "none"
                                        sovet3.style.display = "none"
                                    }, 5000);
                                    setTimeout(() => {
                                        sovet1old.style.display = "block"
                                        sovet1.style.display = "none"
                                        sovet2.style.display = "none"
                                        sovet3.style.display = "none"
                                    }, 8000);
                                    setTimeout(() => {
                                        sovet.style.display = "block"
                                        sovet1old.style.display = "none"
                                        sovet1.style.display = "none"
                                        sovet2.style.display = "none"
                                        sovet3.style.display = "none"
                                    }, 11000);   
                                    if (actualVEL === 1) {
                                        conVEL22()
                                        console.log("k")
                                    }
                             } }, 10);
                            }
                    }
                }
            }
        } else {
            console.log("else ??? 2")
            setTimeout(() => {
                sovet1.style.display = "none"
                sovet2.style.display = "block"
                sovet3.style.display = "none"
            }, 5000);
            setTimeout(() => {
                sovet1old.style.display = "none"
                sovet1.style.display = "block"
                sovet2.style.display = "none"
                sovet3.style.display = "none"
            }, 8000);
            setTimeout(() => {
                sovet.style.display = "none"
                sovet1old.style.display = "block"
                sovet1.style.display = "none"
                sovet2.style.display = "none"
                sovet3.style.display = "none"
            }, 11000);
            setTimeout(() => {
                sovet.style.display = "block"
                sovet1old.style.display = "none"
                sovet1.style.display = "none"
                sovet2.style.display = "none"
                sovet3.style.display = "none"
            }, 13000);
        }
            }
       }
    } else {
        painel.innerHTML = "não pode aumentar a potencia, uma ou mais turbinas não estão funcionando."
    }
  } 
 }
} else {
    if (move1 === false && move2 === false && move3 === false) {
        painel.innerHTML = "todas as turbinas estão desativadas, ative ao menos uma para o navio começar a navegar."
    } else {
        painel.innerHTML = "limite de velocidade atingida."
    }
    
}
}
function decreaseVEL() {
    independetVEL = independetVEL - 1
    let INDEvel = parseInt(velocimeterINDE.innerText)
    let newINDE = INDEvel - 1
    velocimeterINDE.innerText = newINDE
    if (actualVEL > MINvel && (move2 === true || actualVEL > 0)) {
        actualVEL = actualVEL - 1
        let newLEV = parseInt(lev.innerText)
        let newerLEV = newLEV - 1
        lev.innerText = newerLEV
        if (actualVEL === 1) {
            setTimeout(() => {
                sovet1.style.display = "none"
                sovet2.style.display = "block"
                sovet3.style.display = "none"
            }, 5000);
        }
        if (actualVEL === 0) {
            setTimeout(() => {
                sovet1.style.display = "block"
                sovet2.style.display = "none"
            }, 5000);
        }
        if (actualVEL === -1 && move2 === true) {
            if (move2 === true && independetVEL === -1) {
                
                setTimeout(() => {
                    Rsovet.style.display = "block"
                    sovet.style.display = "none"
                    sovet1old.style.display = "none"
                    sovet1.style.display = "none"
                    sovet2.style.display = "none"
                    sovet3.style.display = "none"
                    if (independetVEL === -1) {
                        Rvel()
                    }
                }, 5000);

        function Rvel() {
            if (move2 === true && independetVEL === -1) {
                setTimeout(() => {
                    
                    sovet1old.style.display = "none"
                    sovet1.style.display = "none"
                    sovet2.style.display = "none"
                    sovet3.style.display = "none"
                    Rvel()
                }, 10);
            } else {
                if (move2 === false) {
                    painel.innerHTML = "turbina central desativada."
                    setTimeout(() => {
                        Rsovet.style.display = "none"
                        sovet1.style.display = "block"
                    }, 4000);
            
                }
            }
        } 
     }
        } else {
            painel.innerHTML = "turbina central inativa"
        }
    } else {
        if (actualVEL === -1) {
            painel.innerHTML = "velocidade minima atingida."
        }
        if (move2 === false) {
            painel.innerHTML = "a turbina central está desativada, a turbina central é responsavel por dá ré no navio, ative-o para dá ré."
        }
    }
}
let inINDE = document.getElementById("inINDE")
let deINDE = document.getElementById("deINDE")
function increaseINDE() {
    independetVEL = independetVEL + 1
    let INDEvel = parseInt(velocimeterINDE.innerText)
    let newINDE = INDEvel + 1
    velocimeterINDE.innerText = newINDE
}
function decreaseINDE() {
    independetVEL = independetVEL - 1
    let INDEvel = parseInt(velocimeterINDE.innerText)
    let newINDE = INDEvel - 1
    velocimeterINDE.innerText = newINDE
}


let PE = document.getElementById("PE")
let HE = document.getElementById("HE")
let KGcoal = document.getElementById("kgCOAL")
let Ckg = 17496
let MODULrepair = document.getElementById("meinREPAIR")
let MODULfeuer = document.getElementById("meinFEUER")
let MODULelectric = document.getElementById("meinENERGY")

let title = document.getElementById("sTITLE")
let pes = document.getElementById("mPE")
let hes = document.getElementById("mHE")
let coal = document.getElementById("COAL")
let Vrepair = document.getElementById("repair")
let Vfeuer = document.getElementById("feuer")
let Velectic = document.getElementById("electric")
function supply() {
    if (title.style.display === "none") {
        title.style.display = "block"
        pes.style.display = "block"
        hes.style.display = "block"
        coal.style.display = "block"
        Vrepair.style.display = "block"
        Vfeuer.style.display = "block"
        Velectic.style.display = "block"

        secs.style.display = "none"
        secp.style.display = "none"
        seci.style.display = "none"

        bateria1.style.display = "none"
        bateria2.style.display = "none"
        bateria3.style.display = "none"
        
        D1.style.display = "none"
        D2.style.display = "none"
        D3.style.display = "none"

        STATTYPER.style.display = "none"

        pullTURB1.style.display = "none"
        CAL12.style.display = "none"

        pullTURB2.style.display = "none"
        CAL34.style.display = "none"

        pullTURB3.style.display = "none"
        CAL56.style.display = "none"

        cve.style.display = "none"
        inc.style.display = "none"
        dec.style.display = "none"
        nivelVEL.style.display = "none"
        showINDE.style.display = "none"
        inINDE.style.display = "none"
        deINDE.style.display = "none"

        AAB.style.display = "none"
        AAS.style.display = "none"
        AAQ.style.display = "none"
        showdeinesAA = true

        ZWEITEcanonen.style.display = "none"
        showZC = true
    } else {
        title.style.display = "none"
        pes.style.display = "none"
        hes.style.display = "none"
        coal.style.display = "none"
        Vrepair.style.display = "none"
        Vfeuer.style.display = "none"
        Velectic.style.display = "none"
    }
}







let secs = document.getElementById("SECS");
let secp = document.getElementById("SECP");
let seci = document.getElementById("SECI");
function SE() {
    if (secs.style.display === "none") {
        secs.style.display = "block"
        secp.style.display = "block"
        seci.style.display = "block"

        pullTURB1.style.display = "none"
        CAL12.style.display = "none"

        pullTURB2.style.display = "none"
        CAL34.style.display = "none"

        pullTURB3.style.display = "none"
        CAL56.style.display = "none"

        bateria1.style.display = "none"
        bateria2.style.display = "none"
        bateria3.style.display = "none"

        title.style.display = "none"
        pes.style.display = "none"
        hes.style.display = "none"
        coal.style.display = "none"

        D1.style.display = "none"
        D2.style.display = "none"
        D3.style.display = "none"

        STATTYPER.style.display = "none"

        cve.style.display = "none"
        inc.style.display = "none"
        dec.style.display = "none"
        nivelVEL.style.display = "none"
        showINDE.style.display = "none"
        inINDE.style.display = "none"
        deINDE.style.display = "none"

        AAB.style.display = "none"
        AAS.style.display = "none"
        AAQ.style.display = "none"
        showdeinesAA = true

        ZWEITEcanonen.style.display = "none"
        showZC = true
    } else {
        secs.style.display = "none"
        secp.style.display = "none"
        seci.style.display = "none"
    }
}
function SE1() {
    
}
function SE2() {
    
}
function SE3() {
    
}




let bateria1 = document.getElementById("BP1")
let statusB1 = document.getElementById("SBP1")
let D1 = document.getElementById("dBP1")
let Dbp1 = document.getElementById("D1")

let bateria2 = document.getElementById("BP2")
let statusB2 = document.getElementById("SBP2")
let D2 = document.getElementById("dBP2")
let Dbp2 = document.getElementById("D2")

let bateria3 = document.getElementById("BP3")
let statusB3 = document.getElementById("SBP3")
let D3 = document.getElementById("dBP3")
let Dbp3 = document.getElementById("D3")

let STATTYPER = document.getElementById("TYPER")

let BPtrue = false
function BP() {
    
    if (bateria1.style.display === "none" && BPtrue === true) {
        bateria1.style.display = "block"
        bateria2.style.display = "block"
        bateria3.style.display = "block"

        D1.style.display = "block"
        D2.style.display = "block"
        D3.style.display = "block"

        STATTYPER.style.display = "block"

        secs.style.display = "none"
        secp.style.display = "none"
        seci.style.display = "none"

        pullTURB1.style.display = "none"
        CAL12.style.display = "none"

        pullTURB2.style.display = "none"
        CAL34.style.display = "none"

        pullTURB3.style.display = "none"
        CAL56.style.display = "none"

        title.style.display = "none"
        pes.style.display = "none"
        hes.style.display = "none"
        coal.style.display = "none"

        cve.style.display = "none"
        inc.style.display = "none"
        dec.style.display = "none"
        nivelVEL.style.display = "none"
        showINDE.style.display = "none"
        inINDE.style.display = "none"
        deINDE.style.display = "none"

        AAB.style.display = "none"
        AAS.style.display = "none"
        AAQ.style.display = "none"
        showdeinesAA = true

        Velectic.style.display = "none"
        Vrepair.style.display = "none"
        Vfeuer.style.display = "none"

        ZWEITEcanonen.style.display = "none"
        showZC = true
    } else {
        bateria1.style.display = "none"
        bateria2.style.display = "none"
        bateria3.style.display = "none"
        
        D1.style.display = "none"
        D2.style.display = "none"
        D3.style.display = "none"

        STATTYPER.style.display = "none"

        if (aBP.innerHTML === "ativar") {
            painel.innerHTML = "o sistema das baterias estão desativadas, ative o sistema de baterias para ter acesso ao painel de controle das baterias."
        }
    }
}

let isPE = true
let PEa = 45
let HEa = 45
let loaded1 = false;let mitPE = false
let loaded2 = false;let mitPE1 = false
let loaded3 = false;let mitPE2 = false




let shotanima1 = document.getElementById("shot1")
function rB1() {
    const RELOAD = document.getElementById("playAU2")
    const newRELOAD = document.getElementById("playAU3")
    if (PEa >= 3 && isPE === true && loaded1 === false) {
        mitPE = true
        PEa = PEa - 3
        let newPE = parseInt(PE.innerText)
        let delPE = newPE - 3
        PE.innerText = delPE
        sb1.innerHTML = "recarregando..."
        newRELOAD.play()
        setTimeout(() => {
            RELOAD.play()
        }, 4400);
        setTimeout(() => {
            sb1.style.color = "lime"
            sb1.innerHTML = "carregado(PE)"
            loaded1 = true
        }, 7000);
    } else if (HEa >= 3 && isPE === false && loaded1 === false) {
        mitPE = false
        HEa = HEa - 3
        let newHE = parseInt(HE.innerText)
        let delHE = newHE - 3
        HE.innerText = delHE
        sb1.innerHTML = "recarregando..."
        newRELOAD.play()
        setTimeout(() => {
            RELOAD.play()
        }, 4400);
        setTimeout(() => {
            sb1.style.color = "lime"
            sb1.innerHTML = "carregado(HE)"
            loaded1 = true
        }, 7000);
    } else {
        if (PEa <= 3 && isPE === true) {
            painel.innerHTML = "não há mais munição PE."
        } else {
            painel.innerHTML = "não há mais munição HE."
        }
        if (loaded1 === true) {
            painel.innerHTML = "os canhões já estão carregados."
        }
    }
}
function dB1() {
    if (loaded1 === true) {
        const sovetSHOOT = document.getElementById("playAU1")
        const playHEshot = document.getElementById("playHEshot")
        if (loaded1 === true) {
            if (mitPE) {
                sovetSHOOT.play()
            } else {
                playHEshot.play()
            }
            shotanima1.style.display = "block"
            setInterval(() => {
                shotanima1.style.display = "none"
            }, 130);
        }
        loaded1 = false
        sb1.innerHTML = "descarregado"
        sb1.style.color = "orange"
        feuer1()
    } else {
        painel.innerHTML = "os canhões não estão carregados."
        
    }    
}


let shotanima = document.getElementById("shot")
function rB2() {
    const RELOAD1 = document.getElementById("playAU2.2")
    const newRELOAD1 = document.getElementById("playAU3.2")
    if (PEa >= 3 && isPE === true && loaded2 === false) {
        mitPE1 = true
        PEa = PEa - 3
        let newPE = parseInt(PE.innerText)
        let delPE = newPE - 3
        PE.innerText = delPE
        sb2.innerHTML = "recarregando..."
        newRELOAD1.play()
        setTimeout(() => {
            RELOAD1.play()
        }, 4400);
        setTimeout(() => {
            sb2.style.color = "lime"
            sb2.innerHTML = "carregado(PE)"
            loaded2 = true
        }, 7000);
    } else if (HEa >= 3 && isPE === false && loaded2 === false) {
        mitPE1 = false
        HEa = HEa - 3
        let newHE = parseInt(HE.innerText)
        let delHE = newHE - 3
        HE.innerText = delHE
        sb2.innerHTML = "recarregando..."
        newRELOAD1.play()
        setTimeout(() => {
            RELOAD1.play()
        }, 4400);
        setTimeout(() => {
            sb2.style.color = "lime"
            sb2.innerHTML = "carregado(HE)"
            loaded2 = true
        }, 7000);
    } else {
        if (PEa <= 3 && isPE === true) {
            painel.innerHTML = "não há mais munição PE."
        } else {
            painel.innerHTML = "não há mais munição HE."
        }
        if (loaded2 === true) {
            painel.innerHTML = "os canhões já estão carregados."
        }
    }
}
function dB2() {
    if (loaded2 === true) {
        const sovetSHOOT1 = document.getElementById("playAU1.2")
        const playHEshot1 = document.getElementById("playHEshot1")
        if (loaded2 === true) {
            if (mitPE1) {
                sovetSHOOT1.play()
            } else {
                playHEshot1.play()
            }
            shotanima.style.display = "block"
            setInterval(() => {
                shotanima.style.display = "none"
            }, 130);
        }
        loaded2 = false
        sb2.innerHTML = "descarregado"
        sb2.style.color = "orange"
        feuer2()
    } else {
        painel.innerHTML = "os canhões não estão carregados."
        
    }    
}

let shotanima2 = document.getElementById("shot2")
function rB3() {
    const RELOAD2 = document.getElementById("playAU2.3")
    const newRELOAD2 = document.getElementById("playAU3.3")
    if (PEa >= 3 && isPE === true && loaded3 === false) {
        mitPE2 = true
        PEa = PEa - 3
        let newPE = parseInt(PE.innerText)
        let delPE = newPE - 3
        PE.innerText = delPE
        sb3.innerHTML = "recarregando..."
        newRELOAD2.play()
        setTimeout(() => {
            RELOAD2.play()
        }, 4400);
        setTimeout(() => {
            sb3.style.color = "lime"
            sb3.innerHTML = "carregado(PE)"
            loaded3 = true
        }, 7000);
    } else if (HEa >= 3 && isPE === false && loaded3 === false) {
        mitPE2 = false
        HEa = HEa - 3
        let newHE = parseInt(HE.innerText)
        let delHE = newHE - 3
        HE.innerText = delHE
        sb3.innerHTML = "recarregando..."
        newRELOAD2.play()
        setTimeout(() => {
            RELOAD2.play()
        }, 4400);
        setTimeout(() => {
            sb3.style.color = "lime"
            sb3.innerHTML = "carregado(HE)"
            loaded3 = true
        }, 7000);
    } else {
        
        if (PEa <= 3 && isPE === true) {
            painel.innerHTML = "não há mais munição PE."
        } else {
            painel.innerHTML = "não há mais munição HE."
        }
        if (loaded3 === true) {
            painel.innerHTML = "os canhões já estão carregados."
        }
    }
}
function dB3() {
    if (loaded3 === true) {
        const sovetSHOOT2 = document.getElementById("playAU1.3")
        const playHEshot2 = document.getElementById("playHEshot2")
        if (loaded3 === true) {
            if (mitPE2) {
                sovetSHOOT2.play()
            } else {
                playHEshot2.play()
            }
            shotanima2.style.display = "block"
            setInterval(() => {
                shotanima2.style.display = "none"
                feuer3
            }, 130);
        }
        loaded3 = false
        sb3.innerHTML = "descarregado"
        sb3.style.color = "orange"
    } else {
        painel.innerHTML = "os canhões não estão carregados."
        
    }    
}

function tradeCATRI() {
    let typerca = document.getElementById("typerCA")
    const playTRADEcatri = document.getElementById("playTRADEcatri");playTRADEcatri.play()
    if (isPE === true) {
        isPE = false
        typerca.innerHTML = "HE"
    } else {
        isPE = true
        typerca.innerHTML = "PE"
    }
}

let ZWEITEcanonen = document.getElementById("ZWEITEcanonen")
let showZC = true

let allesPANZER = document.getElementById("allesPANZER")
let zielen = document.getElementById("zielen")
let shells = document.getElementById("shells")
let AUTOaim = document.getElementById("AUTOaim")
let AUTOon = document.getElementById("AUTOon")

function BS() {
    if (showZC) {
        ZWEITEcanonen.style.display = "block"
        showZC = false

        secs.style.display = "none"
        secp.style.display = "none"
        seci.style.display = "none"

        bateria1.style.display = "none"
        bateria2.style.display = "none"
        bateria3.style.display = "none"

        D1.style.display = "none"
        D2.style.display = "none"
        D3.style.display = "none"

        STATTYPER.style.display = "none"

        title.style.display = "none"
        pes.style.display = "none"
        hes.style.display = "none"
        coal.style.display = "none"

        cve.style.display = "none"
        inc.style.display = "none"
        dec.style.display = "none"
        nivelVEL.style.display = "none"
        showINDE.style.display = "none"
        inINDE.style.display = "none"
        deINDE.style.display = "none"

        title.style.display = "none"
        pes.style.display = "none"
        hes.style.display = "none"
        coal.style.display = "none"
        Vrepair.style.display = "none"
        Vfeuer.style.display = "none"
        Velectic.style.display = "none"

        pullTURB1.style.display = "none"
        CAL12.style.display = "none"

        pullTURB2.style.display = "none"
        CAL34.style.display = "none"

        pullTURB3.style.display = "none"
        CAL56.style.display = "none"

        AAB.style.display = "none"
        AAS.style.display = "none"
        AAQ.style.display = "none"
        showdeinesAA = true
    } else {
        ZWEITEcanonen.style.display = "none"
        showZC = true
    }
}

let pullTURB1 = document.getElementById("turb1");
let CAL12 = document.getElementById("cal12");

let pullTURB2 = document.getElementById("turb2");
let CAL34 = document.getElementById("cal34");

let pullTURB3 = document.getElementById("turb3");
let CAL56 = document.getElementById("cal56");
function MeP() {
    if (pullTURB1.style.display === "none") {
        pullTURB1.style.display = "block"
        CAL12.style.display = "block"

        pullTURB2.style.display = "block"
        CAL34.style.display = "block"

        pullTURB3.style.display = "block"
        CAL56.style.display = "block"

        secs.style.display = "none"
        secp.style.display = "none"
        seci.style.display = "none"

        bateria1.style.display = "none"
        bateria2.style.display = "none"
        bateria3.style.display = "none"

        D1.style.display = "none"
        D2.style.display = "none"
        D3.style.display = "none"

        STATTYPER.style.display = "none"

        title.style.display = "none"
        pes.style.display = "none"
        hes.style.display = "none"
        coal.style.display = "none"

        cve.style.display = "none"
        inc.style.display = "none"
        dec.style.display = "none"
        nivelVEL.style.display = "none"
        showINDE.style.display = "none"
        inINDE.style.display = "none"
        deINDE.style.display = "none"

        AAB.style.display = "none"
        AAS.style.display = "none"
        AAQ.style.display = "none"

        showdeinesAA = true

        ZWEITEcanonen.style.display = "none"
        showZC = true
    } else {
        pullTURB1.style.display = "none"
        CAL12.style.display = "none"

        pullTURB2.style.display = "none"
        CAL34.style.display = "none"

        pullTURB3.style.display = "none"
        CAL56.style.display = "none"

        if (aTURon === false) {
            painel.innerHTML = "as turbinas estão desativadas, ative as turbinas para acessar o painel de controle das turbinas e caldeiras."
        }
    }
}

let on1 = false
let move1 = false
function turbina1() {
    let change = parseInt(c12.innerText)
    on1 = !on1
    let turbbon = document.getElementById("turbbb")
  if (change >= 48 &&  on1 === true) {
    turbb.innerHTML = "ativando..."
    turbbon.innerHTML = "desligar"
    setTimeout(() => {
        move1 = true
        turb1()
        function turb1() {
            let oldchange = parseInt(c12.innerHTML)
         if (oldchange >= 48 && on1 === true) {
            turbb.innerHTML = "funcionando"
            turbb.style.color = "lime"

            if (sovet.style.display === "block" && move1 === true) {
                setTimeout(() => {
                    sovet.style.display = "none"
                    sovet1old.style.display = "block"
                    setTimeout(() => {
                        sovet1old.style.display = "none"
                        sovet1.style.display = "block"
                    }, 5000);
                }, 5000);
                
            }
                
            let newchange = oldchange - 8
            c12.innerText = newchange
            setTimeout(() => {
                turb1()
            }, 1000);
         } else {
            move1 = false
            if (oldchange < 48) {
                painel.innerHTML = "turbina 1 desativada: sem combustivel."
                turbb.innerHTML = "sem energia"
                turbb.style.color = "yellow"
                turbbon.innerHTML = "ligar"
                if (oldchange  < 48 && move1 === false && move2 === false && move3 === false) {
                    
                    
                } else {
                    
                }
            }
         }
        }
    }, 4000);
 } else {
    if (change < 48) {
        painel.innerHTML = "caldeira 1 e caldeira 2 sem combustivel, reabasteça as caldeiras 1 e 2 para ativa a turbina BB."
    }
    if (turbb.innerHTML === "funcionando") {
       turbb.innerHTML = "desativando..."
       turbb.style.color = "yellow"
       
       setTimeout(() => {
        turbbon.innerHTML = "ligar"
        turbb.innerHTML = "sem energia"
    }, 6000);
    }
 }  
    
}
function caldeira12() {
    if (Ckg >= 2916 && KGcoal ) {
        painel.innerHTML = "reabastecendo..."

        let cal12coal = parseInt(KGcoal.innerText)
        let cal12C = cal12coal - 2916
        KGcoal.innerText = cal12C

        Ckg = Ckg - 2916

        const coalR = document.getElementById("playAUR1")
        coalR.play()
        setTimeout(() => {
            c12.innerHTML = "2916"
            painel.innerHTML = "caldeira 12 abastecida"

        }, 17000);
    } else {
        painel.innerHTML = "carvão insuficiente para abastecer a caldeira."
    }
}




let on2 = false
let move2 = false
function turbina2() {
    let change = parseInt(c34.innerText)
    on2 = !on2
    let turbcon = document.getElementById("turbc")
  if (change >= 48 &&  on2 === true) {
    turc.innerHTML = "ativando..."
    turbcon.innerHTML = "desligar"
    setTimeout(() => {
        move2 = true
        turb2()
        function turb2() {
            let oldchange = parseInt(c34.innerHTML)
         if (oldchange >= 48 && on2 === true) {
            turc.innerHTML = "funcionando"
            turc.style.color = "lime"
            
            let newchange = oldchange - 8
            c34.innerText = newchange
            setTimeout(() => {
                turb2()
            }, 1000);

            if (sovet.style.display === "block" && move2 === true) {
                setTimeout(() => {
                    sovet.style.display = "none"
                    sovet1old.style.display = "block"
                    setTimeout(() => {
                        sovet1old.style.display = "none"
                        sovet1.style.display = "block"
                    }, 5000);
                }, 5000);
                
            }
         } else {
            if (oldchange < 48) {
                painel.innerHTML = "turbina 2 desativada: sem combustivel."
                turc.innerHTML = "sem energia"
                turc.style.color = "yellow"
                turbcon.innerHTML = "ligar"
                move2 = false
            }
         }
        }
    }, 4000);
 } else {
    if (change < 48) {
        painel.innerHTML = "caldeira 3 e caldeira 4 sem combustivel, reabasteça as caldeiras 3 e 4 para ativa a turbina central."
    }
    if (turc.innerHTML === "funcionando") {
       turc.innerHTML = "desativando..."
       turc.style.color = "yellow"
       
       setTimeout(() => {
        turbcon.innerHTML = "ligar"
        turc.innerHTML = "sem energia"
    }, 6000);
    }
 }  
    
}
function caldeira34() {
    if (Ckg >= 2916 && KGcoal ) {
        painel.innerHTML = "reabastecendo..."

        let cal34coal = parseInt(KGcoal.innerText)
        let cal34C = cal34coal - 2916
        KGcoal.innerText = cal34C

        Ckg = Ckg - 2916

        const coalR2 = document.getElementById("playAUR2")
        coalR2.play()
        setTimeout(() => {
            c34.innerHTML = "2916"
            painel.innerHTML = "caldeira 34 abastecida."

        }, 17000);
    } else {
        painel.innerHTML = "carvão insuficiente para abastecer a caldeira."
    }
}


let on3 = false
let move3 = false
function turbina3() {
    let change = parseInt(c56.innerText)
    on3 = !on3
    let turebon = document.getElementById("turbeb")
  if (change >= 48 && on3 === true) {
    tureb.innerHTML = "ativando..."
    turebon.innerHTML = "desligar"
    setTimeout(() => {
        move3 = true
        turb3()
        function turb3() {
            let oldchange = parseInt(c56.innerHTML)
         if (oldchange >= 48 && on3 === true) {
            tureb.innerHTML = "funcionando"
            tureb.style.color = "lime"
            
            let newchange = oldchange - 8
            c56.innerText = newchange
            setTimeout(() => {
                turb3()
            }, 1000);

            if (sovet.style.display === "block" && move3 === true) {
                setTimeout(() => {
                    sovet.style.display = "none"
                    sovet1old.style.display = "block"
                    setTimeout(() => {
                        sovet1old.style.display = "none"
                        sovet1.style.display = "block"
                    }, 5000);
                }, 5000);
                
            }
         } else {
            if (oldchange < 48) {
                move3 = false
                painel.innerHTML = "turbina 3 desativada: sem combustivel."
                tureb.innerHTML = "sem energia"
                tureb.style.color = "yellow"
                turebon.innerHTML = "ligar"
            }
         }
        }
    }, 4000);
 } else {
    if (change < 48) {
        painel.innerHTML = "caldeira 5 e caldeira 6 sem combustivel, reabasteça as caldeiras 5 e 6 para ativa a turbina EB."
    }
    if (tureb.innerHTML === "funcionando") {
       tureb.innerHTML = "desativando..."
       tureb.style.color = "yellow"
       
       setTimeout(() => {
        turebon.innerHTML = "ligar"
        tureb.innerHTML = "sem energia"
    }, 6000);
    }
 }  
    
}
function caldeira56() {
    if (Ckg >= 2916 && KGcoal ) {
        painel.innerHTML = "reabastecendo..."

        let cal56coal = parseInt(KGcoal.innerText)
        let cal56C = cal56coal - 2916
        KGcoal.innerText = cal56C

        Ckg = Ckg - 2916

        const coalR3 = document.getElementById("playAUR3")
        coalR3.play()
        setTimeout(() => {
            c56.innerHTML = "2916"
            painel.innerHTML = "caldeira 56 abastecida."
        }, 17000);
    } else {
        painel.innerHTML = "carvão insuficiente para abastecer a caldeira."
    }
}


let Taa = document.getElementById("tAA")
let stataa = document.getElementById("statAA")
let Qaa = document.getElementById("qAA")
let Jaa = document.getElementById("jAA")

let AAB = document.getElementById("AAb")
let AAS = document.getElementById("AAs")
let AAQ = document.getElementById("AAq")

let showdeinesAA = true
let ableAA = false
function AA() {
    if (showdeinesAA && ableAA) {
        showdeinesAA = false
        AAB.style.display = "block"
        AAS.style.display = "block"
        AAQ.style.display = "block"

        secs.style.display = "none"
        secp.style.display = "none"
        seci.style.display = "none"

        bateria1.style.display = "none"
        bateria2.style.display = "none"
        bateria3.style.display = "none"

        D1.style.display = "none"
        D2.style.display = "none"
        D3.style.display = "none"

        STATTYPER.style.display = "none"

        title.style.display = "none"
        pes.style.display = "none"
        hes.style.display = "none"
        coal.style.display = "none"

        cve.style.display = "none"
        inc.style.display = "none"
        dec.style.display = "none"
        nivelVEL.style.display = "none"
        showINDE.style.display = "none"
        inINDE.style.display = "none"
        deINDE.style.display = "none"

        title.style.display = "none"
        pes.style.display = "none"
        hes.style.display = "none"
        coal.style.display = "none"
        Vrepair.style.display = "none"
        Vfeuer.style.display = "none"
        Velectic.style.display = "none"

        pullTURB1.style.display = "none"
        CAL12.style.display = "none"

        pullTURB2.style.display = "none"
        CAL34.style.display = "none"

        pullTURB3.style.display = "none"
        CAL56.style.display = "none"

        ZWEITEcanonen.style.display = "none"
        showZC = true
    } else {
        AAB.style.display = "none"
        AAS.style.display = "none"
        AAQ.style.display = "none"
        showdeinesAA = true
    }
}
let activeAA = document.getElementById("activeAA")

let AAactiveV = true
let AAammo = 1100
let AAammoS = 0
function AAactive() {
    let AAquant = document.getElementById("AAquant")
    let AAQnummer = undefined
    function RESTARTaaq() {
        AAQnummer = setInterval(() => {AAquant.innerText = AAammo;Qaa.innerText = AAammoC;Jaa.innerText = AAammoS;if (AAammoC <= 0) {stataa.innerHTML = "descarregado";stataa.style.color = "orange"} else {stataa.innerHTML = "carregado";stataa.style.color = "limegreen"}}, 50);
    }
    if (AAactiveV) {
        AAactiveV = false

        Taa.innerHTML = "ativando"
        Taa.style.color = "yellow"

        stataa.innerHTML = "conectando"
        stataa.style.color = "yellow"

        Qaa.innerHTML = "conectando"
        Qaa.style.color = "yellow"

        Jaa.innerHTML = "conectando"
        Jaa.style.color = "yellow"
        setTimeout(() => {
            RESTARTaaq()
            ableAA = true

            activeAA.innerHTML = "desativar"

            Taa.style.color = "limegreen"
            Taa.innerHTML = "operante"
            
            stataa.style.color = "orange"

            Qaa.innerText = AAammoC
            Qaa.style.color = "limegreen"

            Jaa.innerText = AAammoS
            Jaa.style.color = "limegreen"
        }, 5000);
    } else {
        clearInterval(AAQnummer)

        AAactiveV = true

        Taa.innerHTML = "desativando..."
        Taa.style.color = "yellow"

        stataa.innerHTML = "desconectando..."
        stataa.style.color = "yellow"

        Qaa.innerHTML = "desconectando..."
        Qaa.style.color = "yellow"
        setTimeout(() => {
            activeAA.innerHTML = "ativar"

            Taa.style.color = "red"
            Taa.innerHTML = "inoperante"

            
            stataa.innerHTML = "..."
            stataa.style.color = "red"

            Qaa.innerText = "..."
            Qaa.style.color = "red"

            Jaa.innerText = "..."
            Jaa.style.color = "red"

            ableAA = false
        }, 5000);
    }
}

//daqui em diante é o setor de comunicação
let FsuperiorC1 = document.getElementById("1°superiorC1")
let SsuperiorC1 = document.getElementById("2°superiorC1")

let FsuperiorB1 = document.getElementById("1°superiorB1")
let SsuperiorB1 = document.getElementById("2°superiorB1")
function comms() {
    let isAble = true
    if (FsuperiorC1.style.display === "flex" && isAble) {
        FsuperiorC1.style.display = "none"
        SsuperiorC1.style.display = "flex"

        FsuperiorB1.style.display = "none"
        SsuperiorB1.style.display = "flex"
    } else {
        FsuperiorC1.style.display = "flex"
        SsuperiorC1.style.display = "none"

        FsuperiorB1.style.display = "flex"
        SsuperiorB1.style.display = "none"

        
    } 
}

let sovetData = {
    name:"SRS Sovestky Soyuz",
    type: "encouraçado",
    country: "Rússia",  
}

let sovetmeta1 = document.getElementById("sovetD1")
let sovetmeta2 = document.getElementById("sovetD2")
let sovetmeta3 = document.getElementById("sovetD3")
let sovetmeta4 = document.getElementById("sovetD4")

let sovestkySTATUS = {
    HPs:5700,
    annomaly:"--",
    alert:"--",
}
setInterval(() => {sovetmeta1.innerText = sovestkySTATUS.HPs;sovetmeta2.innerText = sovestkySTATUS.annomaly;sovetmeta3.innerText = sovestkySTATUS.alert}, 1000);

let metaD5 = true
function STAT() {
    if (metaD5) {
        metaD5 = false
        INFO.style.display = "block"

        metaD3 = true
        local.style.display = "none"

        COMM.style.display = "none"
    
        showNUMB = false
        verNUMB.style.display = "none"
        butNUMB.style.display = "none"
        paraNUMB.style.display = "none"
        sameNUMB.style.display = "none"
        NSWE.style.display = "none"
        localNUMB.style.display = "none"
        showATKy = true
        showATK.style.display = "none"
    } else {
        metaD5 = true
        INFO.style.display = "none"
    }
}

let sindSCHIFFSRUMPFschaden = false
let SCHIFFSRUMPFschadenINTERVAL;
function NPMschiffsrumpfSCHADEN() {
    SCHIFFSRUMPFschadenINTERVAL = setInterval(() => {if (sindSCHIFFSRUMPFschaden) {sovetmeta2.style.color = "orange";sovetmeta2.innerHTML = "casco danificado";SCHIFFSRUMPFschadenINDEX()} else {sovetmeta2.style.color = "limegreen";sovetmeta2.innerHTML = "--";clearInterval(SCHIFFSRUMPFschadenINTERVAL)}}, 1000);
}

function SCHIFFSRUMPFschadenINDEX() {
    if (sindSCHIFFSRUMPFschaden) {
        sovestkySTATUS.HPs = sovestkySTATUS.HPs - 57
    } else {
        sindSCHIFFSRUMPFschaden = false
    }
}

function SCHIFFSRUMPFschadenWERKZEUG() {
    if (sindSCHIFFSRUMPFschaden && Qrepair > 0) {
        const playWERKZEUGsound = document.getElementById("playWERKZEUGEN");playWERKZEUGsound.play()
        const playRATCHETsound = document.getElementById("playRATCHET");playRATCHETsound.play()
        setTimeout(() => {const playHAMMERsound = document.getElementById("playHAMMER");playHAMMERsound.play()}, 5000);
        whatINFO.innerHTML = "raparando casco..."
        setTimeout(() => {
            sindSCHIFFSRUMPFschaden = false
            whatINFO.innerHTML = "remendado"
            Qrepair = Qrepair - 1
        }, 10000);
    } else {
        if (sindSCHIFFSRUMPFschaden) {
            whatINFO.innerHTML = "não há danos no casco..."
        } else {
            whatINFO.innerHTML = "não há ferramentas!"
        }
    }
}

setInterval(() => {MODULrepair.textContent = Qrepair, MODULfeuer.textContent = Qfeuer, MODULelectric.textContent = Qelectic}, 1000);
let Qrepair = 0
let Qfeuer = 0
let Qelectic = 0

let sindFEUER = false
let sindSCHADEN = false
let sindELECTRICheruterladen = true

let ALERTeletric; 
let herunterladenENERGY = setInterval(() => {if (Qelectic <= 0) {sindELECTRICheruterladen = false}}, 1000);

let annomalyELECTRIC; 

let EG = document.getElementById("EG")
let CVS = document.getElementById("CVS");let schadenCVS = false
let CVP = document.getElementById("CVP");let schadenCVP = false
let CVI = document.getElementById("CVI");let schadenCVI = false

function NPMelectric() {
    whatINFO.innerHTML = "instalando..."
    setTimeout(() => {
        if (Qelectic > 0) {
            sindELECTRICheruterladen = true
            whatINFO.innerHTML = "sistema de R. eletrico instalado"
        } else { 
            whatINFO.innerHTML = "não há kit de R. eletrico"
            RESTARTalertELECTRIC()
        }
    }, 5000);
}

function startREPAIRelectric() {
    if (sindELECTRICheruterladen) {
        whatINFO.innerHTML = "reparando sistema eletrico..."
        setTimeout(() => {
            sindELECTRICschaden = false
            whatINFO.innerHTML = "reparo concluido"
            schadenCVS = false
            schadenCVP = false
            schadenCVI = false
            Qelectic = Qelectic - 1
            if (Qelectic === 0) {
                RESTARTalertELECTRIC()
            }
        }, 7000);
    } else {
        whatINFO.innerHTML = "não há um kit de R. eletrico instalado...";RESTARTalertELECTRIC()
    }
}

let ALERTfeuer; 
let HATfeuer = document.getElementById("fire")
let HATfeuer1 = document.getElementById("fire1")
let HATfeuer2 = document.getElementById("fire2")

let SCHADENfeuer = 0

function SCHADENausFEUER() {
    if (SCHADENfeuer === 1) {
        sovestkySTATUS.HPs = sovestkySTATUS.HPs - 10
    } else if (SCHADENfeuer === 2) {
        sovestkySTATUS.HPs = sovestkySTATUS.HPs - 20
    } else {
        sovestkySTATUS.HPs = sovestkySTATUS.HPs - 30
    }
}

function startCOMBATfeuer() {
    if (Qfeuer > 0) {
        whatINFO.innerHTML = "combatendo incêndio..."
        setTimeout(() => {
            sindFEUER = false
            HATfeuer.style.display = "none"
            HATfeuer1.style.display = "none"
            HATfeuer2.style.display = "none"
            SCHADENfeuer = SCHADENfeuer - 3
            startenALERTfeuer = false
            whatINFO.innerHTML = "incêndio extinguido"
        }, 7000);
    } else {
        whatINFO.innerHTML = "não há extintores..."
    }
}

function RESTARTalertELECTRIC() {
    ALERTeletric= setInterval(() => {if (sindELECTRICheruterladen === false) {sovetmeta3.style.color = "red";sovetmeta3.innerHTML = "R. eletrico não instalado"} else {sovetmeta3.innerHTML = "--";sovetmeta3.style.color = "limegreen";clearInterval(ALERTeletric)}}, 1000);
}

let sindELECTRICschaden = false
function RESTARTannomalyELECTRIC() {
    annomalyELECTRIC = setInterval(() => {
        if (sindELECTRICschaden === true) {
            if (schadenCVS) {sovetmeta2.style.color = "orange";CVS.style.color = "orange";sovetmeta2.innerHTML = "C. Superior danificado";CVS.innerHTML = "destabilizado"} 
            if (schadenCVP) {sovetmeta2.style.color = "orange";CVP.style.color = "orange";sovetmeta2.innerHTML = "C. Principal danificado";CVP.innerHTML = "destabilizado"} 
            if (schadenCVI) {sovetmeta2.style.color = "orange";CVI.style.color = "orange";sovetmeta2.innerHTML = "C. Inferior danificado";CVI.innerHTML = "destabilizado"} 
        } else {sovetmeta2.style.color = "lime";CVS.style.color = "lime";CVP.style.color = "lime";CVI.style.color = "lime";sovetmeta2.innerHTML = "--";CVS.innerHTML = "estavel";CVP.innerHTML = "estavel";CVI.innerHTML = "estavel";clearInterval(annomalyELECTRIC)}
    }, 1000);
}

let startenALERTfeuer = false
function RESTARTalertFEUER() {
    ALERTfeuer= setInterval(() => {if (sindFEUER) {SCHADENausFEUER();sovetmeta3.style.color = "red";sovetmeta3.innerHTML = "Incêndio!!!"} else {sovetmeta3.style.color = "limegreen";sovetmeta3.innerHTML = "--";clearInterval(ALERTfeuer)}}, 1000);
}

let whatINFO = document.getElementById("whatINFO")
let getAIRDROP = true
function AIRDROPF1() {AIRDROPf();setTimeout(() => {Qrepair = Math.min(Qrepair + 1, 5); Qfeuer = Math.min(Qfeuer + 1, 5); Qelectic = Math.min(Qelectic + 1, 3)},  9000);}
function AIRDROPf() {
    whatCOMM.style.color = "limegreen"
    whatCOMM.innerHTML = "enviando suplimentos de manutenção..."
    const playFLUGcargo = document.getElementById("playCARGOruss");playFLUGcargo.play()
    setTimeout(() => {
    let RUSSairdrop = document.getElementById("RUSSairdrop")
    RUSSairdrop.classList.toggle("RUSSFLUGd")
    if (getAIRDROP) {
        RUSSairdrop.style.display = "block"
        setTimeout(() => {
            let airdrop = document.getElementById("AIRDROP")
            airdrop.classList.toggle("RUSSAIRDROP")
            airdrop.style.display = "block"
            setTimeout(() => {
                airdrop.classList.toggle("RUSSAIRDROP")
                airdrop.style.display = "none"
            }, 4000);
        }, 2400);
        setTimeout(() => {
            AIRDROPf()
        }, 1000);
        getAIRDROP = false
    } else {
        RUSSairdrop.style.display = "none"
        getAIRDROP = true
        whatCOMM.innerHTML = "encomenda recebida"
    }
    }, 2900);
}

let metaD1 = true
let INFO = document.getElementById("INFO")
function E1() {
    if (metaD1 === true) {
        metaD1 = false
        setTimeout(() => {painel.innerHTML = "nome do navio: " + sovetData.name}, 100);
        setTimeout(() => {painel.innerHTML = "categoria: " + sovetData.type}, 3000);
        setTimeout(() => {painel.innerHTML = "país de origem: " + sovetData.country}, 6000);
        setTimeout(() => {painel.innerHTML = "numero do casco: 501"}, 9000);
        setTimeout(() => {painel.innerHTML = "tripulação: 2,120 marinheiros"}, 12000);
        setTimeout(() => {painel.innerHTML = "tripulação: 180 oficiais"}, 15000);
        setTimeout(() => {painel.innerHTML = "proporção: 6 caldeiras a carvão"}, 18000);
        setTimeout(() => {painel.innerHTML = "proporção: 2 turbinas triplas de 4000CV e 1 turbina de baixa pressão de 1300CV"}, 21000);
        setTimeout(() => {painel.innerHTML = "artilharia: 3 torretas de canhões triplo calibre 380mm"}, 24000);
        setTimeout(() => {painel.innerHTML = "data de construção: 14/06/1941"}, 27000);
        setTimeout(() => {painel.innerHTML = "", metaD1 = true}, 30000);
    }
}

let metaD2 = true

let COMM = document.getElementById("COMM")
function E2() {
    if (metaD2 === true) {
        local.style.display = "none"

        metaD5 = true
        INFO.style.display = "none"

        metaD2 = false
        metaD3 = true
        metaD1 = true

        COMM.style.display = "block"

        showNUMB = false
        showATKy = true
        showATK.style.display = "none"
        verNUMB.style.display = "none"
        butNUMB.style.display = "none"
        paraNUMB.style.display = "none"
        sameNUMB.style.display = "none"
        NSWE.style.display = "none"
        localNUMB.style.display = "none"
        INFO.style.display = "none"
    } else {
        metaD2 = true   
        COMM.style.display = "none"
    }  
}

let selecCOMM = document.querySelector('#selecCOMM')
let choseCOMM = selecCOMM.value
let whatCOMM = document.getElementById("whatCOMM")

let reqSHIP = false
let reqUBOOT = false
function selectedCOMM() {choseCOMM = selecCOMM.value; selCOMM()}
function selCOMM() {
    if (choseCOMM === "LI") {
        whatCOMM.style.color = "limegreen"
        whatCOMM.innerHTML = "lendo..."
        const playMORSE2 = document.getElementById("playMORSE2");playMORSE2.play()
        setTimeout(() => {
            if (thrBOAT && noSHIP) {
                upSHIP()
                setTimeout(() => {noSHIP = false, noUBOOT = false}, 3000);
                reqSHIP = true
                let thereEnemy = [true, false];let thereINDEX = Math.floor(Math.random() * thereEnemy.length);let thereRIVAL = thereEnemy[thereINDEX];Nrival = thereRIVAL
                if (thereRIVAL) {
                    whatCOMM.style.color = "red"
                    whatCOMM.innerHTML = "embarcação inimiga detectada!!"
                } else {
                    whatCOMM.innerHTML = "embarcação neutra, sem risco de ameaça."
                }
            } else {
                if (noSHIP === false) {
                    whatCOMM.innerHTML = "leitura já realizada..."
                    setTimeout(() => {whatCOMM.innerHTML = "oque deseja agora?"}, 3000);
                } else {
                    whatCOMM.innerHTML = "não há nenhuma embacação para ler..."
                    setTimeout(() => {whatCOMM.innerHTML = "oque deseja agora?"}, 3000);
                }
                
            }
            
        }, 5000);
    }
    if (choseCOMM === "PI") {
        whatCOMM.style.color = "limegreen"
        whatCOMM.innerHTML = "pesquisando..."
        const playMORSE = document.getElementById("playMORSE");playMORSE.play()
        setTimeout(() => {
            let thereSHIPe = [true, false];let thereINDEX12 = Math.floor(Math.random() * thereSHIPe.length);let thereBOATe = thereSHIPe[thereINDEX12];
            if (thereBOATe === true && noSHIP === true) {
                whatCOMM.style.color = "yellow"
                whatCOMM.innerHTML = "embarcação detectado nas proximidades!"
                thrBOAT = true
            } else {
                if (Nrival || Urival) {
                    whatCOMM.style.color = "red"
                    whatCOMM.innerHTML = "há uma embarcação inimiga!"
                    setTimeout(() => {whatCOMM.innerHTML = "destrua o inimigo!"}, 3000);
                } else if (noSHIP === false) {
                    whatCOMM.innerHTML = "já foi detectado uma embarcação, deseja encontrar outra?"
                    yesSHIP.style.display = "block"
                    neinSHIP.style.display = "block"
                } else {
                    whatCOMM.innerHTML = "não há embarcações nas proximidades."
                    thrBOAT = false
                    setTimeout(() => {whatCOMM.innerHTML = "oque deseja agora?"}, 3000);
                }
                
            }
        }, 7000);
    }
    if (choseCOMM === "UB") {
        whatCOMM.style.color = "limegreen"
        whatCOMM.innerHTML = "procurando..."
        const playSONARgo = document.getElementById("playSONARgo");playSONARgo.play()
        const playSONARcome = document.getElementById("playSONARcome")
        setTimeout(() => {
            playSONARcome.play()
            let thereUBOOT1 = [true, false];let thereINDEX34 = Math.floor(Math.random() * thereUBOOT1.length);let thereUBOOT2 = thereUBOOT1[thereINDEX34];
            if (thereUBOOT2 && noUBOOT) {
                startTORPEDO()
                setTimeout(() => {noUBOOT = false,noSHIP = false}, 3000);
                reqUBOOT = true
                let thereUBOOT = [true, false];let thereINDEX = Math.floor(Math.random() * thereUBOOT.length);let thereRIVALuboot = thereUBOOT[thereINDEX];Urival = thereRIVALuboot
                if (thereRIVALuboot) {
                    whatCOMM.style.color = "red"
                    whatCOMM.innerHTML = "Submarino inimigo detectado!!"
                } else {
                    whatCOMM.innerHTML = "Submarino neutro, sem risco de ameaça."
                }
            } else {
                if (Urival || Nrival) {
                    whatCOMM.style.color = "red"
                    whatCOMM.innerHTML = "há um submarino inimigo!"
                    setTimeout(() => {whatCOMM.innerHTML = "destrua o inimigo!"}, 3000);
                }else if (noUBOOT === false) {
                    whatCOMM.innerHTML = "já foi detectado um submarino, deseja encontrar outro?"
                    dochUBOOT.style.display = "block"
                } else {
                    whatCOMM.innerHTML = "não há submarinos por perto..."
                    setTimeout(() => {whatCOMM.innerHTML = "oque deseja agora?"}, 3000);
                }
                
            }
        }, 7000);
    }
    if (choseCOMM === "AIRdropp") {
        AIRDROPF1()
    }
}
function yes() {noSHIP=true;noUBOOT=true;selCOMM();yesSHIP.style.display="none";neinSHIP.style.display="none";clearInterval(newUPDATEship);nameSHIP.innerHTML = "--";
typeSHIP.innerHTML = "--";country.innerHTML = "--";rivalSHIP.innerHTML = "--";hpSHIP.innerHTML = "--";distanceSHIP.innerHTML = "--";clearInterval(newUPDATEuboot)}
function nein() {noSHIP=false;yesSHIP.style.display="none";neinSHIP.style.display="none";whatCOMM.innerHTML="oque deseja agora?";}
let yesSHIP = document.getElementById("yesSHIP")
let neinSHIP = document.getElementById("neinSHIP")
let thrBOAT = false
let configSHIPS = {
    prefix:["KMS ", "RFS ", "FS ", "ROS ", "HMS ", "TCG ", "BNG ", "GS ", "UKS "],
    country:["Alemanha", "Russia", "França", "Romenia", "Inglaterra", "Turquia", "Bulgária", "Georgia", "Ucrânia"],
    isEnemy:["inimigo", "neutro"],
    typers:["Submarino", "Destroyer", "Fragata", "Cruseiro", "Encouraçado", "Porta aviões"],
    cannon:[true, false]
}
let enemyINDEX = Math.floor(Math.random() * configSHIPS.isEnemy.length);let enemy = configSHIPS.isEnemy[enemyINDEX];
let pref = Math.floor(Math.random() * configSHIPS.prefix.length);let pre = configSHIPS.prefix[pref];let istDESTROYERundFLUGZEUGTRAGER = false
let SHIPS = [
    {
        name:"Z20 Karl Galster",
        prefix:configSHIPS.prefix[0],
        country:configSHIPS.country[0],
        type:configSHIPS.typers[1],
        HP:1327,
        damage:97,
        reloadVEL:6000,
        HPls:1327,
        cannonn:configSHIPS.cannon[0],
        confirmTYPER:false
    },
    {
        name:"Yavuz",
        prefix:configSHIPS.prefix[5],
        country:configSHIPS.country[5],
        type:configSHIPS.typers[2],
        HP:2124,
        damage:179,
        reloadVEL:12000,
        HPls:2124,
        cannonn:configSHIPS.cannon[0],
        confirmTYPER:true
    },
    {
        name:"Oliver Hazard",
        prefix:configSHIPS.prefix[8],
        country:configSHIPS.country[8],
        type:configSHIPS.typers[2],
        HP:1987,
        damage:169,
        reloadVEL:13000,
        HPls:1987,
        cannonn:configSHIPS.cannon[0],
        confirmTYPER:true
    },
    {
        name:"Shershen",
        prefix:configSHIPS.prefix[6],
        country:configSHIPS.country[6],
        type:configSHIPS.typers[1],
        HP:1398,
        damage:103,
        reloadVEL:7000,
        HPls:1398,
        cannonn:configSHIPS.cannon[0],
        confirmTYPER:false
    },
    {
        name:"Turya",
        prefix:configSHIPS.prefix[7],
        country:configSHIPS.country[7],
        type:configSHIPS.typers[1],
        HP:1354,
        damage:91,
        reloadVEL:5000,
        HPls:1354,
        cannonn:configSHIPS.cannon[0],
        confirmTYPER:false
    },
    {
        name:"Eagle",
        prefix:configSHIPS.prefix[4],
        country:configSHIPS.country[4],
        type:configSHIPS.typers[5],
        HP:3190,
        HPls:3190,
        cannonn:configSHIPS.cannon[1],
        confirmTYPER:true

    },
    {
        name:"Iowa",
        prefix:"USS ",
        country:"EUA",
        type:configSHIPS.typers[4],
        HP:4975,
        damage:389,
        reloadVEL:17000,
        HPls:4975,
        cannonn:configSHIPS.cannon[0],
        confirmTYPER:false
    },
    {
        name:"HOOD",
        prefix:configSHIPS.prefix[4],
        country:configSHIPS.country[4],
        type:configSHIPS.typers[4],
        HP:4423,
        damage:375,
        reloadVEL:16000,
        HPls:4423,
        cannonn:configSHIPS.cannon[0],
        confirmTYPER:false
    },
]
let noSHIP = true;let y = SHIPS
function keineSHIP(){y.HP = Math.min(y.HP + 100000, y.HPls);locked = false;noSHIP=true;yesSHIP.style.display="none";neinSHIP.style.display="none";clearInterval(newUPDATEship);nameSHIP.innerHTML="--";
Nrival=false;typeSHIP.innerHTML="--";country.innerHTML="--";hpSHIP.innerHTML="--";
distanceSHIP.innerHTML="--";rivalSHIP.innerHTML="navio destruido";rivalSHIP.style.color="orange";setTimeout(() => {rivalSHIP.innerHTML="--";rivalSHIP.style.color="limegreen";}, 3000);clearInterval(stopDEINEN)}let stopDEINEN=undefined
function moveSHIP(){let moveBOAT=setInterval(()=>{if(y.HP<=0){thrBOAT=false;keineSHIP()};let vel12=Math.floor(Math.random()*1);let movehere1=-1;let movefar1=+1;let movehere2=-2;let movefar2=+2;let moveshere=[movehere1,movehere2];
let movesfar=[movefar1,movefar2];let goSHIP=Math.floor(Math.random()*10);if(goSHIP<7){newSHIPdistance=newSHIPdistance+movesfar[vel12];goSHIPresult=newSHIPdistance}else{newSHIPdistance=newSHIPdistance+moveshere[vel12];goSHIPresult=newSHIPdistance}
stopDEINEN=moveBOAT},1000);}function upSHIP(){let distSHIP=Math.floor(Math.random()*(200-10+1))+10;newSHIPdistance=distSHIP;moveSHIP();let x=Math.round(Math.random()*7);let uberSHIP=SHIPS[x];y=uberSHIP;if(y.confirmTYPER){
istDESTROYERundFLUGZEUGTRAGER=true}else{istDESTROYERundFLUGZEUGTRAGER=false};let updateSHIP=setInterval(()=>{if(reqSHIP){distanceSHIP.innerText=newSHIPdistance;hpSHIP.innerText=y.HP;if(noSHIP){nameSHIP.innerHTML=y.prefix+""+y.name;
country.innerHTML=y.country;typeSHIP.innerHTML=y.type;if(Nrival){rivalSHIP.innerHTML=configSHIPS.isEnemy[0];rivalSHIP.style.color="red"}else{rivalSHIP.innerHTML=configSHIPS.isEnemy[1];rivalSHIP.style.color="limegreen"}}}},1000);newUPDATEship=updateSHIP;
setTimeout(() => {SHIPattack()}, 3000);}let Nrival=undefined;let newUPDATEship=undefined;let newSHIPdistance=undefined;let actualDISTANCE=undefined;let goSHIPresult=undefined;function SHIPattack(){if(Nrival){if(y.cannonn===configSHIPS.cannon[0])
{let indexATTACK=Math.floor(Math.random()*3);let reloadT=y.reloadVEL;realoadTIME=reloadT;let distSHOT=undefined;if(newSHIPdistance<40){distSHOT=3000}else if(newSHIPdistance<80){distSHOT=6000}else{distSHOT=12000};newDISTshot=distSHOT;
if(indexATTACK===0){startATK()}if(indexATTACK===1){startATK1()}if(indexATTACK===2){startATK2()};setTimeout(()=>{if(thrBOAT){SHIPattack()}},realoadTIME)}else{STARTFLUGZEUGatk()}}}let realoadTIME = undefined;let newDISTshot = undefined;

let showenATK = true
function enATK() {
    let enemyAttack = document.getElementById("attackFrames")
    enemyAttack.classList.toggle("attackFramess")
    let explosionMICH = document.getElementById("explosionIch")
    if (showenATK) {
        enemyAttack.style.display = "block";
        showenATK = false
        setTimeout(() => {setTimeout(() => {explosionMICH.style.display = "none"}, 1000);explosionMICH.style.display = "block";const EXPLOSIONenemy = document.getElementById("playEX1");EXPLOSIONenemy.play();sovestkySTATUS.HPs = sovestkySTATUS.HPs - y.damage;
        let electricINDEX=Math.floor(Math.random()*100)
        if (electricINDEX < 10) {schadenCVP = true;RESTARTannomalyELECTRIC()} 
        let feuerINDEX = Math.floor(Math.random()*100)
        if (feuerINDEX < 10) {sindFEUER = true;sindELECTRICschaden = true;HATfeuer.style.display = "block";if (startenALERTfeuer === false) {RESTARTalertFEUER()};startenALERTfeuer = true;}
        }, 1000);
    } else {
        enemyAttack.style.display = "none"
        showenATK = true
    }
}
function startATK() {const playHIT1 = document.getElementById("playHIT1");playHIT1.play();setTimeout(() => {enATK();setTimeout(() => {enATK()}, 1000);}, newDISTshot);}

let showenATK1 = true
function enATK1() {
    let enemyAttack1 = document.getElementById("attackFrames1")
    enemyAttack1.classList.toggle("attackFramess1")
    let explosionMICH = document.getElementById("explosionIch1")
    if (showenATK1) {
        enemyAttack1.style.display = "block";
        showenATK1 = false
        setTimeout(() => {setTimeout(() => {explosionMICH.style.display = "none"}, 1000);explosionMICH.style.display = "block";const EXPLOSIONenemy = document.getElementById("playEX2");EXPLOSIONenemy.play();sovestkySTATUS.HPs = sovestkySTATUS.HPs - y.damage;
        let electricINDEX1=Math.floor(Math.random()*100)
        if (electricINDEX1 < 10) {schadenCVS = true;RESTARTannomalyELECTRIC()} 
        let feuerINDEX1 = Math.floor(Math.random()*100)
        if (feuerINDEX1 < 10) {sindFEUER = true;sindELECTRICschaden = true;HATfeuer1.style.display = "block";if (startenALERTfeuer === false) {RESTARTalertFEUER()};startenALERTfeuer = true;}
        }, 1000);
    } else {
        enemyAttack1.style.display = "none"
        showenATK1 = true
    }
}
function startATK1() {const playHIT1 = document.getElementById("playHIT2");playHIT1.play();setTimeout(() => {enATK1();setTimeout(() => {enATK1()}, 1000);}, newDISTshot);}

let showenATK2 = true
function enATK2() {
    let enemyAttack2 = document.getElementById("attackFrames2")
    enemyAttack2.classList.toggle("attackFramess2")
    let explosionMICH = document.getElementById("explosionIch2")
    if (showenATK2) {
        enemyAttack2.style.display = "block";
        showenATK2 = false
        setTimeout(() => {setTimeout(() => {explosionMICH.style.display = "none"}, 1000);explosionMICH.style.display = "block";const EXPLOSIONenemy = document.getElementById("playEX3");EXPLOSIONenemy.play();sovestkySTATUS.HPs = sovestkySTATUS.HPs - y.damage;
        let electricINDEX2=Math.floor(Math.random()*100)
        if (electricINDEX2 < 10) {schadenCVI = true;RESTARTannomalyELECTRIC()} 
        let feuerINDEX2 = Math.floor(Math.random()*100)
        if (feuerINDEX2 < 10) {sindFEUER = true;sindELECTRICschaden = true;HATfeuer2.style.display = "block";if (startenALERTfeuer === false) {RESTARTalertFEUER()};startenALERTfeuer = true;}
        }, 1000);
    } else {
        enemyAttack2.style.display = "none"
        showenATK2 = true
    }
}
function startATK2() {const playHIT1 = document.getElementById("playHIT3");playHIT1.play();setTimeout(() => {enATK2();setTimeout(() => {enATK2()}, 1000);}, newDISTshot);}
 
let showenBOMBIEN = true
function FLUGZEUGatk() {
    let FLUGZEUG = document.getElementById("FLUGatk")
    FLUGZEUG.classList.toggle("FLUGatk")
    const playFLUGfeuerPASS = document.getElementById("playFLUGfeuerPASS");playFLUGfeuerPASS.play()
    let FLUGvalue = [1200, 2000, 2100]
    let flugINDEX = Math.floor(Math.random()*3)
    if (showenBOMBIEN) {
        FLUGZEUG.style.display = "block"
        showenBOMBIEN = false
        setTimeout(() => {if (FLUGvalue[flugINDEX] === FLUGvalue[0]) {INDEX1()} else if (FLUGvalue[flugINDEX] === FLUGvalue[1]) {INDEX2()} else if (FLUGvalue[flugINDEX] === FLUGvalue[2]) {INDEX3()}}, FLUGvalue[flugINDEX]);
        setTimeout(() => {FLUGZEUGatk()}, 4000);
    } else {
        showenBOMBIEN = true
        FLUGZEUG.style.display = "none"
    }
    function INDEX1() {let FLUGbomb1 = document.getElementById("FLUGbomb1");FLUGbomb1.classList.toggle("FLUGbomb1");FLUGbomb1.style.display = "block";setTimeout(() => {FLUGbomb1.style.display = "none";let explosionFLUG = document.getElementById("explosionFLUG");explosionFLUG.style.display = "block";
    const playEXPLOSIONflug = document.getElementById("playEXPLOSIONflug");playEXPLOSIONflug.play();setTimeout(() => {explosionFLUG.style.display = "none";FLUGbomb1.classList.toggle("FLUGbomb1")}, 1500);SCHADENfeuer = Math.min(SCHADENfeuer + 1, 3);HATfeuer.style.display = "block";sindFEUER = true;
    if (startenALERTfeuer === false) {RESTARTalertFEUER()};startenALERTfeuer = true;sindELECTRICschaden = true;schadenCVP = true;RESTARTannomalyELECTRIC();sovestkySTATUS.HPs = sovestkySTATUS.HPs - 500}, 1000);}
    function INDEX2() {let FLUGbomb = document.getElementById("FLUGbomb");FLUGbomb.classList.toggle("FLUGbomb");FLUGbomb.style.display = "block";setTimeout(() => {FLUGbomb.style.display = "none";let explosionFLUG1 = document.getElementById("explosionFLUG1");explosionFLUG1.style.display = "block";
    const playEXPLOSIONflug = document.getElementById("playEXPLOSIONflug");playEXPLOSIONflug.play();setTimeout(() => {explosionFLUG1.style.display = "none";FLUGbomb.classList.toggle("FLUGbomb")}, 1500);SCHADENfeuer = Math.min(SCHADENfeuer + 1, 3);HATfeuer1.style.display = "block";sindFEUER = true;
    if (startenALERTfeuer === false) {RESTARTalertFEUER()};startenALERTfeuer = true;sindELECTRICschaden = true;schadenCVS = true;RESTARTannomalyELECTRIC();sovestkySTATUS.HPs = sovestkySTATUS.HPs - 500}, 1000);}
    function INDEX3() {let FLUGbomb2 = document.getElementById("FLUGbomb2");FLUGbomb2.classList.toggle("FLUGbomb2");FLUGbomb2.style.display = "block";setTimeout(() => {FLUGbomb2.style.display = "none";let explosionFLUG2 = document.getElementById("explosionFLUG2");explosionFLUG2.style.display = "block";
    const playEXPLOSIONflug = document.getElementById("playEXPLOSIONflug");playEXPLOSIONflug.play();setTimeout(() => {explosionFLUG2.style.display = "none";FLUGbomb2.classList.toggle("FLUGbomb2")}, 1500);SCHADENfeuer = Math.min(SCHADENfeuer + 1, 3);HATfeuer2.style.display = "block";sindFEUER = true;
    if (startenALERTfeuer === false) {RESTARTalertFEUER()};startenALERTfeuer = true;sindELECTRICschaden = true;schadenCVI = true;RESTARTannomalyELECTRIC();sovestkySTATUS.HPs = sovestkySTATUS.HPs - 500}, 1000);}
}

function yesU() {clearInterval(neuUBOOTdist);noUBOOT=true;noSHIP=true;selCOMM();dochUBOOT.style.display="none";clearInterval(newUPDATEuboot);nameSHIP.innerHTML = "--";
typeSHIP.innerHTML = "--";country.innerHTML = "--";rivalSHIP.innerHTML = "--";hpSHIP.innerHTML = "--";distanceSHIP.innerHTML = "--";clearInterval(newUPDATEship)}
function neinU() {noUBOOT=false;dochUBOOT.style.display="none";whatCOMM.innerHTML="oque deseja agora?";}
let dochUBOOT = document.getElementById("dochUBOOT")

let SUBMARINES = [
    {
        name:"U-2501",
        prefix:configSHIPS.prefix[0],
        country:configSHIPS.country[0],
        type:configSHIPS.typers[0],
        HPu:1556,
        damage:679,
        reloadVEL:20000,
        HPl:1556
    }
]

function keineUBOOT(){Urival=false;u.HPu = Math.min(u.HPu + 10000, u.HPl);clearInterval(neuUBOOTdist);lockedU = false;noUBOOT=true;atku=false;clearInterval(newUPDATEuboot);nameSHIP.innerHTML="--";typeSHIP.innerHTML="--";country.innerHTML="--";hpSHIP.innerHTML="--";
distanceSHIP.innerHTML="--";rivalSHIP.innerHTML="submarino destruido";rivalSHIP.style.color="orange";setTimeout(() => {rivalSHIP.innerHTML="--";rivalSHIP.style.color="limegreen";}, 3000);clearInterval(stopDEINENuboot)}
function moveUBOOT(){let moveUBOOT1=setInterval(()=>{if(u.HPu<=0){thrUBOOT=false;keineUBOOT()};let vel12=Math.floor(Math.random()*1);let movehere1=-1;let movefar1=+1;let movehere2=-2;let movefar2=+2;let moveshere=[movehere1,movehere2];
let movesfar=[movefar1,movefar2];let goUBOOT=Math.floor(Math.random()*10);if(goUBOOT<7){NEWubootDIST=NEWubootDIST+movesfar[vel12];goUBOOTresult=NEWubootDIST}else{NEWubootDIST=NEWubootDIST+moveshere[vel12];goUBOOTresult=NEWubootDIST}
stopDEINENuboot=moveUBOOT1},1000);}let stopDEINENuboot = undefined;function startTORPEDO(){distUBOAT();let distUBOOT=Math.floor(Math.random()*(200-10+1))+10;NEWubootDIST=distUBOOT;let s=Math.round(Math.random()*0);let uberUBOOT=SUBMARINES[s];u=uberUBOOT;moveUBOOT();
let updateUBOOT=setInterval(()=>{;if(reqUBOOT){hpSHIP.innerText=u.HPu;if(noUBOOT){nameSHIP.innerHTML=u.prefix+""+u.name;country.innerHTML=u.country;typeSHIP.innerHTML=u.type;if(Urival){rivalSHIP.innerHTML=configSHIPS.isEnemy[0];rivalSHIP.style.color="red";att()}
else{rivalSHIP.innerHTML=configSHIPS.isEnemy[1];rivalSHIP.style.color="limegreen"}}}},1000);newUPDATEuboot=updateUBOOT}let NEWubootDIST = undefined;let u = undefined;let Urival = undefined;let newUPDATEuboot;let actualDISTANCEuboot=undefined;
let goUBOOTresult=undefined;let thrUBOOT=false;let noUBOOT=true;function att(){if(Urival&&atku===false){startUNTER2();atku=true}}let atku = false;function distUBOAT(){let neuDIST=setInterval(() => {distanceSHIP.innerText=NEWubootDIST;
const playSONARdist=document.getElementById("playSONARdist");playSONARdist.play();if(noUBOOT){clearInterval(neuDIST)}}, 5000);neuUBOOTdist = neuDIST}let neuUBOOTdist = undefined

let showenUNTER = true
function torpedo() {
    let torpedo = document.getElementById("torpedoHIT")
    torpedo.classList.toggle("torpedoHITt")
    let unterWasserEXPLOSION = document.getElementById("unter-wasser")
    if (showenUNTER) {
        torpedo.style.display = "block";
        showenUNTER= false
        setTimeout(() => {setTimeout(() => {unterWasserEXPLOSION.style.display = "none"}, 1000);unterWasserEXPLOSION.style.display = "block";const uBOATatk = document.getElementById("playUNTER");sindSCHIFFSRUMPFschaden = true;
        NPMschiffsrumpfSCHADEN();uBOATatk.play();sovestkySTATUS.HPs = sovestkySTATUS.HPs - u.damage}, 4000);
    } else {
        torpedo.style.display = "none"
        showenUNTER = true
    }
}
function startUNTER2() {;setTimeout(() => {torpedo();setTimeout(() => {torpedo();if (noUBOOT === false) {startUNTER2()}}, 4000)}, u.reloadVEL)}

let showATK = document.getElementById("ATK")
let showATKy = true
let whatATK = document.getElementById("whatATK")
let selecATK = document.querySelector('#selecATK')
let choseATK = selecATK.value
function ATK() {
    if (showATKy === true) {
        showATK.style.display = "block"
        showATKy = false

        metaD5 = true
        INFO.style.display = "none"

        metaD3 = true
        local.style.display = "none"

        COMM.style.display = "none"
        
        INFO.style.display = "none"
    
        showNUMB = false
        verNUMB.style.display = "none"
        butNUMB.style.display = "none"
        paraNUMB.style.display = "none"
        sameNUMB.style.display = "none"
        NSWE.style.display = "none"
        localNUMB.style.display = "none"
        
    } else {
        showATKy = true
        showATK.style.display = "none"
    }
    
}

function feuer1() {
    if (thrBOAT && locked) {
        const distEXPLOSION = document.getElementById("playDISTEX1");
        const playHIT2 = document.getElementById("playHIT2.1");
        const playHEatk = document.getElementById("playHEatk");

        if (mitPE) {
            if (newSHIPdistance <= 40) {
                setTimeout(() => {y.HP = y.HP - 487;playHIT2.play()}, 1000);
            } else if (newSHIPdistance <= 80) {
                setTimeout(() => {y.HP = y.HP - 359;distEXPLOSION.play()}, 3000);
            } else if (newSHIPdistance > 81) {
                setTimeout(() => {y.HP = y.HP - 223;distEXPLOSION.play()}, 6000);
            }
        } else {
            if (newSHIPdistance <= 40) {
                setTimeout(() => {if (istDESTROYERundFLUGZEUGTRAGER) {y.HP = y.HP - 639} else {y.HP = y.HP - 215};playHEatk.play()}, 1000);
            } else if (newSHIPdistance <= 80) {
                setTimeout(() => {if (istDESTROYERundFLUGZEUGTRAGER) {y.HP = y.HP - 512} else {y.HP = y.HP - 134};playHEatk.play()}, 3000);
            } else if (newSHIPdistance > 81) {
                setTimeout(() => {if (istDESTROYERundFLUGZEUGTRAGER) {y.HP = y.HP - 439} else {y.HP = y.HP - 97};playHEatk.play()}, 6000);
            }
        }
    }
}
function feuer2() {
    if (thrBOAT && locked) {
        const distEXPLOSION = document.getElementById("playDISTEX2");
        const playHIT2 = document.getElementById("playHIT2.2");
        const playHEatk1 = document.getElementById("playHEatk1");

        if (mitPE) {
            if (newSHIPdistance <= 40) {
                setTimeout(() => {y.HP = y.HP - 487;playHIT2.play()}, 1000);
            } else if (newSHIPdistance <= 80) {
                setTimeout(() => {y.HP = y.HP - 359;distEXPLOSION.play()}, 3000);
            } else if (newSHIPdistance > 81) {
                setTimeout(() => {y.HP = y.HP - 223;distEXPLOSION.play()}, 6000);
            }
        } else {
            if (newSHIPdistance <= 40) {
                setTimeout(() => {if (istDESTROYERundFLUGZEUGTRAGER) {y.HP = y.HP - 639} else {y.HP = y.HP - 215};playHEatk1.play()}, 1000);
            } else if (newSHIPdistance <= 80) {
                setTimeout(() => {if (istDESTROYERundFLUGZEUGTRAGER) {y.HP = y.HP - 512} else {y.HP = y.HP - 134};playHEatk1.play()}, 3000);
            } else if (newSHIPdistance > 81) {
                setTimeout(() => {if (istDESTROYERundFLUGZEUGTRAGER) {y.HP = y.HP - 439} else {y.HP = y.HP - 97};playHEatk1.play()}, 6000);
            }
        }
    }
}
function feuer3() {
    if (thrBOAT && locked) {
        const distEXPLOSION = document.getElementById("playDISTEX3");
        const playHIT2 = document.getElementById("playHIT2.3");
        const playHEatk2 = document.getElementById("playHEatk2");

        if (mitPE) {
            if (newSHIPdistance <= 40) {
                setTimeout(() => {y.HP = y.HP - 487;playHIT2.play()}, 1000);
            } else if (newSHIPdistance <= 80) {
                setTimeout(() => {y.HP = y.HP - 359;distEXPLOSION.play()}, 3000);
            } else if (newSHIPdistance > 81) {
                setTimeout(() => {y.HP = y.HP - 223;distEXPLOSION.play()}, 6000);
            }
        } else {
            if (newSHIPdistance <= 40) {
                setTimeout(() => {if (istDESTROYERundFLUGZEUGTRAGER) {y.HP = y.HP - 639} else {y.HP = y.HP - 215};playHEatk2.play()}, 1000);
            } else if (newSHIPdistance <= 80) {
                setTimeout(() => {if (istDESTROYERundFLUGZEUGTRAGER) {y.HP = y.HP - 512} else {y.HP = y.HP - 134};playHEatk2.play()}, 3000);
            } else if (newSHIPdistance > 81) {
                setTimeout(() => {if (istDESTROYERundFLUGZEUGTRAGER) {y.HP = y.HP - 439} else {y.HP = y.HP - 97};playHEatk2.play()}, 6000);
            }
        }
    }
}
let locked = false;let lockedU = false;

function selecATK1() {choseATK = selecATK.value;selATK()}
function selATK() {
    if (choseATK === "ST") {
        whatATK.innerHTML = "mirando..."
        const playTORRET = document.getElementById("playTORRET");playTORRET.play()
        setTimeout(() => {
            if (thrBOAT) {
                whatATK.innerHTML = "mira tracada"
                locked = true
            } else {
                whatATK.innerHTML = "não há alvos..."
                locked = false
                setTimeout(() => {whatATK.innerHTML = "oque deseja agora?"}, 3000);
            }
        }, 3000);
    }
    if (choseATK === "AU") {
        whatATK.innerHTML = "selecione o kilometro para enviar ataque."        
    }
    setInterval(() => {
        let UBOOTatk = document.getElementById("UBOOTatk")
        if (choseATK === "AU") {
            UBOOTatk.style.display = "block"
        } else {
            UBOOTatk.style.display = "none"
        }
    }, 100);
    let AAatk = document.getElementById("AAatk")
    if (choseATK === "FA") {
        whatATK.innerHTML = "selecione a localização do avião"   
    }
    setInterval(() => {
        if (choseATK === "FA") {
            AAatk.style.display = "block"
        } else {
            AAatk.style.display = "none"
        }
    }, 100);
}

let ZERTORTflug = false
function STARTFLUGZEUGatk() {
    let FLUGZEUGindex = newSHIPdistance
    meinINDEX = FLUGZEUGindex
    let flugatkTIME;
    if (ZERTORTflug === false) {
        flugatkTIME = setInterval(() => {meinINDEX = Math.max(meinINDEX - 7, 0);dieserFLUG.innerText = meinINDEX;if (meinINDEX <= 0) {FLUGZEUGatk();clearInterval(flugatkTIME);setTimeout(() => {STARTFLUGZEUGatk()}, 3000);}}, 1000);
    }
    meinFLUGatkTIME = flugatkTIME
}

let dieserFLUG = document.getElementById("dieserFLUG")
let AAammoC = 0

let meinINDEX 
let meinFLUGatkTIME 

function AAT() {
    let selectedAAGUN = document.getElementById("AAatk1").value 
    let newAAGUNvalue = parseInt(selectedAAGUN)
    let AAgunFRAMES = document.getElementById("AAguns")
    if (AAfertig) {
        const playAAgunSOUND = document.getElementById("playAAgunSOUND");playAAgunSOUND.play()
        whatATK.innerHTML = "atacando..."

        let shotJETZ = true
        let AAframesINTERVAL;

        function AAgunDEINEframes() {AAframesINTERVAL = setInterval(() => {if (shotJETZ) {AAgunFRAMES.style.display = "block";shotJETZ = false} else {AAgunFRAMES.style.display = "none";shotJETZ = true}}, 50);}

        let ammoTIME

        function reduceAMMO() {AAammoC = AAammoC - 4;ammoTIME = setInterval(() => {AAammoC = Math.max(AAammoC - 1 , 0)}, 50);}
        reduceAMMO()
        AAgunDEINEframes()

        setTimeout(() => {clearInterval(ammoTIME);clearInterval(AAframesINTERVAL);setTimeout(() => {AAgunFRAMES.style.display = "none"}, 700);}, 5500);

        AAfertig = false

        setTimeout(() => {
            if (newAAGUNvalue < meinINDEX + 6 && newAAGUNvalue > meinINDEX - 6) {
                whatATK.innerHTML = "aeronave destruida"
                clearInterval(meinFLUGatkTIME)
                ZERTORTflug = true
                dieserFLUG.innerHTML = "--"
                setTimeout(() => {
                    if (noSHIP === false) {
                        ZERTORTflug = false
                        STARTFLUGZEUGatk()
                    }
                }, 5000);
                
            } else {
                whatATK.innerHTML = "os AA erraram o alvo..."
            }
        }, 4000);
    } else {
        painel.innerHTML = "AA nâo carregados"
    }
    
}
let istkein0muniton = true
let AAfertig = false
function AAM() {
    if (AAammoC === 300) {
        painel.innerHTML = "AA carregados"
    } else if (AAammoC < 1 && AAammo > 0 && istkein0muniton) {
        painel.innerHTML = "recarregando..."
        const playAAgunREALreload = document.getElementById("playAAgunREALreload");playAAgunREALreload.play()
        setTimeout(() => {
            setTimeout(() => {
                AAammoC = Math.min(AAammoC + AAammoS, 100)
                AAammoS = Math.max(AAammoS - 100, 0)
            }, 500);
            AAammoS = Math.min(AAammoS + AAammo, 300)
            AAammo = Math.max(AAammo - 300, 0)
            if (AAammoC === 0) {istkein0muniton = false}
            AAfertig = true
            istkein0muniton = false
            painel.innerHTML = "AA prontos"
        }, 9000);
    } else if (AAammoS > 0 && istkein0muniton === false) {
        const playAAschnellRELOAD = document.getElementById("playAAschnellRELOAD");playAAschnellRELOAD.play()
        painel.innerHTML = "preprarando cinturão de munição..."
        setTimeout(() => {
            AAfertig = true
            AAammoC = Math.min(AAammoC + AAammoS, 100)
            AAammoS = Math.max(AAammoS - 100, 0)
            if (AAammoS < 99) {istkein0muniton = true}
            painel.innerHTML = "AA preprarados"
        }, 3000);
    } else {
        if (AAammo <= 0) {
            painel.innerHTML = "não há mais munição..."
        } else {
            painel.innerHTML = "AA carregados..."
        }
    }
}

let showZC2 = true; let ZCammo = 150;let ZCauto = document.getElementById("ZCauto")
function trigZWEITEcannonen() {
    let shellsINDEX = undefined
    if (showZC2) {
        allesPANZER.innerHTML = "ativando"
        allesPANZER.style.color = "yellow"

        zielen.innerHTML = "conectando"
        zielen.style.color = "yellow"

        shells.innerHTML = "0"
        shells.style.color = "yellow"

        AUTOaim.innerHTML = "conectando"
        AUTOaim.style.color = "yellow"
        setTimeout(() => {
            allesPANZER.innerHTML = "operantes"
            allesPANZER.style.color = "limegreen"

            zielen.innerHTML = "irregular"
            zielen.style.color = "red"

            shellsINDEX = setInterval(() => {shells.innerHTML = ZCammo}, 1000);

            shells.style.color = "limegreen"

            AUTOaim.innerHTML = "desativado"
            AUTOaim.style.color = "red"

            ZCauto.innerHTML = "desativar"

            showZC2 = false
        }, 4000);
    } else {
        allesPANZER.innerHTML = "desativando"
        allesPANZER.style.color = "yellow"

        zielen.innerHTML = "desconectando"
        zielen.style.color = "yellow"

        shells.innerHTML = "0"
        shells.style.color = "yellow"

        AUTOaim.innerHTML = "desconectando"
        AUTOaim.style.color = "yellow"
        setTimeout(() => {
            allesPANZER.innerHTML = "inoperantes"
            allesPANZER.style.color = "red"

            zielen.innerHTML = "..."
            zielen.style.color = "red"

            clearInterval(shellsINDEX)

            shells.innerHTML = "0"
            shells.style.color = "red"

            AUTOaim.innerHTML = "..."
            AUTOaim.style.color = "red"

            ZCauto.innerHTML = "ativar"
            showZC2 = true
        }, 4000);    
    }
}

let ZWEITEflash = document.getElementById("zweiteFLASH")
let ZWEITEflash1 = document.getElementById("zweiteFLASH1")
let ZWEITEflash2 = document.getElementById("zweiteFLASH2")

let ZWEITEzeit = 0
let hastSCHIFF = false
let showZWEITE = false
let ZWEITEpainel = document.getElementById("ZWEITEpainel");
let activeZC1 = document.getElementById("activeZC1")
function trigAUTOshot() {
    let trigAUTO = undefined
    let zweitDETECTOR = undefined
    if (showZWEITE === false) {zielen.innerHTML = "procurando";zielen.style.color = "yellow";painel.innerHTML = "as torretas vão procurar um alvo automaticamente e irão disparar";activeZC1.innerHTML = "destivar";showZWEITE = true;showZWEITEcanonnen()} 
    else {activeZC1.innerHTML = "ativar";showZWEITE = false;zielen.innerHTML = "irregular";zielen.style.color = "red";}
    zweitDETECTOR = setInterval(() => {if (showZWEITE) {AUTOaim.innerHTML = "ativado";AUTOaim.style.color = "limegreen"} else {clearInterval(zweitDETECTOR);AUTOaim.innerHTML = "desativado";AUTOaim.style.color = "red"}}, 1000);
    function showZWEITEcanonnen() {
        if (showZWEITE) {
            trigAUTO = setInterval(() => {if (noSHIP === false || Nrival) {zielen.innerHTML = "tracado";zielen.style.color = "limegreen";shotGEGNER();clearInterval(trigAUTO)}}, 1000);
            function shotGEGNER() {
                if (noSHIP === false || Nrival) {
                    setTimeout(() => {ZWEITEflash.style.display = "block";setTimeout(() => {ZWEITEflash.style.display = "none"}, 100);setTimeout(() => {ZWEITEflash1.style.display = "block";setTimeout(() => {ZWEITEflash1.style.display = "none";
                    setTimeout(() => {ZWEITEflash2.style.display = "block";setTimeout(() => {ZWEITEflash2.style.display = "none"}, 100)}, 800)}, 100)}, 1000);}, 200)
                    const playZWEITEshot = document.getElementById("playZWEITEshot");const playZWEITEshot1 = document.getElementById("playZWEITEshot1");const playZWEITEshot2 = document.getElementById("playZWEITEshot2");
                    const playEXPLOSIONausZWEI = document.getElementById("playEXPLOSIONausZWEI")
                    setTimeout(() => {const playZWEITElade = document.getElementById("playZWEITElade");playZWEITElade.play();setTimeout(() => {showZWEITEcanonnen()}, 8000);}, 10000);
                    repeatZEIT()
                    function repeatZEIT() {if (ZWEITEzeit < 3) {ZWEITEzeitFUNCTION();if (ZWEITEzeit === 0) {playZWEITEshot.play()} else if (ZWEITEzeit === 1) {playZWEITEshot1.play()} else 
                    if (ZWEITEzeit === 2) {playZWEITEshot2.play()};ZWEITEzeit = ZWEITEzeit + 1;setTimeout(() => {repeatZEIT()}, 1000)} else {ZWEITEzeit = Math.max(ZWEITEzeit - 10, 0)}}
                    function ZWEITEzeitFUNCTION() {
                        if (newSHIPdistance <= 40) {
                            setTimeout(() => {y.HP = y.HP - 125;playEXPLOSIONausZWEI.play()}, 1000);
                        } else if (newSHIPdistance <= 80) {
                            setTimeout(() => {y.HP = y.HP - 95;playEXPLOSIONausZWEI.play()}, 3000);
                        } else if (newSHIPdistance > 81) {
                            setTimeout(() => {y.HP = y.HP - 55;playEXPLOSIONausZWEI.play()}, 6000);
                        }
                    }
                    ZWEITEpainel.innerHTML = "disparando";setTimeout(() => {ZWEITEpainel.style.color = "red";ZWEITEpainel.innerHTML = "descarregado";setTimeout(() => {ZWEITEpainel.style.color = "yellow";
                    ZWEITEpainel.innerHTML = "recarregando";setTimeout(() => {ZWEITEpainel.style.color = "limegreen";ZWEITEpainel.innerHTML = "carregado"}, 8000)}, 6000);}, 4000)
                }
            }
        } else {zielen.innerHTML = "procurando";zielen.style.color = "yellow";}
    }
}

function send() {
    let showenRUSS = true
    const playAIRPLANEPASS = document.getElementById("playPLANEPASS");playAIRPLANEPASS.play()
    fluger()
    function fluger() {
        let RUSSatk = document.getElementById("RUSSatk")
        RUSSatk.classList.toggle("RUSSairr")
        if (showenRUSS) {
            RUSSatk.style.display = "block";
            showenRUSS = false
            setTimeout(() => {fluger()}, 3000);
        } else {
            RUSSatk.style.display = "none"
            showenRUSS = true
        }
    }

    let numberATK = document.getElementById("UBOOTatk1").value
    let numberSEND = parseInt(numberATK)
    const playUNTEREXPLOSION = document.getElementById("playUNTEREXPLOSION")
    const playUNTERMISS = document.getElementById("playUNTERMISS")
    if (NEWubootDIST <= 40) {
        whatATK.innerHTML = "ataque enviado, operação sendo executada..."        
        setTimeout(() => {
            if (numberSEND <= NEWubootDIST + 3 && numberSEND >= NEWubootDIST - 3) {
                playUNTEREXPLOSION.play()
                u.HPu = u.HPu - 547
                whatATK.innerHTML = "inimigo atingido"
            } else {
                whatATK.innerHTML = "o ataque aéreo falhou..."
                playUNTERMISS.play()
            }
        }, 3000);
    } else if (NEWubootDIST <= 100) {
        whatATK.innerHTML = "ataque enviado, operação sendo executada..."
        setTimeout(() => {
            if (numberSEND <= NEWubootDIST + 3 && numberSEND >= NEWubootDIST - 3) {
                playUNTEREXPLOSION.play()
                u.HPu = u.HPu - 547
                whatATK.innerHTML = "inimigo atingido"
            } else {
                whatATK.innerHTML = "o ataque aéreo falhou..."
                playUNTERMISS.play()
            }
        }, 5000);
    } else {
        whatATK.innerHTML = "ataque enviado, operação sendo executada..."
        setTimeout(() => {
            if (numberSEND <= NEWubootDIST + 3 && numberSEND >= NEWubootDIST - 3) {
                playUNTEREXPLOSION.play()
                u.HPu = u.HPu - 547
                whatATK.innerHTML = "inimigo atingido"
            } else {
                whatATK.innerHTML = "o ataque aéreo falhou..."
                playUNTERMISS.play()
            }
        }, 7000);
    }
}

let nameSHIP = document.getElementById("nameSHIP")
let country = document.getElementById("countrySHIP")
let distanceSHIP = document.getElementById("distanceSHIP")
let typeSHIP = document.getElementById("typeSHIP")
let rivalSHIP = document.getElementById("rivalSHIP")
let hpSHIP = document.getElementById("hpSHIP")

let metaD3 = true

let verNUMB = document.getElementById("bns")
let butNUMB = document.getElementById("veri")
let paraNUMB = document.getElementById("paraNUMB")
let sameNUMB = document.getElementById("sameNUMB")
let showNUMB = false
let localNUMB = document.getElementById("localNUMB")
let atualNUMB = document.getElementById("atualNUMB")

function BNS() {
    
    if (showNUMB === false) {
        showNUMB = true
        metaD3 = true
        showATKy = true
        
        verNUMB.style.display = "block"
        butNUMB.style.display = "block"
        paraNUMB.style.display = "block"
        sameNUMB.style.display = "block"
        NSWE.style.display = "block"
        localNUMB.style.display = "block"
        local.style.display = "none"
        
        showATK.style.display = "none"

        metaD5 = true

        COMM.style.display = "none"
        
        INFO.style.display = "none"
    } else {
        showNUMB = false
        verNUMB.style.display = "none"
        butNUMB.style.display = "none"
        paraNUMB.style.display = "none"
        sameNUMB.style.display = "none"
        NSWE.style.display = "none"
        localNUMB.style.display = "none"
        
    }
}

let NSWE = document.querySelector('#NSWE')
let deine = NSWE.value




const generalLOCAL = {
    shipLocal:"mar negro",
    NOVdock:"Porto Naval de novorossisk",
}


const northLocations = {
    sebastopol:"sebastopol, ucrania",
    eupatória:"eupatória, ucrania",
    odessa:"odessa, ucrania"
}
const eastLocations = {
    novorossisk:"novorossisk, russia",
    sóchi:"sóchi, russia",
    batumi:"batumi, georgia"
}
const westLocations = {
    constança:"constança, romenia",
    varna:"varna, bulgaria"
}
const southLocations = {
    zonguldak:"zonguldak, turquia",
    samsun: "samsun, turquia",
    ordu:"ordu, turquia"
}
    
function NSWEupdate() {deine = NSWE.value}

function ver() {
    local1()
    if (isatMARNEGRO) {atNOV = false}
    let numbVER = document.getElementById("bns").value
    let numberVER = parseInt(numbVER)
    paraNUMB.innerHTML = "."
    setTimeout(() => {
        paraNUMB.innerHTML = ".."
        setTimeout(() => {
            paraNUMB.innerHTML = "..."
        }, 1000);
    }, 1000);
    setTimeout(() => {
        if (deine === "north") {
            if (numberVER <= 66) {
                paraNUMB.innerHTML = northLocations.sebastopol
            } else if (numberVER <= 132) {
                paraNUMB.innerHTML = northLocations.eupatória
            } else if (numberVER <= 200) {
                paraNUMB.innerHTML = northLocations.odessa
            } else {
                paraNUMB.innerHTML = "quilometro desconhecido..."
            }
        }
        if (deine === "west") {
            if (numberVER <= 100) {
                paraNUMB.innerHTML = westLocations.constança 
            } else if (numberVER <= 200) {
                paraNUMB.innerHTML = westLocations.varna
            } else {
                paraNUMB.innerHTML = "quilometro desconhecido..."
            }
        }
        if (deine === "east") {
            if (numberVER <= 66) {
                paraNUMB.innerHTML = eastLocations.novorossisk
            } else if (numberVER <= 132){
                paraNUMB.innerHTML = eastLocations.sóchi
            } else if (numberVER <= 200) {
                paraNUMB.innerHTML = eastLocations.batumi
            } else {
                paraNUMB.innerHTML = "quilometro desconhecido..."
            }
        }
        if (deine === "south") {
            if (numberVER <= 66) {
            paraNUMB.innerHTML = southLocations.zonguldak
            } else if (numberVER <= 132) {
            paraNUMB.innerHTML = southLocations.samsun
            } else if (numbVER <= 200){
            paraNUMB.innerHTML = southLocations.ordu
            } else{ 
                paraNUMB.innerHTML = "quilometro desconhecido..."
            }
        }
    }, 3000); 
}

let local = document.getElementById("LOCAL")
let meineLOCAL = document.getElementById("meineLOCAL")

function E3() {
    if (metaD3 === true) {
        metaD3 = false
        local.style.display = "block"
        
        metaD1 = true
        metaD2 = true
        showATKy = true
        showATK.style.display = "none"

        metaD5 = true

        INFO.style.display = "none"
        showNUMB = false
        verNUMB.style.display = "none"
        butNUMB.style.display = "none"
        paraNUMB.style.display = "none"
        sameNUMB.style.display = "none"
        NSWE.style.display = "none"
        localNUMB.style.display = "none"
        metaD2 = true   
        COMM.style.display = "none"
    } else {
        metaD3 = true
        local.style.display = "none"
        
    }
}

let selecLOCAL = document.getElementById("selecLOCAL")
let neuLOCAL = document.getElementById("neuLOCAL")
let isatMARNEGRO = false
setInterval(() => {
    if (atualNUMB.textContent === generalLOCAL.shipLocal ) {
        isatMARNEGRO = true
    } else {
        isatMARNEGRO = false
    }
}, 1000);
function local1() {
    meineLOCAL.innerHTML = "deseja escolher esta localidade?"
    setInterval(() => {
        neuLOCAL.innerHTML = paraNUMB.textContent
    }, 4000);
}
let selectedLOCAL = false
setInterval(() => {if (neuLOCAL.innerHTML === "") {selecLOCAL = false} else {selecLOCAL = true}}, 1000);
let distanceLOCAL = document.getElementById("distanceLOCAL")
const rotes = {
    constança: false,
    constaDIST: 100,
    varna: false,
    varnaDIST: 200,
}
function selecROTE() {
if (isatMARNEGRO === false) {
    meineLOCAL.innerHTML = "vá para o mar negro para determinar uma rota..."
} else if (selecLOCAL === false) {
    meineLOCAL.innerHTML = "defina o local no modulo G.N."
} else {
    if (isatMARNEGRO === true) {
        painel.style.color = "yellow"
        painel.innerHTML = "ATENÇÃO!, quando você chegar no local, pare o navio para atracar no porto."
        setTimeout(() => {painel.innerHTML = "", painel.style.color = "lime"}, 6000);
        if (isatMARNEGRO) {atNOV = false}
        localSHIP = 0
        if (deine === "west") {
            if (neuLOCAL.textContent === westLocations.constança) {
                localSHIP = 100
                rotes.constança = true
            } else {
                localSHIP = 200
                rotes.varna = true
            }
        } else {
            rotes.constança = false
            rotes.varna = false
        }
        if (deine === "east") {
            if (neuLOCAL.textContent === eastLocations.novorossisk) {
                localSHIP = 66
            } else if (neuLOCAL.textContent === eastLocations.sóchi) {
                localSHIP = 132
            } else {
                localSHIP = 200
            }
        } 
        if (deine === "south") {
            if (neuLOCAL.textContent === southLocations.zonguldak) {
                localSHIP = 68
            } else if (neuLOCAL.textContent === southLocations.samsun) {
                localSHIP = 130
            } else {
                localSHIP = 200
            }
        }
        if (deine === "north") {
            if (neuLOCAL.textContent === northLocations.sebastopol) {
                localSHIP = 62
            } else if (neuLOCAL.textContent === northLocations.eupatória) {
                localSHIP = 138
            } else {
                localSHIP = 200
            }
        }
        const neuinterval = setInterval(() => {
            if (selecLOCAL) {
                distanceLOCAL.innerText = localSHIP
                if (actualVEL === 1) {
                    localSHIP = localSHIP - 1
                } else if (actualVEL === 2) {
                    localSHIP = localSHIP - 2
                } else if (actualVEL === - 1) {
                    localSHIP = localSHIP + 1
                }

                if (localSHIP <= 1) {
                    atualNUMB.innerHTML = neuLOCAL.textContent
                } else {
                    atualNUMB.innerHTML = generalLOCAL.shipLocal
                }

                if (actualVEL === 0 && localSHIP <= 1) {
                    localSHIP = 0
                    distanceLOCAL.innerText = localSHIP
                    clearInterval(neuinterval)
                }
            } else {
                painel.innerHTML = "failed"
            }
        }, 1000);
    }
}
}  
    


let localSHIP = 0
let atNOV = true
const novport = setInterval(intervval, 1000);
function intervval() {
    if (atNOV) {
        if (actualVEL === 1) {
            localSHIP = localSHIP + 1
        } else if (actualVEL === 2) {
            localSHIP = localSHIP + 2
        } else if (actualVEL === - 1) {
            localSHIP = localSHIP - 1
        }

        if (localSHIP <= 30) {
            atualNUMB.innerHTML = generalLOCAL.NOVdock
        } else {
            atualNUMB.innerHTML = generalLOCAL.shipLocal
        }
    } else {
        clearInterval(novport)
    }
} 

