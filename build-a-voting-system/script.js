const poll = new Map();

export function addOption(option) {
  if (poll.has(option)) return `Option "${option}" already exists.`;

  if (option) {
    poll.set(option, new Set());
    return `Option "${option}" added to the poll.`;
  } else {
    return `Option cannot be empty.`;
  }
}

export function vote(option, voterId) {
  if (!poll.has(option)) return `Option "${option}" does not exist.`;

  const pollOption = poll.get(option);
  if (pollOption.has(voterId)) {
    return `Voter ${voterId} has already voted for "${option}".`;
  } else {
    pollOption.add(voterId);
    return `Voter ${voterId} voted for "${option}".`;
  }
}

addOption("German");
addOption("France");
addOption("Spain");

vote("German", 2);
vote("German", 1);
vote("France", 3);
vote("France", 4);

export function displayResults() {
  let displayText = "Poll Results:";
  poll.forEach((value, key) => {
    console.log(value, key);
    displayText += `\n${key}: ${value.size} votes`;
  });
  return displayText;
}
