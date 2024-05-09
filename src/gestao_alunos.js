// Array de objetos com nome e nota dos alunos
const alunos = [
    { nome: 'Ana', nota: 7 },
    { nome: 'Bruno', nota: 5 },
    { nome: 'Carla', nota: 9 },
    { nome: 'Daniel', nota: 4 },
    { nome: 'Elaine', nota: 6 },
  ];
  
  // Função para filtrar alunos com nota maior ou igual a 6
  function alunosAprovados(alunos) {
    return alunos.filter(aluno => aluno.nota >= 6);
  }
  
  // Chamando a função e exibindo o resultado
  const aprovados = alunosAprovados(alunos);
  console.log(aprovados);