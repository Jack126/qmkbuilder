# Keyboard Firmware Builder

## Life Support

On 13 March 2021, kbfirmware.com was shut down due to a lack of users, but has been brought back online after additional consideration.

However, it should be considered end of life, as there will be no additional development and **may stop working at any time**.

### Docker Image

The latest image of kbfirmware.com is available as a Docker image, available at https://hub.docker.com/repository/docker/ruiqimao/kbfirmware.

By default, this image will use port 80. To use any other port, expose and set the `PORT` environment variable accordingly.

## Setup

To set up the project for development, run `npm install` in the root of the project to install dependencies.

Create a `local.json` file in `src/const`, in the format:

    {
		"API": "URL to server /build route",
		"PRESETS": "URL to static/presets folder"
	}

## Compiling

To compile, run `npm run build`.

## Deploying

To deploy a production version of the application, run `npm run deploy`.

## License

Keyboard Firmware Builder is under the GNU GPL v3 license. The license information for QMK Firmware can be found at https://qmk.fm/license/.


## Thanks

The source is forked from https://github.com/ruiqimao/qmkbuilder


## My step:

1、 install qmk and set qmk home path(ps. export QMK="/Users/qmk/qmk_firmware")

2、 change src/const/local.json file

3、 `cd / && npm install` and then run `npm run build` (src/static/js/bundle.js)

4、 client  :  `cd ./static && python3 -m http.server`  and then open link http://localhost:8000

5、 `cd server && node index.js`


