export const lessonLineUrl = 'https://lin.ee/2CKErIS';

export const lessonConsultations = {
  group: {
    title: 'グループ会員のキャンセル待ち',
    label: 'LINEでキャンセル待ちを希望',
    introduction: '入会をご希望の方は、希望の曜日・時間帯とテニス経験をお知らせください。レギュラー会員枠のキャンセル待ちについてご相談いただけます。',
    message: 'グループレッスンのレギュラー会員枠のキャンセル待ちを希望します。\n・希望の曜日・時間帯：\n・テニス経験：\n・練習したいこと：\n入会待ちの受付について教えてください。',
  },
  private: {
    title: '個別レッスンの料金・日時を相談する',
    label: 'LINEで料金・日時を相談',
    introduction: '希望日・開始時刻・練習時間・人数をお知らせください。内容に応じて料金と実施できる日時をご案内します。',
    message: 'プライベートレッスンについて相談したいです。\n・希望日・開始時刻：\n・希望する練習時間：\n・人数：\n・練習したいこと：\n・予定しているコート（未定でも可）：\n料金と実施できる日時を教えてください。',
  },
} as const;

export type LessonType = keyof typeof lessonConsultations;
