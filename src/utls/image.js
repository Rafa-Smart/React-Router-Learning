// penjelasnnya
// https://chatgpt.com/c/69450a93-e13c-8324-bd2d-abcb921973f1

export function ImageName(image) {
    if (typeof image !== "string") return null;

    const regex = /([^\/\\]+)\.([^.]+)$/;
    // jadi fungsi () itu nanti dia bisa menyimpan hasil pencocokan dan bisa diakses kaya array
    const match = image.match(regex);

    if (!match) return null;

    return {
        filename: match[1],
        extension: match[2]
    };
}
