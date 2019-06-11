export function isExternal(url: string, currentUrl?: string) {
  const hasProtocol = url.indexOf(':') > -1 || url.indexOf('//') > -1
  if (!hasProtocol) return false

  const currentDomain: string = extractDomain(currentUrl || location.href)
  const urlDomain: string = extractDomain(url)

  if (currentDomain !== urlDomain) return true

  return false
}

function extractDomain(url: string): string {
  if (url.indexOf('//') === 0) { url = location.protocol + url }
  return url.toLowerCase().replace(/([a-z])?:\/\//, '$1').split('/')[0]
}
