import request1 from '../index'
import { IAccount, IDataType, ILoginResult, UserInfo } from './types'

enum loginAPI {
  AccountLogin = '/login',
  LoginUserInfo = '/users/',
  UserMenu = '/role/'
}

export function accountLoginRequest(account: IAccount) {
  return request1.post<IDataType<ILoginResult>>({
    url: loginAPI.AccountLogin,
    data: account
  })
}

export function userInfoRequestById(id: number) {
  return request1.get<IDataType>({
    url: loginAPI.LoginUserInfo + id
  })
}

export function requestUserMenuByRoleId(id: number) {
  return request1.get<IDataType>({
    url: loginAPI.UserMenu + id + '/menu'
  })
}
