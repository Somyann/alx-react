export function getFullYear() {
  return new Date().getFullYear();
}

export function getFooterCopy(isIndex) {
  if (isIndex) {
    return "Holberton School";
  } else {
    return "Holberton School main dashboard";
  }
}

// Place getLatestNotification at the top level
export function getLatestNotification() {
  return "<strong>Urgent requirement</strong> - complete by EOD";
}
