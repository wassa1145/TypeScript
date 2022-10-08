import { renderSearchFormBlock } from './search-form.js'
import { renderSearchStubBlock } from './search-results.js'
import { getFavoritesAmount, getUserData, renderUserBlock } from './user.js'
import { renderToast } from './lib.js'
import { defaultDateFrom, defaultDateTo } from './dates.js'
import { formHandler } from './search-form-handler.js'

window.addEventListener('DOMContentLoaded', () => {
  let user = getUserData();
  // В задании не написано что делать, если данных нет в localStorage, чтобы не было ошибок подставляю дефолтное значение
  if (!user) user = {
    username: 'Irina',
    avatarUrl: '/img/avatar.png',
  }
  const favoritesAmount = getFavoritesAmount()
  renderUserBlock(user.username, user?.avatarUrl, favoritesAmount)
  renderSearchFormBlock(defaultDateFrom, defaultDateTo)
  renderSearchStubBlock()
  renderToast(
    {text: 'Это пример уведомления. Используйте его при необходимости', type: 'success'},
    {name: 'Понял', handler: () => {console.log('Уведомление закрыто')}}
  )
  const form = document.querySelector('#search-form');
  if (form) form.addEventListener('submit', (e) => {
    e.preventDefault();
    formHandler();
  });
})
