import { renderSearchFormBlock } from './search-form.js'
import { renderSearchStubBlock } from './search-results.js'
import { renderUserBlock } from './user.js'
import { renderToast } from './lib.js'
import moment from './moment.js'
import { defaultDateFrom, defaultDateTo } from './dates.js'

window.addEventListener('DOMContentLoaded', () => {
  renderUserBlock('Irina', '/img/avatar.png', 2)
  renderSearchFormBlock(defaultDateFrom, defaultDateTo)
  renderSearchStubBlock()
  renderToast(
    {text: 'Это пример уведомления. Используйте его при необходимости', type: 'success'},
    {name: 'Понял', handler: () => {console.log('Уведомление закрыто')}}
  )
})
