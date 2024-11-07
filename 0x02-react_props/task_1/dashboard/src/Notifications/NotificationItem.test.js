import React from 'react';
import { render } from '@testing-library/react';
import NotificationItem from './Notifications.js';
import  './NotificationItem';

jest.mock('./NotificationItem'); // Mocking the NotificationItem component

describe('Notifications', () => {
    it('renders NotificationItem elements instead of li', () => {
        const notifications = [{ type: 'default', value: 'test' }];
        render(<Notifications notifications={notifications} />);
        expect(NotificationItem).toHaveBeenCalledTimes(1);
    });

    it('renders the correct html for the first NotificationItem', () => {
        const notifications = [{ type: 'default', value: 'test', html: { __html: '<u>test</u>' } }];
        render(<notifications notifications={notifications} />);
        expect(NotificationItem).toHaveBeenCalledWith(
            expect.objectContaining({
                html: { __html: '<u>test</u>' },
            }),
            expect.anything()
        );
    });
});
export default NotificationItem;