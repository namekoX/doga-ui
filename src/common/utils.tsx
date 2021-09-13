import Const from "./const";

/**
 * URLにURLパラメータを付与した文字列を返却します。
 * @param url URL(URLパラメータなし)
 * @param params URLパラメータをパラメータ名と値の連想配列で指定する
 * @return URL(URLパラメータあり)
 */
export function createURL(url: string, prams?: { [key: string]: any; }) {
    const host: string = getHost();
    let opt: string = "";
    if (prams !== undefined) {
        for (const key in prams) {
            if (prams[key] !== null) {
                opt += (opt === "" ? "?" : "&");
                opt += key + "=" + prams[key];
            }
        }
    }
    return host + url + opt
}

/**
 * 環境に応じたホスト名を返却する。
 * @return ホスト名
 */
export function getHost() {
    if (process.env.NODE_ENV === "production") {
        return Const.PRODUCT_HOST;
    } else {
        return Const.TEST_HOST;
    }
}

/**
 * 環境に応じたグーグルアナリティクスのIDを返却する。
 * @return アナリティクスのID
 */
export function getGAID() {
    if (process.env.NODE_ENV === "production") {
        return Const.GAID;
    } else {
        return "";
    }
}

/**
 * 現在のページ情報をもとにアナリティクスにデータを送信する。
 */
export function gtagconfig() {
    window.gtag('config', getGAID(), {
        page_path: window.location.pathname + window.location.search,
        page_title: document.title,
        page_location: window.location.href,
        send_page_view: true,
    })
}

/**
 * 文字列が有効かどうかを判別する。
 * @param params 検索する文字列
 * @return true:無効 false:有効
 */
export function isEnptystr(str: string | null | undefined) {
    return (str == null || str === undefined || str === "undefined" || str === "")
}

/**
 * 数値が有効かどうかを判別する。
 * @param params 検索する数値
 * @return true:無効 false:有効
 */
export function isEnptynum(i: number | null | undefined) {
    return (i == null || i === undefined || i === 0)
}

/**
 * 日付を”yyyy-mm-dd”形式の文字列に変換する。
 * @param params 変換する日付
 * @return 変換後の文字列
 */
export function formatDate(date: Date | undefined | null) {
    if (date === undefined || date === null) {
        return '';
    } else {
        return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
    }
}

/**
 * 日付を”YYYYMM”形式の文字列に変換する。
 * @param params 変換する日付
 * @return 変換後の文字列
 */
export function formatDateYYYYMM(date: Date) {
    if (date === undefined || date === null) {
        return '';
    } else {
        return date.getFullYear().toString().padStart(4, "0") + '-' + (date.getMonth() + 1).toString().padStart(2, "0");
    }
}

/**
 * 日付を”YYYYMMhhmmss”形式の文字列に変換する。
 * @param params 変換する日付
 * @return 変換後の文字列
 */
export function formatDateYYYYMMhhmmss(date: Date) {
    if (date === undefined || date === null) {
        return '';
    } else {
        return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' '
            + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
    }
}
