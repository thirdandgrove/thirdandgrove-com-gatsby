export default class reCAPTCHA {
  siteKey;
  action;

  constructor(siteKey, action) {
    loadReCaptcha(siteKey);
    this.siteKey = siteKey;
    this.action = action;
  }

  async getToken() {
    let token = '';
    await window.grecaptcha
      .execute(this.siteKey, { action: this.action })
      .then(res => {
        token = res;
      });
    return token;
  }
}

const loadReCaptcha = siteKey => {
  const script = document.createElement('script');
  script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
  document.body.appendChild(script);
};
