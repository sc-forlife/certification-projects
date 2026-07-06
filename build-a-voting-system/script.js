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
