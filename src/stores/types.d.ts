export interface UserDataItem {
    uid: string;
    name: string;
    bananas: number;
    lastDayPlayed?: string;
    longestStreak?: number;
    stars?: number;
    subscribed?: boolean;
}

export interface UserData {
    [key: string]: UserDataItem;
}