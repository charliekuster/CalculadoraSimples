export class Calculadora{
    constructor(display,logica_interna, numeros, operacoes, ponto, igual){
        this.display = display;
        this.logica_interna = logica_interna;
        this.numeros = numeros;
        this.operacoes = operacoes;
        this.ponto = ponto;
        this.igual = igual;
    }

    AdicionarNumeroNaCalculadora(numero){ // numero é string
        // Para adicionar o número na calculadora, nós adicionamos na lógica interna e no display
        this.logica_interna.AdicionarNumeroNaLogicaInterna(numero);
        this.display.AdicionarNumeroNoDisplay(numero);
    }
    AdicionarOperacaoNaCalculadora(operacao){ // operacao é string
        this.logica_interna.AdicionarOperacaoNaLogicaInterna(this.display, operacao);
    }

}

export class Display{
    // Responsável para lidar com a apresentação do resultado para o display. 
    constructor(elemento_display){
        this.elemento_display = elemento_display; // que usams para usar o gettextcontent da tela
    }

    PrintDisplay(valor){ // Escreve na tela (valor por padrão é string)
        this.elemento_display.textContent = valor;
    }
    CleanDisplay(){ //Limpa a tela
        this.elemento_display.textContent="";
    }
    GetDisplay(){ // Retorna oq está na tela
        return this.elemento_display.textContent;
    }
    AdicionarNumeroNoDisplay(numero){ //numero é string
        this.PrintDisplay(this.elemento_display.textContent+=numero); // quero que toda vez que a pessoa vai clicando nos botoes de numero eles vão concatenando no display até que chegue numa operação.
    }
}
export class LogicaInterna{
    // Responsável por fazer a calculadora armazenar implicitamente os valores que serão calculados e fazer o cálculo
    constructor(){
        this.operador1=0;
        this.resultado=0;
        this.operacao="";
    }
    AdicionarNumeroNaLogicaInterna(numero){
        console.log("Número Adicionado");
    }
    AdicionarOperacaoNaLogicaInterna(display, operacao){
        // if calcular
        if(this.resultado === 0){
            this.operador1 = parseInt(GetDisplay(), 10);
        }
    }
}