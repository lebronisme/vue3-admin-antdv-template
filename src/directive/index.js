import checkPermission from './permission'
export default {
    install (app) {
        app.directive('checkPermission', checkPermission)
    }
}