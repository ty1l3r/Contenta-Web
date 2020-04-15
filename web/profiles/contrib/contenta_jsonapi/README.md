<h1 id="contenta-cms">
  Contenta CMS
  <img align="right" src="./logo.svg" alt="Contenta logo" title="Contenta logo" width="100">
</h1>


Contenta is a content API and CMS based on Drupal 8. It provides a standard, jsonapi-based platform for building decoupled applications and websites.

## Install

Follow the [documentation instructions](http://contentacms.org/#install) to install Contenta CMS.

### CURL

Once your site is running locally, you might want to use Curl to examine the pre-installed content:

```bash
curl --header 'Accept: application/vnd.api+json' http://127.0.0.1:8888/api/recipes
```

The result will be a list of recipes. Note that:

- The Drupal implementation of the jsonapi uses entity uuids to identify individual content resources. Append a `/{{uuid}}` to the URL above to fetch a single recipe. 
- Contenta uses the [JSON API Extras](https://www.drupal.org/project/jsonapi_extras) module to customize the URL to resources: `/api/recipes` instead of `/jsonapi/node/recipes`, for example. Contenta also configures JSON API Extras to customize the output of the request to eliminate unnecessary fields.

### CORS

When you actually build a front-end you will likely have [CORS (Cross-Origin Resource Sharing)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS)
issues.

In order to allow browsers to request the contenta back-end you need to:

* Copy sites/default/default.services.yml to sites/default/services.yml
* Allow your app to access it, by replacing the end of this configuration file.
```
  cors.config:
    enabled: true
    allowedHeaders:
      - '*'
    allowedMethods:
      - '*'
    allowedOrigins:
       # Note: you need to specify the host + port where your app will run.
      - localhost:8000
    exposedHeaders: false
    maxAge: false
    supportsCredentials: false
```
* Run drush: ```cd <DESTINATION>/web && ../vendor/bin/drush cr```

## Development

Join the discussion in the [#contenta Slack channel](https://drupal.slack.com/messages/C5A70F7D1).

For documention on the development on contenta_jsonapi itself, see [docs/development](https://github.com/contentacms/contenta_jsonapi/blob/8.x-2.x/docs/development.md).

[Code of conduct](https://https://github.com/contentacms/contenta_jsonapi/blob/8.x-2.x/CODE_OF_CONDUCT.md)

### Development Installation

- If you want a setup which allows you to contribute back to Contenta, follow the installation instructions above
- Replace the <DESTINATION>/web/profiles/contrib/contenta_jsonapi directory with a checkout of this repo

```bash
cd -DESTINATION-
rm -rf web/profiles/contrib/contenta_jsonapi
git clone git@github.com:contentacms/contenta_jsonapi.git web/profiles/contrib/contenta_jsonapi
```

### Testing

#### Nightwatch

[Nightwatch](http://nightwatchjs.org/) provides automated browser testing and can be found in the `tests/nightwatch` directory. To install and run locally, you will need [Yarn](https://yarnpkg.com/) and Chrome.

```
yarn install
yarn run nightwatch
```

## Front-ends

There are a bunch of example consumers, see http://www.contentacms.org/#example-consumers for a list of them.

## Update

Contenta CMS is a Fork & Go solution. There is no supported upgrade path. You may update your Drupal like you usually do.

Please see documented issues : 
- [Proper way to update contenta cms](https://github.com/contentacms/contenta_jsonapi/issues/269)
- [Can not update with composer](https://github.com/contentacms/contenta_jsonapi/issues/229)

## Credits

This work is based upon a couple of contrib modules.

On top of that the [thunder distrbution](http://www.thunder.org/) was used as sort of a base for this installation profile.

Contenta CMS is [built by humans](https://raw.githubusercontent.com/contentacms/contenta_jsonapi/8.x-2.x/humans.txt).
