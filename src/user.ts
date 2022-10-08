import { renderBlock } from './lib.js'

export class User {
  username: string
  avatarUrl: string

  constructor (username: string, avatarUrl: string) {
    this.username = username
    this.avatarUrl = avatarUrl
  }
}
  
export function getUserData(): User | null {
  const stringUser = localStorage.getItem('user');
  const user: unknown = stringUser ? JSON.parse(stringUser) : null;
  if (user instanceof User) return user;
  return null;
}

export function getFavoritesAmount(): number {
  return Number(localStorage.getItem('favoritesAmount'));
}

export function renderUserBlock (name: string, linkAvatar: string, favoriteItemsAmount?: number) {
  const favoritesCaption = favoriteItemsAmount && favoriteItemsAmount > 0 ? favoriteItemsAmount : 'ничего нет'
  const hasFavoriteItems = favoriteItemsAmount ? true : false

  renderBlock(
    'user-block',
    `
    <div class="header-container">
      <img class="avatar" src="${linkAvatar}" alt="Wade Warren" />
      <div class="info">
          <p class="name">${name}</p>
          <p class="fav">
            <i class="heart-icon${hasFavoriteItems ? ' active' : ''}"></i>${favoritesCaption}
          </p>
      </div>
    </div>
    `
  )
}
