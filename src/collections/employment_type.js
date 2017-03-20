const employment_type_map = {
  "CO": { "code": "CO", "label": "Contratado" },
  "TE": { "code": "TE", "label": "Temporário" },
  "VO": { "code": "VO", "label": "Voluntário" },
  "TR": { "code": "TR", "label": "Trainee" },
  "TC": { "code": "TC", "label": "Terceiro" },
  "RE": { "code": "RE", "label": "Aposentado" },
  "SE": { "code": "SE", "label": "Autônamo" },
  "FO": { "code": "FO", "label": "Estrangeiro" },
  "IN": { "code": "IN", "label": "Estagiário" },
  "MA": { "code": "MA", "label": "Menor Aprendiz" },
  "DI": { "code": "DI", "label": "PCD" },
  "PA": { "code": "PA", "label": "Sócio" }
};

const employment_type_legal_map = {
  "MA": { "code": "MA", "label": "Aprendizagem - Contrato de aprendizagem (Menor Aprendiz)" },
  "ES": { "code": "ES", "label": "Estágio - Contrato de estágio (Estágiário)" },
  "PJ": { "code": "PJ", "label": "PJ - Pessoa Jurídica" },
  "AU": { "code": "AU", "label": "Autônomo" },
  "BO": { "code": "BO", "label": "Bolsista" },
  "SO": { "code": "SO", "label": "Societário" },
  "ST": { "code": "ST", "label": "Estatuário" },
  "OO": { "code": "OO", "label": "Cooperativa" },
  "CL": { "code": "CL", "label": "CLT - Prazo indeterminado" },
  "CD": { "code": "CD", "label": "CLT - Prazo determinado - Contrato por obra certa" },
  "CS": { "code": "CS", "label": "CLT - Prazo determinado - Contrato por serviço determinado" },
  "CT": { "code": "CT", "label": "CLT - Prazo determinado - Contrato Temporário" },
  "CO": { "code": "CO", "label": "CLT Cotas" },
  "CF": { "code": "CF", "label": "CLT - Flex" },
  "MI": { "code": "MI", "label": "MEI - Contrato com Micro Empreendedor Individual" },
  "RP": { "code": "RP", "label": "RPA - Contrato com Recibo de Pagamento Autônomo" },
  "NC": { "code": "NC", "label": "Sem Contrato" },
  "TE": { "code": "TE", "label": "Terceirizado" },
  "VO": { "code": "VO", "label": "Voluntário" }
};

const employment_type_collection = Object.keys(employment_type_map).map(
  key => employment_type_map[key] );

const employment_type_legal_collection = Object.keys(employment_type_legal_map).map(
  key => employment_type_legal_map[key] );


const employment_type = {
  map: employment_type_map,
  collection: employment_type_collection
};

const employment_type_legal = {
  map: employment_type_legal_map,
  collection: employment_type_legal_collection
};

export {
  employment_type,
  employment_type_legal
};
