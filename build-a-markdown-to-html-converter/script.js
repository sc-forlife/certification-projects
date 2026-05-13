function wordToHtml(string) {
  const markdownInput = string;

  const regexBold = /(\*\*).*\1|(\_\_).*\2/gi;
  const regexItalic = /(\*).*\1|(\_).*\2/gi;
  const regexHeading = /^#{1,6}\s.*/gim;
  const regexBlockQuote = /^>\s.*/gim;
  let pTagCheck = false;

  //convert to bold
  let matchBold = markdownInput.replace(regexBold, (match) => {
    pTagCheck = true;
    return `<strong>${match.slice(2, match.length - 2)}</strong>`;
  });

  //convert to italics
  let matchItalics = matchBold.replace(regexItalic, (match) => {
    pTagCheck = true;
    return `<em>${match.slice(1, match.length - 1)}</em>`;
  });

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
  } else if (regexBlockQuote.test(matchItalics)) {
    let matchQuote = matchItalics.replace(regexBlockQuote, (match) => {
      return `<blockquote>${match.slice(2, match.length)}</blockquote>`;
    });
    return matchQuote;
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

export function wordToLink(string) {
  const markdownInput = string;
  const regexLink = /(?=\[).*(?<=\))/gi;

  let matchLink = markdownInput.replace(regexLink, (match) => {
    const [linkText, url] = match.slice(1, match.length - 1).split("](");
    return `<a href="${url}">${linkText}</a>`;
  });
  return matchLink;
}

export function convertMarkdown() {
  const markdownInput = document.querySelector("textarea").value;

  if (/^\!/gi.test(markdownInput) && /\)$/gi.test(markdownInput)) {
    //Run the image element
    return wordToImage(markdownInput);
  } else if (/^\[/gi.test(markdownInput) && /\)$/gi.test(markdownInput)) {
    //Run the link element
    return wordToLink(markdownInput);
  } else {
    return wordToHtml(markdownInput);
  }
}

const htmlOutput = document.getElementById("html-output");
const preview = document.getElementById("preview");
const markdownEl = document.querySelector("textarea");

console.log(markdownEl);

markdownEl.addEventListener("input", (e) => {
  htmlOutput.innerText = convertMarkdown();
  preview.innerHTML = convertMarkdown();
});
