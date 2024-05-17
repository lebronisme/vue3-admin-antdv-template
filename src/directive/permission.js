
const checkPermission = (el, { value }) => {
    const role = 'user'
    if (Array.isArray(value) && value.length > 0) {
        const hasPermission = value.includes(role)
        if (!hasPermission) el.remove()
    } else {
        throw new Error('格式错误')
    }
}
export default {
    mounted (el, value) {
        checkPermission(el, value)
    }
}