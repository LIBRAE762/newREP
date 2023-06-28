let actur = document.getElementById("atTUR")

let acBP = document.getElementById("atBP")

let b1 = document.getElementById("B1")
let b2 = document.getElementById("B2")
let b3 = document.getElementById("B3")

let painel = document.getElementById("painel")

actur.disabled = true
actur.style.color = "gray"

acBP.disabled = true
acBP.style.color = "gray"

b1.disabled = true
b2.disabled = true
b3.disabled = true
    
b1.style.color = "gray"
b2.style.color = "gray"
b3.style.color = "gray"


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
    painel.innerHTML = "são 3 torretas segundarias localizada a BomBordo(esquerda) do navio."
}
function BEB() {
    painel.innerHTML = "são 3 torretas segundarias localizada a EsteBordo(direita) do navio."
}
function AD() {
    painel.innerHTML = "o quanto de munição ainda resta para todas as baterias segundarias."
}
function BBS() {
    painel.innerHTML = "status atual das baterias segundarias a BomBordo(esquerda) do navio."
}
function BES() {
    painel.innerHTML = "status atual das baterias segundarias a EsteBordo(direita) do navio."
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
        energia.style.color = "yellow"
        setTimeout(() => {
             if (b1.disabled === true) {
                let SCRIPTenergia1 = document.getElementById("energia").innerHTML = "ativado"
                painel.innerHTML = "aqui onde você está lendo é o painel estatistico, este painel informa tudo que está acontecendo no navio."
                energia.style.color = "lime"
                active.innerHTML = "desativar"

                actur.disabled = false
                actur.style.color = "limegreen"

                acBP.disabled = false
                acBP.style.color = "limegreen"

                b1.disabled = false
                b2.disabled = false
                b3.disabled = false

                b1.style.color = "limegreen"
                b2.style.color = "limegreen"
                b3.style.color = "limegreen"

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
        }, 3000);
    }

    if (b1.disabled === false) {
        let neoSCRIPT = document.getElementById("energia").innerHTML = "desativando..."
        energia.style.color = "yellow"
        setTimeout(() => {
            if (b1.disabled === false) {
                let SCRIPTenergia2 = document.getElementById("energia").innerHTML = "desativado"
                energia.style.color = "red"
                active.innerHTML = "ativar"

                actur.disabled = true
                actur.style.color = "gray"

                acBP.disabled = true
                acBP.style.color = "gray"

                b1.disabled = true
                b2.disabled = true
                b3.disabled = true

                b1.style.color = "gray"
                b2.style.color = "gray"
                b3.style.color = "gray"

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

let turbb = document.getElementById("TBB")
let c12 = document.getElementById("C12")
let c12k = document.getElementById("C12K")

let turc = document.getElementById("TUC")
let c34 = document.getElementById("C34")
let c34k = document.getElementById("C34K")

let tureb = document.getElementById("TEB")
let c56 = document.getElementById("C56")
let c56k = document.getElementById("C56K")
function activeTUR() {
 if (turbb.style.color === "red") {
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

            pullTURB1.style.display = "none"
            CAL12.style.display = "none"

            pullTURB2.style.display = "none"
            CAL34.style.display = "none"

            pullTURB3.style.display = "none"
            CAL56.style.display = "none"
        }, 6000);

    }

}

let inb1 = document.getElementById("inB1")
let sb1 = document.getElementById("sb1")

let inb2 = document.getElementById("inB2")
let sb2 = document.getElementById("sb2")

let inb3 = document.getElementById("inB3")
let sb3 = document.getElementById("sb3")

let aBP = document.getElementById("activeBP")
function activeBP() {
    
    if (inb1.innerHTML === "...") {
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
function newpainel() {
    if (cve.style.display === "none") {
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
    } else {
        cve.style.display = "none"
        inc.style.display = "none"
        dec.style.display = "none"
        nivelVEL.style.display = "none"
        showINDE.style.display = "none"
        inINDE.style.display = "none"
        deINDE.style.display = "none"
    }
}

function l() {
    
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
        if (independetVEL === -1 && move2 === true) {
            if (move2 === true && independetVEL === -1) {
                console.log("reverser activated")
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

let title = document.getElementById("sTITLE")
let pes = document.getElementById("mPE")
let hes = document.getElementById("mHE")
let coal = document.getElementById("COAL")
function supply() {
    if (title.style.display === "none") {
        title.style.display = "block"
        pes.style.display = "block"
        hes.style.display = "block"
        coal.style.display = "block"

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
    } else {
        title.style.display = "none"
        pes.style.display = "none"
        hes.style.display = "none"
        coal.style.display = "none"

        
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
function BP() {
    if (bateria1.style.display === "none" && aBP.innerHTML === "desativar" ) {
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
let PEa = 12
let HEa = 12
let loaded1 = false
let loaded2 = false
let loaded3 = false




let shotanima1 = document.getElementById("shot1")
function rB1() {
    const RELOAD = document.getElementById("playAU2")
    const newRELOAD = document.getElementById("playAU3")
    if (PEa >= 3 && isPE === true && loaded1 === false) {
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
        if (loaded1 === true) {
            sovetSHOOT.play()
            shotanima1.style.display = "block"
            setInterval(() => {
                shotanima1.style.display = "none"
            }, 130);
        }
        loaded1 = false
        sb1.innerHTML = "descarregado"
        sb1.style.color = "orange"
    } else {
        painel.innerHTML = "os canhões não estão carregados."
        
    }    
}


let shotanima = document.getElementById("shot")
function rB2() {
    const RELOAD1 = document.getElementById("playAU2.2")
    const newRELOAD1 = document.getElementById("playAU3.2")
    if (PEa >= 3 && isPE === true && loaded2 === false) {
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
        if (loaded2 === true) {
            sovetSHOOT1.play()
            shotanima.style.display = "block"
            setInterval(() => {
                shotanima.style.display = "none"
            }, 130);
            
        }
        loaded2 = false
        sb2.innerHTML = "descarregado"
        sb2.style.color = "orange"
    } else {
        painel.innerHTML = "os canhões não estão carregados."
        
    }    
}

let shotanima2 = document.getElementById("shot2")
function rB3() {
    const RELOAD2 = document.getElementById("playAU2.3")
    const newRELOAD2 = document.getElementById("playAU3.3")
    if (PEa >= 3 && isPE === true && loaded3 === false) {
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
        if (loaded3 === true) {
            sovetSHOOT2.play()
            shotanima2.style.display = "block"
            setInterval(() => {
                shotanima2.style.display = "none"
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
    if (isPE === true) {
        isPE = false
        typerca.innerHTML = "HE"
    } else {
        isPE = true
        typerca.innerHTML = "PE"
    }
}


function BS() {
    
}

let pullTURB1 = document.getElementById("turb1");
let CAL12 = document.getElementById("cal12");

let pullTURB2 = document.getElementById("turb2");
let CAL34 = document.getElementById("cal34");

let pullTURB3 = document.getElementById("turb3");
let CAL56 = document.getElementById("cal56");
function MeP() {
    if (pullTURB1.style.display === "none" && aTUR.innerHTML === "desativar") {
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
    } else {
        pullTURB1.style.display = "none"
        CAL12.style.display = "none"

        pullTURB2.style.display = "none"
        CAL34.style.display = "none"

        pullTURB3.style.display = "none"
        CAL56.style.display = "none"

        if (aTUR.innerHTML === "ativar") {
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
  if (change >= 48 && turbb.innerHTML === "sem energia" && on1 === true) {
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
                
            let newchange = oldchange - 48
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
        c12.innerHTML = "reabastecendo..."

        let cal12coal = parseInt(KGcoal.innerText)
        let cal12C = cal12coal - 2916
        KGcoal.innerText = cal12C

        Ckg = Ckg - 2916

        const coalR = document.getElementById("playAUR1")
        coalR.play()
        setTimeout(() => {
            c12.innerHTML = "2916"

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
  if (change >= 48 && turc.innerHTML === "sem energia" && on2 === true) {
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
            
            let newchange = oldchange - 48
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
        c34.innerHTML = "reabastecendo..."

        let cal34coal = parseInt(KGcoal.innerText)
        let cal34C = cal34coal - 2916
        KGcoal.innerText = cal34C

        Ckg = Ckg - 2916

        const coalR2 = document.getElementById("playAUR2")
        coalR2.play()
        setTimeout(() => {
            c34.innerHTML = "2916"

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
  if (change >= 48 && tureb.innerHTML === "sem energia" && on3 === true) {
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
            
            let newchange = oldchange - 48
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
        c56.innerHTML = "reabastecendo..."

        let cal56coal = parseInt(KGcoal.innerText)
        let cal56C = cal56coal - 2916
        KGcoal.innerText = cal56C

        Ckg = Ckg - 2916

        const coalR3 = document.getElementById("playAUR3")
        coalR3.play()
        setTimeout(() => {
            c56.innerHTML = "2916"

        }, 17000);
    } else {
        painel.innerHTML = "carvão insuficiente para abastecer a caldeira."
    }
}

//daqui em diante é o setor de comunicação
let FsuperiorC1 = document.getElementById("1°superiorC1")
let SsuperiorC1 = document.getElementById("2°superiorC1")

let FsuperiorB1 = document.getElementById("1°superiorB1")
let SsuperiorB1 = document.getElementById("2°superiorB1")
function comms() {
    if (FsuperiorC1.style.display === "flex") {
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