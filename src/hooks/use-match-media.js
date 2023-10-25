import { useState, useLayoutEffect } from "react";

const queries = [
    '(min-width: 220px) and (max-width: 768px)',
    '(min-width: 769px) and (max-width: 1200px)'
];

export const useMatchMedia = () => {
    const mediaQueryLists = queries.map(query => matchMedia(query));

    const getValues = () => mediaQueryLists.map(mql => mql.matches);

    const [values, setValues] = useState(getValues);

    useLayoutEffect(() => {
        const handler = () => setValues(getValues);
        mediaQueryLists.forEach(mql => mql.addEventListener('change', handler));
        return () => mediaQueryLists.forEach(mql => mql.removeEventListener('change', handler));
    });

    return ['isMobile', 'isDesktot'].reduce((acc, screen, index) => ({
        ...acc,
        [screen]: values[index],
    }), {});
}