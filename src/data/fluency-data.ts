export interface FluencyZone {
  id: string;
  name: string;
  summary: string;
  benefits: string[];
  investments: string[];
  questions: string[];
}

export const fluencyData: FluencyZone[] = [
  {
    id: "focar",
    name: "Focar",
    summary: "Equipes focadas produzem valor ao negócio, entendendo os fundamentos da agilidade.",
    benefits: [
      "Maior visibilidade sobre o trabalho da equipe.",
      "Habilidade para redirecionar o trabalho mensalmente.",
      "Redução de risco ao saber o que está sendo construído.",
      "Aumento do ROI ao focar no que é mais importante."
    ],
    investments: [
      "Dedicar de 2 a 6 meses de prática.",
      "Selecionar membros de equipe com disposição para trabalhar em conjunto.",
      "Treinar a equipe e os gestores nas proficiências de Focar.",
      "Garantir um representante do negócio disponível para a equipe."
    ],
    questions: [
      "Nossa equipe trabalha com um representante do negócio que fornece a perspectiva e as expectativas do negócio?",
      "Planejamos nosso trabalho em termos de valor para o negócio, e não apenas em tarefas técnicas?",
      "A equipe demonstra seu progresso para as partes interessadas pelo menos uma vez por mês?",
      "Nós, como equipe, compartilhamos a responsabilidade pelo plano, em vez de trabalhar como indivíduos separados?"
    ]
  },
  {
    id: "entregar",
    name: "Entregar",
    summary: "Equipes que entregam na cadência do mercado, com agilidade sustentável.",
    benefits: [
      "Menos defeitos em produção.",
      "Maior produtividade devido à baixa dívida técnica.",
      "Capacidade de liberar software para o mercado a qualquer momento que o negócio desejar."
    ],
    investments: [
      "Dedicar de 3 a 24 meses adicionais após a fluência em Focar.",
      "Alocar tempo para a equipe aprender novas habilidades técnicas (TDD, Integração Contínua, etc.).",
      "Engajar coaches profissionais para orientar a equipe no mundo real."
    ],
    questions: [
      "Nossa equipe pode liberar o software a qualquer momento, com risco e custo mínimos?",
      "Nosso código é de alta qualidade, com poucos defeitos, e não exige uma fase de teste manual extensa?",
      "As liberações em produção são automatizadas e levam no máximo dez minutos de esforço manual?",
      "Todas as habilidades necessárias para projetar, desenvolver, liberar e manter o produto estão imediatamente acessíveis na equipe?"
    ]
  },
  {
    id: "otimizar",
    name: "Otimizar",
    summary: "Equipes que otimizam o valor e lideram o mercado, compreendendo o que o mercado deseja.",
    benefits: [
      "Entregas de alto valor e melhores decisões de produtos.",
      "Capacidade de cancelar ou pivotar produtos e iniciativas de baixo valor.",
      "Antecipação das necessidades dos clientes e criação de novas oportunidades de negócio."
    ],
    investments: [
      "Dedicar de 1 a 5 anos para alcançar a fluência.",
      "Gastar capital social para mudar as decisões de negócio e a expertise para as equipes.",
      "Incorporar especialistas de negócio (gerentes de produto, marketing, etc.) como membros integrais da equipe.",
      "Dar às equipes a responsabilidade por seu orçamento, planos e resultados."
    ],
    questions: [
      "Nossa equipe compreende o que o mercado deseja e o que nosso negócio precisa para atender a essas necessidades?",
      "A equipe define suas próprias métricas de sucesso e tem planos para melhorar sua posição no mercado?",
      "A equipe coordena com a liderança para cancelar ou pivotar iniciativas de baixo valor?",
      "A equipe inclui especialistas de negócio que promovem decisões de custo e valor otimizadas?"
    ]
  },
  {
    id: "fortalecer",
    name: "Fortalecer",
    summary: "Equipes que fortalecem a organização, contribuindo para um sistema maior e mais bem-sucedido.",
    benefits: [
      "Aprendizagem entre equipes e decisões organizacionais mais eficazes.",
      "Capacidade de identificar e resolver gargalos entre organizações de forma antecipada.",
      "Otimização do fluxo de valor organizacional através da colaboração de múltiplas equipes."
    ],
    investments: [
      "Tempo e risco para desenvolver novas abordagens de gestão.",
      "Pesquisar e aplicar teorias de complexidade e design organizacional.",
      "Distribuir decisões direcionais entre as equipes.",
      "Fomentar uma cultura de disseminação de expertise e aprendizado contínuo entre equipes."
    ],
    questions: [
      "Nossa equipe compreende seu papel no sistema organizacional maior e trabalha para tornar o sistema mais bem-sucedido?",
      "Buscamos ativamente oportunidades para contribuir com nossas habilidades para outras equipes?",
      "Procuramos ativamente oportunidades para aprender com outras equipes?",
      "A equipe participa de atividades que otimizam o fluxo de valor em um nível organizacional?"
    ]
  }
];
