import Link from 'next/link';

export const metadata = { title: '使用说明 · Astrolabe 星盘仪' };

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-2xl space-y-5 px-5 py-10 leading-relaxed">
      <Link href="/" className="text-sm text-[var(--ac)] hover:underline">← 返回首页</Link>
      <h1 className="text-3xl font-semibold text-[var(--tx-0)]">使用说明</h1>
      <p>Astrolabe 星盘仪提供紫微斗数排盘、双人命盘对照、古籍查阅和星曜百科，供传统文化学习与研究参考。</p>
      <p>
        排盘代码源自 <a className="underline" href="https://github.com/Renhuai123/ziwei-doushu">紫微研究</a>，沿用原项目的 MIT 许可证。数据集的授权范围详见原项目的 DATASET-LICENSE。
      </p>
      <Link className="text-sm text-[var(--ac)] hover:underline" href="/privacy">隐私说明</Link>
    </main>
  );
}
