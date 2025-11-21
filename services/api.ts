// Mock API Service
// In a real app, these would be fetch/axios calls to your backend

export const api = {
    auth: {
        login: async (email, password) => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve({ user: { id: '1', name: 'David Johnson', email } });
                }, 1000);
            });
        },
        signup: async (data) => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve({ user: { id: '1', ...data } });
                }, 1000);
            });
        },
    },
    doctors: {
        search: async (query) => {
            // Mock search
            return [];
        },
        getById: async (id) => {
            // Mock get doctor
            return {};
        },
    },
    appointments: {
        getUpcoming: async () => {
            return [];
        },
        book: async (doctorId, slot) => {
            return { success: true };
        },
    },
    labResults: {
        getAll: async () => {
            return [];
        },
    },
    chat: {
        getChats: async () => {
            return [];
        },
        getMessages: async (chatId) => {
            return [];
        },
        sendMessage: async (chatId, text) => {
            return { success: true };
        },
    },
};
