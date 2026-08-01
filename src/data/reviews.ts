/**
 * お客様の声（口コミ）一元管理
 *
 * 【追加のしかた】下の reviews 配列に1件追記するだけで、
 *   ・該当ページの「お客様の声」セクション
 *   ・検索エンジン向けの構造化データ（Review / AggregateRating）
 * の両方に自動反映されます。
 *
 * 【掲載ルール（景表法・ステマ規制対応）】
 *   - 実在のお客様の声のみ。創作・脚色は禁止
 *   - Googleクチコミ以外（LINE・メール等）を載せる場合は、必ず本人の掲載許可を得てから
 *     consent に許可日を記録する
 *   - 原文の意味を変えない範囲での誤字修正・抜粋のみ可
 */

export type ReviewCategory = 'gut24' | 'lesson' | 'international';
export type ReviewSource = 'google' | 'line' | 'email';

export interface Review {
  /** 一意ID（重複掲載防止） */
  id: string;
  /** どの事業の声か */
  category: ReviewCategory;
  /** 表示名（Googleクチコミの表示名 or 本人許可を得た表記） */
  author: string;
  /** 星（1〜5） */
  rating: number;
  /** 本文（原文のまま） */
  body: string;
  /** 本文の言語 */
  lang: 'ja' | 'en';
  /** 取得元 */
  source: ReviewSource;
  /** 掲載許可の記録。source が google 以外の場合は必須（YYYY-MM-DD / 誰から） */
  consent?: string;
  /** HPに掲載するか（false なら構造化データにも出さない） */
  featured: boolean;
  /** 添付写真（public/ 配下のパス）。顔が写る場合は必ずマスク済みのものを使う */
  photo?: string;
}

export const reviews: Review[] = [
  // ===== GUT24（Googleクチコミより） =====
  {
    id: 'g-nemofira',
    category: 'gut24',
    author: 'Nemofira',
    rating: 5,
    body: '試合の日程に合わせてガットを変えるタイミングを一緒に考えてくださり、プレースタイルやラケットに合うガット・テンションを提案してくれます。丁寧で迅速な対応でオススメです。',
    lang: 'ja',
    source: 'google',
    featured: true,
  },
  {
    id: 'g-mt',
    category: 'gut24',
    author: 'M T',
    rating: 5,
    body: '好きなタイミングで受け取れるのが便利！忙しい毎日でもテニスを続けられる、斬新なスタイルのガット張りサービス。顔を合わせなくても伝わる丁寧な対応で、仕上がりも最高です！',
    lang: 'ja',
    source: 'google',
    featured: true,
  },
  {
    id: 'g-ta',
    category: 'gut24',
    author: 't a',
    rating: 5,
    body: 'お店でお願いするより値段も安く、張り上げのタイミングも柔軟に対応していただけます。',
    lang: 'ja',
    source: 'google',
    featured: true,
  },
  {
    id: 'g-okuma',
    category: 'gut24',
    author: '大熊直樹',
    rating: 5,
    body: '遅い時間でも受付と受け取りができるので、とても頼みやすいです。',
    lang: 'ja',
    source: 'google',
    featured: true,
  },
  {
    id: 'g-miyamoto',
    category: 'gut24',
    author: 'みやもと',
    rating: 5,
    body: 'スムーズな受付と受け取りでした！仕上がりも大変満足です。',
    lang: 'ja',
    source: 'google',
    featured: true,
  },
  {
    id: 'g-pizyon',
    category: 'gut24',
    author: 'pizyon poppo',
    rating: 5,
    body: 'すぐに張っていただき大変助かりました。また利用したいと思います。',
    lang: 'ja',
    source: 'google',
    featured: true,
  },
  {
    id: 'g-tgreat',
    category: 'gut24',
    author: 'てぃーぐれーと',
    rating: 5,
    body: 'とっても利用しやすい。',
    lang: 'ja',
    source: 'google',
    featured: true,
  },

  // ===== テニスレッスン（日本語） =====
  // まだ掲載可の声がありません。集まり次第ここに追加してください。

  // ===== インターナショナルレッスン（英語） =====
  {
    id: 'g-jennifer-cho',
    category: 'international',
    author: 'Jennifer Cho',
    rating: 5,
    body: 'Our 12-year old daughter had two lessons with Coach Kota while we were traveling through Sapporo, and we were pleased with the whole experience. Kota brought intensity and intention to these lessons, and our daughter, who is a competitive player back in the U.S., really enjoyed hitting with and learning from him. Kota was also kind and professional, and made it very easy to book lessons and court time. Thank you for making our visit to Sapporo even more memorable!',
    lang: 'en',
    source: 'google', // 2026-07-18頃 Googleクチコミ投稿（★5）。原文のまま掲載
    featured: true,
    // 本人提供の写真（お子さんの顔はスタンプでマスク済み・2026-07-22 社長承認で掲載）
    photo: '/images/reviews/jennifer-lesson.jpg',
  },
  {
    id: 'g-eugene-kim',
    category: 'international',
    author: 'Eugene Kim',
    rating: 5,
    body: 'Outstanding teacher and excellent facility. He really helped me work out high volleys and backhand slice down the line. He himself is an excellent player as well. He is very attentive and speaks English.',
    lang: 'en',
    source: 'google', // 2026-07-30頃 Googleクチコミ投稿（★5）。原文のまま掲載
    featured: true,
    // 本人と撮ったセルフィー（顔はスタンプでマスク済み・2026-08-01 社長指示で掲載）
    photo: '/images/reviews/eugene-lesson.jpg',
  },
];

/** Googleクチコミの実数（プロフィールの実測値。HP表示・構造化データの根拠） */
export const googleRating = {
  /** OSHINOBI GUT 24 のビジネスプロフィール */
  gut24: {
    ratingValue: 5.0,
    reviewCount: 12, // 2026-08-01 時点の実測（11件目=Jennifer・12件目=Eugene、レッスンの英語クチコミ）
    /** 口コミ投稿用リンク（お客様に案内する用） */
    writeReviewUrl: 'https://g.page/r/CT7vSjW5mZYJEAE/review',
  },
} as const;

/** 掲載可の声だけを取り出す */
export function getReviews(category: ReviewCategory, lang?: 'ja' | 'en'): Review[] {
  return reviews.filter(
    (r) => r.featured && r.category === category && (lang ? r.lang === lang : true)
  );
}
