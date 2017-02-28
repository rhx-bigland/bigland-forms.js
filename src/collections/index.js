import * as raw from 'src/collections/raw';

import * as job_functions from 'src/collections/job_function';
import * as instituitions from 'src/collections/instituition';
import * as languages from 'src/collections/language';
import * as language_proficiencies from 'src/collections/language_proficiency';
import * as company_industries from 'src/collections/industry';
import * as states from 'src/collections/states';
import * as cities from 'src/collections/cities';

import {
  employment_type,
  employment_type_legal
} from 'src/collections/employment_type';

import {
  marital_status,
  gender,
  education_level,
  seniority_level,
  document_types
} from 'src/collections/user';

export default {
  raw,
  states,
  cities,
  employment_type,
  employment_type_legal,
  marital_status,
  gender,
  education_level,
  seniority_level,
  document_types,
  instituitions,
  job_functions,
  language_proficiencies,
  languages,
  company_industries,
};
