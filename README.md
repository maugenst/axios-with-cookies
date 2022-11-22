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
    - [Extended Request Config](#extended-request-config)
- [Contributing](#contributing)
- [License](#license)

## Install

```
npm install axios tough-cookie axios-with-cookies
```

## Usage

```js
import axios from 'axios';
import { wrapper } from 'axios-with-cookies';
import { CookieJar } from 'tough-cookie';

const jar = new CookieJar();
const client = wrapper(axios.create({ 
    jar,
}));

await client.get('https://example.com');
```

See [examples](./examples) for more details.

