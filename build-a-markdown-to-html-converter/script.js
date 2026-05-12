function wordToHtml(string) {
  const markdownInput = stringTest;

  const regexBold = /(\*\*).*\1|(\_\_).*\2/gi;
  const regexItalic = /(\*).*\1|(\_).*\2/gi;
  const regexHeading = /^#{1,6}\s.*/gi;
  let pTagCheck = false;

  //convert to bold
  let matchBold = markdownInput.replace(regexBold, (match) => {
    pTagCheck = true;
    return `<strong>${match.slice(2, match.length - 2)}</strong>`;
  });

  console.log(matchBold, "Bold");

  //convert to italics
  let matchItalics = matchBold.replace(regexItalic, (match) => {
    pTagCheck = true;
    return `<em>${match.slice(1, match.length - 1)}</em>`;
  });

  console.log(matchItalics, "Italics");

  // Insert heading
  if (regexHeading.test(matchItalics)) {
    let matchHeading = matchItalics.replace(regexHeading, (match) => {
      let count = 0;
      for (const letter of match) {
        letter === "#" ? count++ : null;
      }
      return `<h${count}>${match.slice(count + 1)}</h${count}>`;
    });

    return matchHeading;
  } else {
    // return pTagCheck ? `<p>${matchItalics}</p>` : matchItalics;
    return matchItalics;
  }
}

export function convertMarkdown(stringTest) {
  const markdownInput = stringTest;
  const regexWordFormat = /^/gi;
}

// \[.*\]\(.*\)
// (?<=\[).*(?=\])|(?<=\().*(?=\))
