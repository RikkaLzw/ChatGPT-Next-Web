import { Analytics } from "@vercel/analytics/react";

import { Home } from "./components/home";

import { getServerSideConfig } from "./config/server";

import { useEffect } from "react";


const serverConfig = getServerSideConfig();

export default async function App() {
  useEffect(() =>  {
  if (typeof document !== 'undefined') {
    // 创建一个新的script元素
    const script = document.createElement('script');

    // 设置script元素的src属性
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-D9EHBXRXJJ';
    script.async = true;

    // 将script元素添加到head中
    document.head.appendChild(script);

    // 创建一个新的script元素来设置gtag函数
    const script2 = document.createElement('script');
    script2.innerText = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-D9EHBXRXJJ');
    `;

    // 将第二个script元素添加到head中
    document.head.appendChild(script2);
  }
}, []);
  return (
    <>
      <Home />
      {serverConfig?.isVercel && <Analytics />}
    </>
  );
}
