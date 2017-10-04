const education_modality = {
  "EPR": { "label": "Presencial", "code": "EPR" },
  "EAD": { "label": "A distância", "code": "EAD" },
}

const education_modality_code = Object.values(education_modality);

export {
  education_modality as map,
  education_modality_code as collection
};
