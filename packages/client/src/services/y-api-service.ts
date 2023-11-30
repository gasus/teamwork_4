import axios from 'axios'
import { UserFromApi } from 'types/UserFromApi'
import { LoginData } from 'types/LoginData'
import { RegistrationDto } from 'types/RegistrationDto'

const API_BASE_URL = 'https://ya-praktikum.tech/api/v2'

const yApiService = {
  register(userData: RegistrationDto) {
    return axios.post<{ id: string }>(`${API_BASE_URL}/auth/signup`, userData, {
      withCredentials: true,
    })
  },

  login(loginData: LoginData) {
    return axios.post<void>(`${API_BASE_URL}/auth/signin`, loginData, {
      withCredentials: true,
    })
  },

  logout() {
    return axios.post<void>(`${API_BASE_URL}/auth/logout`, undefined, {
      withCredentials: true,
    })
  },

  getUser() {
    return axios.get<UserFromApi>(`${API_BASE_URL}/auth/user`, {
      withCredentials: true,
    })
  },
}

export default yApiService
