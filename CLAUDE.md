# 御忍庭球塾 ホームページ

- 札幌のテニススクール「御忍庭球塾」のHP
- 代表：水上皓太
- 技術スタック：Astro + Tailwind CSS（静的サイト）
- ホスティング：GitHub Pages（リポジトリ: mizkota/oshinobi-homepage）
- 現在のURL: https://mizkota.github.io/oshinobi-homepage/
- 本番ドメイン: oshinobitennis.com（現在はConoHa Wing、2026年6月満了後に移行予定）

## サイト構成（2026-07-11 実装に合わせて更新。/features・/strings は削除済み）
- `/` トップページ
- `/courses` コース・料金システム（※プライベート料金はHP非公開・LINE個別見積もり）
- `/gut24` OSHINOBI GUT 24（ガット張替サービス。指定ガット一覧も本ページに統合）
- `/private-lesson` プライベートレッスン
- `/corporate-tennis` 法人テニス（現状ナビ未掲載の直リンクページ）
- `/ticket-guide` チケット制案内（会員向け・ナビ未掲載）
- `/terms` ご利用規約
- `/blog` お知らせ
- `/en` 英語ページ（インターナショナルレッスン。料金公開・削除禁止）

## LINE リンク（2026-07-11 実リンク検証済み）
- レッスン問い合わせ: https://lin.ee/2CKErIS
- ガット張替（問い合わせ・注文とも）: https://lin.ee/yLlhrrT ※サイト全体でこれに統一。lin.ee/Cc2Tbvk も同一アカウント（@746rmfff）に到達するが新規使用しない
- 旧「ガット張替注文 lin.ee/IY3lcQP」は**404失効**。使用禁止

## 移行予定（2026年5月頃）
1. oshinobitennis.com をConoHaから別レジストラ（Cloudflare等）に移管
2. DNSをGitHub Pagesに向ける
3. astro.config.mjs の site/base を本番ドメインに変更
4. ConoHa Wing 解約
