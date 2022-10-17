class PrUrl {
  constructor(base) {
    this.url = base
  }

  navigates(by) {
    this.url = new URL(by, this.url).toString()
    return this.url
  }

  navigate(by) {
    this.url = new URL(by, this.url).toString()
    return this
  }

  get() {
    return this.url
  }
  isAbs() {
    try {
      new URL(this.url)
      return true
    } catch (e) {
      return false
    }
  }
}

class ProxyApplier {
  constructor(base) {
    this.url = base;
  }
  
  MainUrl(d) {
    let pr = new PrUrl(this.url)
    if (!pr.isAbs()) {
      this.url = new PrUrl(d).navigates(this.url)
    }
  }
  
  Proxy(proxyurl) {
    this.url = new PrUrl(proxyurl).navigates(encodeURIComponent(this.url))
  }

}
