export function isJsonString(text: string): boolean {
  try {
    JSON.parse(text);
  } catch (e) {
    return false;
  }
  return true;
}
