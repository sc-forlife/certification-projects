export function convertMarkdown(stringTest) {
  const markdownInput = stringTest;

  const regexBold = /^(\*\*).*\1$|^(\_\_).*\2$/gi;
  const regexItalic = /^(\*).*\1$|^(\_).*\2$/gi;
  const regexHeading = /^#{1,6}\s.*/gi;

  let matchItalics = markdownInput.replace(regexItalic, (match) => {
    return `<em>${match.slice(1, match.length - 1)}</em>`;
  });

  console.log(matchItalics, "Italics");

  let matchBold = matchItalics.replace(regexBold, (match) => {
    return `<strong>${match.slice(2, match.length - 2)}</strong>`;
  });

  console.log(matchBold, "Bold");

  if (regexHeading.test(matchBold)) {
    let matchHeading = matchBold.replace(regexHeading, (match) => {
      let count = 0;
      for (const letter of match) {
        letter === "#" ? count++ : null;
      }
      return `<h${count}>${match.slice(count + 1)}</h${count}>`;
    });

    return matchHeading;
  } else {
    return matchBold;
  }
}
