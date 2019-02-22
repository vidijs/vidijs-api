# vidijs-api

Library to provide a set of functions to interact with the Vidispine REST API using the axios HTTP client.

## Details

* The function will return a promise.

* Functions typically require an object containing path, query and matrix params.  Check the implementation of the function for exact detail.

* Any body data will be converted into a JSON string if accepted.

* Matrix params should be a list as there may be reoccurring keys.  Objects can be easily converted using `Object.entries(matrixParams)`

* Any JSON response will be automatically parsed as the `data` object.

* The axios default configuration can be set via `api.utils.defaultClient` - [See the Axios documentation for more detail](https://github.com/axios/axios)

* All remaining props will be spread to the axios client.


## Example Usage

Setting the `baseURL` and `auth` for requests.
```
const api = require('@vidijs/vidijs-api')

api.utils.defaultClient.defaults.baseURL = 'http://localhost:8080'
api.utils.defaultClient.defaults.auth = { username: 'admin', password: 'admin' };

api.version.getVersion()
  .then(({ data: versionDocument }) => console.log({ versionDocument }));

async function getUser(userName) {
  try {
    const { data: userDocument } = await api.user.getUser({ userName });
    console.log({ userDocument });
  } catch (error) {
    console.error(error);
  }
}
```

Using a [token](http://apidoc.vidispine.com/latest/ref/user/token.html#get-an-authentication-token) for authentication
```
const api = require('@vidijs/vidijs-api')
api.utils.defaultClient.defaults.baseURL = 'https://example.myvidispine.com'

const VIDISPINE_TOKEN = `yourtoken`
api.defaultClient.defaults.headers.Authorization = `token ${VIDISPINE_TOKEN}`;
```
