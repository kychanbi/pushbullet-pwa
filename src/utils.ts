export function timestampToDateString(ts: number): string {
  const d = new Date(ts * 1000);
  return `${d.toLocaleDateString(getLang())}  ${d.toLocaleTimeString(getLang())}`;
}

function getLang() {
  if (navigator.languages != undefined) return navigator.languages[0];
}
