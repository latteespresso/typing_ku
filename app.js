const challengeLines = `
こんな金印もらった奴国王
ふみくれるか、卑弥呼が魏へ
ごさんぱ教えを説く仏教徒
コクミンが仰ぐ聖徳太子
むおみに決めるな、実力で
むれよい政治を、憲法で
むななしいとは言わせぬ遣隋使
むざんな船出の遣唐使
むしごを殺して大化の改新
むむみっと敗れる白村江
むなにおそう壬申の乱
むくよく見える藤原京
なおい法律、大宝律令
なおはじまる和同開珎
なんと見事な平城京
ないつの歴史、古事記に記す
なにを語るか日本書紀
なつみの苦労、三代で終わり
なよい国に、国分寺
なしみず働く墾田永年
なごに完成、奈良の大仏
なくよウグイス平安京
ハロームリせず摂政に
はななる関白、藤原基経
はくしに戻そう遣唐使
くさくれ武士が乱を起こす
くははと笑えぬ強欲国司
といむろに座る道長
いれごいで戦う前九年
ひとおやみして後三年
いれはむ上皇、院政へ
いいころに保元の乱
いいごくらく平治の乱
いいむなに光る清盛の位
いいはこ作ろう源頼朝
いいくに作ろう鎌倉幕府
ひにふいに起こる承久の乱
ひにみつる武士の決まり
いになよ蒙古襲来
いにはいり込む元軍を撃退
皮肉なことに徳政令
いみみみっと終わる鎌倉幕府
いざさよなら、建武の新政
いざみむ南北二つの朝廷
いざささやく室町幕府
いざくに一つに南北合一
いしおよぶ勘合貿易
いよにわっと土一揆
ひとよむなしく応仁の乱
いしはこうぜ山城一揆
いしははっきり加賀一揆
いごよみる、種子島の鉄砲
以後よく広まるキリスト教
いちころまるっと桶狭間
以後なみだの室町幕府
いごなごやかな長篠の勝利
いちごはに消えた信長
以後パパも農民、刀狩
戦国終わらせ秀吉統一
いごくに渡る文禄の役
以後急な再出兵、慶長の役
ヒーローわっと関ヶ原
ヒーローさ家康、幕府開く
いろいろいご動く武家諸法度
ヒーローさごに行列、参勤交代
ひろみな一揆だ島原の乱
ひろさくの中に閉じこもる
いろいろむくよシャクシャイン
いろはこに愛せよ動物
ひなはに襲う天明ききん
ひなくに驚くラクスマン
いれおやこまるフェートン号
いやにごまかす打払令
いやみな世直し、大塩平八郎
いやしおそわれアヘン戦争
いやごみ積んだ黒船来航
いやごしの握手、日米和親
いやこはんできぬ通商条約
ひとはむなしく桜田門
ひとはむつかしい生麦事件
ひとはむさぼるな薩英戦争
ひとはむむっと手を結ぶ
ひとはむなしく政権返還
ひとつやろうぜ明治維新
ひとつむくよ版籍奉還
いわない秘密の廃藩置県
いわなにはしる陸の蒸気
いわなみにのむ地租改正
いわなよ言わせて民撰議院
いわなこれから樺太交換
いわななみだの西郷隆盛
いわはいと言わせる国会開設
いわはよろしく秩父事件
いわはこの年に内閣制度
いわはむざんなノルマントン
いち早く憲法発布
いわくれぬ議会だ、第回
ひとやよく見ろ日清戦争
一躍GOの下関条約
ひくい煙の八幡製鉄所
とおくに結ぶ日英同盟
行くよ突撃、日露戦争
行くことするか、ポーツマス
ひくとも併合、不満残す
ひくい腰せず自主権回復
ひときわに輝く大正デモクラシー
行くよ世界の第一次
行くこと決めた二十一か条
行くいいなロシア革命
行くいは米騒動
行く行くベルサイユ
行くわお国際連盟
行くつづく水平の道
行くふみ消える関東大震災
行くニコニコ選挙権
引きつむ歴史、昭和へ
ひく肉もない世界恐慌
戦いはじまる満州事変
戦に倒れる五・一五
戦さ避けて脱退
戦むなしく二・二六
戦ながびく日中戦争
戦はすべてを投げ出す
戦く世界の第二次
行くよお三国同盟
行くよいドン、太平洋
ひどくよごれた終戦記念
行くよむなよ新憲法
行くよな憲法いよいよ施行
行くわお朝鮮戦争
行くこいサンフランシスコ
行くこよろしく自衛隊
行くこころざし自民党
行くころには国連へ
ひと苦労した新安保
行くむし集まる金メダル
行くむごい過去越え日韓条約
行くむなしい公害対策
行くない環境守る庁
行くなにもかも沖縄復帰
行くなさらに石油パニック
行くなわ平和に日中友好
行くわく平成、消費税
一九九一ソ連が消えた
ひく国連PKO
ひくくみるな環境を
一九九五震災忘れない
つおい衝撃、世界テロ
つおいい余震の東日本
ついにいく令和の時代へ
`
  .trim()
  .split("\n")
  .map((line) => line.trim())
  .filter(Boolean);

const easyWords = [
  "しろくま",
  "ゆき",
  "おうち",
  "くう",
  "りんご",
  "みず",
  "ともだち",
  "うみ",
  "ほし",
  "ぷれぜんと",
  "そら",
  "くも",
  "にじ",
  "たいよう",
  "つき",
  "はる",
  "なつ",
  "あき",
  "ふゆ",
  "さくら",
  "はな",
  "たんぽぽ",
  "ひまわり",
  "もみじ",
  "き",
  "もり",
  "やま",
  "かわ",
  "いけ",
  "はなび",
  "うさぎ",
  "ねこ",
  "いぬ",
  "ことり",
  "きつね",
  "ぞう",
  "ぱんだ",
  "らいおん",
  "ぺんぎん",
  "いるか",
  "かめ",
  "さかな",
  "かいがら",
  "くじら",
  "えび",
  "かに",
  "たこ",
  "いか",
  "おすし",
  "おにぎり",
  "ぱん",
  "めろん",
  "いちご",
  "ぶどう",
  "ばなな",
  "みかん",
  "すいか",
  "もも",
  "さくらんぼ",
  "けーき",
  "あめ",
  "ちょこれーと",
  "くっきー",
  "じゅーす",
  "おちゃ",
  "ぎゅうにゅう",
  "ぼうし",
  "くつ",
  "かばん",
  "てぶくろ",
  "まふらー",
  "えんぴつ",
  "けしごむ",
  "のーと",
  "ほん",
  "えほん",
  "つくえ",
  "いす",
  "でんしゃ",
  "くるま",
  "ばす",
  "ひこうき",
  "ふね",
  "じてんしゃ",
  "しんごう",
  "みち",
  "えき",
  "こうえん",
  "すべりだい",
  "ぶらんこ",
  "ぼーる",
  "らっぱ",
  "たいこ",
  "ぴあの",
  "ぎたー",
  "おんがく",
  "ゆめ",
  "えがお",
  "てがみ",
  "たからばこ",
];

const promptSets = {
  easy: easyWords.map((word) => ({ ja: word, target: word })),
  normal: [
    {
      ja: "こんにちは！きょうもいっしょにあそぼう？",
      en: "konnichiwa kyoumo isshoni asobou",
    },
    {
      ja: "ぼくのおうち、もっとかわいくしたいな。",
      en: "bokuno ouchi motto kawaiku shitaina",
    },
    {
      ja: "タイピングがはやいと、ゆきのくにへりょこうできるよ！",
      en: "typing ga hayaito yuki no kuni e ryokou dekiruyo",
    },
    {
      ja: "プレゼントをもらうと、こころがぽかぽかするんだ。",
      en: "purezento wo morauto kokoro ga pokapoka surunda",
    },
    {
      ja: "きみとおはなしするの、だいすき！",
      en: "kimito ohanashi suruno daisuki",
    },
  ],
  challenge: challengeLines.map((line) => ({ ja: line, en: line })),
};

const difficultySettings = {
  easy: {
    label: "かんたん",
    guide: "ひらがなの単語をそのまま入力してね",
    expBonus: -4,
    coinBonus: -2,
  },
  normal: {
    label: "ふつう",
    guide: "ローマ字 / 日本語どちらでもOK",
    expBonus: 0,
    coinBonus: 0,
  },
  challenge: {
    label: "チャレンジ",
    guide: "長めの文。正確に入力して高報酬をねらおう",
    expBonus: 8,
    coinBonus: 12,
  },
};

const giftItems = [
  { name: "ルービックキューブ", icon: "🧩" },
  { name: "シール", icon: "🏷️" },
  { name: "指輪", icon: "💍" },
  { name: "キーホルダー", icon: "🔑" },
  { name: "犬のぬいぐるみ", icon: "🐶" },
];

const treasurePrefixes = [
  "しおかぜの",
  "あさやけの",
  "ゆうなぎの",
  "なみおとの",
  "ほしぞらの",
  "さんごいろの",
  "しらすなの",
  "にじいろの",
  "しずくの",
  "ひだまりの",
];

const treasureBases = [
  "かいがら",
  "うみガラス",
  "ミニボトル",
  "ハンカチ",
  "アクセサリー",
  "ステッカー",
  "ポストカード",
  "チャーム",
  "ぬいぐるみ",
  "しあわせコイン",
];

const treasureIcons = ["🐚", "🫙", "🧵", "✨", "🎀", "🧸", "🪙", "🌺", "💌", "🧿"];

const treasureCatalog = treasurePrefixes.flatMap((prefix, prefixIndex) =>
  treasureBases.map((base, baseIndex) => {
    const number = prefixIndex * treasureBases.length + baseIndex + 1;
    return {
      id: `gift_${number.toString().padStart(3, "0")}`,
      name: `${prefix}${base}`,
      icon: treasureIcons[(prefixIndex + baseIndex) % treasureIcons.length],
    };
  })
);
const treasureById = Object.fromEntries(treasureCatalog.map((item) => [item.id, item]));

const GUEST_VISIT_MS = 60000;
const guestScenes = [
  {
    mood: "happy",
    moodLabel: "わいわい",
    guestSpeech: "今日の図工でね、すごい作品つくったんだ！",
    kuuSpeech: "いいなあ！どんな作品だったの？",
    chat: "🎨 小学生のおきゃくさまが、今日の学校の図工の話をしてくれた。",
  },
  {
    mood: "walk",
    moodLabel: "おはなし",
    guestSpeech: "休み時間はドッジボールして遊んだよ！",
    kuuSpeech: "わあ、楽しそう！くうもまぜてほしいな。",
    chat: "🏐 休み時間の遊びの話で、ふたりが盛り上がっている。",
  },
  {
    mood: "sniff",
    moodLabel: "おちゃ",
    guestSpeech: "おべんとうのデザート、今日はすっごくおいしかった！",
    kuuSpeech: "くうも甘いの好き！お茶しながら聞くと最高だね。",
    chat: "🍰 学校のおべんとうやおやつの話をしながら、ふたりでお茶タイム。",
  },
  {
    mood: "happy",
    moodLabel: "にこにこ",
    guestSpeech: "明日はなわとび大会なんだ。ちょっと緊張するなあ。",
    kuuSpeech: "だいじょうぶ！きっと上手にできるよ、応援してる！",
    chat: "🪢 明日の学校イベントの話をして、くうが元気づけている。",
  },
];

const deprecatedUnlocks = new Set([
  "ミニギフトショップ",
  "くうのふわふわマフラー",
  "ゆきのくに旅行",
  "ごうかインテリア",
  "ゆきやまピクニック写真",
  "ごうかなソファとキラキラライト",
]);

const DEFAULT_SESSION_LIMIT_SECONDS = 60;
const CHALLENGE_SESSION_LIMIT_SECONDS = 90;
const ROOM_THEME_UNLOCK_COST = 80;
const DEFAULT_UNLOCKED_ROOM_THEMES = ["normal", "fancy"];
const EXTRA_ROOM_THEME_ORDER = ["resort", "japaneseroom", "french", "obake", "snowdome"];
const ALL_HOME_ROOM_THEMES = [...DEFAULT_UNLOCKED_ROOM_THEMES, ...EXTRA_ROOM_THEME_ORDER];
const ROOM_THEME_LABELS = {
  normal: "ノーマル",
  fancy: "ファンシー",
  resort: "リゾート",
  japaneseroom: "わしつ",
  french: "フランスふう",
  obake: "おばけ",
  snowdome: "スノードーム",
};

const state = {
  level: 1,
  exp: 0,
  expMax: 100,
  coins: 0,
  friendship: 0,
  unlocks: [],
  difficulty: "normal",
  roomTheme: "normal",
  unlockedRoomThemes: [...DEFAULT_UNLOCKED_ROOM_THEMES],
  promptIndexByDifficulty: {
    easy: 0,
    normal: 0,
    challenge: 0,
  },
  timeLeft: DEFAULT_SESSION_LIMIT_SECONDS,
  sessionCoins: 0,
  chatLog: [],
  treasureCounts: {},
  treasureHistory: [],
  lastTreasureGiftAt: 0,
};

const ui = {
  level: document.getElementById("level"),
  exp: document.getElementById("exp"),
  coins: document.getElementById("coins"),
  friendship: document.getElementById("friendship"),
  expBar: document.getElementById("expBar"),
  friendBar: document.getElementById("friendBar"),
  promptJa: document.getElementById("promptJa"),
  promptEn: document.getElementById("promptEn"),
  typingGuide: document.getElementById("typingGuide"),
  timeLeft: document.getElementById("timeLeft"),
  timerBar: document.getElementById("timerBar"),
  coinPreview: document.getElementById("coinPreview"),
  sessionCoins: document.getElementById("sessionCoins"),
  timerStartBtn: document.getElementById("timerStartBtn"),
  timerStopBtn: document.getElementById("timerStopBtn"),
  difficultySelect: document.getElementById("difficultySelect"),
  roomThemeButtons: [...document.querySelectorAll(".room-theme-btn")],
  typingInput: document.getElementById("typingInput"),
  submitBtn: document.getElementById("submitBtn"),
  feedback: document.getElementById("feedback"),
  petBtn: document.getElementById("petBtn"),
  praiseBtn: document.getElementById("praiseBtn"),
  treasureBtn: document.getElementById("treasureBtn"),
  giftBtn: document.getElementById("giftBtn"),
  tripBtn: document.getElementById("tripBtn"),
  interiorBtn: document.getElementById("interiorBtn"),
  guestBtn: document.getElementById("guestBtn"),
  roomThemeModal: document.getElementById("roomThemeModal"),
  roomThemeModalOptions: document.getElementById("roomThemeModalOptions"),
  roomThemeModalClose: document.getElementById("roomThemeModalClose"),
  treasureSummary: document.getElementById("treasureSummary"),
  treasureCountdown: document.getElementById("treasureCountdown"),
  treasureGallery: document.getElementById("treasureGallery"),
  unlockList: document.getElementById("unlockList"),
  chatLog: document.getElementById("chatLog"),
  room: document.getElementById("room"),
  kitchenArea: document.getElementById("kitchenArea"),
  kuuInRoom: document.getElementById("kuuInRoom"),
  kuuMood: document.getElementById("kuuMood"),
  kuuSpeech: document.getElementById("kuuSpeech"),
  guestVisit: document.getElementById("guestVisit"),
  guestSpeech: document.getElementById("guestSpeech"),
  giftEvent: document.getElementById("giftEvent"),
  giftItem: document.getElementById("giftItem"),
};

let moodResetTimer = null;
let idleActionTimer = null;
let speechTimer = null;
let sessionTimer = null;
let cookingCooldownUntil = 0;
let sessionRunning = false;
let guestVisitTimer = null;
let guestActionTimer = null;
let guestVisiting = false;
let lastValidTypingValue = "";
let hawaiiReturnTimer = null;
let roomThemeBeforeTrip = "normal";
const COOKIE_PROFILE_ID = "kuu_profile_id";
const COOKIE_PROGRESS_PREFIX = "kuu_progress_";
const COOKIE_EXPIRE_DAYS = 365;
const PET_ACTION_COOLDOWN_MS = 10000;
const PRAISE_ACTION_COOLDOWN_MS = 10000;
const TREASURE_GIFT_INTERVAL_MS = 24 * 60 * 60 * 1000;
const TREASURE_HISTORY_LIMIT = 40;
let petCooldownUntil = 0;
let praiseCooldownUntil = 0;
let petCooldownTimer = null;
let praiseCooldownTimer = null;
let treasureGalleryOpen = false;
const travelThemes = new Set(["hawaii", "hiroshima", "montsaintmichel", "dubrovnik", "newyork"]);
const tripDestinations = [
  {
    place: "ハワイ",
    theme: "hawaii",
    chat: "🌺 くうとハワイへ！ うみべでの思い出がふえた。",
    feedback: "くうはハワイのうみでおおはしゃぎ！",
    speech: "ハワイのうみ、きれい！ すっごくうれしい！",
    mood: "うみだー！",
  },
  {
    place: "広島",
    theme: "hiroshima",
    chat: "⛩ くうと広島へ！ すてきな街の景色を見てきた。",
    feedback: "くうは広島の景色にわくわくしてる！",
    speech: "ひろしま、すてき！ もっと見てまわりたいな！",
    mood: "わくわく！",
  },
  {
    place: "フランスのモンサンミッシェル",
    theme: "montsaintmichel",
    chat: "🏰 くうとフランスのモンサンミッシェルへ！ うっとりする景色だった。",
    feedback: "くうはモンサンミッシェルの景色に見とれてる！",
    speech: "わあ…まるでおとぎばなしみたい！",
    mood: "うっとり",
  },
  {
    place: "クロアチアのドブロヴニク",
    theme: "dubrovnik",
    chat: "🏝 くうとクロアチアのドブロヴニクへ！ 海と街並みがきれいだった。",
    feedback: "くうはドブロヴニクの景色にテンションアップ！",
    speech: "うみもまちもすっごくきれい！ また来たいな！",
    mood: "きらきら",
  },
  {
    place: "アメリカのニューヨーク",
    theme: "newyork",
    chat: "🗽 くうとアメリカのニューヨークへ！ 夜景がきらきらしていた。",
    feedback: "くうはニューヨークの街にどきどきしてる！",
    speech: "たかいビルがいっぱい！ きらきらしてるね！",
    mood: "どきどき",
  },
];

const sanitizeUnlockedRoomThemes = () => {
  if (!Array.isArray(state.unlockedRoomThemes)) {
    state.unlockedRoomThemes = [...DEFAULT_UNLOCKED_ROOM_THEMES];
    return;
  }
  const allowed = new Set(ALL_HOME_ROOM_THEMES);
  const filtered = state.unlockedRoomThemes.filter((theme) => allowed.has(theme));
  const merged = [...new Set([...DEFAULT_UNLOCKED_ROOM_THEMES, ...filtered])];
  if (ALL_HOME_ROOM_THEMES.includes(state.roomTheme)) {
    merged.push(state.roomTheme);
  }
  state.unlockedRoomThemes = [...new Set(merged)];
};

const nextUnlockableRoomTheme = () => EXTRA_ROOM_THEME_ORDER.find((theme) => !state.unlockedRoomThemes.includes(theme)) || null;
const lockedRoomThemes = () => EXTRA_ROOM_THEME_ORDER.filter((theme) => !state.unlockedRoomThemes.includes(theme));

const closeRoomThemeModal = () => {
  ui.roomThemeModal.hidden = true;
  ui.roomThemeModalOptions.innerHTML = "";
};

const unlockRoomTheme = (themeToUnlock) => {
  if (!themeToUnlock) return;
  if (!lockedRoomThemes().includes(themeToUnlock)) return;
  if (state.coins < ROOM_THEME_UNLOCK_COST) {
    ui.feedback.textContent = "コインがたりないよ。";
    closeRoomThemeModal();
    render();
    return;
  }

  state.coins -= ROOM_THEME_UNLOCK_COST;
  state.friendship += 8;
  state.unlockedRoomThemes.push(themeToUnlock);
  state.roomTheme = themeToUnlock;
  roomThemeBeforeTrip = themeToUnlock;

  const label = ROOM_THEME_LABELS[themeToUnlock] || "新しいテーマ";
  ui.feedback.textContent = `${label}を解放したよ！`;
  addChat(`🛋 もようがえで「${label}」を解放した！`);
  setKuuMood("celebrate", "もようがえ！");
  closeRoomThemeModal();
  render();
};

const openRoomThemeModal = () => {
  const locked = lockedRoomThemes();
  if (!locked.length) {
    ui.feedback.textContent = "もようがえはぜんぶ解放ずみだよ！";
    return;
  }
  ui.roomThemeModalOptions.innerHTML = locked
    .map((theme) => {
      const label = ROOM_THEME_LABELS[theme] || theme;
      return `<button type="button" class="room-theme-choice" data-theme-choice="${theme}">${label}</button>`;
    })
    .join("");
  ui.roomThemeModal.hidden = false;
};

const sanitizeTreasureState = () => {
  const nextCounts = {};
  if (state.treasureCounts && typeof state.treasureCounts === "object") {
    Object.entries(state.treasureCounts).forEach(([id, count]) => {
      if (!treasureById[id]) return;
      const safeCount = Number.isFinite(count) ? Math.max(0, Math.floor(count)) : 0;
      if (safeCount > 0) nextCounts[id] = safeCount;
    });
  }
  state.treasureCounts = nextCounts;

  if (!Array.isArray(state.treasureHistory)) {
    state.treasureHistory = [];
  }
  state.treasureHistory = state.treasureHistory
    .map((entry) => {
      if (typeof entry === "string" && treasureById[entry]) {
        return { id: entry, at: 0 };
      }
      if (!entry || typeof entry !== "object") return null;
      if (!treasureById[entry.id]) return null;
      return {
        id: entry.id,
        at: Number.isFinite(entry.at) ? entry.at : 0,
      };
    })
    .filter(Boolean)
    .slice(0, TREASURE_HISTORY_LIMIT);

  if (!Number.isFinite(state.lastTreasureGiftAt)) {
    state.lastTreasureGiftAt = 0;
  }
};

const canReceiveTreasureGift = () => Date.now() - state.lastTreasureGiftAt >= TREASURE_GIFT_INTERVAL_MS;
const treasureRemainingMs = () => Math.max(0, TREASURE_GIFT_INTERVAL_MS - (Date.now() - state.lastTreasureGiftAt));

const formatRemainingTime = (ms) => {
  const totalSeconds = Math.ceil(ms / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  return `${hours}時間${minutes}分`;
};

const receiveTreasureGift = (reason = "manual") => {
  const item = treasureCatalog[Math.floor(Math.random() * treasureCatalog.length)];
  state.treasureCounts[item.id] = (state.treasureCounts[item.id] || 0) + 1;
  state.treasureHistory.unshift({ id: item.id, at: Date.now() });
  state.treasureHistory = state.treasureHistory.slice(0, TREASURE_HISTORY_LIMIT);
  state.lastTreasureGiftAt = Date.now();
  state.friendship += 2;

  if (reason === "auto") {
    ui.feedback.textContent = `🧰 くうからプレゼント！「${item.icon} ${item.name}」をもらったよ。`;
    addChat(`🧰 くうが今日のプレゼント「${item.icon} ${item.name}」をくれた。`);
  } else {
    ui.feedback.textContent = `🧰 たからばこを開けた！「${item.icon} ${item.name}」をもらったよ。`;
    addChat(`🎁 たからばこから「${item.icon} ${item.name}」を受け取った。`);
  }
  showKuuSpeech("きょうのプレゼントだよ！", 2200);
  setKuuMood("celebrate", "どうぞ♪", 1600);
};

const getCookie = (name) => {
  const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const match = document.cookie.match(new RegExp(`(?:^|; )${escaped}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : "";
};

const setCookie = (name, value, days = COOKIE_EXPIRE_DAYS) => {
  const expires = new Date(Date.now() + days * 24 * 60 * 60 * 1000).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/; SameSite=Lax`;
};

const getProfileId = () => {
  let profileId = getCookie(COOKIE_PROFILE_ID);
  if (profileId) return profileId;
  profileId = `${Date.now().toString(36)}${Math.random().toString(36).slice(2, 8)}`;
  setCookie(COOKIE_PROFILE_ID, profileId);
  return profileId;
};

const loadCookieProgress = () => {
  const profileId = getProfileId();
  const raw = getCookie(`${COOKIE_PROGRESS_PREFIX}${profileId}`);
  if (!raw) return;
  try {
    const cookieState = JSON.parse(raw);
    if (Number.isFinite(cookieState.level) && cookieState.level > 0) {
      state.level = Math.floor(cookieState.level);
    }
    if (Number.isFinite(cookieState.coins) && cookieState.coins >= 0) {
      state.coins = Math.floor(cookieState.coins);
    }
    if (Number.isFinite(cookieState.friendship) && cookieState.friendship >= 0) {
      state.friendship = Math.floor(cookieState.friendship);
    }
    if (
      ["normal", "fancy", "resort", "japaneseroom", "french", "obake", "snowdome", "hawaii", "hiroshima", "montsaintmichel", "dubrovnik", "newyork"].includes(
        cookieState.roomTheme
      )
    ) {
      state.roomTheme = cookieState.roomTheme;
    }
    if (Array.isArray(cookieState.unlockedRoomThemes)) {
      state.unlockedRoomThemes = cookieState.unlockedRoomThemes;
    }
    if (cookieState.treasureCounts && typeof cookieState.treasureCounts === "object") {
      state.treasureCounts = cookieState.treasureCounts;
    }
    if (Array.isArray(cookieState.treasureHistory)) {
      state.treasureHistory = cookieState.treasureHistory;
    }
    if (Number.isFinite(cookieState.lastTreasureGiftAt)) {
      state.lastTreasureGiftAt = cookieState.lastTreasureGiftAt;
    }
  } catch {
    // 不正フォーマット時は無視して継続
  }
  sanitizeTreasureState();
  sanitizeUnlockedRoomThemes();
};

const saveCookieProgress = () => {
  const profileId = getProfileId();
  const payload = JSON.stringify({
    level: state.level,
    coins: state.coins,
    roomTheme: state.roomTheme,
    unlockedRoomThemes: state.unlockedRoomThemes,
    friendship: state.friendship,
    treasureCounts: state.treasureCounts,
    treasureHistory: state.treasureHistory,
    lastTreasureGiftAt: state.lastTreasureGiftAt,
  });
  setCookie(`${COOKIE_PROGRESS_PREFIX}${profileId}`, payload);
};

const load = () => {
  const raw = localStorage.getItem("kuu-typing-save");
  if (raw) {
    try {
      const parsed = JSON.parse(raw);
      Object.assign(state, parsed);

      // 古いセーブデータ互換
      if (!state.promptIndexByDifficulty) {
        const baseIndex = Number.isInteger(parsed.promptIndex) ? parsed.promptIndex : 0;
        state.promptIndexByDifficulty = {
          easy: baseIndex,
          normal: baseIndex,
          challenge: baseIndex,
        };
      }

      if (!["easy", "normal", "challenge"].includes(state.difficulty)) {
        state.difficulty = "normal";
      }
      if (
        !["normal", "fancy", "resort", "japaneseroom", "french", "obake", "snowdome", "hawaii", "hiroshima", "montsaintmichel", "dubrovnik", "newyork"].includes(
          state.roomTheme
        )
      ) {
        state.roomTheme = "normal";
      }
      // 旅行背景は一時演出なので、再読み込み時は通常部屋に戻す
      if (travelThemes.has(state.roomTheme)) {
        state.roomTheme = "normal";
      }
      if (Array.isArray(state.unlocks)) {
        state.unlocks = state.unlocks.filter((u) => !deprecatedUnlocks.has(u));
      } else {
        state.unlocks = [];
      }

      if (!Number.isFinite(state.timeLeft)) state.timeLeft = currentSessionLimitSeconds();
      if (!Number.isFinite(state.sessionCoins)) state.sessionCoins = 0;

      state.timeLeft = Math.min(currentSessionLimitSeconds(), Math.max(0, state.timeLeft));
      state.sessionCoins = Math.max(0, state.sessionCoins);
      sanitizeTreasureState();
      sanitizeUnlockedRoomThemes();
    } catch {
      localStorage.removeItem("kuu-typing-save");
    }
  }
  loadCookieProgress();
  sanitizeUnlockedRoomThemes();
};

const save = () => {
  localStorage.setItem("kuu-typing-save", JSON.stringify(state));
  saveCookieProgress();
};

const currentPrompts = () => promptSets[state.difficulty] || promptSets.normal;
const currentSessionLimitSeconds = () =>
  state.difficulty === "challenge" ? CHALLENGE_SESSION_LIMIT_SECONDS : DEFAULT_SESSION_LIMIT_SECONDS;
const currentSessionLabel = () => (state.difficulty === "challenge" ? "1分30秒" : "1分");

const currentPrompt = () => {
  const list = currentPrompts();
  const idx = state.promptIndexByDifficulty[state.difficulty] % list.length;
  return list[idx];
};

const normalizeForMatch = (text) =>
  text
    .normalize("NFKC")
    .toLowerCase()
    .replace(/[！!？?,，。．・「」『』（）()\[\]'"`]/g, "")
    .replace(/\s+/g, " ")
    .trim();

const normalizeForTyping = (text) => text.normalize("NFKC").toLowerCase();

const currentTypingTarget = () => {
  const prompt = currentPrompt();
  if (state.difficulty === "easy") return prompt.target || "";
  return prompt.en || prompt.target || prompt.ja || "";
};

const buildKuuReply = (guestSpeech, fallback = "そうなんだ！ もっと聞かせて！") => {
  const text = normalizeForMatch(guestSpeech);
  if (text.includes("図工") || text.includes("作品")) {
    return "すごい！ どこをいちばんがんばったの？";
  }
  if (text.includes("休み時間") || text.includes("ドッジ") || text.includes("遊んだ")) {
    return "いいね！ くうもいっしょにあそびたいな。";
  }
  if (text.includes("給食") || text.includes("デザート") || text.includes("おいしかった")) {
    return "おいしそう！ どんなあじだったの？";
  }
  if (text.includes("大会") || text.includes("緊張") || text.includes("明日")) {
    return "だいじょうぶ、くうが応援してるよ！";
  }
  if (text.includes("先生") || text.includes("友だち")) {
    return "やさしいね。 そのつづきも聞きたい！";
  }
  return fallback;
};

const isHiraganaWord = (text) => /^[ぁ-んー]+$/.test(text);

const addChat = (line) => {
  state.chatLog.unshift(line);
  state.chatLog = state.chatLog.slice(0, 16);
};

const addUnlock = (text) => {
  if (!state.unlocks.includes(text)) {
    state.unlocks.push(text);
    addChat(`🏆 解放: ${text}`);
  }
};

const setKuuMood = (mood, label, duration = 1700) => {
  const resolvedDuration = mood === "walk" ? Math.max(duration, 5200) : duration;
  ui.kuuInRoom.className = `kuu-in-room mood-${mood}`;
  ui.kuuMood.textContent = label;

  if (moodResetTimer) clearTimeout(moodResetTimer);
  moodResetTimer = setTimeout(() => {
    ui.kuuInRoom.className = "kuu-in-room mood-idle";
    ui.kuuMood.textContent = "のんびり";
  }, resolvedDuration);
};

const showKuuSpeech = (message, duration = 2200) => {
  ui.kuuSpeech.textContent = message;
  ui.kuuSpeech.classList.add("show");
  if (speechTimer) clearTimeout(speechTimer);
  speechTimer = setTimeout(() => {
    ui.kuuSpeech.classList.remove("show");
  }, duration);
};

const estimateCoinGain = () => {
  const setting = difficultySettings[state.difficulty];
  const baseCoin = Math.max(4, 8 + setting.coinBonus);
  const speedBonus = Math.max(0, Math.floor(state.timeLeft / 6));
  return baseCoin + speedBonus;
};

const isValidTypingPrefix = (inputText) => {
  const typed = normalizeForTyping(inputText);
  if (!typed) return true;
  const target = normalizeForTyping(currentTypingTarget());
  return target.startsWith(typed);
};

const canSubmitTyping = () => {
  if (!sessionRunning || state.timeLeft <= 0) return false;
  const answer = normalizeForTyping(ui.typingInput.value);
  if (!answer) return false;
  if (state.difficulty === "easy" && !isHiraganaWord(answer)) return false;
  const target = normalizeForTyping(currentTypingTarget());
  return answer === target;
};

const updateSubmitAvailability = () => {
  ui.submitBtn.disabled = !canSubmitTyping();
};

const renderTimer = () => {
  const limit = currentSessionLimitSeconds();
  ui.timeLeft.textContent = state.timeLeft;
  ui.timerBar.style.width = `${Math.max(0, (state.timeLeft / limit) * 100)}%`;
  ui.coinPreview.textContent = estimateCoinGain();
  ui.sessionCoins.textContent = state.sessionCoins;
  ui.timerStartBtn.disabled = sessionRunning;
  ui.timerStopBtn.disabled = !sessionRunning;
  ui.typingInput.disabled = !sessionRunning;
  updateSubmitAvailability();
};

const advancePrompt = () => {
  state.promptIndexByDifficulty[state.difficulty] += 1;
};

const endGuestVisit = () => {
  if (!guestVisiting) return;
  if (guestVisitTimer) clearTimeout(guestVisitTimer);
  if (guestActionTimer) clearInterval(guestActionTimer);
  guestVisitTimer = null;
  guestActionTimer = null;
  guestVisiting = false;
  ui.guestVisit.classList.remove("active");
  ui.guestVisit.setAttribute("aria-hidden", "true");
  addChat("👋 おきゃくさまは手をふって帰っていった。");
  showKuuSpeech("またあそびにきてね！", 2200);
  setKuuMood("happy", "ばいばい", 1700);
  render();
};

const startGuestVisit = () => {
  if (guestVisiting) return;
  guestVisiting = true;
  ui.guestVisit.classList.add("active");
  ui.guestVisit.setAttribute("aria-hidden", "false");
  ui.guestSpeech.textContent = "こんにちは！きょう学校でね…";
  addChat("👧 小学生のおきゃくさまが遊びにきた！");
  showKuuSpeech("ようこそ！学校のお話きかせて！", 3000);
  setKuuMood("happy", "おきゃくさま", 2200);

  let sceneIndex = 0;
  const runGuestScene = () => {
    const scene = guestScenes[sceneIndex % guestScenes.length];
    ui.guestSpeech.textContent = scene.guestSpeech;
    showKuuSpeech(buildKuuReply(scene.guestSpeech, scene.kuuSpeech), 3600);
    setKuuMood(scene.mood, scene.moodLabel, 2000);
    addChat(scene.chat);
    sceneIndex += 1;
  };

  runGuestScene();
  guestActionTimer = setInterval(() => {
    runGuestScene();
  }, 9000);

  guestVisitTimer = setTimeout(() => {
    endGuestVisit();
  }, GUEST_VISIT_MS);

  render();
};

const stopTypingSession = (message) => {
  if (sessionTimer) clearInterval(sessionTimer);
  sessionTimer = null;
  sessionRunning = false;
  if (message) ui.feedback.textContent = message;
  renderTimer();
};

const startTypingSession = () => {
  if (sessionRunning) return;
  state.timeLeft = currentSessionLimitSeconds();
  state.sessionCoins = 0;
  state.promptIndexByDifficulty[state.difficulty] = 0;
  sessionRunning = true;
  ui.typingInput.value = "";
  lastValidTypingValue = "";
  render();
  ui.feedback.textContent = `${currentSessionLabel()}チャレンジ開始！`;
  addChat(`⏱ ${currentSessionLabel()}タイピングチャレンジを開始した！`);

  if (sessionTimer) clearInterval(sessionTimer);
  sessionTimer = setInterval(() => {
    state.timeLeft -= 1;
    if (state.timeLeft <= 0) {
      state.timeLeft = 0;
      stopTypingSession(`1分終了！ 今回ゲットしたコイン: ${state.sessionCoins}`);
      addChat(`🏁 1分終了！ 今回のコイン +${state.sessionCoins}`);
      setKuuMood("celebrate", "おつかれさま！", 1800);
      return;
    }
    renderTimer();
  }, 1000);
  renderTimer();
};

const triggerGiftSequence = () => {
  const item = giftItems[Math.floor(Math.random() * giftItems.length)];

  ui.giftEvent.classList.remove("active", "open");
  ui.giftItem.textContent = `${item.icon} ${item.name}`;
  // reflow to replay animation reliably
  void ui.giftEvent.offsetWidth;
  ui.giftEvent.classList.add("active");

  setTimeout(() => {
    ui.giftEvent.classList.add("open");
    showKuuSpeech(`${item.name}だ！ ありがとう！`, 2600);
    addChat(`🎁 くうは「${item.name}」をうれしそうに開けた。`);
  }, 620);

  setTimeout(() => {
    ui.giftEvent.classList.remove("active", "open");
  }, 2800);
};

const triggerCookingEvent = () => {
  const now = Date.now();
  if (now < cookingCooldownUntil) return;
  cookingCooldownUntil = now + 26000;
  const hasKitchen = Boolean(ui.kitchenArea);

  setKuuMood("walk", "くっきんぐ", 2400);
  if (hasKitchen) ui.kitchenArea.classList.add("cooking");

  setTimeout(() => {
    showKuuSpeech(hasKitchen ? "じぶんでつくったよ。いただきます！" : "おやつタイムだよ。いただきます！", 2600);
    addChat(hasKitchen ? "🍳 くうはキッチンで料理して、できたてをもぐもぐ食べた。" : "🍪 くうはおやつをもぐもぐ食べて、ごきげんになった。");
    setKuuMood("happy", "おいしい！", 1600);
  }, 900);

  setTimeout(() => {
    if (hasKitchen) ui.kitchenArea.classList.remove("cooking");
  }, 4200);
};

const startIdleActions = () => {
  if (idleActionTimer) clearInterval(idleActionTimer);
  idleActionTimer = setInterval(() => {
    if (!ui.kuuInRoom.classList.contains("mood-idle")) return;
    const roll = Math.random();
    if (roll < 0.18) {
      triggerCookingEvent();
    } else if (roll < 0.4) {
      setKuuMood("sniff", "くんくん", 1100);
    } else if (roll < 0.68) {
      setKuuMood("walk", "とことこ", 1900);
    } else {
      setKuuMood("happy", "にこっ", 1300);
    }
  }, 7000);
};

const applyLevelUps = () => {
  while (state.exp >= state.expMax) {
    state.exp -= state.expMax;
    state.level += 1;
    state.expMax = Math.round(state.expMax * 1.18);
    state.coins += 15;
    addChat(`🌟 レベル${state.level}になった！ くうがうれしそう。`);
  }
};

const render = () => {
  const prompt = currentPrompt();
  const typingTarget = currentTypingTarget();
  const showTypingPrompt = sessionRunning;
  const now = Date.now();

  ui.level.textContent = state.level;
  ui.exp.textContent = `${state.exp} / ${state.expMax}`;
  ui.coins.textContent = state.coins;
  ui.friendship.textContent = state.friendship;
  ui.expBar.style.width = `${Math.min(100, (state.exp / state.expMax) * 100)}%`;
  ui.friendBar.style.width = `${Math.min(100, (state.friendship / 220) * 100)}%`;

  ui.difficultySelect.value = state.difficulty;
  ui.roomThemeButtons.forEach((btn) => {
    const isUnlocked = state.unlockedRoomThemes.includes(btn.dataset.theme);
    const active = btn.dataset.theme === state.roomTheme;
    btn.hidden = !isUnlocked;
    btn.disabled = !isUnlocked;
    btn.classList.toggle("is-active", active);
    btn.setAttribute("aria-pressed", active ? "true" : "false");
  });
  ui.promptJa.textContent = showTypingPrompt
    ? prompt.ja
    : "スタートを押すと、ここにおだいが表示されるよ。";
  ui.promptEn.textContent = showTypingPrompt ? typingTarget : "";
  ui.typingGuide.textContent = showTypingPrompt
    ? "いま入力する文:"
    : "いま入力する文:（スタート後に表示）";
  ui.typingGuide.appendChild(ui.promptEn);

  ui.giftBtn.disabled = state.coins < 30;
  ui.tripBtn.disabled = state.coins < 60 || state.level < 3;
  const unlockableTheme = nextUnlockableRoomTheme();
  ui.interiorBtn.disabled = state.coins < ROOM_THEME_UNLOCK_COST || !unlockableTheme;
  ui.interiorBtn.textContent = unlockableTheme
    ? `🛋 もようがえ (80コイン)`
    : "🛋 もようがえ（コンプリート）";
  ui.guestBtn.disabled = guestVisiting;
  ui.petBtn.disabled = false;
  ui.praiseBtn.disabled = false;
  ui.petBtn.textContent = "🤚 なでる (+1コイン / 10秒)";
  ui.praiseBtn.textContent = "👏 ほめる (+1コイン / 10秒)";
  const totalTreasures = Object.values(state.treasureCounts).reduce((sum, count) => sum + count, 0);
  const canGiftNow = canReceiveTreasureGift();
  ui.treasureBtn.textContent = canGiftNow ? "🧰 たからばこをあける（受け取る）" : "🧰 たからばこを見る";
  ui.treasureSummary.textContent =
    totalTreasures > 0 ? `いままでにもらったプレゼント: ${totalTreasures}個` : "まだプレゼントはありません。";
  ui.treasureCountdown.textContent = "";
  ui.treasureGallery.hidden = !treasureGalleryOpen;
  if (!treasureGalleryOpen) {
    ui.treasureGallery.innerHTML = "";
  } else if (!state.treasureHistory.length) {
    ui.treasureGallery.innerHTML = '<p class="treasure-empty">たからばこは空っぽです。</p>';
  } else {
    const seen = new Set();
    const items = [];
    state.treasureHistory.forEach((entry) => {
      if (seen.has(entry.id)) return;
      seen.add(entry.id);
      items.push(entry);
    });
    ui.treasureGallery.innerHTML = items
      .slice(0, 30)
      .map((entry) => {
        const item = treasureById[entry.id];
        const count = state.treasureCounts[entry.id] || 0;
        return `<article class="treasure-card"><div class="treasure-photo">${item.icon}</div><div class="treasure-meta">${item.name}<br>x ${count}</div></article>`;
      })
      .join("");
  }
  ui.guestBtn.textContent = guestVisiting ? "👧 おきゃくさまが滞在中..." : "👧 おきゃくさまをよぶ (+3コイン)";

  ui.unlockList.innerHTML = state.unlocks.length
    ? state.unlocks.map((u) => `<li>${u}</li>`).join("")
    : "";

  ui.chatLog.innerHTML = state.chatLog.length
    ? state.chatLog.map((line) => `<li>${line}</li>`).join("")
    : "<li>はじめまして！ くうがあなたをまっています。</li>";

  ui.room.className = `room room-image room-theme-${state.roomTheme} level-1`;

  renderTimer();
  save();
};

const onTypingSubmit = () => {
  if (!sessionRunning) {
    ui.feedback.textContent = "スタートを押して1分チャレンジを始めてね。";
    return;
  }

  if (state.timeLeft <= 0) return;

  if (!canSubmitTyping()) {
    ui.feedback.textContent = "おだいを最後まで正しく入力すると送信できるよ。";
    return;
  }

  const answer = normalizeForTyping(ui.typingInput.value);
  const setting = difficultySettings[state.difficulty];
  const typingTarget = normalizeForTyping(currentTypingTarget());

  if (!answer) return;

  if (state.difficulty === "easy" && !isHiraganaWord(answer)) {
    ui.feedback.textContent = "かんたんモードは、ひらがなで入力してね。";
    addChat("くう: ひらがなでゆっくりうってみよう！");
    setKuuMood("sniff", "ひらがなで♪", 1400);
    return;
  }

  const isCorrect = answer === typingTarget;

  if (isCorrect) {
    const gain = 18 + Math.floor(Math.random() * 8) + setting.expBonus;
    const baseCoin = Math.max(4, 8 + setting.coinBonus);
    const speedBonus = Math.max(0, Math.floor(state.timeLeft / 6));
    const coinGain = baseCoin + speedBonus;

    state.exp += gain;
    state.coins += coinGain;
    state.sessionCoins += coinGain;
    state.friendship += 7;
    ui.feedback.textContent = `せいかい！ EXP +${gain} / コイン +${coinGain}（スピード +${speedBonus}）`;
    addChat(`くう: ${setting.label}モード、ばっちりだね！`);
    setKuuMood("happy", "うれしい！");
    advancePrompt();
    applyLevelUps();
  } else {
    state.friendship = Math.max(0, state.friendship - 2);
    ui.feedback.textContent = "おしい！ もういちど入力してみよう。";
    addChat("くう: ゆっくりでだいじょうぶ。いっしょに練習しよう！");
    setKuuMood("sad", "しゅん…");
  }

  ui.typingInput.value = "";
  lastValidTypingValue = "";
  render();
};

ui.difficultySelect.addEventListener("change", (e) => {
  state.difficulty = e.target.value;
  ui.feedback.textContent = `${difficultySettings[state.difficulty].label}モードにしたよ。`;
  addChat(`📘 むずかしさ変更: ${difficultySettings[state.difficulty].label}`);
  ui.typingInput.value = "";
  lastValidTypingValue = "";
  if (!sessionRunning) {
    state.timeLeft = currentSessionLimitSeconds();
  }
  render();
});

ui.roomThemeButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (!state.unlockedRoomThemes.includes(btn.dataset.theme)) return;
    if (hawaiiReturnTimer) {
      clearTimeout(hawaiiReturnTimer);
      hawaiiReturnTimer = null;
    }
    state.roomTheme = btn.dataset.theme;
    roomThemeBeforeTrip = state.roomTheme;
    const label = ROOM_THEME_LABELS[state.roomTheme] || "ノーマル";
    ui.feedback.textContent = `お部屋テーマを${label}にしたよ。`;
    addChat(`🖼 お部屋テーマ変更: ${label}`);
    render();
  });
});

ui.timerStartBtn.addEventListener("click", () => {
  startTypingSession();
});

ui.timerStopBtn.addEventListener("click", () => {
  stopTypingSession(`ストップしたよ。今回ゲットしたコイン: ${state.sessionCoins}`);
});

ui.submitBtn.addEventListener("click", onTypingSubmit);
ui.typingInput.addEventListener("keydown", (e) => {
  // コピペ入力を禁止
  if ((e.ctrlKey || e.metaKey) && ["v", "c", "x"].includes(e.key.toLowerCase())) {
    e.preventDefault();
    ui.feedback.textContent = "コピペは使えないよ。手でタイピングしてね。";
    return;
  }

  // 日本語IME変換中の Enter では送信しない
  if (e.key === "Enter" && !e.isComposing && e.keyCode !== 229) {
    e.preventDefault();
    if (canSubmitTyping()) {
      onTypingSubmit();
    } else if (sessionRunning) {
      ui.feedback.textContent = "おだいを最後まで正しく入力すると送信できるよ。";
    }
  }
});

ui.typingInput.addEventListener("input", (e) => {
  if (!sessionRunning) return;
  if (e.isComposing) return;
  if (isValidTypingPrefix(ui.typingInput.value)) {
    lastValidTypingValue = ui.typingInput.value;
    updateSubmitAvailability();
    return;
  }
  ui.typingInput.value = lastValidTypingValue;
  ui.typingInput.setSelectionRange(lastValidTypingValue.length, lastValidTypingValue.length);
  ui.feedback.textContent = "その文字はまだ入力できないよ。正しい文字に直してね。";
  setKuuMood("sniff", "ここまでOK", 900);
  updateSubmitAvailability();
});

["paste", "drop", "copy", "cut"].forEach((eventName) => {
  ui.typingInput.addEventListener(eventName, (e) => {
    e.preventDefault();
    ui.feedback.textContent = "コピペは使えないよ。手でタイピングしてね。";
  });
});

ui.giftBtn.addEventListener("click", () => {
  if (state.coins < 30) return;
  state.coins -= 30;
  state.friendship += 12;
  addChat("🎁 くうがマフラーをぎゅっとしてにっこり。");
  setKuuMood("celebrate", "るんるん！");
  triggerGiftSequence();
  render();
});

ui.petBtn.addEventListener("click", () => {
  const now = Date.now();
  if (now < petCooldownUntil) {
    const remain = Math.ceil((petCooldownUntil - now) / 1000);
    ui.feedback.textContent = `なでるは10秒で1コインだよ。あと${remain}秒待ってね。`;
    setKuuMood("sniff", "まってね", 900);
    return;
  }
  petCooldownUntil = now + PET_ACTION_COOLDOWN_MS;
  if (petCooldownTimer) clearTimeout(petCooldownTimer);
  petCooldownTimer = setTimeout(() => {
    petCooldownTimer = null;
    render();
  }, PET_ACTION_COOLDOWN_MS + 50);
  state.coins += 1;
  state.friendship += 1;
  ui.feedback.textContent = "くうをなでたよ。コイン +1！";
  addChat("🤚 くうをなでた。くうはうれしそうに目を細めた。");
  setKuuMood("happy", "えへへ", 1200);
  render();
});

ui.praiseBtn.addEventListener("click", () => {
  const now = Date.now();
  if (now < praiseCooldownUntil) {
    const remain = Math.ceil((praiseCooldownUntil - now) / 1000);
    ui.feedback.textContent = `ほめるは10秒で1コインだよ。あと${remain}秒待ってね。`;
    setKuuMood("sniff", "まってね", 900);
    return;
  }
  praiseCooldownUntil = now + PRAISE_ACTION_COOLDOWN_MS;
  if (praiseCooldownTimer) clearTimeout(praiseCooldownTimer);
  praiseCooldownTimer = setTimeout(() => {
    praiseCooldownTimer = null;
    render();
  }, PRAISE_ACTION_COOLDOWN_MS + 50);
  state.coins += 1;
  state.friendship += 1;
  ui.feedback.textContent = "くうをほめたよ。コイン +1！";
  addChat("👏 くうをたくさんほめた。くうがにこっとした。");
  setKuuMood("celebrate", "にこにこ", 1200);
  render();
});

ui.treasureBtn.addEventListener("click", () => {
  if (canReceiveTreasureGift()) {
    treasureGalleryOpen = true;
    receiveTreasureGift("manual");
  } else {
    treasureGalleryOpen = !treasureGalleryOpen;
    ui.feedback.textContent = treasureGalleryOpen
      ? "たからばこの一覧をひらいたよ。"
      : "たからばこの一覧をとじたよ。";
  }
  render();
});

ui.tripBtn.addEventListener("click", () => {
  if (state.coins < 60 || state.level < 3) return;
  state.coins -= 60;
  state.friendship += 20;
  state.exp += 20;
  roomThemeBeforeTrip = travelThemes.has(state.roomTheme) ? roomThemeBeforeTrip : state.roomTheme;
  const destination = tripDestinations[Math.floor(Math.random() * tripDestinations.length)];
  state.roomTheme = destination.theme;
  addChat(destination.chat);
  ui.feedback.textContent = destination.feedback;
  showKuuSpeech(`${destination.place}についたよ！ ${destination.speech}`, 3200);
  setKuuMood("celebrate", destination.mood, 2200);
  if (hawaiiReturnTimer) {
    clearTimeout(hawaiiReturnTimer);
  }
  hawaiiReturnTimer = setTimeout(() => {
    state.roomTheme = roomThemeBeforeTrip;
    ui.feedback.textContent = "りょこうがおわって、もとのおへやにもどったよ。";
    addChat("🏠 りょこうがおわって、元のおへやにもどった。");
    hawaiiReturnTimer = null;
    render();
  }, 30000);
  applyLevelUps();
  render();
});

ui.interiorBtn.addEventListener("click", () => {
  openRoomThemeModal();
});

ui.guestBtn.addEventListener("click", () => {
  state.coins += 3;
  ui.feedback.textContent = "おきゃくさまをよんだよ。コイン +3！";
  addChat("🪙 おきゃくさまをよんで、コインを3まいもらった。");
  startGuestVisit();
  render();
});

load();
state.timeLeft = currentSessionLimitSeconds();
state.sessionCoins = 0;
if (state.unlockedRoomThemes.includes(state.roomTheme)) {
  roomThemeBeforeTrip = state.roomTheme;
}

ui.roomThemeModalClose.addEventListener("click", () => {
  closeRoomThemeModal();
});

ui.roomThemeModal.addEventListener("click", (e) => {
  const choice = e.target.closest("[data-theme-choice]");
  if (choice) {
    unlockRoomTheme(choice.dataset.themeChoice);
    return;
  }
  if (e.target.closest("[data-close='true']")) {
    closeRoomThemeModal();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !ui.roomThemeModal.hidden) {
    closeRoomThemeModal();
  }
});

render();
startIdleActions();
