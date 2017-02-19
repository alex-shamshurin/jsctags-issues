import * as types from '../types'

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

