# axios-with-cookies

![axios-with-cookies](./docs/images/axios-with-cookies.jpg)
Background-Photo by [Lisa Fotios](https://www.pexels.com/photo/macro-photography-of-pile-of-3-cookie-230325/)

[![npm](https://flat.badgen.net/npm/v/with-cookies)](https://www.npmjs.com/package/axios-with-cookies)
[![license](https://flat.badgen.net/badge/license/MIT/blue)](LICENSE)

# axios-with-cookies
This project is a fork of axios-cookiejar-support which lacks the possibility to add configurable
http(s)-agents. It is based on the initial work of Masahiro Miyashiro (@3846masa).

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Install

```
npm install axios tough-cookie axios-with-cookies
```

## Usage

```ts
import * as axios from 'axios';
import {AxiosInstance, AxiosStatic} from 'axios';
import {CookieJar, MemoryCookieStore} from 'tough-cookie';
import {wrapper} from 'axios-cookiejar-support';

const axiosInstance: AxiosInstance = ((axios as unknown) as AxiosStatic).create({
  httpsAgent: new HttpsCookieAgent({
    cookies: {
      jar: new CookieJar(new MemoryCookieStore(), {looseMode: true})      
    },
    rejectUnauthorized: false,
    keepAlive: true,
    timeout: 100000
  })
});
this.client = wrapper(axiosInstance);

await this.client.get('https://example.com');
```

See [examples](./examples) for more details.

## Contributing

PRs welcome.

## License

[MIT (c) maugenst](./LICENSE)
