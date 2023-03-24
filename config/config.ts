// https://umijs.org/config/
import { defineConfig, TestBrowser } from 'umi';

const { REACT_APP_ENV = 'dev' } = process.env;

export default defineConfig({
  define: {
    REACT_APP_ENV: REACT_APP_ENV || false,
  },

  /**
   * @name 开启 hash 模式
   * @description 让 build 之后的产物包含 hash 后缀。通常用于增量发布和避免浏览器加载缓存。
   * @doc https://umijs.org/docs/api/config#hash
   */
  hash: true,

  /**
   * @name 设置路由 history 类型。
   * @description browser、hash 和 memory
   * @doc https://umijs.org/docs/api/config#history
   */
  history: {
    type: 'browser',
  },


  /**
   * @name moment 的国际化配置
   * @description 如果对国际化没有要求，打开之后能减少js的包大小
   * @doc https://umijs.org/docs/api/config#ignoremomentlocale
   */
  ignoreMomentLocale: true,


  //============== 以下都是 max 的插件配置 ===============
  /**
   * @name 启用插件
   * @@doc https://umijs.org/docs/guides/use-plugins
   */
  plugins: [
    '@umijs/plugins/dist/locale',
    '@umijs/plugins/dist/antd',
    '@umijs/plugins/dist/layout',
    '@umijs/plugins/dist/model',
    '@umijs/plugins/dist/initial-state',
    '@umijs/plugins/dist/access',
    '@umijs/plugins/dist/request',
  ],

  /**
   * @name 数据流插件
   * @@doc https://umijs.org/docs/max/data-flow
   */
  model: {},

  /**
   * 一个全局的初始数据流，可以用它在插件之间共享数据
   * @description 可以用来存放一些全局的数据，比如用户信息，或者一些全局的状态，全局初始状态在整个 Umi 项目的最开始创建。
   * @doc https://umijs.org/docs/max/data-flow#全局初始状态
   */
  initialState: {},

  /**
   * @name moment2dayjs 插件
   * @description 将项目中的 moment 替换为 dayjs
   * @doc https://umijs.org/docs/max/moment2dayjs
   */
  // moment2dayjs: {
  //   preset: 'antd',
  //   plugins: ['duration'],
  // },

  /**
   * @name 国际化插件
   * @doc https://umijs.org/docs/max/i18n
   */
  locale: {
    // default zh-CN
    default: 'zh-CN',
    antd: true,
    // default true, when it is true, will use `navigator.language` overwrite default
    baseNavigator: true,
  },

  /**
   * @name layout 插件
   * @description 将布局通过 Umi 插件的方式内置，只需通过简单的配置即可拥有 Ant Design 的 Layout（ProLayout），包括导航以及侧边栏。从而做到用户无需关心布局。
   * @doc https://umijs.org/docs/max/layout-menu
   */
  // title: '优易企服 SCRM',
  // layout: false,
  layout: {
    locale: true,
  },

  /**
   * @name antd 插件
   * @description 内置了 babel import 插件
   * @doc https://umijs.org/docs/max/antd#antd
   */
  antd: {},
  
  // requestRecord: {},

  mfsu: {
    strategy: 'normal',
  },

  // ---------------------------------------------------
  // 以下为 alias 配置
  // 配置项目的绝对路径
  // alias: {
  //   '@actions': resolve(__dirname, 'src/actions'),
  //   '@assets': resolve(__dirname, 'src/assets'),
  //   '@components': resolve(__dirname, 'src/components'),
  //   '@constants': resolve(__dirname, 'src/constants'),
  //   '@pages': resolve(__dirname, 'src/pages'),
  //   '@reducers': resolve(__dirname, 'src/reducers'),
  //   '@style': resolve(__dirname, 'src/style'),
  //   '@utils': resolve(__dirname, 'src/utils'),
  //   '@services': resolve(__dirname, 'src/services'),
  //   '@hooks': resolve(__dirname, 'src/hooks'),
  // },
});
