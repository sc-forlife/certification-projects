function wordToHtml(string) {
  const markdownInput = string;

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
    return matchItalics;
  }
}

export function wordToImage(string) {
  const markdownInput = string;

  //You are catching word per word .... Catch the entire expression then you format and replace once

  const regexImage = /(?=\!).*(?<=\))/gi;

  let matchImage = markdownInput.replace(regexImage, (match) => {
    const [altText, imageSource] = match.slice(2, match.length - 1).split("](");
    return `<img alt="${altText}" src="${imageSource}">`;
  });

  return matchImage;
}

export function convertMarkdown(stringTest) {
  const markdownInput = stringTest;

  if (/^\!/gi.test(markdownInput) && /\)$/gi.test(markdownInput)) {
    //Run the image element
    return wordToImage(markdownInput);
  } else if (/^\[/gi.test(markdownInput) && /\)$/gi.test(markdownInput)) {
    //Run the link element
  } else {
    return wordToHtml(markdownInput);
  }
}

// \[.*\]\(.*\)
// (?<=\[).*(?=\])|(?<=\().*(?=\))
