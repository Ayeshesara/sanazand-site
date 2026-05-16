export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    
    // سرو کردن فایل index.html برای صفحه اصلی
    if (url.pathname === "/" || url.pathname === "") {
      return env.ASSETS.fetch("/index.html");
    }
    
    // سرو کردن بقیه فایل‌ها
    return env.ASSETS.fetch(request);
  }
}
