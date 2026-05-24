export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  category: string;
  image: string | null;
  excerpt: string;
  body?: string;
}

export const posts: BlogPost[] = [
  {
    slug: 'closure-202607',
    title: '【お知らせ】7月上旬 休講・振替日のご案内',
    date: '2026年5月24日',
    category: 'ご案内',
    image: null,
    excerpt: '7月1日(水)〜3日(金)は休講、7月29日(水)〜31日(金)を振替日として実施します。',
    body: `<p>御忍庭球塾です🎾<br>7月上旬の休講と振替日についてご案内いたします。</p>

<h3 class="wp-block-heading">🚫 休講日（水上不在のため）</h3>
<ul>
  <li>7/1(水) 水曜①・水曜②</li>
  <li>7/2(木) 木曜①・木曜②</li>
  <li>7/3(金) 金曜①・金曜②</li>
</ul>

<h3 class="wp-block-heading">📅 振替実施日</h3>
<ul>
  <li>7/29(水) 水曜①・水曜②</li>
  <li>7/30(木) 木曜①・木曜②</li>
  <li>7/31(金) 金曜①・金曜②</li>
</ul>

<p>該当クラスの会員様は、休講分を上記振替日にスライドします。通常通り該当曜日にお越しください。</p>
<p>他の曜日の会員様は、振替予約の際にこの期間は選択不可となりますのでご注意ください。</p>
<p>ご不明な点があればお気軽にお声がけください。</p>`,
  },
  {
    slug: 'attendance-manual',
    title: '出欠マニュアル',
    date: '2026年2月7日',
    category: 'ご案内',
    image: 'attendance.png',
    excerpt: 'レッスンの出欠に関するマニュアルです。',
    body: `<div class="wp-block-file"><object class="wp-block-file__embed" data="/images/blog/migrated/2026.02.07御忍庭球塾_LINEシステム注意点マニュアル-1.pdf" type="application/pdf" style="width:100%;height:600px" aria-label="2026.02.07御忍庭球塾_LINEシステム注意点マニュアル"></object><a id="wp-block-file--media-f6ab8c80-2666-4f7d-af60-0a2f847da189" href="/images/blog/migrated/2026.02.07御忍庭球塾_LINEシステム注意点マニュアル-1.pdf">2026.02.07御忍庭球塾_LINEシステム注意点マニュアル</a><a href="/images/blog/migrated/2026.02.07御忍庭球塾_LINEシステム注意点マニュアル-1.pdf" class="wp-block-file__button wp-element-button" download aria-describedby="wp-block-file--media-f6ab8c80-2666-4f7d-af60-0a2f847da189">ダウンロード</a></div>`,
  },
  {
    slug: 'ladies-tournament-2025',
    title: '【大会結果】瀧野詩穂さん・長野友美さんが A級部門 準優勝！全国大会へ進出！',
    date: '2025年10月9日',
    category: 'ご報告',
    image: 'ladies-tournament.jpg',
    excerpt: 'ソニー生命カップ 第47回 全国レディーステニス大会 北海道予選にて、瀧野詩穂さん・長野友美さんが A級部門 準優勝を果たし、全国大会への進出を決めました。',
    body: `<h3 class="wp-block-heading">瀧野詩穂さん・長野友美さんが A級部門 準優勝！全国大会へ進出！</h3>

<p>御忍庭球塾から、嬉しいニュースをお届けします！</p>

<p>このたび、<strong>瀧野詩穂さん・長野友美さん</strong>が出場した<br>「<strong>ソニー生命カップ 第47回 全国レディーステニス大会 北海道大会 ＆ 第46回 ベテラーノ大会</strong>」にて、<br><strong>A級部門 準優勝🥈</strong>という素晴らしい結果を収められました！</p>

<h6 class="wp-block-heading">A級部門には、道内の実力者たちが数多く出場。<br>そんな中での準優勝。おめでとうございます！</h6>

<p>日々の練習で積み重ねてきた力が存分に発揮されたのでしょう、<br>見事、12月上旬に開催される全国大会への出場権を手にされました！🔥</p>

<p>日頃の積み重ねが、今回の大舞台で結果として実を結んだことを、心から誇りに思います。</p>

<p>全国大会では、さらにレベルの高い選手たちとの戦いが待っています。<br>皆さんも、レッスンや大会・練習などでお二人を見かけた際は、<br>ぜひ温かいエールをお送りください✨</p>

<p><strong>大会結果はこちらからご覧いただけます：</strong><br>→ 日本女子テニス連盟 公式サイト（大会結果ページ）</p>

<figure class="wp-block-image size-large"><img src="/images/blog/migrated/line_oa_chat_251006_173705-768x1024.jpg" alt="" class="wp-image-668"/></figure>`,
  },
  {
    slug: 'hokkaido-championship-2025',
    title: '【結果報告】北海道テニス選手権 & 全日本テニス選手権 北海道予選',
    date: '2025年10月9日',
    category: 'ご報告',
    image: 'hokkaido-championship.jpg',
    excerpt: '8月5日〜10日に開催された北海道テニス選手権および全日本テニス選手権 北海道予選の結果報告です。',
    body: `<p>8月5日〜10日に開催された<br>「北海道テニス選手権」および「全日本テニス選手権 北海道予選」に出場しました。</p>

<p>今回は久しぶりのjop公式大会ということもあり、<br>調整段階から気持ちが引き締まる期間となりました。</p>

<hr class="wp-block-separator has-alpha-channel-opacity"/>

<h3 class="wp-block-heading">■ 試合結果</h3>

<p>シングルスは2回戦敗退という結果でしたが、<br>ダブルスではなんとか勝ち上がり、<strong>準優勝🥈</strong>という形で終えることができました。</p>

<hr class="wp-block-separator has-alpha-channel-opacity"/>

<h3 class="wp-block-heading">■ 試合を通して感じたこと</h3>

<p>シングルスも含め連戦が続いたことで、後半はボロボロの状態でしたが、如何に試合は<br>技術もさることながら、集中力・勝負強さが大切であることを再認識しました。</p>

<p>また、プレー面だけでなく「試合の流れを読む力」「メンタルの整え方」など、<br>自分の課題をあらためて見つめ直す機会にもなりました。</p>

<hr class="wp-block-separator has-alpha-channel-opacity"/>

<h3 class="wp-block-heading">■ 今後に向けて</h3>

<p>今回得た学びや気づきを、<br>これからの<strong>レッスンや指導</strong>にもどんどん還元していきたいと思っています。</p>

<p>僕自身、現役でがっつりできているわけではありませんが、<br>現場で感じた“本気の緊張感”や“試合の駆け引き”をリアルに伝えられるよう、<br>引き続きレベルアップを目指して頑張ります💪</p>

<hr class="wp-block-separator has-alpha-channel-opacity"/>

<p>いつも応援してくださる皆さん、本当にありがとうございます！<br>これからも「御忍庭球塾」の代表として、みなさんが誇れるコーチになれるよう、精進いたします！</p>

<figure class="wp-block-gallery has-nested-images columns-default is-cropped">
<figure class="wp-block-image size-large"><img src="/images/blog/migrated/S__8429576-1024x768.jpg" alt="" class="wp-image-663"/></figure>

<figure class="wp-block-image size-large"><img src="/images/blog/migrated/S__8429577-1024x768.jpg" alt="" class="wp-image-662"/></figure>
</figure>`,
  },
  {
    slug: 'monthly-summary-2025',
    title: '２０２５年の前月まとめについて',
    date: '2024年12月8日',
    category: 'ご案内',
    image: null,
    excerpt: '2024年に試験的に実施した前月のレッスンまとめと所見について、2025年の方針をご案内します。',
    body: `<p>皆さま、こんにちは！御忍庭球塾の水上です。いつもレッスンにご参加いただき、ありがとうございます。</p>

<p>２０２４年は、試験的に前月のレッスンまとめと皆さま宛てに所見を記載し、お渡しいたしましたが、ご活用いただけましたでしょうか？</p>

<p>皆さまにご意見を聞く限りでは毎月楽しみにしてくださっているというお声もいただき、正直、かなり大変だったけどやってよかったなあ、、、と思っています。</p>

<p>このことから、<strong>今回お渡ししたもので最後</strong>と考えておりましたが、継続してほしいとのお声も多かったので、<strong>2025年も継続していこうと考えています</strong>。</p>

<p>ただ、形式については変更予定でして、翌年からは皆さまのコメントを元に作成していこうと思います。理由は以下のとおりです。</p>

<p><strong>僕の一方的な押し付けではなく、当事者意識を持っていただきたい</strong></p>

<p><strong>皆さまの自身の課題整理にもなる</strong></p>

<p><strong>僕と皆さまの方向性のすり合わせができる</strong></p>

<p>上記の３点です。<br>お手数ではあると思いますが、よりよいレッスンを作り上げるためにご活用いただきたいと思います😊<br><mark style="background-color:rgba(0, 0, 0, 0)" class="has-inline-color has-vivid-red-color"><strong>もちろん、強制ではありませんのでこのようなやりとりが得意ではなかったりお時間がなければご報告なしでも問題ありません！</strong></mark><br><strong><mark style="background-color:rgba(0, 0, 0, 0)" class="has-inline-color has-vivid-red-color">ただ、お返事も定型文となってしまいます。。。</mark></strong></p>

<h2 class="wp-block-heading">皆さま→水上　ご報告の送信の仕方</h2>

<h4 class="wp-block-heading">１　公式LINEの登録</h4>

<p>お手数ですが、まずは以下のURLをタップ、クリックして公式LINE「【おしのび】月例報告送信アカウント」のご登録をお願いいたします。<br>※出欠ご連絡との混同を防ぐため</p>

<p><a href="https://lin.ee/zAoGiK6">https://lin.ee/zAoGiK6</a></p>

<p></p>

<h4 class="wp-block-heading">２　ご報告の送信　※毎月２０日までにお願いします！</h4>

<div class="wp-block-media-text is-stacked-on-mobile is-vertically-aligned-top"><figure class="wp-block-media-text__media"><img src="/images/blog/migrated/S__3432479-546x1024.jpg" alt="" class="wp-image-423 size-full"/></figure><div class="wp-block-media-text__content">
<p><strong>ルール</strong></p>

<p>・<strong><mark style="background-color:rgba(0, 0, 0, 0)" class="has-inline-color has-vivid-red-color">毎月２０日まで</mark></strong>に送信してください<br>・<mark style="background-color:rgba(0, 0, 0, 0)" class="has-inline-color has-vivid-red-color"><strong>２００字以内</strong></mark>（紙面の都合上）<br>・内容は自由<br>大会の結果報告やご自身の課題、質問。なんでもOKです。ただ、できればコメントしやすい内容でお願いいたします(笑)</p>

<p></p>

<p>繰り返しにはなりますが、<mark style="background-color:rgba(0, 0, 0, 0)" class="has-inline-color has-vivid-red-color">ご報告は強制ではありませんが、お返事は定型文となりますのでご了承願います！ご負担の少ない範囲でやりましょう。</mark><br><br>※ご注意※<br>・<strong><mark style="background-color:rgba(0, 0, 0, 0)" class="has-inline-color has-vivid-red-color">ご報告に対しての返信はありません</mark></strong>のでご了承ください。<br>・退会者・休会者には2024年同様、退会月及び休会月、復帰月はまとめ用紙はお渡しはいたしません。要は、レッスン参加月にご報告をいただければ、と思います。</p>
</div></div>

<p></p>

<p>皆さまにお渡しする用紙は以下のようになる予定です！<br></p>

<div class="wp-block-file"><object class="wp-block-file__embed" data="/images/blog/migrated/2025年まとめサンプル-1.pdf" type="application/pdf" style="width:100%;height:600px" aria-label="2025年まとめサンプル"></object><a id="wp-block-file--media-57116db8-152b-47b0-bdcd-d35aa8eb0fe7" href="/images/blog/migrated/2025年まとめサンプル-1.pdf">2025年まとめサンプル</a><a href="/images/blog/migrated/2025年まとめサンプル-1.pdf" class="wp-block-file__button wp-element-button" download aria-describedby="wp-block-file--media-57116db8-152b-47b0-bdcd-d35aa8eb0fe7">ダウンロード</a></div>

<p>以上となります！<br>今月から開始となりますので、初回は１２月２０日までのご報告をよろしくお願いいたします✨</p>`,
  },
  {
    slug: 'price-revision-2024',
    title: '【重要】料金改定のお知らせ',
    date: '2024年1月29日',
    category: 'ご案内',
    image: 'tennis-ball.png',
    excerpt: '2024年5月より料金を改定させていただくこととなりました。',
    body: `<p>　皆様、いつも御忍庭球塾をご利用いただき、誠にありがとうございます。 この度、2024年5月より料金を改定させていただくこととなりましたので、ご案内申し上げます。 </p>

<p>　近年、電気料金や物価の上昇に伴い、経費も増加しております。これまで当塾では、その影響を吸収しつつ、料金を据え置きにしてまいりましたが、今後の長期的な安定運営とレッスンの質の維持向上を図るため、料金改定を決定いたしました。</p>

<p> 　皆様にはご不便をお掛けいたしますことを心よりお詫び申し上げますが、何卒ご理解いただきますようお願い申し上げます。 詳細につきましては、以下の文書をご確認いただきますようお願い申し上げます。</p>

<div class="wp-block-file"><object class="wp-block-file__embed" data="/images/blog/migrated/20240128料金改定.pdf" type="application/pdf" style="width:100%;height:600px" aria-label="20240128料金改定"></object><a id="wp-block-file--media-7195f5eb-bb09-441b-af16-45e34e83895c" href="/images/blog/migrated/20240128料金改定.pdf">20240128料金改定</a><a href="/images/blog/migrated/20240128料金改定.pdf" class="wp-block-file__button wp-element-button" download aria-describedby="wp-block-file--media-7195f5eb-bb09-441b-af16-45e34e83895c">ダウンロード</a></div>

<p></p>`,
  },
  {
    slug: 'ishikari-indoor-2023',
    title: '【２０２３ 石狩インドアテニス大会 結果】',
    date: '2023年11月26日',
    category: 'ご案内',
    image: null,
    excerpt: '石狩インドアテニス大会にて、会員の方々が多数入賞されました。',
    body: `<p>皆さんこんにちは！代表の水上です！<br>11月を通して開催されました、道内でも大きな草大会である、石狩インドアテニス大会ですが、一部会員の方が参戦し、沢山入賞された（A級はベスト８まで発表）のでご報告させていただきます。<br>入賞されたみなさま、本当におめでとうございます！<br>私自身コーチをやっていてやりがいを感じる瞬間でもあります。ありがとうございます。</p>

<p>草大会（特に個人戦）に入賞した際、是非教えていただけると、僕自身のモチベーションも上がりますので、いつでもお待ちしてます🔥</p>

<p>また、大会に出る際【御忍庭球塾】又は【おしのび】所属にしていただけると嬉しいです✨</p>

<p>以上、ご報告でした！</p>

<p>今後ともよろしくお願いします😊</p>

<p></p>

<p>以下結果（敬称略）</p>

<p>●<strong>男子ダブルスA級</strong><br>🏅ベスト８　小坂椋久<br><a href="https://ishikari-tennis.com/?page_id=3048" target="_blank" rel="noreferrer noopener">https://ishikari-tennis.com/?page_id=3048</a></p>

<p>●<strong>ミックスダブルスA級</strong><br>🏆優勝　橋本慶恭<br><a href="https://ishikari-tennis.com/?page_id=2913" target="_blank" rel="noreferrer noopener">https://ishikari-tennis.com/?page_id=2913</a></p>

<p>●<strong>男子ダブルスB級</strong><br>🏆優勝　中川翔太<br>🥉ベスト４　瀧野誠・対馬祐嗣ペア<br><a href="https://ishikari-tennis.com/?page_id=3061" target="_blank" rel="noreferrer noopener">https://ishikari-tennis.com/?page_id=3061</a></p>

<p>●<strong>女子ダブルスB級</strong><br>🥉ベスト４　島田夏紀<br><a href="https://ishikari-tennis.com/?page_id=2982" target="_blank" rel="noreferrer noopener">https://ishikari-tennis.com/?page_id=2982</a></p>

<p>●<strong>ミックスダブルスB級</strong><br>🥉ベスト４　中川翔太<br><a href="https://ishikari-tennis.com/?page_id=2927" target="_blank" rel="noreferrer noopener">https://ishikari-tennis.com/?page_id=2927</a></p>

<p>●<strong>男子ダブルスC級</strong><br>🥈準優勝　松田直之<br><a href="https://ishikari-tennis.com/?page_id=2967" target="_blank" rel="noreferrer noopener">https://ishikari-tennis.com/?page_id=2967</a></p>

<p>●<strong>ミックスダブルスC級</strong><br>🥈準優勝　小林麻理子<br><a href="https://ishikari-tennis.com/?page_id=2891" target="_blank" rel="noreferrer noopener">https://ishikari-tennis.com/?page_id=2891</a></p>`,
  },
  {
    slug: 'oshinobi-camp-2023',
    title: '第一回おしのび合宿終了の報告',
    date: '2023年11月26日',
    category: 'ご案内',
    image: 'camp.jpg',
    excerpt: '初めての泊まりがけイベント「おしのび合宿」が無事終了しました。',
    body: `<p>皆さま、こんにちは！</p>

<p>この度、おしのび合宿が無事に終了いたしました。参加してくださった皆様、本当にありがとうございました。<br>今回、初めての泊りがけのイベントということもあり、サービスが行き届いていない点もありご迷惑をおかけしたと思いますが、最後までご参加いただき本当にありがとうござました！</p>

<p>​<a target="_blank" rel="noreferrer noopener"></a>​ ▪️ 日付：2023年11月18日（土曜日）〜11月19日（日曜日）</p>

<p>​<a target="_blank" rel="noreferrer noopener"></a>​ 　合宿では、１日目７時間、２日目５時間と長時間の練習会を行いました。大変タフネスな合宿でリタイヤする方もでるのでは・・・？と懸念していましたが、皆様最後まで元気いっぱいで驚かされました（むしろコーチ陣の方が疲労困憊の様子(笑)）<br>　夜は合宿施設近くの焼肉屋さん（厚真園さん）で食べ飲み放題、そのあとは部屋に戻り各自参加の２次会となりました。<br>　以下、合宿中の様子です😊</p>

<figure class="wp-block-gallery has-nested-images columns-default is-cropped">
<figure class="wp-block-image size-large"><img src="/images/blog/migrated/IMG_4172-3-1024x768.jpg" alt="" class="wp-image-343"/></figure>

<figure class="wp-block-image size-large"><img src="/images/blog/migrated/IMG_4204-1024x768.jpg" alt="" class="wp-image-346"/></figure>

<figure class="wp-block-image size-large"><img src="/images/blog/migrated/S__28352521-1-1024x768.jpg" alt="" class="wp-image-335"/></figure>

<figure class="wp-block-image size-large"><img src="/images/blog/migrated/S__28352523-1-768x1024.jpg" alt="" class="wp-image-336"/></figure>

<figure class="wp-block-image size-large"><img src="/images/blog/migrated/S__28352525-1-1024x768.jpg" alt="" class="wp-image-337"/></figure>

<figure class="wp-block-image size-large"><img src="/images/blog/migrated/IMG_4187-1024x768.jpg" alt="" class="wp-image-341"/></figure>

<figure class="wp-block-image size-large"><img src="/images/blog/migrated/IMG_4189-1024x768.jpg" alt="" class="wp-image-345"/></figure>

<figure class="wp-block-image size-large"><img src="/images/blog/migrated/IMG_4191-1024x768.jpg" alt="" class="wp-image-342"/></figure>

<figure class="wp-block-image size-large"><img src="/images/blog/migrated/IMG_4193-1024x768.jpg" alt="" class="wp-image-344"/></figure>

<figure class="wp-block-image size-large is-style-default"><img src="/images/blog/migrated/IMG_4195-1024x768.jpg" alt="" class="wp-image-338"/></figure>

<figure class="wp-block-image size-large"><img src="/images/blog/migrated/IMG_4222-2-1024x768.jpg" alt="" class="wp-image-351"/></figure>

<figure class="wp-block-image size-large"><img src="/images/blog/migrated/IMG_4227-1024x768.jpg" alt="" class="wp-image-347"/></figure>
</figure>

<p></p>

<p>最後に、今回の合宿を成功させてくださった皆様に感謝申し上げます。また次回のイベントも是非ご参加ください✨</p>

<p>次のイベントは１月６日㈯の新年会になります！<br>どうぞよろしくお願いいたします！</p>`,
  },
  {
    slug: 'trial-lesson-info',
    title: '体験受講のご案内',
    date: '2021年5月21日',
    category: 'ご案内',
    image: null,
    excerpt: '一般月曜コース・一般木曜コースで体験レッスンを受付中。初回3,000円で受講できます。',
    body: `<p>　現在、一般月曜コース・一般木曜コースは体験でレッスンを受講することができます。<br>　単発3,300円のところ、<span class="has-inline-color has-vivid-red-color"><strong>初回のみ2,800円</strong></span>で受講することができます。</p>

<p>　レッスンに空き枠があればご参加いただくことが可能ですので、<span class="has-inline-color has-vivid-green-cyan-color"><strong>公式ＬＩＮＥ</strong></span>からお気軽にお問い合わせください♪</p>`,
  },
];
