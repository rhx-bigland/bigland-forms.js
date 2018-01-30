import 'es6-promise/auto';

import collections from 'src/collections';
import { replaceSelectOptions } from 'src/fill-options';
import { decoratePriceField } from 'src/special-fields';

const select = Object
  .keys(collections)
  .reduce((map, key) => {
    map[key] = replaceSelectOptions.bind(null, collections[key].collection);
    return map;
  }, { });

const replaceAll = () => {
  select.cities({ query: '.bl-cities', allow_create: true });
  select.countries({ query: '.bl-countries' });
  select.disabilities({ query: '.bl-disabilities', allow_create: true });
  select.company_industries({ query: '.bl-company_industries' });
  select.education_level({ query: '.bl-education_level' });
  select.employment_type({ query: '.bl-employment_type' });
  select.gender({ query: '.bl-gender' });
  select.instituitions({ query: '.bl-instituitions', allow_create: true });
  select.job_functions({ query: '.bl-job_functions' });
  select.language_proficiencies({ query: '.bl-language_proficiencies' });
  select.marital_status({ query: '.bl-marital_status' });
  select.states({ query: '.bl-states' });
  select.raw({ query: '.bl-raw', allow_create: true });
  select.raw({ query: '.bl-school_name', allow_create: true });
  select.education_courses({ query: '.bl-courses', allow_create: true });
  select.education_modality({ query: '.bl-education_modality', allow_create: true });
  // teste build
  select.seniority_level({ query: '.bl-seniority_level' });

  decoratePriceField({ query: '.bl-price' });
}

const publicPackage = {
  collections,
  replaceAll,
  replaceSelectOptions,
  decoratePriceField,
  select
};

export default publicPackage;
export {
  collections,
  replaceAll,
  replaceSelectOptions,
  decoratePriceField,
  select,
};

document.addEventListener("DOMContentLoaded", (event) => {
  replaceAll();
});

process.env.NODE_ENV === 'development' && (
  console.log('BiglandForms'),
  console.log(publicPackage)
);
