import { isURL } from "validator";

export const validateImage = (url) => {
    const validImageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.svg', '.webp'];

    const isValidUrl = isURL(url, {
        protocols: ['http', 'https'],
        require_protocol: true,
        allow_underscores: true,
        allow_trailing_dot: false,
        allow_protocol_relative_urls: false
    });

    if (isValidUrl && validImageExtensions.some(ext => url.toLowerCase().endsWith(ext))) {
        return true;
    }
    return false;
}