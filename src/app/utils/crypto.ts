import CryptoJS from 'crypto-js';

const SECRET_KEY = 'MWVkY2JiMjU2YzQxZWM4ZmJiZDU0MTZj';

export const encrypt = (plainText: string): string => {
    const key = CryptoJS.enc.Utf8.parse(SECRET_KEY);
    const iv = CryptoJS.lib.WordArray.random(16);

    const encrypted = CryptoJS.AES.encrypt(plainText, key, {
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    });

    const ivBase64 = CryptoJS.enc.Base64.stringify(iv);
    const ciphertextBase64 = encrypted.toString();
    return `${ivBase64}:${ciphertextBase64}`;
}