const employment_type_map = {
  'FT': { code: 'FT', label: "Período Integral" },
  'PT': { code: 'PT', label: "Meio Período" },
  'CO': { code: 'CO', label: "Contratado" },
  'TE': { code: 'TE', label: "Temporário" },
  'VO': { code: 'VO', label: "Voluntário" },
  'TR': { code: 'TR', label: "Trainee" },
  'TC': { code: 'TC', label: "Terceiro" },
  'RE': { code: 'RE', label: "Aposentado" },
  'SE': { code: 'SE', label: "Autônamo" },
  'FO': { code: 'FO', label: "Estrangeiro" },
  'OT': { code: 'OT', label: "Outros" }
};

const employment_type_legal_map = {
  'MA': { code: 'MA', label: "Menor Aprendiz" },
  'ES': { code: 'ES', label: "Estágio" },
  'CL': { code: 'CL', label: "CLT" },
  'PJ': { code: 'PJ', label: "PJ" },
  'SO': { code: 'SO', label: "Societário" },
  'ET': { code: 'ES', label: "Estatuário" },
  'CF': { code: 'CF', label: "CLT - Flex" }
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
