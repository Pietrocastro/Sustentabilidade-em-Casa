let dados = [
    {
        area: "Cozinha",
        descricao: "Use garrafas reutilizáveis e evite produtos descartáveis para reduzir o desperdício.",
        link: "https://preserve.rj.def.br/2022/04/04/use-a-sua-propria-garrafa-reutilizavel/#:~:text=Um%20estudo%20recente%20revelou%20que,descartáveis%20ao%20longo%20do%20dia.",
        tags: "garrafas reutilizáveis, produtos descartáveis, redução de desperdício"
    },
    {
        area: "Cozinha",
        descricao: "Composte restos de alimentos para criar adubo orgânico e reduzir o lixo.",
        link: "https://portais.univasf.edu.br/sustentabilidade/noticias-sustentaveis/o-que-e-compostagem-e-como-faze-la-em-casa#:~:text=A%20compostagem%2C%20conhecida%20como%20o,a%20redução%20do%20aquecimento%20global.",
        tags: "compostagem, restos de alimentos, adubo orgânico"
    },
    {
        area: "Cozinha",
        descricao: "Use panelas de pressão para cozinhar mais rápido e economizar energia.",
        link: "https://www.ultragaz.com.br/dicas-para-economizar-gas-de-cozinha-no-seu-dia-a-dia/#:~:text=Utilize%20panelas%20de%20pressão,refeições%20saborosas%20em%20menos%20tempo.",
        tags: "panelas de pressão, economia de energia, cozinha eficiente"
    },
    {
        area: "Cozinha",
        descricao: "Prefira utensílios de cozinha feitos de materiais duráveis e sustentáveis, como madeira certificada.",
        link: "https://organizercunha.com.br/troqueaesponjadecozinhaemais/",
        tags: "utensílios duráveis, madeira certificada, sustentabilidade"
    },
    {
        area: "Cozinha",
        descricao: "Utilize eletrodomésticos com eficiência energética para reduzir o consumo de energia.",
        link: "https://idec.org.br/edasuaconta/eficiencia",
        tags: "eficiência energética, eletrodomésticos, economia de energia"
    },
    
    {
        area: "Banheiro",
        descricao: "Opte por toalhas e roupas de cama feitas de algodão orgânico para reduzir o impacto ambiental.",
        link: "https://startmovin.com/blogs/news/quais-beneficios-algodao-organico?srsltid=AfmBOorHkPTHd0YLCt-vDQxbKFXqYDhiog3Zrcfmf8IXEBBpzNIlOmBV",
        tags: "algodão orgânico, roupas sustentáveis, impacto ambiental"
    },
    {
        area: "Banheiro",
        descricao: "Instale um chuveiro com economia de água para reduzir o consumo.",
        link: "https://fpe.eng.br/como-economizar-mais-de-10-mil-litros-de-agua-por-mes-e-ainda-reduzir-o-consumo-de-energia-eletrica-e-gas-no-banho/",
        tags: "chuveiro, economia de água, conservação"
    },
    {
        area: "Banheiro",
        descricao: "Use sabonetes líquidos em embalagens recicláveis para minimizar o uso de plástico.",
        link: "https://www.brazilbeautynews.com/refis-reduzem-em-mais-de-80-o-plastico-usado-na,3828#:~:text=“Começamos%20pelos%20sabonetes%20líquidos%2C%20que,plástico%2C%20comparando%20à%20embalagem%20original.",
        tags: "sabonetes líquidos, embalagens recicláveis, redução de plástico"
    },
    {
        area: "Banheiro",
        descricao: "Instale torneiras com arejadores para reduzir o fluxo de água sem perder a eficiência.",
        link: "https://sustentarqui.com.br/instale-arejadores-nas-torneiras-e-nos-chuveiros/",
        tags: "torneiras com arejadores, redução de fluxo, economia de água"
    },
    {
        area: "Banheiro",
        descricao: "Reduza o tempo no chuveiro (demore até 10 minutos) para economizar água e energia.",
        link: "https://www.saopaulo.sp.gov.br/spnoticias/ultimas-noticias/veja-10-dicas-para-economizar-agua-no-banheiro/",
        tags: "tempo de banho, economia de água, conservação de energia"
    },
    {
        area: "Sala de Estar",
        descricao: "Use lâmpadas LED para economizar energia elétrica.",
        link: "https://extra.globo.com/economia-e-financas/lampadas-led-geram-economia-de-ate-85-em-relacao-as-incadescentes-entenda-25551472.html#:~:text=—%20Uma%20lâmpada%20LED%20chega%20a,mais%20luz%20por%20menos%20consumo.",
        tags: "lâmpadas LED, economia de energia, iluminação eficiente"
    },
    {
        area: "Sala de Estar",
        descricao: "Aproveite a luz natural sempre que possível para economizar energia.",
        link: "https://g1.globo.com/pernambuco/especial-publicitario/celpe/desligue-o-desperdicio/noticia/2016/05/como-aproveitar-luz-natural-para-economizar-energia.html",
        tags: "luz natural, economia de energia, iluminação natural"
    },
    {
        area: "Sala de Estar",
        descricao: "Desligue aparelhos eletrônicos quando não estiverem em uso para evitar consumo fantasma.",
        link: "https://g1.globo.com/pernambuco/especial-publicitario/celpe/desligue-o-desperdicio/noticia/2016/06/evite-carga-fantasma-dos-seus-equipamentos-e-economize-energia.html",
        tags: "aparelhos eletrônicos, consumo fantasma, economia de energia"
    },
    {
        area: "Sala de Estar",
        descricao: "Recicle jornais, revistas e outros papéis para reduzir o lixo e reutilizar materiais.",
        link: "https://ondereciclar.pt/noticias/9-formas-de-reciclar-e-reduzir-residuos-nas-escolas",
        tags: "reciclagem, papéis, redução de lixo"
    },
    {
        area: "Sala de Estar",
        descricao: "Utilize móveis reciclados ou de segunda mão para reduzir o impacto ambiental da fabricação de novos produtos.",
        link: "https://mastertopatudo.com.br/os-beneficios-do-uso-de-moveis-usados-para-reciclagem/#:~:text=Sustentabilidade%20e%20Responsabilidade%3A%20Optar%20por,à%20fabricação%20de%20novos%20móveis.",
        tags: "móveis reciclados, móveis de segunda mão, impacto ambiental"
    },

    {
        area: "Jardim",
        descricao: "Plante árvores para melhorar a qualidade do ar e reduzir a temperatura ao redor da casa.",
        link: "https://180engenharia.com.br/blog/plantas-que-reduzem-o-calor-e-refrescam-a-casa/",
        tags: "plantar árvores, qualidade do ar, vegetação"
    },
    {
        area: "Jardim",
        descricao: "Instale um sistema de coleta de água da chuva para irrigação das plantas.",
        link: "https://casologica.com.br/como-montar-uma-cisterna-para-coletar-agua-da-chuva/?srsltid=AfmBOop7t7hRxnuQEQs6BcRJWM9ySiqNMjiDBHMUQ1E50Fv_yojVkhaE",
        tags: "coleta de água da chuva, irrigação, sustentabilidade"
    },
    {
        area: "Jardim",
        descricao: "Use plantas nativas que exigem menos água e são mais resistentes a pragas.",
        link: "https://www.ecycle.com.br/plantas-que-precisam-de-pouca-agua/",
        tags: "plantas nativas, conservação de água, jardinagem sustentável"
    },
    {
        area: "Jardim",
        descricao: "Crie um jardim vertical para otimizar o espaço e melhorar a qualidade do ar.",
        link: "https://blog.acrilicoscentauri.com.br/como-fazer-um-jardim-vertical/",
        tags: "jardim vertical, otimização de espaço, qualidade do ar"
    },
    {
        area: "Jardim",
        descricao: "Utilize compostagem para fertilizar o solo e reduzir o desperdício orgânico.",
        link: "https://www.unep.org/pt-br/noticias-e-reportagens/reportagem/como-compostagem-pode-reduzir-nosso-impacto-no-planeta",
        tags: "compostagem, fertilização do solo, desperdício orgânico"
    }
];
