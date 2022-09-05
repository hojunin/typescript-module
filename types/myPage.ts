import { DATE, ID, USER_BRAND } from './common';

interface USER_INFO {
    badge: BADGE;
    comment_count: number;
    email: string;
    id_user: ID;
    like_count: number;
    lv: number;
    next_point: number;
    nick_name: string;
    password_update_check: boolean;
    password_updated: DATE;
    point: number;
    score: string;
    user_brand: USER_BRAND[];
    write_count: number;
}

interface BADGE {
    activity_badge: null;
    level_badge: any[];
    owner_badge: any[];
    total: number;
}

interface SYSTEM_NOTIFICATION {
    id_user: ID;
    infos: SYSTEM_NOTIFICATION_INFO[];
    total_count: number;
    total_page_count: number;
    current_page: number;
}

interface SYSTEM_NOTIFICATION_INFO {
    created: DATE;
    id_noti: ID;
    is_read: number;
    noti_info: NOTIFICATION_INFO;
    noti_type: number; // enum
}

interface NOTIFICATION_INFO {
    link?: {
        target: string; // enum인듯
        contentType: number; // enum인듯
        contentId: ID;
    };
    noti_info?: {
        infos: NEW_CAR_NOTIFICATION_INFO[];
        item_tag: string[];
    };
    title: string;
}

interface NEW_CAR_NOTIFICATION_INFO {
    car_name: string;
    id_cargrade: ID;
    price: number;
}

interface COMMUNITY_NOTIFICATION {
    info: COMMUNITY_NOTIFICATION_LIST_DATA[];
    current_page: number;
    total_count: number;
    total_page_count: number;
}

interface COMMUNITY_NOTIFICATION_LIST_DATA {
    created: DATE;
    id_comment_info: ID;
    id_contents: ID;
    id_notification: ID;
    opend: number;
    subtitle: string;
    tag: string; // enum인듯
    title: string;
    type: number; // enum인듯
    type_name: string; // enum 인듯
}

interface BUY_REQUEST_RESPONSE_DATA {
    buy_request_notification: number;
    chat_notification: number;
}

export type { USER_INFO, BADGE, COMMUNITY_NOTIFICATION, BUY_REQUEST_RESPONSE_DATA, SYSTEM_NOTIFICATION };
