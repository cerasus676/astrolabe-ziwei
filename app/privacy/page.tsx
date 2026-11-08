import Link from 'next/link';

export const metadata = { title: '隐私说明 · Astrolabe 星盘仪' };

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-2xl space-y-5 px-5 py-10 leading-relaxed">
      <Link href="/" className="text-sm text-[var(--ac)] hover:underline">← 返回首页</Link>
      <h1 className="text-3xl font-semibold text-[var(--tx-0)]">隐私说明</h1>
      <p>姓名、出生日期、时间、地点和性别仅在当前页面内用于计算命盘，刷新或离开页面后会清除。排盘不会把这些资料写入网址或发送给服务器。</p>
      <p>浏览器的本地存储用于保留主题偏好。静态托管服务会接收访问页面和加载资源所需的网络请求。</p>
    </main>
  );
}
