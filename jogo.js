/** @type {HTMLCanvasElement} */


let canvas = document.querySelector("#jogo");
let contexto = canvas.getContext("2d");

/*contexto.rect(0, 0, 100, 100);
contexto.fillStyle = "white";
contexto.fill();
contexto.strokeStyle = "green";
contexto.stroke();

contexto.moveTo(100, 100);
contexto.lineTo(200, 100);
contexto.lineTo(100, 200);
contexto.lineTo(100, 100);
contexto.fillStyle = "black";
contexto.fill();*/

let moduloLunar = {
    posicao: {
        x: 100,
        y: 100
    },
    angulo: 0,
    largura: 20,
    altura: 20,
    cor: "black"
}

function desenharModuloLunar(){
    contexto.save();
    contexto.beginPath();
    contexto.translate(moduloLunar.posicao.x, moduloLunar.posicao.y);
    contexto.rotate(moduloLunar.angulo);
    contexto.rect(moduloLunar.largura * -0.5, moduloLunar.altura * -0.5, moduloLunar.largura, moduloLunar.altura);
    contexto.fillStyle = moduloLunar.cor;
    contexto.fill();
    contexto.closePath();

    desenharChama()
    contexto.restore();

}

function desenharChama(){
    contexto.beginPath();
    contexto.moveTo(moduloLunar.largura * -0.5, moduloLunar.altura * 0.5);
    contexto.lineTo(moduloLunar.largura * 0.5, moduloLunar.altura * 0.5);
    contexto.lineTo(0, moduloLunar.largura * 0.5 + Math.random() * 5);
    contexto.lineTo(moduloLunar.largura * -0.5, moduloLunar.altura * 0.5);
    contexto.closePath();
    contexto.fillStyle = "orange";
    contexto.fill();
}



let x = 100;

function desenhar(){
    //limpar a tela
    contexto.clearRect(0, 0, canvas.width, canvas.height);

    contexto.save() //salvando o contexto atual
    //vai para o centro da tela (muda o contexto)
    contexto.translate(canvas.width / 2, canvas.height / 2);
    contexto.beginPath();
    //contexto.arc(x, 100, 25, 0, 2 * Math.PI);
    contexto.rotate(Math.PI/4);
    contexto.rect(x, 100, 25, 10);
    contexto.fillStyle = "black";
    contexto.fill();
    contexto.restore(); //restaura o contexto anterior

    x = x + 5;
requestAnimationFrame(desenhar);
desenharModuloLunar();

}

desenhar();