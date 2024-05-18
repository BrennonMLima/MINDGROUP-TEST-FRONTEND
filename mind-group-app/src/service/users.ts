import api from "./api"

export const login = async (email: string, password: string) => {
  return await api.post("/login", { email, password })
}

export const getUsers = async () => {
  return await api.get("/user")
}

export const registerUser = async (name: string, email: string, password: string) => {
  return await api.post("/user", { email, password, name })
}

export const changeUserPassword = async (userId: string, password: string, newPassword: string) => {
  return await api.put(`/user/change-password/${userId}`, { password, newPassword })
}

export const updateUser = async (name: string, email: string) => {
  return await api.put(`/user`, { name, email })
}

export const deleteUser = async (userId: string) => {
  return await api.delete(`/user/${userId}`)
}