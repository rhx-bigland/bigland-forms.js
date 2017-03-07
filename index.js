import 'es6-promise/auto';

import collections from 'src/collections';
import { replaceSelectOptions } from 'src/fill-options';
import { decoratePriceField } from 'src/special-fields';

const boundHelpers = Object
  .keys(collections)
  .reduce((map, key) => {
    map[key] = replaceSelectOptions.bind(null, collections[key].collection);
    return map;
  }, { });

const replaceAll = () => {
  boundHelpers.cities({ query: '.bl-cities' });
  boundHelpers.countries({ query: '.bl-countries' });
  boundHelpers.disabilities({ query: '.bl-disabilities' });
  boundHelpers.company_industries({ query: '.bl-company_industries' });
  boundHelpers.education_level({ query: '.bl-education_level' });
  boundHelpers.employment_type({ query: '.bl-employment_type' });
  boundHelpers.gender({ query: '.bl-gender' });
  boundHelpers.instituitions({ query: '.bl-instituitions' });
  boundHelpers.job_functions({ query: '.bl-job_functions' });
  boundHelpers.language_proficiencies({ query: '.bl-language_proficiencies' });
  boundHelpers.marital_status({ query: '.bl-marital_status' });
  boundHelpers.states({ query: '.bl-states' });
  boundHelpers.raw({ query: '.bl-school_name' });
  boundHelpers.raw({ query: '.bl-courses' });
  decoratePriceField({ query: '.bl-price' })
}

const publicPackage = {
  collections,
  replaceAll,
  replaceSelectOptions,
  select: boundHelpers
};

export default publicPackage;

document.addEventListener("DOMContentLoaded", (event) => {
  replaceAll();
});

process.env.NODE_ENV === 'development' && (
  console.log('BiglandForms'),
  console.log(publicPackage)
);
