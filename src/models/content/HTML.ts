export interface HTML {
  value: string;
}

export function getHTMLContent(html: HTML): string {
  return html.value;
}
