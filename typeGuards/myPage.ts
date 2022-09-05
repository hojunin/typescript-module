import { BUY_REQUEST_RESPONSE_DATA, COMMUNITY_NOTIFICATION, SYSTEM_NOTIFICATION, USER_INFO } from '../types/myPage';

/**
 * USER_INFO 쿼리에 결과에 대한 typeGuard입니다.
 * @param {unknown} userData 판별 대상 데이터
 * @returns {boolean} 참 & 거짓
 */
const isUserInfo = (userData: unknown): userData is USER_INFO => !!(userData as USER_INFO)?.id_user;

/**
 * @param {unknown} notificationData
 * @returns { boolean }
 */
const isCommunityNotification = (notificationData: unknown): notificationData is COMMUNITY_NOTIFICATION => {
    return typeof (notificationData as COMMUNITY_NOTIFICATION)?.total_page_count === 'number';
};

/**
 * @param {unknown} notificationData
 * @returns { boolean }
 */
const isSystemNotification = (notificationData: unknown): notificationData is SYSTEM_NOTIFICATION => {
    return typeof (notificationData as SYSTEM_NOTIFICATION)?.total_count === 'number';
};

/**
 * @param { unknown }
 * @returns { boolean }
 */
const isBuyRequestNotification = (buyRequestData: unknown): buyRequestData is BUY_REQUEST_RESPONSE_DATA => {
    return typeof (buyRequestData as BUY_REQUEST_RESPONSE_DATA)?.buy_request_notification === 'number';
};

export { isUserInfo, isCommunityNotification, isBuyRequestNotification, isSystemNotification };
