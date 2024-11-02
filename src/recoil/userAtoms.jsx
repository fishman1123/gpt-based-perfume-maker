// src/recoil/userAtoms.js
import { atom } from 'recoil';

export const defaultUserState = {
    isAuthenticated: false,
    userName: null,
    userBirth: null,
    userGender: null,
    keyword: null,
    securityNumber: null,
    userLanguage: 'ko', // Default language set to Korean (ko)
    userImageName: null,
    currentPage: "/intro",
};

export const userAtoms = atom({
    key: 'userState',
    default: defaultUserState,
});
