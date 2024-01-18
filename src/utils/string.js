export const capitalize = (s) => {
    if (!s) return "";
    return s.charAt(0).toUpperCase() + s.slice(1);
}


const IGNORED_WORDS = new Set(
    [
        "a", "an", "the",
        "in", "of", "on", "for", "by",
        "and", "or", "but", "nor"
    ]);

export const snakecaseToTitlecase = (s) => {
    if (!s) return "";
    return s.split("_").map(
        (w, index) => {
            if (index === 0) return capitalize(w);
            return IGNORED_WORDS.has(w) ? w : capitalize(w);
        }
    ).join(" ")
}