import LyricsWrapper from '@/site/record/LyricsWrapper';
import clsx from 'clsx';

export default  async function Track() {
  await new Promise<void>(resolve => setTimeout(resolve, 3000));
  return(
    <div id="track-lyrics" className={'text-2xl flex flex-col'}>
      <span><ruby>貴方<rt>あなた</rt></ruby>はもちろんのこと</span>
      <span><ruby>顔<rt>かお</rt></ruby>も<ruby>綺麗<rt>きれい</rt></ruby>で すごく<ruby>優<rt>やさ</rt></ruby>しかったり</span>
      <span>やらしかったりするんだ</span>
      <span><ruby>似合<rt>にあ</rt></ruby>ってない<ruby>髪型<rt>かみがた</rt></ruby>と <ruby>神<rt>かみ</rt></ruby>がかりの<ruby>笑顔<rt>えがお</rt></ruby>に</span>
      <span>やられちゃったりするよね <ruby>幸<rt>しあわ</rt></ruby>せ</span>
      <span><ruby>昔<rt>むかし</rt></ruby>の<ruby>写真<rt>しゃしん</rt></ruby>を<ruby>見<rt>み</rt></ruby>て <ruby>変<rt>か</rt></ruby>わってないねと</span>
      <span><ruby>夕焼<rt>ゆうや</rt></ruby>けの<ruby>空<rt>そら</rt></ruby>もそう<ruby>言<rt>い</rt></ruby>ってる</span>
      <span>いつまでも そう いつまでも</span>
      <span>ふたりだけにしか<ruby>分<rt>わ</rt></ruby>からない<ruby>話<rt>はなし</rt></ruby>がしたい</span>
      <span>これからも そう これからも</span>
      <span>ずっと ずっと ずっと</span>
      <span>こないだの<ruby>喧嘩<rt>けんか</rt></ruby>とか <ruby>貴方<rt>あなた</rt></ruby>の<ruby>過去<rt>かこ</rt></ruby>の<ruby>話<rt>はなし</rt></ruby></span>
      <span><ruby>真面目<rt>まじめ</rt></ruby>だったり <ruby>腹<rt>はら</rt></ruby>が<ruby>立<rt>た</rt></ruby>ったりするんだ</span>
      <span>やめてよ <ruby>投<rt>な</rt></ruby>げやりにするのが</span>
      <span><ruby>私<rt>わたし</rt></ruby>いちばん<ruby>悲<rt>かな</rt></ruby>しかったりするのよ <ruby>本当<rt>ほんとう</rt></ruby>に</span>
      <span><ruby>記念<rt>きねん</rt></ruby><ruby>日<rt>び</rt></ruby>は<ruby>気<rt>き</rt></ruby>にせずに いつも<ruby>通<rt>どお</rt></ruby>りで</span>
      <span><ruby>過<rt>す</rt></ruby>ごせたらいいわ そう<ruby>思<rt>おも</rt></ruby>ってる</span>
      <span><ruby>特別<rt>とくべつ</rt></ruby>な<ruby>事<rt>こと</rt></ruby>ばかりの<ruby>日々<rt>ひび</rt></ruby>だけじゃ</span>
      <span><ruby>少<rt>すこ</rt></ruby>しつまらない<ruby>気<rt>き</rt></ruby>がするから</span>
      <span>これからも そう これからも</span>
      <span>もっと もっと もっと</span>
      <span><ruby>傷<rt>きず</rt></ruby>つけあってゆこう</span>
      <span><ruby>涙<rt>なみだ</rt></ruby>を<ruby>流<rt>なが</rt></ruby>しましょう</span>
      <span>お<ruby>互<rt>たが</rt></ruby>いを<ruby>抱<rt>だ</rt></ruby>きしめて</span>
      <span><ruby>秘密<rt>ひみつ</rt></ruby>もたくさん<ruby>抱<rt>かか</rt></ruby>えてゆこう</span>
      <span>いつまでも そう いつまでも</span>
      <span>ふたりだけにしか<ruby>分<rt>わ</rt></ruby>からない<ruby>話<rt>はなし</rt></ruby>がしたい</span>
      <span>これからも そう これからも</span>
      <span>ずっと ずっと ずっと</span>
    </div>);
}