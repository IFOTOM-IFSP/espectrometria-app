export type GlossaryItem = {
  id: string;
  term: string;
  definition: string;
  theme: string; // Nova propriedade para o tema
};

export const glossaryData: GlossaryItem[] = [
  // Termos existentes
  {
    id: "1",
    term: "Absorbância (A)",
    definition: "Medida logarítmica da quantidade de luz absorvida por uma amostra a um comprimento de onda específico.",
    theme: "Conceitos Fundamentais",
  },
  {
    id: "2",
    term: "Transmitância (T)",
    definition: "Fração da luz incidente que passa através da amostra sem ser absorvida, geralmente expressa em porcentagem (%).",
    theme: "Conceitos Fundamentais",
  },
  {
    id: "3",
    term: "Espectro de Absorção",
    definition: "Gráfico que representa a absorbância de uma substância em função do comprimento de onda, revelando os picos de absorção.",
    theme: "Conceitos Fundamentais",
  },
  {
    id: "4",
    term: "Curva de Calibração",
    definition: "Gráfico que relaciona a absorbância medida de soluções padrão com suas concentrações conhecidas, usado para determinar a concentração de amostras desconhecidas.",
    theme: "Análise Quantitativa",
  },
  {
    id: "5",
    term: "Cuveta",
    definition: "Pequeno recipiente transparente de quartzo ou plástico onde a amostra é colocada para análise no espectrofotômetro.",
    theme: "Instrumentação",
  },
  {
    id: "6",
    term: "Espectrofotômetro",
    definition: "Instrumento analítico que mede a intensidade da luz absorvida ou transmitida por uma amostra líquida ou sólida.",
    theme: "Instrumentação",
  },
  {
    id: "7",
    term: "Comprimento de Onda (λ)",
    definition: "Distância entre cristas consecutivas de uma onda. Na espectrofotometria, define a cor específica da luz usada na análise.",
    theme: "Propriedades da Luz",
  },
  {
    id: "8",
    term: "Lei de Beer-Lambert",
    definition: "Princípio fundamental que afirma que a absorbância é diretamente proporcional à concentração do analito e ao caminho óptico da luz através da amostra.",
    theme: "Conceitos Fundamentais",
  },
  {
    id: "9",
    term: "Branco (Blank)",
    definition: "Amostra contendo todos os componentes da solução, exceto o analito. É usada para zerar o espectrofotômetro e eliminar a absorbância de fundo.",
    theme: "Procedimentos de Laboratório",
  },
  {
    id: "10",
    term: "Analito",
    definition: "A substância de interesse que está sendo identificada ou quantificada em uma amostra.",
    theme: "Conceitos Fundamentais",
  },
  {
    id: "11",
    term: "Calibração",
    definition: "Processo de ajustar um instrumento ou método analítico para garantir que suas medições sejam precisas e exatas.",
    theme: "Procedimentos de Laboratório",
  },
  {
    id: "12",
    term: "Espectrofotometria UV-Vis",
    definition: "Técnica que utiliza a região ultravioleta (UV) e visível (Vis) do espectro eletromagnético para análises quantitativas e qualitativas.",
    theme: "Conceitos Fundamentais",
  },
  {
    id: "13",
    term: "Diluição",
    definition: "Processo de reduzir a concentração de uma solução pela adição de mais solvente. É feita quando a amostra é muito concentrada para a faixa linear do equipamento.",
    theme: "Procedimentos de Laboratório",
  },
  {
    id: "14",
    term: "Pico de Absorção (λmax)",
    definition: "O comprimento de onda no qual uma substância apresenta sua absorbância máxima, proporcionando a maior sensibilidade para a análise.",
    theme: "Análise de Dados",
  },
  {
    id: "15",
    term: "Linha de Base",
    definition: "Sinal medido pelo detector na ausência de absorção pelo analito, usado como referência para corrigir o espectro.",
    theme: "Análise de Dados",
  },
  {
    id: "16",
    term: "Espectro",
    definition: "Representação gráfica da intensidade da radiação (absorvida, emitida ou transmitida) em função do comprimento de onda ou frequência.",
    theme: "Conceitos Fundamentais",
  },
  {
    id: "17",
    term: "Fotodetector",
    definition: "Componente sensível à luz dentro do espectrofotômetro que converte a intensidade luminosa em um sinal elétrico mensurável.",
    theme: "Instrumentação",
  },
  {
    id: "18",
    term: "Monocromador",
    definition: "Dispositivo óptico (como um prisma ou grade de difração) que seleciona um comprimento de onda específico da fonte de luz para passar pela amostra.",
    theme: "Instrumentação",
  },
  {
    id: "19",
    term: "Luz Visível",
    definition: "A porção do espectro eletromagnético que é visível ao olho humano, tipicamente entre 400 nm e 700 nm.",
    theme: "Propriedades da Luz",
  },
  {
    id: "20",
    term: "Solvente",
    definition: "Líquido no qual o analito é dissolvido para formar uma solução. O solvente ideal não absorve luz no comprimento de onda de análise.",
    theme: "Procedimentos de Laboratório",
  },
  {
    id: "21",
    term: "Absortividade Molar (ε)",
    definition: "Constante de proporcionalidade da Lei de Beer-Lambert que mede a intensidade com que uma substância absorve luz em um determinado comprimento de onda. É uma característica intrínseca da molécula.",
    theme: "Análise Quantitativa",
  },
  {
    id: "22",
    term: "Luz Espúria (Stray Light)",
    definition: "Radiação indesejada que atinge o detector sem passar pela amostra, causando desvios negativos na absorbância, especialmente em valores altos.",
    theme: "Instrumentação",
  },
  {
    id: "23",
    term: "Ruído (Noise)",
    definition: "Flutuações aleatórias e de curto prazo no sinal do detector, que afetam a precisão das leituras, principalmente em baixas concentrações.",
    theme: "Análise de Dados",
  },
  {
    id: "24",
    term: "Ponto Isosbéstico",
    definition: "Comprimento de onda específico no qual a absorbância total de uma amostra permanece constante durante uma reação química, indicando um equilíbrio entre duas espécies.",
    theme: "Análise Quantitativa",
  },
  {
    id: "25",
    term: "Cinética Química",
    definition: "O estudo da velocidade das reações químicas. A espectrofotometria é frequentemente usada para monitorar a mudança na concentração de reagentes ou produtos ao longo do tempo.",
    theme: "Análise Quantitativa",
  },
  {
    id: "26",
    term: "Coeficiente de Correlação (R²)",
    definition: "Valor estatístico (entre 0 e 1) que indica o quão bem a curva de calibração se ajusta aos dados experimentais. Valores próximos a 1 indicam um bom ajuste.",
    theme: "Análise de Dados",
  },
  {
    id: "27",
    term: "Limite de Detecção (LOD)",
    definition: "A menor concentração de um analito que pode ser detectada de forma confiável, embora não necessariamente quantificada com precisão.",
    theme: "Análise de Dados",
  },
  {
    id: "28",
    term: "Limite de Quantificação (LOQ)",
    definition: "A menor concentração de um analito que pode ser determinada com um nível aceitável de precisão e exatidão.",
    theme: "Análise de Dados",
  },
  {
    id: "29",
    term: "Solução Padrão",
    definition: "Uma solução que contém uma concentração precisamente conhecida de um analito, usada como referência para a calibração.",
    theme: "Procedimentos de Laboratório",
  },
  {
    id: "30",
    term: "Alíquota",
    definition: "Uma porção ou volume medido e representativo de uma amostra maior, usado para análise ou diluição.",
    theme: "Procedimentos de Laboratório",
  },
  {
    id: "31",
    term: "Cromóforo",
    definition: "A parte de uma molécula (um átomo ou grupo de átomos) que é responsável pela absorção de luz na região UV-Vis.",
    theme: "Propriedades da Luz",
  },
  {
    id: "32",
    term: "Faixa Linear",
    definition: "O intervalo de concentrações no qual a absorbância é diretamente proporcional à concentração, conforme previsto pela Lei de Beer-Lambert.",
    theme: "Análise de Dados",
  },
  {
    id: "33",
    term: "Solução Tampão (Buffer)",
    definition: "Uma solução que resiste a variações de pH. É usada para manter o pH constante, o que pode ser crucial para a estabilidade do analito.",
    theme: "Procedimentos de Laboratório",
  },
  {
    id: "34",
    term: "Fonte de Luz",
    definition: "O componente que emite a radiação eletromagnética, como uma lâmpada de tungstênio (para luz visível) ou uma lâmpada de deutério (para luz UV).",
    theme: "Instrumentação",
  },
  {
    id: "35",
    term: "Caminho Óptico (b)",
    definition: "A distância que a luz percorre através da amostra dentro da cuveta, geralmente padronizada em 1 cm.",
    theme: "Instrumentação",
  },
];
