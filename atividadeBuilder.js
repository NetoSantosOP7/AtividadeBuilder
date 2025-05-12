class BuilderRelatorio {
    setNomeArquivo(nome) {

    }
    setDados(conteudo) {

    }
    getRelatorio() {

    }
}



class BuildarHTML extends BuilderRelatorio {
    constructor() {
        super()
        this.relatorio = {}
    }

    setNomeArquivo(nome) {
        this.relatorio.nome = nome + ".html"
    }

    setDados(conteudo) {
        this.relatorio.conteudo = "<body/>" + conteudo + "</body>"
    }

    getRelatorio() {
        return this.relatorio
    }
}

class BuildarCrystalReport extends BuilderRelatorio {
    constructor(formatoArquivo) {
        super()
        this.formatoArquivo = formatoArquivo
        this.relatorio = {}
    }

    setNomeArquivo(nome) {
        this.relatorio.nome = nome + this.formatoArquivo
    }

    setDados(conteudo) {
        this.relatorio.conteudo = `CrystalReport(${conteudo})`
    }

    getRelatorio() {
        return this.relatorio
    }
}

class BuildarPDF extends BuilderRelatorio {
    constructor() {
        super()
        this.relatorio = {}
    }

    setNomeArquivo(nome) {
        this.relatorio.nome = nome + ".pdf"
    }

    setDados(conteudo) {
        this.relatorio.conteudo = `O conteúdo do PDF é: ${conteudo}`
    }

    getRelatorio() {
        return this.relatorio
    }
}

class builderGenerico {
    constructor(builder) {
        this.builder = builder
    }

    construir(nome, conteudo) {
        this.builder.setNomeArquivo(nome)
        this.builder.setDados(conteudo)
        return this.builder.getRelatorio()
    }
}

const HTMLbuilder = new BuildarHTML()
const genericoHTML = new builderGenerico(HTMLbuilder)
const relatorioHTML = genericoHTML.construir("relatorio", "<dados>Exemplo</dados>")

const PDFbuilder = new BuildarPDF()
const genericoPDF = new builderGenerico(PDFbuilder)
const relatorioPDF = genericoPDF.construir("relatorio", "<dados>Exemplo</dados>")

const crystalBuilder = new BuildarCrystalReport(".algumtipoai")
const genericoCrystal = new builderGenerico(crystalBuilder)
const relatorioCrystal = genericoCrystal.construir("relatorio", "<dados>Exemplo</dados>")

console.log(relatorioHTML)
console.log(relatorioPDF)
console.log(relatorioCrystal)