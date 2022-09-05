type ID = number;

type YES_OR_NO = 'Y' | 'N';

type DATE = string;

type URL = string;

type MAYBE<T> = T | undefined;

type NULLABLE<T> = T | null;

type ValueOf<T> = T[keyof T];

type USER_BRAND = {
    image: URL;
    brand?: string;
};

interface LINK {
    link: string;
    title: string;
}

interface FORUM_INFO {
    id: ID;
    title: string;
}

interface USER_DETAIL {
    nickname: string;
    id_user: ID;
    name: string;
    user_brand: string[];
    lv: number;
    auth: string;
}

type EVENT_ACTION = 'braze' | 'airBridge';

type EVENT = {
    action: EVENT_ACTION;
    payload: {
        eventName: string;
        eventData?: any;
    };
};

// 아래는 Icon 타입
type ICON_CATEGORY = 'pictogram' | 'brand' | 'partner' | 'app';
type ICON_SIZE = 'small' | 'regular' | 'large';
type ICON_NAME =
    | 'share_header'
    | 'arrow_header_left'
    | 'arrow_header_right'
    | 'close_header'
    | 'plus_header'
    | 'more_header'
    | 'link'
    | 'arrow_down'
    | 'question'
    | 'photo'
    | 'info_tooltip'
    | 'question_tooltip'
    | 'input_info_true'
    | 'arrow_right'
    | 'arrow_up'
    | 'checkmark_check'
    | 'checkmark_unCheck'
    | 'checkbox_check'
    | 'checkbox_unCheck'
    | 'radioBtn_check'
    | 'radioBtn_unCheck'
    | 'input_info_false'
    | 'input_delete'
    | 'notice_high'
    | 'notice_low'
    | 'info'
    | 'close'
    | 'settings'
    | 'cs'
    | 'carPrice'
    | 'estimate'
    | 'point'
    | 'score_blank'
    | 'score_fill'
    | 'score_half';

type ICON = `${ICON_CATEGORY}-${ICON_SIZE}-${ICON_NAME}`;

export type { ID, DATE, YES_OR_NO, ICON, URL, NULLABLE, ValueOf, MAYBE, USER_BRAND, USER_DETAIL, EVENT };
