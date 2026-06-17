import React, { useRef } from 'react';

const CDN_BASE = 'https://ik.imagekit.io/siftan';

function getFallbacks(originalSrc) {
    const fallbacks = [];

    if (!originalSrc || !originalSrc.startsWith(CDN_BASE)) {
        return fallbacks;
    }

    const path = originalSrc.replace(CDN_BASE, '');

    // If the image is from /High/, try /Low/ on CDN first
    if (path.includes('/High/')) {
        const lowCdnPath = path.replace('/High/', '/Low/');
        fallbacks.push(CDN_BASE + lowCdnPath);
    }

    // Then try the local path (strips CDN base)
    fallbacks.push(path);

    // If the local path is /High/, also try local /Low/
    if (path.includes('/High/')) {
        fallbacks.push(path.replace('/High/', '/Low/'));
    }

    return fallbacks;
}

function CdnImage({ src, alt, ...props }) {
    const fallbackIndex = useRef(0);
    const fallbacks = useRef(getFallbacks(src));

    const handleError = (e) => {
        if (fallbackIndex.current < fallbacks.current.length) {
            e.target.src = fallbacks.current[fallbackIndex.current];
            fallbackIndex.current += 1;
        }
    };

    return (
        <img
            src={src}
            alt={alt}
            onError={handleError}
            {...props}
        />
    );
}

export default CdnImage;
export { getFallbacks, CDN_BASE };
