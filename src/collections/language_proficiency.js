/* languague proficiency */
const languages_proficiency_level = {
  'EL': { code: 'EL', label: 'Básico' },
  'LW': { code: 'LW', label: 'Intermediário' },
  'PW': { code: 'PW', label: 'Técnico' },
  'FP': { code: 'FP', label: 'Avançado' },
  'NO': { code: 'NB', label: 'Nativo' }
};

const languages_proficiency_level_collection = Object.keys(languages_proficiency_level).map(
    key => languages_proficiency_level[key] );

export {
    languages_proficiency_level as map,
    languages_proficiency_level_collection as collection
};
