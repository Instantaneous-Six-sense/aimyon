import LyricsWrapper from '@/site/record/LyricsWrapper';
import clsx from 'clsx';

export default  async function Track() {
  await new Promise<void>(resolve => setTimeout(resolve, 3000));
  return(
    <div id="track-lyrics" className={'text-2xl flex flex-col'}>
      <span>いざ、<ruby>手<rt>て</rt></ruby>のなる<ruby>方<rt>ほう</rt></ruby>へと</span>
      <span><ruby>導<rt>みちび</rt></ruby>いたのは <ruby>誰<rt>だれ</rt></ruby>でもない<ruby>自分<rt>じぶん</rt></ruby><ruby>自身<rt>じしん</rt></ruby>なのに</span>
      <span><ruby>自信<rt>じしん</rt></ruby>がないよ <ruby>笑<rt>わら</rt></ruby>っちゃうな</span>
      <span>もたついている <ruby>空気<rt>くうき</rt></ruby>が<ruby>抜<rt>ぬ</rt></ruby>けたままの<ruby>身体<rt>からだ</rt></ruby></span>
      <span><ruby>走<rt>はし</rt></ruby>れど<ruby>走<rt>はし</rt></ruby>れど<ruby>続<rt>つづ</rt></ruby>く</span>
      <span><ruby>人生<rt>じんせい</rt></ruby>という<ruby>名<rt>な</rt></ruby>の<ruby>死<rt>し</rt></ruby>ぬまでの<ruby>エピソード<rt>えぴそーど</rt></ruby>は</span>
      <span><ruby>軽<rt>かる</rt></ruby>いままの<ruby>身体<rt>からだ</rt></ruby>では</span>
      <span><ruby>吹<rt>ふ</rt></ruby>き<ruby>飛<rt>と</rt></ruby>ばされて すぐに<ruby>終<rt>お</rt></ruby>わってしまうな</span>
      <span>あー、<ruby>誰<rt>だれ</rt></ruby>にもないものを<ruby>持<rt>も</rt></ruby>っていたいのになぁ</span>
      <span><ruby>無理矢理<rt>むりやり</rt></ruby>に<ruby>抱<rt>だ</rt></ruby>きしめてた <ruby>心<rt>こころ</rt></ruby>を<ruby>今<rt>いま</rt></ruby><ruby>解<rt>ほど</rt></ruby>いて</span>
      <span><ruby>優<rt>やさ</rt></ruby>しい<ruby>心<rt>こころ</rt></ruby>を<ruby>持<rt>も</rt></ruby>ちたいのだけれど</span>
      <span><ruby>時<rt>とき</rt></ruby>にはがむしゃらに<ruby>怒<rt>おこ</rt></ruby>って <ruby>涙<rt>なみだ</rt></ruby>は<ruby>真<rt>しん</rt></ruby>に<ruby>受<rt>う</rt></ruby>け<ruby>止<rt>と</rt></ruby>める</span>
      <span><ruby>愛<rt>あい</rt></ruby>を<ruby>知<rt>し</rt></ruby>るまでは<ruby>死<rt>し</rt></ruby>ねない<ruby>私<rt>わたし</rt></ruby>なのだ!</span>
      <span><ruby>導<rt>みちび</rt></ruby>かれた<ruby>運命<rt>うんめい</rt></ruby><ruby>辿<rt>たど</rt></ruby>って <ruby>今日<rt>きょう</rt></ruby>も<ruby>明日<rt>あす</rt></ruby>も<ruby>生<rt>い</rt></ruby>きて<ruby>行<rt>ゆ</rt></ruby>こう</span>
      <span><ruby>目<rt>め</rt></ruby>の<ruby>前<rt>まえ</rt></ruby>に<ruby>見<rt>み</rt></ruby>えた<ruby>星<rt>ほし</rt></ruby>は</span>
      <span><ruby>幾千年<rt>いくせんねん</rt></ruby>の<ruby>輝<rt>かがや</rt></ruby>きを<ruby>失<rt>うしな</rt></ruby>いそう</span>
      <span><ruby>夢<rt>ゆめ</rt></ruby>で<ruby>終<rt>お</rt></ruby>わる<ruby>夢<rt>ゆめ</rt></ruby>ならば</span>
      <span><ruby>見<rt>み</rt></ruby>なくていいと <ruby>自分<rt>じぶん</rt></ruby>に<ruby>言<rt>い</rt></ruby>い<ruby>聞<rt>き</rt></ruby>かせた</span>
      <span>あー、まだ<ruby>咲<rt>さ</rt></ruby>ききれない <ruby>花<rt>はな</rt></ruby>のような<ruby>毎日<rt>まいにち</rt></ruby>だなぁ</span>
      <span><ruby>無茶苦茶<rt>むちゃくちゃ</rt></ruby>に<ruby>走<rt>はし</rt></ruby>り<ruby>続<rt>つづ</rt></ruby>けた <ruby>身体<rt>からだ</rt></ruby>を<ruby>今<rt>いま</rt></ruby><ruby>休<rt>やす</rt></ruby>めて</span>
      <span><ruby>交<rt>まじ</rt></ruby>わることのない<ruby>誰<rt>だれ</rt></ruby>かと<ruby>巡<rt>めぐ</rt></ruby>り<ruby>合<rt>あ</rt></ruby>い</span>
      <span><ruby>無限<rt>むげん</rt></ruby>に<ruby>広<rt>ひろ</rt></ruby>がる<ruby>雲<rt>くも</rt></ruby>に<ruby>乗<rt>の</rt></ruby>って <ruby>見<rt>み</rt></ruby>たことのない<ruby>虹<rt>にじ</rt></ruby>を<ruby>見<rt>み</rt></ruby>たい</span>
      <span><ruby>愛<rt>あい</rt></ruby>を<ruby>知<rt>し</rt></ruby>るまでは<ruby>死<rt>し</rt></ruby>ねない<ruby>私<rt>わたし</rt></ruby>なのだ!</span>
      <span><ruby>導<rt>みちび</rt></ruby>かれる<ruby>運命<rt>うんめい</rt></ruby><ruby>頼<rt>たよ</rt></ruby>って <ruby>今日<rt>きょう</rt></ruby>も<ruby>明日<rt>あす</rt></ruby>も<ruby>生<rt>い</rt></ruby>きて<ruby>行<rt>ゆ</rt></ruby>こう</span>
      <span>あー、<ruby>誰<rt>だれ</rt></ruby>にもないものを<ruby>持<rt>も</rt></ruby>っていたいのになぁ</span>
      <span><ruby>無理矢理<rt>むりやり</rt></ruby>に<ruby>抱<rt>だ</rt></ruby>きしめてた <ruby>心<rt>こころ</rt></ruby>を<ruby>今<rt>いま</rt></ruby><ruby>解<rt>ほど</rt></ruby>いて</span>
      <span><ruby>優<rt>やさ</rt></ruby>しい<ruby>心<rt>こころ</rt></ruby>を<ruby>持<rt>も</rt></ruby>ちたいのだけれど</span>
      <span><ruby>時<rt>とき</rt></ruby>にはがむしゃらに<ruby>怒<rt>おこ</rt></ruby>って <ruby>涙<rt>なみだ</rt></ruby>は<ruby>真<rt>しん</rt></ruby>に<ruby>受<rt>う</rt></ruby>け<ruby>止<rt>と</rt></ruby>める</span>
      <span><ruby>愛<rt>あい</rt></ruby>を<ruby>知<rt>し</rt></ruby>るまでは<ruby>死<rt>し</rt></ruby>ねない<ruby>私<rt>わたし</rt></ruby>なのだ!</span>
      <span><ruby>導<rt>みちび</rt></ruby>かれた<ruby>運命<rt>うんめい</rt></ruby><ruby>辿<rt>たど</rt></ruby>って <ruby>今日<rt>きょう</rt></ruby>も<ruby>明日<rt>あす</rt></ruby>も<ruby>生<rt>い</rt></ruby>きて<ruby>行<rt>ゆ</rt></ruby>こう</span>
    </div>);
}