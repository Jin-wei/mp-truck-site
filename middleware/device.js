export let isMobile = function (userAgent) {
  let flag = userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone|MicroMessenger)/i)
  return flag;
};

//浏览器设备判断
export default function (context) {
  context.userAgent = process.server
    ? context.req.headers["user-agent"]
    : navigator.userAgent;
  //判断是否是手机设备
  context.isMobile = isMobile(context.userAgent);

  // 若是判断UA是移动端,跳转到http://www.m.truckloud.com
  if (context.isMobile) {
    context.redirect(301, 'http://www.m.truckloud.com')
  }
}
