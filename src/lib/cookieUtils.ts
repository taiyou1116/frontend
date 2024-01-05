
export function getCookie(name: string) {
    const value = `; ${document.cookie}`;
    // ここでは'name = token'
    // 例の場合次のように2つpartsとして取得できる
    // ["username=JohnDoe", "abc123; token=xyz789"]
    // pop -> abc123; token=xyz789
    // shift -> abc123
    const parts = value.split(`; ${name}=`)
    if (parts.length === 2) return parts.pop()?.split(';').shift();
    return null;
}

// 例
// "username=JohnDoe; sessionId=abc123; token=xyz789";

// pop ... 配列の最後の値を削除して返す
// shift ... 配列の最初の値を削除して返す