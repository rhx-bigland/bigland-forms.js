import uniqBy from 'lodash/uniqBy';
import axios from 'axios';

const s3Request = axios.create({
  baseURL: 'http://public.static.bigland.co.s3-website-sa-east-1.amazonaws.com'
});

/* Get a data- attribute */
const getDOMDataAttribute = (node, attr) => node.getAttribute('data-' + attr);


/* get the inner html for a select field from given collection */
const getOptionsHTML = (collection) => collection
  .map(item => {
    item.label = item.label.toLowerCase();
    return item;
  })
  .sort((a, b) => a.label > b.label ? 1 : -1)
  .reduce((html, { code, label }) => (

    html += `
<option value="${code}">${label}</option>`

  ), '<option value="">Selecione</option>');

const collectionsFutures = {};
const getCollectionFuture = ({ fetch, filter_value, collection }) => {

  if (!fetch || !filter_value)
    return Promise.resolve(collection);

  const path = `/${fetch}/${filter_value}.json`;

  if (collectionsFutures[path])
    return collectionsFutures[path];

  return (collectionsFutures[path] = s3Request
    .get(path)
    .then(res => res.data)
    .catch(err => ([ /* in case of errors return raw collection */ ])));
};

/* overwrite the select field inner html */
export function replaceSelectOptions(collection, { query, attach_events = true }) {

  const original_collection = collection;
  const nodes = document.querySelectorAll(query);

  [].forEach.call(nodes, node => {

    if (node.nodeName === 'SELECT') {

      const fetch = getDOMDataAttribute(node, 'fetch');
      const filter_attr = getDOMDataAttribute(node, 'filter-by');
      const filter_query = getDOMDataAttribute(node, 'filter-from');

      const filter_node = filter_query && document.querySelector(filter_query);
      const filter_value = filter_node && filter_node.value;

      const collection_future = getCollectionFuture({ fetch, filter_value, collection });

      collection_future
        .then(collection => {

          collection = uniqBy(collection, 'label');

          if (filter_query && filter_attr) {
            collection = collection.filter((item) => (
              item[filter_attr] === filter_value
            ));
          }

          if (filter_node && attach_events) {
            filter_node.addEventListener('change', () => {
              replaceSelectOptions(original_collection, { query, attach_events: false });
            });
          }

          node.innerHTML = getOptionsHTML(collection);

          if (process.env.SELECTIZE) {

            if (node.selectize) {
              node.selectize.clearOptions();
              node.selectize.load(callback => callback(collection));

            } else {
              $(node).selectize({
                create: true,
                valueField: 'code',
                labelField: 'label',
                searchField: ['label'],
                onChange: () => node.dispatchEvent(new Event('change'))
              });
            }
          };
        })
        .catch(err => { /* not found, let the user add */ });
    }
  });
}
