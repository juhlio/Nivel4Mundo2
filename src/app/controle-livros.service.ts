import { Injectable } from '@angular/core';
import { Livro } from './livro'; 

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {
  livros: Array<Livro> = [
    { codigo: 1, codEditora: 1, titulo: 'Use a Cabeça: Java', resumo: 'Use a Cabeça! Java é uma experiência completa de aprendizado em programação orientada a objetos (OO) e java.', autores: ['Bert Bates', 'Kathy Sierra'] },
    { codigo: 2, codEditora: 2, titulo: 'Java, como Programar', resumo: 'Mihões de alunos e profissionais aprenderam programação e desenvolvimento de software com os livros Deitel.', autores: ['Paul Deitel', 'Harvey Deitel'] },
    { codigo: 3, codEditora: 3, titulo: 'Core Java for the Impatient', resumo: "Readers familiar with Horstmann's original, two-volume 'Core Java' books who are looking for a comprehensive, but condensed guide to all of the new features and functions of Java SE 9 will learn how thes new features impact the language and core libraries.", autores: ['Cay Horstmann'] }
  ];

  constructor() { }

  obterLivros(): Array<Livro> {
    return this.livros;
  }

  incluir(livro: Livro): void {
    const novoCodigo = this.obterProximoCodigo();
    livro.codigo = novoCodigo;
    this.livros.push(livro);
  }

  excluir(codigo: number): void {
    const index = this.livros.findIndex(livro => livro.codigo === codigo);
    if (index !== -1) {
      this.livros.splice(index, 1);
    }
  }

    obterProximoCodigo(): number {
    const codigos = this.livros.map(livro => livro.codigo);
    const maiorCodigo = Math.max(...codigos);
    return maiorCodigo + 1;
  }
}
