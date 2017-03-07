export function decoratePriceField({
  query,
  prefix = 'R$ ',
  float_separator = ',',
  thousands_separator = '.',
}) {

  const float = RegExp('\\'+float_separator, 'gi');
  const thousands = RegExp('\\'+thousands_separator, 'gi');

  const nodes = document.querySelectorAll(query);

  [].forEach.call(nodes, node => {

    if (node.nodeName !== 'INPUT')
      return;

    node.addEventListener('input', (ev) => {

      ev.preventDefault();

      const current_value = node.value;
      const parsed_value = parseInt(current_value.replace(/\D/g, ''));
      const raw_value = isNaN(parsed_value) ? '0' : '' + parsed_value;

      const int_value = raw_value.slice(0, -2);
      const dec_value = raw_value.slice(-2);

      const separated_int_value = int_value
        .split('')
        .reverse()
        .reduce((s, v, i) => {
          return s += (i && i%3 === 0 ? (thousands_separator + v) : v )
        }, '')
        .split("")
        .reverse()
        .join('');

      node.value = prefix + (
        int_value
        ? separated_int_value + float_separator + dec_value
        : '0' + float_separator + ('0' + dec_value).slice(-2)
      );
    });
  });
}
