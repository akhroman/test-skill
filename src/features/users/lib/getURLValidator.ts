import { FormItemProps } from 'antd';

export const getURLValidator = (imgFormat: string[]) => {
    const regex = new RegExp(`\\.(${imgFormat.join('|')})$`, 'i');
    const result: FormItemProps['rules'] = [
        {
            required: true,
            type: 'url',
            message: 'Пожалуйста, укажите корректную ссылку'
        },
        {
            validator(_, value) {
                if (!value || regex.test(value)) {
                    return Promise.resolve();
                }
                return Promise.reject(new Error(`Ссылка должна вести на изображение в следующих форматах: ${imgFormat.join(', ')}`));
            }
        }
    ];
    return result;
};