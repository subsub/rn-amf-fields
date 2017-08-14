import AmfTextInput from './AmfTextInput/AmfTextInput'
import AmfNumberInput from './AmfNumberInput/AmfNumberInput'
import AmfSelect from './AmfSelect/AmfSelect'
import AmfDatepicker from './AmfDatepicker/AmfDatepicker'
import AmfDateInput from './AmfDateInput/AmfDateInput'
import AmfField from './AmfField/AmfField'

import AmfTable from './AmfTable/AmfTable'
import numeral from 'numeral'

/**
 * sorry fo the hardcode
 *
 */

if (!numeral.locales.id) {
  numeral.register('locale', 'id', {
    delimiters: { thousands : '.', decimal : ',' },
    abbreviations: { thousand: 'k', million: 'm', billion: 'b', trillion: 't' },
    ordinal : i => '',
    currency: { symbol: 'Rp' }
  })
}

numeral.locale('id')

export { AmfTextInput, AmfNumberInput, AmfSelect, AmfDatepicker, AmfDateInput, AmfField, AmfTable }
