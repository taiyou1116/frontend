
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

export const submitPost = async (title: string, content: string, user_id: number) => {
    try {
        const response = await fetch('http://localhost:8000/api/submit-post', {
            method: 'POST',
            body: JSON.stringify({ title, content, user_id }),
            headers: {
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

export const createUser = async (username: string, password: string) => {
    try {
        const response = await fetch('http://localhost:8000/api/create-user', {
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