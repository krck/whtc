
// Convert any to string and remove all line-breaks and multiple spaces ("  ")
export function cleanString(value: string): string {
    return (value !== undefined && value !== null && value)
        ? value.replace(/(?:\r\n|\t|\r|\n)/g, "").replace(/\s\s+/g, " ").trim()
        : "";
}

export function sanitizeString(value: string): string {
    return (value !== undefined && value !== null && value)
        ? value.replace("<", "").replace(">", "").replace("\"", "").replace("'", "").trim()
        : "";
}
