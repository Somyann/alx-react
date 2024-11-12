import React from 'react';
import { render } from '@testing-library/react';
import Notifications from './Notifications'; // Ensure this is the correct path to your Notifications component
import NotificationItem from './NotificationItem'; // Import the actual NotificationItem component

// Mock NotificationItem to check if it is rendered
jest.mock('./NotificationItem', () => jest.fn(() => <li>Mocked Notification Item</li>));

describe('Notifications', () => {
    it('renders NotificationItem elements instead of li', () => {
        const notifications = [{ type: 'default', value: 'test' }];
        render(<Notifications notifications={notifications} />);
        
        // Check if NotificationItem is called
        expect(NotificationItem).toHaveBeenCalledTimes(1);
    });

    it('renders the correct html for the first NotificationItem', () => {
        const notifications = [
            { type: 'default', value: 'test', html: { __html: '<u>test</u>' } }
        ];
        render(<Notifications notifications={notifications} />);
        
        // Ensure the correct html is passed as a prop
        expect(NotificationItem).toHaveBeenCalledWith(
            expect.objectContaining({
                html: { __html: '<u>test</u>' }, // Check if the html prop is passed correctly
            }),
            expect.anything()
        );
    });
});
