export function toReadableText(jsonString) {
    const json = JSON.parse(jsonString);
    let readableText = '';
    for (let field in json) {
        if (json.hasOwnProperty(field)) {
            if (json[field] instanceof Array) {
                readableText += `${field}=[`;
                json[field].forEach(jsonItem => {
                    readableText += `{${toReadableText(JSON.stringify(jsonItem))}},\n`;
                });
                readableText = readableText.substr(0, readableText.length - 2);
                readableText += ']\n';
            } else if (json[field] instanceof Object) {
                readableText += `${field}=${toReadableText(JSON.stringify(json[field]))}\n`;
            } else {
                readableText += `${field}=${json[field]};\n`;
            }
        }
    }
    return readableText;
}