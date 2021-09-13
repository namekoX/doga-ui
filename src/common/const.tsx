
/**
 * 定数を指定するクラスです。
 */
export default class Const {
  // ローカル実行時のAPIのホスト
  static TEST_HOST = 'http://localhost:8000/doga';
  
  // 本番時のAPIのホスト
  static PRODUCT_HOST = 'https://slavesystem.info/doga';

  // 一覧ページに表示する記事数
  static INDEX_PER_PAGE = 30;

  // APIのパス
  static URLS = {
    // 動画取得
    GET_POST: '/search/',
  }

  // Googleアナリティクスの管理ID（空白にすると無効化）
  static GAID = 'UA-166130091-1';

  // GoogleAdSenseの管理ID（空白にすると無効化）
  static ADID = 'ca-pub-3210646574890109';
  static ADSLOT = '6825408743';

  // GoogleAdsenseの広告ブロック
  static ADS = `
  <ins class="adsbygoogle"
    style="display:block"
    data-ad-client="ca-pub-3210646574890109"
    data-ad-slot="6825408743"
    data-ad-format="auto"
    data-full-width-responsive="true">
  </ins>`;

  // トップページのパス
  static SITE_ROOT = '/';

  // トップページのパス  
  static SITE_SEARCH = '/search/';

  static HOW_TO= '/howto/';

  // タイトル
  static SITE_NAME = '複数動画サイト検索';

  // URLパラメータ名
  static PRAM_KEY_ID = 'q';
}