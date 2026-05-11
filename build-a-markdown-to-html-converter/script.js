export function convertMarkdown(stringTest) {
  const markdownInput = stringTest;

  const regexItalic = /^(*{1,2}).*\1/gi;
  const regexHeading = /^#{1,6}\s.*/gi;

  let matchMarkdown = markdownInput.replace(regex, (match) => {
    let count = 0;
    for (const letter of match) {
      letter === "#" ? count++ : null;
    }
    return `<h${count}>${match.slice(count + 1)}</h${count}>`;
  });

  return matchMarkdown;
}
