//当前文件用于把图标组件注册成全局组件
import { StepBackwardOutlined, StepForwardOutlined } from '@ant-design/icons-vue'
import { install } from 'ant-design-vue'

//注册全局组件
const icons = [StepBackwardOutlined, StepForwardOutlined]

//app.use( { install(){}  } )
export default {

    install (app) {
        //遍历图标合集

        icons.forEach(icon => {
            //循环注册全局组件
            app.component(icon.displayName, icon)
        })
    }
}
//然后在main.js中注册
