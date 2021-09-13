import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Br } from '../common/Br';
import Const from '../common/const';

const HowToComponent = () => {
  return (
    <>
      <Helmet>
        <title>{Const.SITE_NAME}-使い方</title>
      </Helmet>
      <div style={{ margin: 8 }}>
        <h1>使い方</h1>
        <h2>検索の仕方</h2>
          <p>検索キーワードを入力して、検索ボタンを押下すると複数の動画サイトを一度に検索することができます。</p>
          <p>現在対応しているサイトは、youtube、ニコニコ動画、FC2動画の3種類になります。</p>
          <p>検索結果をクリックすると、各サイトに遷移します。</p>
          <p>オプションをクリックすることにより、詳細な検索条件を指定可能です。</p>
          <br />
          <p>※並び順はyoutubeとニコニコ動画のみに対応しています。FC2動画は投稿日順になります。</p>
        <h2>初期検索</h2>
          URLの末尾にqというURLパラメータをつけることで初期検索条件を変更することができる<br />
          (例)<br />
          <a href = "https://doga.slavesystems.com/search/?q=ヒカキン">https://doga.slavesystems.com/search/?q=ヒカキン</a>
        <Br count={1} />
        <Link to={Const.SITE_SEARCH}>トップへ戻る</Link>
      </div >
    </>
  );
}

export default HowToComponent;