import { USER_ROLE_KEY } from '~/utils/userRoleStorage'

export default ({ error, store }, inject) => {
  inject('responseHandler', (err) => {
    if (!err) return
    if (err.response.status === 401) {
      store.$auth.$storage.setCookie(USER_ROLE_KEY, null, false)
      store.$auth.logout()
      return
    }
    if (err.response.status === 403) {
      return error({ statusCode: 403, message: 'Forbidden' })
    }
    if (err.response.status === 500) {
      return error({
        statusCode: 500,
        message: 'Internal Server Error'
      })
    }
    return {
      message: err.response.data.message,
      code: err.response.status
    }
  })
}