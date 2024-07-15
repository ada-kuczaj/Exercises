// Function to wrap text with a given HTML tag
function wrap(text, tag) {
    return `<${tag}>${text}</${tag}>`;
}
//Removed redundant unused isTag function

// Function to parse markdown with given delimiter and replace with specified HTML tag
function parser(markdown, delimiter, tag) {
    const pattern = new RegExp(`${delimiter}(.+)${delimiter}`);
    const replacement = `<${tag}>$1</${tag}>`;
    return markdown.replace(pattern, replacement);
}

//Rename function for better clarity
// Function to parse strong tags
function parseStrong(markdown) {
    return parser(markdown, '__', 'strong');
}

//Rename function for better clarity
// Function to parse emphasis tags
function parseEmphasize(markdown) {
    return parser(markdown, '_', 'em');
}

// Function to parse text and wrap with paragraph tag if not part of a list
//If else notation shortened
function parseText(markdown, inList) {
    const parsedText = parseEmphasize(parseStrong(markdown));
    return inList ? parsedText : wrap(parsedText, 'p');
}

// Function to parse headers
//If else notation shortened
function parseHeader(markdown, inList) {
    const headerLevel = markdown.match(/^#+/);
    if (!headerLevel || headerLevel[0].length > 6) {
        return [null, inList];
    }
    const headerTag = `h${headerLevel[0].length}`;
    const headerHtml = wrap(markdown.substring(headerLevel[0].length).trim(), headerTag);
    return inList ? [`</ul>${headerHtml}`, false] : [headerHtml, false];
}

// Function to parse list items
function parseLineItem(markdown, inList) {
    if (markdown.startsWith('* ')) {
        const innerHtml = wrap(parseText(markdown.substring(2), true), 'li');
        return inList ? [innerHtml, true] : [`<ul>${innerHtml}`, true];
    }
    return [null, inList];
}

// Function to parse paragraphs
function parseParagraph(markdown, inList) {
    return inList ? [`</ul>${parseText(markdown, false)}`, false] : [parseText(markdown, false), false];
}


// Function to parse a single line of markdown
function parseLine(markdown, inList) {
    let [result, inListAfter] = parseHeader(markdown, inList);
    if (result === null) {
        [result, inListAfter] = parseLineItem(markdown, inList);
    }
    if (result === null) {
        [result, inListAfter] = parseParagraph(markdown, inList);
    }
    if (result === null) {
        throw new Error('Invalid markdown');
    }
    return [result, inListAfter];
}

// Main function to parse the entire markdown string
export function parse(markdown) {
    const lines = markdown.split('\n');
    let result = '';
    let inList = false;
    for (const line of lines) {
        const [lineResult, newList] = parseLine(line, inList);
        result += lineResult;
        inList = newList;
    }
    return inList ? result + '</ul>' : result;
}

module.exports = {
    wrap,
    parser,
    parseStrong,
    parseEmphasize,
    parseText,
    parseHeader,
    parseLineItem,
    parseParagraph,
    parseLine,
    parse
}