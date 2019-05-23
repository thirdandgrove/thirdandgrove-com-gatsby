/* eslint-disable */
!(function(e, t) {
  for (var r in t) e[r] = t[r];
})(
  exports,
  (function(e) {
    var t = {};
    function r(o) {
      if (t[o]) return t[o].exports;
      var n = (t[o] = { i: o, l: !1, exports: {} });
      return e[o].call(n.exports, n, n.exports, r), (n.l = !0), n.exports;
    }
    return (
      (r.m = e),
      (r.c = t),
      (r.d = function(e, t, o) {
        r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: o });
      }),
      (r.r = function(e) {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(e, '__esModule', { value: !0 });
      }),
      (r.t = function(e, t) {
        if ((1 & t && (e = r(e)), 8 & t)) return e;
        if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
        var o = Object.create(null);
        if (
          (r.r(o),
          Object.defineProperty(o, 'default', { enumerable: !0, value: e }),
          2 & t && 'string' != typeof e)
        )
          for (var n in e)
            r.d(
              o,
              n,
              function(t) {
                return e[t];
              }.bind(null, n)
            );
        return o;
      }),
      (r.n = function(e) {
        var t =
          e && e.__esModule
            ? function() {
                return e.default;
              }
            : function() {
                return e;
              };
        return r.d(t, 'a', t), t;
      }),
      (r.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (r.p = ''),
      r((r.s = 5))
    );
  })([
    function(e, t) {
      e.exports = require('stream');
    },
    function(e, t) {
      e.exports = require('zlib');
    },
    function(e, t) {
      e.exports = require('url');
    },
    function(e, t) {
      e.exports = require('http');
    },
    function(e, t) {
      e.exports = require('https');
    },
    function(e, t, r) {
      const o = r(6);
      t.handler = async function(e, t) {
        try {
          const t = process.env.PIPEDRIVE_KEY;
          if ('POST' !== e.httpMethod) return { statusCode: 403 };
          const r = JSON.parse(e.body),
            { name: n, email: s, phone: i, website: u, comments: a } = r;
          if (!n || !s) return { statusCode: 400 };
          console.log(`creating pipedrive entry for ${n}`);
          const l = n.split(' ');
          let [c, f] = l;
          return (
            l.length > 2 && (f = l[l.length - 1]),
            o(`https://api.pipedrive.com/v1/persons?api_token=${t}`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                name: n,
                first_name: c,
                last_name: f,
                email: s,
                phone: i,
                '7ec70f1ef58548a7555a66c6677cfd8028529568': u,
              }),
            })
              .then(e => e.json())
              .then(e => {
                const r = e.id;
                return (
                  console.log(`Successfully created pipedrive entry for ${n}`),
                  o(`https://api.pipedrive.com/v1/deals?api_token=${t}`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                      title: `[Webform] Deal for ${n}`,
                      person_id: r,
                      cd2d5edd665b516895a90328d2b9d225c23be2b6: u,
                      bf37b2226ef4c418719adcbd9ada3d4b731ba8b4: a,
                    }),
                  })
                );
              })
              .then(
                () => (
                  console.log('Created pipedrive deal successfully'),
                  { statusCode: 201 }
                )
              )
              .catch(e => (console.log(e), { statusCode: 500 }))
          );
        } catch (e) {
          return (
            console.log(e),
            { statusCode: 500, body: JSON.stringify({ msg: e.message }) }
          );
        }
      };
    },
    function(e, t, r) {
      'use strict';
      r.r(t),
        r.d(t, 'Headers', function() {
          return x;
        }),
        r.d(t, 'Request', function() {
          return I;
        }),
        r.d(t, 'Response', function() {
          return _;
        }),
        r.d(t, 'FetchError', function() {
          return f;
        });
      var o = r(0),
        n = r(3),
        s = r(2),
        i = r(4),
        u = r(1);
      const a = Symbol('buffer'),
        l = Symbol('type');
      class c {
        constructor() {
          this[l] = '';
          const e = arguments[0],
            t = arguments[1],
            r = [];
          if (e) {
            const t = e,
              o = Number(t.length);
            for (let e = 0; e < o; e++) {
              const o = t[e];
              let n;
              (n =
                o instanceof Buffer
                  ? o
                  : ArrayBuffer.isView(o)
                  ? Buffer.from(o.buffer, o.byteOffset, o.byteLength)
                  : o instanceof ArrayBuffer
                  ? Buffer.from(o)
                  : o instanceof c
                  ? o[a]
                  : Buffer.from('string' == typeof o ? o : String(o))),
                r.push(n);
            }
          }
          this[a] = Buffer.concat(r);
          let o = t && void 0 !== t.type && String(t.type).toLowerCase();
          o && !/[^\u0020-\u007E]/.test(o) && (this[l] = o);
        }
        get size() {
          return this[a].length;
        }
        get type() {
          return this[l];
        }
        slice() {
          const e = this.size,
            t = arguments[0],
            r = arguments[1];
          let o, n;
          (o = void 0 === t ? 0 : t < 0 ? Math.max(e + t, 0) : Math.min(t, e)),
            (n =
              void 0 === r ? e : r < 0 ? Math.max(e + r, 0) : Math.min(r, e));
          const s = Math.max(n - o, 0),
            i = this[a].slice(o, o + s),
            u = new c([], { type: arguments[2] });
          return (u[a] = i), u;
        }
      }
      function f(e, t, r) {
        Error.call(this, e),
          (this.message = e),
          (this.type = t),
          r && (this.code = this.errno = r.code),
          Error.captureStackTrace(this, this.constructor);
      }
      let d;
      Object.defineProperties(c.prototype, {
        size: { enumerable: !0 },
        type: { enumerable: !0 },
        slice: { enumerable: !0 },
      }),
        Object.defineProperty(c.prototype, Symbol.toStringTag, {
          value: 'Blob',
          writable: !1,
          enumerable: !1,
          configurable: !0,
        }),
        (f.prototype = Object.create(Error.prototype)),
        (f.prototype.constructor = f),
        (f.prototype.name = 'FetchError');
      try {
        d = require('encoding').convert;
      } catch (e) {}
      const h = Symbol('Body internals'),
        p = o.PassThrough;
      function b(e) {
        var t = this,
          r =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = r.size;
        let s = void 0 === n ? 0 : n;
        var i = r.timeout;
        let u = void 0 === i ? 0 : i;
        null == e
          ? (e = null)
          : 'string' == typeof e ||
            m(e) ||
            e instanceof c ||
            Buffer.isBuffer(e) ||
            '[object ArrayBuffer]' === Object.prototype.toString.call(e) ||
            ArrayBuffer.isView(e) ||
            e instanceof o ||
            (e = String(e)),
          (this[h] = { body: e, disturbed: !1, error: null }),
          (this.size = s),
          (this.timeout = u),
          e instanceof o &&
            e.on('error', function(e) {
              const r =
                'AbortError' === e.name
                  ? e
                  : new f(
                      `Invalid response body while trying to fetch ${t.url}: ${
                        e.message
                      }`,
                      'system',
                      e
                    );
              t[h].error = r;
            });
      }
      function y() {
        var e = this;
        if (this[h].disturbed)
          return b.Promise.reject(
            new TypeError(`body used already for: ${this.url}`)
          );
        if (((this[h].disturbed = !0), this[h].error))
          return b.Promise.reject(this[h].error);
        if (null === this.body) return b.Promise.resolve(Buffer.alloc(0));
        if ('string' == typeof this.body)
          return b.Promise.resolve(Buffer.from(this.body));
        if (this.body instanceof c) return b.Promise.resolve(this.body[a]);
        if (Buffer.isBuffer(this.body)) return b.Promise.resolve(this.body);
        if (
          '[object ArrayBuffer]' === Object.prototype.toString.call(this.body)
        )
          return b.Promise.resolve(Buffer.from(this.body));
        if (ArrayBuffer.isView(this.body))
          return b.Promise.resolve(
            Buffer.from(
              this.body.buffer,
              this.body.byteOffset,
              this.body.byteLength
            )
          );
        if (!(this.body instanceof o))
          return b.Promise.resolve(Buffer.alloc(0));
        let t = [],
          r = 0,
          n = !1;
        return new b.Promise(function(o, s) {
          let i;
          e.timeout &&
            (i = setTimeout(function() {
              (n = !0),
                s(
                  new f(
                    `Response timeout while trying to fetch ${e.url} (over ${
                      e.timeout
                    }ms)`,
                    'body-timeout'
                  )
                );
            }, e.timeout)),
            e.body.on('error', function(t) {
              'AbortError' === t.name
                ? ((n = !0), s(t))
                : s(
                    new f(
                      `Invalid response body while trying to fetch ${e.url}: ${
                        t.message
                      }`,
                      'system',
                      t
                    )
                  );
            }),
            e.body.on('data', function(o) {
              if (!n && null !== o) {
                if (e.size && r + o.length > e.size)
                  return (
                    (n = !0),
                    void s(
                      new f(
                        `content size at ${e.url} over limit: ${e.size}`,
                        'max-size'
                      )
                    )
                  );
                (r += o.length), t.push(o);
              }
            }),
            e.body.on('end', function() {
              if (!n) {
                clearTimeout(i);
                try {
                  o(Buffer.concat(t));
                } catch (t) {
                  s(
                    new f(
                      `Could not create Buffer from response body for ${
                        e.url
                      }: ${t.message}`,
                      'system',
                      t
                    )
                  );
                }
              }
            });
        });
      }
      function m(e) {
        return (
          'object' == typeof e &&
          'function' == typeof e.append &&
          'function' == typeof e.delete &&
          'function' == typeof e.get &&
          'function' == typeof e.getAll &&
          'function' == typeof e.has &&
          'function' == typeof e.set &&
          ('URLSearchParams' === e.constructor.name ||
            '[object URLSearchParams]' === Object.prototype.toString.call(e) ||
            'function' == typeof e.sort)
        );
      }
      function g(e) {
        let t,
          r,
          n = e.body;
        if (e.bodyUsed) throw new Error('cannot clone body after it is used');
        return (
          n instanceof o &&
            'function' != typeof n.getBoundary &&
            ((t = new p()),
            (r = new p()),
            n.pipe(t),
            n.pipe(r),
            (e[h].body = t),
            (n = r)),
          n
        );
      }
      function w(e) {
        const t = e.body;
        return null === t
          ? 0
          : 'string' == typeof t
          ? Buffer.byteLength(t)
          : m(t)
          ? Buffer.byteLength(String(t))
          : t instanceof c
          ? t.size
          : Buffer.isBuffer(t)
          ? t.length
          : '[object ArrayBuffer]' === Object.prototype.toString.call(t)
          ? t.byteLength
          : ArrayBuffer.isView(t)
          ? t.byteLength
          : t &&
            'function' == typeof t.getLengthSync &&
            ((t._lengthRetrievers && 0 == t._lengthRetrievers.length) ||
              (t.hasKnownLength && t.hasKnownLength()))
          ? t.getLengthSync()
          : null;
      }
      (b.prototype = {
        get body() {
          return this[h].body;
        },
        get bodyUsed() {
          return this[h].disturbed;
        },
        arrayBuffer() {
          return y.call(this).then(function(e) {
            return e.buffer.slice(e.byteOffset, e.byteOffset + e.byteLength);
          });
        },
        blob() {
          let e = (this.headers && this.headers.get('content-type')) || '';
          return y.call(this).then(function(t) {
            return Object.assign(new c([], { type: e.toLowerCase() }), {
              [a]: t,
            });
          });
        },
        json() {
          var e = this;
          return y.call(this).then(function(t) {
            try {
              return JSON.parse(t.toString());
            } catch (t) {
              return b.Promise.reject(
                new f(
                  `invalid json response body at ${e.url} reason: ${t.message}`,
                  'invalid-json'
                )
              );
            }
          });
        },
        text() {
          return y.call(this).then(function(e) {
            return e.toString();
          });
        },
        buffer() {
          return y.call(this);
        },
        textConverted() {
          var e = this;
          return y.call(this).then(function(t) {
            return (function(e, t) {
              if ('function' != typeof d)
                throw new Error(
                  'The package `encoding` must be installed to use the textConverted() function'
                );
              const r = t.get('content-type');
              let o,
                n,
                s = 'utf-8';
              r && (o = /charset=([^;]*)/i.exec(r));
              (n = e.slice(0, 1024).toString()),
                !o && n && (o = /<meta.+?charset=(['"])(.+?)\1/i.exec(n));
              !o &&
                n &&
                (o = /<meta[\s]+?http-equiv=(['"])content-type\1[\s]+?content=(['"])(.+?)\2/i.exec(
                  n
                )) &&
                (o = /charset=(.*)/i.exec(o.pop()));
              !o && n && (o = /<\?xml.+?encoding=(['"])(.+?)\1/i.exec(n));
              o &&
                (('gb2312' !== (s = o.pop()) && 'gbk' !== s) ||
                  (s = 'gb18030'));
              return d(e, 'UTF-8', s).toString();
            })(t, e.headers);
          });
        },
      }),
        Object.defineProperties(b.prototype, {
          body: { enumerable: !0 },
          bodyUsed: { enumerable: !0 },
          arrayBuffer: { enumerable: !0 },
          blob: { enumerable: !0 },
          json: { enumerable: !0 },
          text: { enumerable: !0 },
        }),
        (b.mixIn = function(e) {
          for (const t of Object.getOwnPropertyNames(b.prototype))
            if (!(t in e)) {
              const r = Object.getOwnPropertyDescriptor(b.prototype, t);
              Object.defineProperty(e, t, r);
            }
        }),
        (b.Promise = global.Promise);
      const v = /[^\^_`a-zA-Z\-0-9!#$%&'*+.|~]/,
        S = /[^\t\x20-\x7e\x80-\xff]/;
      function j(e) {
        if (((e = `${e}`), v.test(e)))
          throw new TypeError(`${e} is not a legal HTTP header name`);
      }
      function O(e) {
        if (((e = `${e}`), S.test(e)))
          throw new TypeError(`${e} is not a legal HTTP header value`);
      }
      function T(e, t) {
        t = t.toLowerCase();
        for (const r in e) if (r.toLowerCase() === t) return r;
      }
      const P = Symbol('map');
      class x {
        constructor() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : void 0;
          if (((this[P] = Object.create(null)), e instanceof x)) {
            const t = e.raw(),
              r = Object.keys(t);
            for (const e of r) for (const r of t[e]) this.append(e, r);
          } else if (null == e);
          else {
            if ('object' != typeof e)
              throw new TypeError('Provided initializer must be an object');
            {
              const t = e[Symbol.iterator];
              if (null != t) {
                if ('function' != typeof t)
                  throw new TypeError('Header pairs must be iterable');
                const r = [];
                for (const t of e) {
                  if (
                    'object' != typeof t ||
                    'function' != typeof t[Symbol.iterator]
                  )
                    throw new TypeError('Each header pair must be iterable');
                  r.push(Array.from(t));
                }
                for (const e of r) {
                  if (2 !== e.length)
                    throw new TypeError(
                      'Each header pair must be a name/value tuple'
                    );
                  this.append(e[0], e[1]);
                }
              } else
                for (const t of Object.keys(e)) {
                  const r = e[t];
                  this.append(t, r);
                }
            }
          }
        }
        get(e) {
          j((e = `${e}`));
          const t = T(this[P], e);
          return void 0 === t ? null : this[P][t].join(', ');
        }
        forEach(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : void 0,
            r = E(this),
            o = 0;
          for (; o < r.length; ) {
            var n = r[o];
            const s = n[0],
              i = n[1];
            e.call(t, i, s, this), (r = E(this)), o++;
          }
        }
        set(e, t) {
          (t = `${t}`), j((e = `${e}`)), O(t);
          const r = T(this[P], e);
          this[P][void 0 !== r ? r : e] = [t];
        }
        append(e, t) {
          (t = `${t}`), j((e = `${e}`)), O(t);
          const r = T(this[P], e);
          void 0 !== r ? this[P][r].push(t) : (this[P][e] = [t]);
        }
        has(e) {
          return j((e = `${e}`)), void 0 !== T(this[P], e);
        }
        delete(e) {
          j((e = `${e}`));
          const t = T(this[P], e);
          void 0 !== t && delete this[P][t];
        }
        raw() {
          return this[P];
        }
        keys() {
          return $(this, 'key');
        }
        values() {
          return $(this, 'value');
        }
        [Symbol.iterator]() {
          return $(this, 'key+value');
        }
      }
      function E(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : 'key+value';
        return Object.keys(e[P])
          .sort()
          .map(
            'key' === t
              ? function(e) {
                  return e.toLowerCase();
                }
              : 'value' === t
              ? function(t) {
                  return e[P][t].join(', ');
                }
              : function(t) {
                  return [t.toLowerCase(), e[P][t].join(', ')];
                }
          );
      }
      (x.prototype.entries = x.prototype[Symbol.iterator]),
        Object.defineProperty(x.prototype, Symbol.toStringTag, {
          value: 'Headers',
          writable: !1,
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperties(x.prototype, {
          get: { enumerable: !0 },
          forEach: { enumerable: !0 },
          set: { enumerable: !0 },
          append: { enumerable: !0 },
          has: { enumerable: !0 },
          delete: { enumerable: !0 },
          keys: { enumerable: !0 },
          values: { enumerable: !0 },
          entries: { enumerable: !0 },
        });
      const B = Symbol('internal');
      function $(e, t) {
        const r = Object.create(C);
        return (r[B] = { target: e, kind: t, index: 0 }), r;
      }
      const C = Object.setPrototypeOf(
        {
          next() {
            if (!this || Object.getPrototypeOf(this) !== C)
              throw new TypeError('Value of `this` is not a HeadersIterator');
            var e = this[B];
            const t = e.target,
              r = e.kind,
              o = e.index,
              n = E(t, r);
            return o >= n.length
              ? { value: void 0, done: !0 }
              : ((this[B].index = o + 1), { value: n[o], done: !1 });
          },
        },
        Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]()))
      );
      function A(e) {
        const t = Object.assign({ __proto__: null }, e[P]),
          r = T(e[P], 'Host');
        return void 0 !== r && (t[r] = t[r][0]), t;
      }
      Object.defineProperty(C, Symbol.toStringTag, {
        value: 'HeadersIterator',
        writable: !1,
        enumerable: !1,
        configurable: !0,
      });
      const L = Symbol('Response internals'),
        k = n.STATUS_CODES;
      class _ {
        constructor() {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : null,
            t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
          b.call(this, e, t);
          const r = t.status || 200;
          this[L] = {
            url: t.url,
            status: r,
            statusText: t.statusText || k[r],
            headers: new x(t.headers),
          };
        }
        get url() {
          return this[L].url;
        }
        get status() {
          return this[L].status;
        }
        get ok() {
          return this[L].status >= 200 && this[L].status < 300;
        }
        get statusText() {
          return this[L].statusText;
        }
        get headers() {
          return this[L].headers;
        }
        clone() {
          return new _(g(this), {
            url: this.url,
            status: this.status,
            statusText: this.statusText,
            headers: this.headers,
            ok: this.ok,
          });
        }
      }
      b.mixIn(_.prototype),
        Object.defineProperties(_.prototype, {
          url: { enumerable: !0 },
          status: { enumerable: !0 },
          ok: { enumerable: !0 },
          statusText: { enumerable: !0 },
          headers: { enumerable: !0 },
          clone: { enumerable: !0 },
        }),
        Object.defineProperty(_.prototype, Symbol.toStringTag, {
          value: 'Response',
          writable: !1,
          enumerable: !1,
          configurable: !0,
        });
      const z = Symbol('Request internals'),
        R = s.parse,
        U = s.format,
        q = 'destroy' in o.Readable.prototype;
      function H(e) {
        return 'object' == typeof e && 'object' == typeof e[z];
      }
      class I {
        constructor(e) {
          let t,
            r =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
          H(e)
            ? (t = R(e.url))
            : ((t = e && e.href ? R(e.href) : R(`${e}`)), (e = {}));
          let o = r.method || e.method || 'GET';
          if (
            ((o = o.toUpperCase()),
            (null != r.body || (H(e) && null !== e.body)) &&
              ('GET' === o || 'HEAD' === o))
          )
            throw new TypeError(
              'Request with GET/HEAD method cannot have body'
            );
          let n =
            null != r.body ? r.body : H(e) && null !== e.body ? g(e) : null;
          b.call(this, n, {
            timeout: r.timeout || e.timeout || 0,
            size: r.size || e.size || 0,
          });
          const s = new x(r.headers || e.headers || {});
          if (null != r.body) {
            const e = (function(e) {
              const t = e.body;
              return null === t
                ? null
                : 'string' == typeof t
                ? 'text/plain;charset=UTF-8'
                : m(t)
                ? 'application/x-www-form-urlencoded;charset=UTF-8'
                : t instanceof c
                ? t.type || null
                : Buffer.isBuffer(t)
                ? null
                : '[object ArrayBuffer]' === Object.prototype.toString.call(t)
                ? null
                : ArrayBuffer.isView(t)
                ? null
                : 'function' == typeof t.getBoundary
                ? `multipart/form-data;boundary=${t.getBoundary()}`
                : null;
            })(this);
            null === e || s.has('Content-Type') || s.append('Content-Type', e);
          }
          let i = H(e) ? e.signal : null;
          if (
            ('signal' in r && (i = r.signal),
            null != i &&
              !(function(e) {
                const t = e && 'object' == typeof e && Object.getPrototypeOf(e);
                return !(!t || 'AbortSignal' !== t.constructor.name);
              })(i))
          )
            throw new TypeError(
              'Expected signal to be an instanceof AbortSignal'
            );
          (this[z] = {
            method: o,
            redirect: r.redirect || e.redirect || 'follow',
            headers: s,
            parsedURL: t,
            signal: i,
          }),
            (this.follow =
              void 0 !== r.follow
                ? r.follow
                : void 0 !== e.follow
                ? e.follow
                : 20),
            (this.compress =
              void 0 !== r.compress
                ? r.compress
                : void 0 === e.compress || e.compress),
            (this.counter = r.counter || e.counter || 0),
            (this.agent = r.agent || e.agent);
        }
        get method() {
          return this[z].method;
        }
        get url() {
          return U(this[z].parsedURL);
        }
        get headers() {
          return this[z].headers;
        }
        get redirect() {
          return this[z].redirect;
        }
        get signal() {
          return this[z].signal;
        }
        clone() {
          return new I(this);
        }
      }
      function M(e) {
        Error.call(this, e),
          (this.type = 'aborted'),
          (this.message = e),
          Error.captureStackTrace(this, this.constructor);
      }
      b.mixIn(I.prototype),
        Object.defineProperty(I.prototype, Symbol.toStringTag, {
          value: 'Request',
          writable: !1,
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperties(I.prototype, {
          method: { enumerable: !0 },
          url: { enumerable: !0 },
          headers: { enumerable: !0 },
          redirect: { enumerable: !0 },
          clone: { enumerable: !0 },
          signal: { enumerable: !0 },
        }),
        (M.prototype = Object.create(Error.prototype)),
        (M.prototype.constructor = M),
        (M.prototype.name = 'AbortError');
      const N = o.PassThrough,
        F = s.resolve;
      function V(e, t) {
        if (!V.Promise)
          throw new Error(
            'native promise missing, set fetch.Promise to your favorite alternative'
          );
        return (
          (b.Promise = V.Promise),
          new V.Promise(function(r, s) {
            const l = new I(e, t),
              d = (function(e) {
                const t = e[z].parsedURL,
                  r = new x(e[z].headers);
                if (
                  (r.has('Accept') || r.set('Accept', '*/*'),
                  !t.protocol || !t.hostname)
                )
                  throw new TypeError('Only absolute URLs are supported');
                if (!/^https?:$/.test(t.protocol))
                  throw new TypeError('Only HTTP(S) protocols are supported');
                if (e.signal && e.body instanceof o.Readable && !q)
                  throw new Error(
                    'Cancellation of streamed requests with AbortSignal is not supported in node < 8'
                  );
                let n = null;
                if (
                  (null == e.body &&
                    /^(POST|PUT)$/i.test(e.method) &&
                    (n = '0'),
                  null != e.body)
                ) {
                  const t = w(e);
                  'number' == typeof t && (n = String(t));
                }
                return (
                  n && r.set('Content-Length', n),
                  r.has('User-Agent') ||
                    r.set(
                      'User-Agent',
                      'node-fetch/1.0 (+https://github.com/bitinn/node-fetch)'
                    ),
                  e.compress &&
                    !r.has('Accept-Encoding') &&
                    r.set('Accept-Encoding', 'gzip,deflate'),
                  r.has('Connection') ||
                    e.agent ||
                    r.set('Connection', 'close'),
                  Object.assign({}, t, {
                    method: e.method,
                    headers: A(r),
                    agent: e.agent,
                  })
                );
              })(l),
              h = ('https:' === d.protocol ? i : n).request,
              p = l.signal;
            let b = null;
            const y = function() {
              let e = new M('The user aborted a request.');
              s(e),
                l.body && l.body instanceof o.Readable && l.body.destroy(e),
                b && b.body && b.body.emit('error', e);
            };
            if (p && p.aborted) return void y();
            const g = function() {
                y(), T();
              },
              j = h(d);
            let O;
            function T() {
              j.abort(),
                p && p.removeEventListener('abort', g),
                clearTimeout(O);
            }
            p && p.addEventListener('abort', g),
              l.timeout &&
                j.once('socket', function(e) {
                  O = setTimeout(function() {
                    s(new f(`network timeout at: ${l.url}`, 'request-timeout')),
                      T();
                  }, l.timeout);
                }),
              j.on('error', function(e) {
                s(
                  new f(
                    `request to ${l.url} failed, reason: ${e.message}`,
                    'system',
                    e
                  )
                ),
                  T();
              }),
              j.on('response', function(e) {
                clearTimeout(O);
                const t = (function(e) {
                  const t = new x();
                  for (const r of Object.keys(e))
                    if (!v.test(r))
                      if (Array.isArray(e[r]))
                        for (const o of e[r])
                          S.test(o) ||
                            (void 0 === t[P][r]
                              ? (t[P][r] = [o])
                              : t[P][r].push(o));
                      else S.test(e[r]) || (t[P][r] = [e[r]]);
                  return t;
                })(e.headers);
                if (V.isRedirect(e.statusCode)) {
                  const o = t.get('Location'),
                    n = null === o ? null : F(l.url, o);
                  switch (l.redirect) {
                    case 'error':
                      return (
                        s(
                          new f(
                            `redirect mode is set to error: ${l.url}`,
                            'no-redirect'
                          )
                        ),
                        void T()
                      );
                    case 'manual':
                      if (null !== n)
                        try {
                          t.set('Location', n);
                        } catch (e) {
                          s(e);
                        }
                      break;
                    case 'follow':
                      if (null === n) break;
                      if (l.counter >= l.follow)
                        return (
                          s(
                            new f(
                              `maximum redirect reached at: ${l.url}`,
                              'max-redirect'
                            )
                          ),
                          void T()
                        );
                      const o = {
                        headers: new x(l.headers),
                        follow: l.follow,
                        counter: l.counter + 1,
                        agent: l.agent,
                        compress: l.compress,
                        method: l.method,
                        body: l.body,
                        signal: l.signal,
                      };
                      return 303 !== e.statusCode && l.body && null === w(l)
                        ? (s(
                            new f(
                              'Cannot follow redirect with body being a readable stream',
                              'unsupported-redirect'
                            )
                          ),
                          void T())
                        : ((303 !== e.statusCode &&
                            ((301 !== e.statusCode && 302 !== e.statusCode) ||
                              'POST' !== l.method)) ||
                            ((o.method = 'GET'),
                            (o.body = void 0),
                            o.headers.delete('content-length')),
                          r(V(new I(n, o))),
                          void T());
                  }
                }
                e.once('end', function() {
                  p && p.removeEventListener('abort', g);
                });
                let o = e.pipe(new N());
                const n = {
                    url: l.url,
                    status: e.statusCode,
                    statusText: e.statusMessage,
                    headers: t,
                    size: l.size,
                    timeout: l.timeout,
                  },
                  i = t.get('Content-Encoding');
                if (
                  !l.compress ||
                  'HEAD' === l.method ||
                  null === i ||
                  204 === e.statusCode ||
                  304 === e.statusCode
                )
                  return (b = new _(o, n)), void r(b);
                const a = {
                  flush: u.Z_SYNC_FLUSH,
                  finishFlush: u.Z_SYNC_FLUSH,
                };
                if ('gzip' == i || 'x-gzip' == i)
                  return (
                    (o = o.pipe(u.createGunzip(a))),
                    (b = new _(o, n)),
                    void r(b)
                  );
                if ('deflate' != i && 'x-deflate' != i) (b = new _(o, n)), r(b);
                else {
                  e.pipe(new N()).once('data', function(e) {
                    (o =
                      8 == (15 & e[0])
                        ? o.pipe(u.createInflate())
                        : o.pipe(u.createInflateRaw())),
                      (b = new _(o, n)),
                      r(b);
                  });
                }
              }),
              (function(e, t) {
                const r = t.body;
                null === r
                  ? e.end()
                  : 'string' == typeof r
                  ? (e.write(r), e.end())
                  : m(r)
                  ? (e.write(Buffer.from(String(r))), e.end())
                  : r instanceof c
                  ? (e.write(r[a]), e.end())
                  : Buffer.isBuffer(r)
                  ? (e.write(r), e.end())
                  : '[object ArrayBuffer]' === Object.prototype.toString.call(r)
                  ? (e.write(Buffer.from(r)), e.end())
                  : ArrayBuffer.isView(r)
                  ? (e.write(Buffer.from(r.buffer, r.byteOffset, r.byteLength)),
                    e.end())
                  : r.pipe(e);
              })(j, l);
          })
        );
      }
      (V.isRedirect = function(e) {
        return 301 === e || 302 === e || 303 === e || 307 === e || 308 === e;
      }),
        (V.Promise = global.Promise),
        (t.default = V);
    },
  ])
);
