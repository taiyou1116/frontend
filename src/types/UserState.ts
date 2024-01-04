export type UserState = {
    userName: string,
    userImage: string,
    setUserName: (userName: string) => void,
    setUserImage: (userImage: string) => void,
}