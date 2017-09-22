import uniqBy from 'lodash/uniqBy';
import extend from 'lodash/extend';
import findIndex from 'lodash/findIndex';
import axios from 'axios';

const s3Request = axios.create({
  baseURL: 'http://public.static.bigland.co.s3-website-sa-east-1.amazonaws.com'
});

/* Get a data- attribute */
const getDOMDataAttribute = (node, attr) => node.getAttribute('data-' + attr);
const unsetDOMDataAttribute = (node, attr) => node.setAttribute('data-' + attr);
const setDOMDataAttribute = (node, attr, value) => {
  getDOMDataAttribute(node, attr) !== value && node.setAttribute('data-' + attr, value)
};


/* get the inner html for a select field from given collection */
const getOptionsHTML = (collection = [], value) => {

  if (value && findIndex(collection, { code: `${value}` }) === -1) {
    collection.push({
      code: `${value}`,
      label: `${value}`
    });
  }

  const parsed_collections = collection
    .map(item => {
      item.label = item.label.toLowerCase();
      return item;
    })
    .sort((a, b) => a.label > b.label ? 1 : -1)
    .reduce((html, { code, label }) => (

      html += `
<option value="${code}">${label}</option>`

    ), '<option value="">Selecione</option>');

  return parsed_collections;
}

const collectionsFutures = {};
const getCollectionFuture = ({ fetch, filter_value, collection }) => {

  if (!fetch)
    return Promise.resolve(collection);

  const path = `/${fetch}/${filter_value || 'default'}.json`;

  if (collectionsFutures[path])
    return collectionsFutures[path];

  return (collectionsFutures[path] = s3Request
    .get(path)
    .then(res => res.data)
    .catch(err => ([ /* in case of errors return raw collection */ ])));
};

/* overwrite the select field inner html */
export function replaceSelectOptions(collection, options = {}) {

  const {
    query,
    allow_create = false,
    attach_events = true
  } = options;

  const original_collection = collection;
  const nodes = document.querySelectorAll(query);

  [].forEach.call(nodes, node => {

    if (node.nodeName === 'SELECT') {

      const fetch = getDOMDataAttribute(node, 'fetch');
      const value = getDOMDataAttribute(node, 'value');
      const filter_attr = getDOMDataAttribute(node, 'filter-by');
      const filter_query = getDOMDataAttribute(node, 'filter-from');

      const filter_node = filter_query && document.querySelector(filter_query);
      const filter_value = filter_node && getDOMDataAttribute(filter_node, 'value');

      const collection_future = getCollectionFuture({ fetch, filter_value, collection });

      collection_future
        .then(collection => {

          collection = uniqBy(collection, 'label');

          if (filter_query && filter_attr) {
            collection = collection.filter((item) => (
              item[filter_attr] === filter_value
            ));
          }

          if (node.selectize) {

            if (!value)
              node.selectize.clearOptions();

            node.selectize.load(function (callback) {

              collection = collection || [];

              if (value && findIndex(collection, { code: `${value}` }) === -1) {
                collection.push({
                  code: `${value}`,
                  label: `${value}`
                });
              }

              return callback(collection);
            });

            if (value && (node.selectize.getValue() !== value))
              node.selectize.setValue(value);

            /* FIND A WAY TO CLEAR OPTIONS, REFRESH AND THAN SET THE OLD VALUE
            node.selectize.clearOptions();

            node.selectize.on('load', () => (
              node.selectize.setValue(value),
              node.selectize.off('load')
            ));
             */

          } else {

            if (filter_node && attach_events) {

              filter_node.addEventListener('selectize_change', () => (
                replaceSelectOptions(collection, extend({}, options, { attach_events: false }))));

              setTimeout(() =>
                replaceSelectOptions(collection, extend({}, options, { attach_events: false })));
            }

            if (attach_events) {
              var observer = new MutationObserver((mutations) => mutations.forEach((mutation) => {
                const next_value = getDOMDataAttribute(node, 'value');
                replaceSelectOptions(collection, extend({}, options, { attach_events: false }))
                node.dispatchEvent(
                  new CustomEvent('selectize_change', { detail: next_value }));
              }));

              observer.observe(node, { attribute: true, attributeFilter: ['data-value'] });
            }

            node.innerHTML = getOptionsHTML(collection, value);

            var instance = $(node).selectize({
              create: allow_create,
              valueField: 'code',
              labelField: 'label',
              searchField: ['label'],
              onChange: (ev) => {
                const next_value = node.selectize.getValue();
                if (getDOMDataAttribute(node, 'value') === next_value)
                  return;

                setDOMDataAttribute(node, 'value', next_value);
                node.dispatchEvent(
                  new CustomEvent('selectize_change', { detail: next_value }));
              }
            });

            var instance_api = instance[0].selectize;

            if (value && (instance_api.getValue() !== value))
              instance_api.setValue(value);

            node.dispatchEvent(
              new CustomEvent('selectize', { detail: instance_api }));

            setDOMDataAttribute(node, 'initialized', true);
          };
        })
        .catch(err => { /* not found, let the user add */ });
    }
  });
}
