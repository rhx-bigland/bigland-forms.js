export const priceEventHandler = ({
  prefix = 'R$ ',
  float_separator = ',',
  thousands_separator = '.',
  onValue,
}) => {

  const float = RegExp('\\'+float_separator, 'gi');
  const thousands = RegExp('\\'+thousands_separator, 'gi');

  return ev => {

    ev.preventDefault();

    const current_value = ev.target.value;
    const parsed_value = parseInt(current_value.replace(/\D/g, ''));
    const raw_value = isNaN(parsed_value) ? '0' : '' + parsed_value;

    const int_value = raw_value.slice(0, -2);
    const dec_value = raw_value.slice(-2);

    const separated_int_value = int_value
      .split('').reverse()
      .map((v, i, a) => (
        (i) && (i != a.length -1) && (i % 3 === 2)
        ? thousands_separator + v
        : v
      ))
      .reverse()
      .join('');

    onValue(prefix + (
      int_value
      ? separated_int_value + float_separator + dec_value
      : '0' + float_separator + ('0' + dec_value).slice(-2)
    ));
  }
}

export function decoratePriceField({ query, ...options }) {

  [].forEach.call(document.querySelectorAll(query), node => {

    if (node.nodeName !== 'INPUT')
      return;

    node.addEventListener('input', priceEventHandler({
      ...options,
      onValue(value) { node.value = value; },
    }));
  });
}
