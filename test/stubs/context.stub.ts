import {TelegramMessage} from '../../src/telegram/telegram.message';

export const createContextStub = (params: any, callback) => {
    const {lang = 'en', chatId = 1, firstName, lastName, text = ''} = params;

    return new TelegramMessage({
        update: {
            message: {
                chat: {
                    id: chatId,
                },
                from: {
                    language_code: lang,
                    first_name: firstName,
                    last_name: lastName,
                },
                text,
            },
        },
        replyWithHTML: (...args) => callback(...args),
    });
};