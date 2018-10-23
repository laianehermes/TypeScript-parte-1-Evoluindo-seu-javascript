class Negociacoes {
    constructor(_negociacoes = []) {
        this._negociacoes = _negociacoes;
    }
    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    }
    paraArray() {
        return [].concat(this._negociacoes);
    }
}
