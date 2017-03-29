import numeral from 'numeral';

const singularOptions = {
  delimiters: {
    thousands: '.',
    decimal: ',',
  },
  abbreviations: {
    thousand: 'mil',
    million: 'milhão',
    billion: 'bilhão',
    trillion: 'trilhão',
  },
  ordinal() {
    return 'º';
  },
  currency: {
    symbol: 'R$',
  },
};
const pluralOptions = {
  delimiters: {
    thousands: '.',
    decimal: ',',
  },
  abbreviations: {
    thousand: 'mil',
    million: 'milhões',
    billion: 'bilhões',
    trillion: 'trilhões',
  },
  ordinal() {
    return 'º';
  },
  currency: {
    symbol: 'R$',
  },
};

numeral.language('pt', pluralOptions);

numeral.language('pt');

export default {
  format: (value, options) => {
    const newOptions = Object.assign({
      symbol: 'R$ ',
      precision: '00',
      thousands: ',',
      decimal: '.',
    }, options);

    if (value === undefined) {
      return '';
    }

    return numeral(value)
      .format(`${newOptions.symbol}0${newOptions.thousands}0${newOptions.decimal}${newOptions.precision}`);
  },

  formatSuitability: (value, options) => {
    const newOptions = Object.assign({
      symbol: 'R$ ',
      precision: '00',
      thousands: ',',
      decimal: '.',
    }, options);

    if (value === undefined) {
      return '';
    }

    return numeral(value)
      .format(`${newOptions.symbol}0${newOptions.thousands}0${newOptions.decimal}`);
  },

  shorten: (value) => {
    //  If < 1.1 millions change to singular
    if (value < 2000000) {
      numeral.language('pt', singularOptions);
      numeral.language('pt');
    } else {
      numeral.language('pt', pluralOptions);
      numeral.language('pt');
    }
    return numeral(value).format(value >= 1000000 ? '0.[0] a' : '0 a');
  },
};
