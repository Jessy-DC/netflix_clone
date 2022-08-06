import {TYPE_TV, TYPE_MOVIE} from '../config'

export function getRandomIntInclusive(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export function getRandomType() {
  return [TYPE_TV, TYPE_MOVIE][getRandomIntInclusive(0, 1)]
}
export function getRandomMovie() {
  const moviesIds = [559969, 278, 102382, 39105];
  return moviesIds[getRandomIntInclusive(0, moviesIds.length - 1)]
}
export function getRandomSerie() {
  const tvIds = [60059, 1396, 4556, 79410];
  return tvIds[getRandomIntInclusive(0, tvIds.length - 1)]
}
export function getRandomId(type = TYPE_MOVIE) {
  return type === TYPE_TV ? getRandomSerie() : getRandomMovie()
}
