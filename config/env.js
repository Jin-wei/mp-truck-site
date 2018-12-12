/**
 * 配置请求在不同环境的域名
 * baseUrl: 域名地址
 */

let baseUrl = '';
if (process.env.NODE_ENV === 'production') {
  baseUrl = 'https://huateng.truckloud.com';
} else if (process.env.NODE_ENV === 'development') {
  baseUrl = 'http://120.79.143.126:9090';
}

export { baseUrl }
