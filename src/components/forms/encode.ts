type FormData = Record<string, unknown>;

export default function encode(data: FormData): string {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + `=` + encodeURIComponent(String(data[key])))
    .join(`&`);
}
