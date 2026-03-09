# 御忍庭球塾 ホームページ

- 札幌のテニススクール「御忍庭球塾」のHP
- 代表：水上皓太
- 技術スタック：Astro + Tailwind CSS（静的サイト）
- ホスティング：GitHub Pages（リポジトリ: mizkota/oshinobi-homepage）
- 現在のURL: https://mizkota.github.io/oshinobi-homepage/
- 本番ドメイン: oshinobitennis.com（現在はConoHa Wing、2026年6月満了後に移行予定）

## サイト構成
- `/` トップページ
- `/features` 御忍庭球塾の特徴
- `/courses` コース・料金システム
- `/gut24` OSHINOBI GUT 24（ガット張替サービス）
- `/strings` 指定ガット・料金一覧
- `/terms` ご利用規約
- `/blog` お知らせ

## LINE リンク
- レッスン問い合わせ: https://lin.ee/2CKErIS
- ガット張替問い合わせ: https://lin.ee/Cc2Tbvk
- ガット張替注文: https://lin.ee/IY3lcQP

## 移行予定（2026年5月頃）
1. oshinobitennis.com をConoHaから別レジストラ（Cloudflare等）に移管
2. DNSをGitHub Pagesに向ける
3. astro.config.mjs の site/base を本番ドメインに変更
4. ConoHa Wing 解約
