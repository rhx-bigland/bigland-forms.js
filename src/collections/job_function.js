const job_function = {
  "acct": { code: "acct", label: "Contabilidade" },
  "admn": { code: "admn", label: "Administrativo" },
  "cre": { code: "cre", label: "Arte e Design" },
  "bd": { code: "bd", label: "Desenvolvimento Comercial" },
  "css": { code: "css", label: "Serviços Sociais e Comunitários" },
  "cnsl": { code: "cnsl", label: "Consultorias" },
  "edu": { code: "edu", label: "Educação" },
  "eng": { code: "eng", label: "Engenharia" },
  "ent": { code: "ent", label: "Empreendedorismo" },
  "finc": { code: "finc", label: "Financeiro" },
  "med": { code: "med", label: "Saúde" },
  "hr": { code: "hr", label: "Recusos Humanos" },
  "it": { code: "it", label: "Tecnologia da Informação" },
  "lgl": { code: "lgl", label: "Jurídico" },
  "mktg": { code: "mktg", label: "Marketing" },
  "pr": { code: "pr", label: "Mídia e Comunicação" },
  "mps": { code: "mps", label: "Serviços de Proteção e Militares" },
  "ops": { code: "ops", label: "Operações" },
  "prod": { code: "prod", label: "Gestão de Produtos" },
  "ppm": { code: "ppm", label: "Gestão de Projetos" },
  "buy": { code: "buy", label: "Compras" },
  "qa": { code: "qa", label: "Controle de Qualidade" },
  "re": { code: "re", label: "Imobiliário" },
  "acad": { code: "acad", label: "Pesquisa" },
  "sale": { code: "sale", label: "Vendas" },
  "supp": { code: "supp", label: "Suporte" }
};

const job_function_collection = Object.keys(job_function).map(
    key => job_function[key] );

export {
  job_function as map,
  job_function_collection as collection,
};
