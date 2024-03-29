
export const fetchPosts = async () => {
    try {
        const response = await fetch('http://localhost:8000/api/posts');
        if (!response.ok) {
            throw new Error('ネットワークエラー');
        }
        return await response.json();
    } catch(error) {
        console.error("エラー: ", error);
        throw error;
    }
}

export const submitPost = async (title: string, content: string, token: string) => {
    try {
        const response = await fetch('http://localhost:8000/api/submit-post', {
            method: 'POST',
            body: JSON.stringify({ title, content }),
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('サーバーからのレスポンスが正常ではありません');
        }
        const responseData = await response.json();
        console.log('レスポンス: ', responseData);
    } catch(error) {
        console.error('エラーが発生しました:', error);
    }
}

export const register = async (username: string, password: string) => {
    try {
        const response = await fetch('http://localhost:8000/api/register', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if (!response.ok) {
            throw new Error('サーバーからのレスポンスは正常ではありません');
        }
        const responseData = await response.json();
        console.log('レスポンス: ', responseData);
    } catch(err) {
        console.error('エラー: ', err);
    }
}

export const login = async (username: string, password: string) => {
    try {
        const response = await fetch('http://localhost:8000/api/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if (!response.ok) {
            throw new Error('サーバーからのレスポンスは正常ではありません');
        }
        const responseData = await response.json();
        console.log('レスポンス: ', responseData);
        
        if (responseData.token) {
            // 本番環境追加 -> `Secure;` なし -> HttpOnly;
            document.cookie = `token=${responseData.token}; path=/; max-age=86400; SameSite=Strict`;
        }
        return responseData.username
    } catch(err) {
        console.error('エラー: ', err);
    }
}

// サイトに訪れた際にJWTの検証
export const verifyToken = async (token: string) => {
    try {
        const response = await fetch('http://localhost:8000/api/verify-token', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        })

        if (!response.ok) {
            throw new Error('トークンの検証に失敗しました');
        }

        const responseData = await response.json();
        return responseData;
    } catch(err) {
        console.error('エラー: ', err);
    }
}

export const saveImage = async (image: File | null, token: string) => {
    if (!image) {
        alert("写真を選択してください");
        return;
    }

    const formData = new FormData();
    formData.append("file", image);

    try {
        const response = await fetch('http://localhost:8000/api/upload-image', {
            method: 'POST',
            body: formData,
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        if (!response.ok) {
            throw new Error('サーバーでのアップロードに失敗しました。');
        }

        alert('アップロード成功！');
        // const responseData = await response.json();
    } catch (err) {
        console.error('アップロードエラー:', err);
        alert('アップロードに失敗しました。');
    }
}