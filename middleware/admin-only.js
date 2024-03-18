export default function ({ $auth, error }) {
    if (!$auth.user.role) {
        return error({ statusCode: 403, message: 'Forbidden Access.'})
    }
}