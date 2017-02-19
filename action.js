import * as types from './types.js'
//import {LOGIN_REQUEST} from './types.js'

function action(type, payload = {}) {
  return {type, ...payload}
}

export const login = {
  request: (login) => action(types.LOGIN_REQUEST, {login}),
  success: (login, response) => action(types.LOGIN_SUCCESS, {login, response}),
  failure: (login, error) => action(types.LOGIN_FAILURE, {login, error}),
}

export const logout = {
  request: (login) => action(types.LOGOUT_REQUEST, {login}),
  success: (login, response) => action(types.LOGOUT_SUCCESS, {login, response}),
  failure: (login, error) => action(types.LOGOUT_FAILURE, {login, error}),
}
