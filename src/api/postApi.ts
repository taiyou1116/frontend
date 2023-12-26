
export const fetchPosts = async () => {
    try {
        const response = await fetch('http://localhost:8000/posts');
        if (!response.ok) {
            throw new Error('ネットワークエラー');
        }
        return await response.json();
    } catch(error) {
        console.error("エラー: ", error);
        throw error;
    }
}