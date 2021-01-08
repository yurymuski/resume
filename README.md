# Beatiful React Material-UI Portfolio | Resume | CV

<a href="https://yurets.pro" target="_blank">Live demo</a>

## Steps to use

1. `Fork` this repository.
2. Update [resume.json](src/resume.json)
3. Create PDF CV file and set link in `REACT_APP_CV_URL_PDF` env var.
4. Sign up to https://formspree.io/ to get emails from `Contact` form. Set `REACT_APP_FORMSPREE_ID` env var.
5. Link `Dockerhub` with your repo to get autobuild docker image.
6. Deploy Docker image as you like.

## Installing

```
docker build -t resume .
docker run -it -p 3000:3000  -e REACT_APP_FORMSPREE_ID=test -e REACT_APP_CV_URL_PDF=https://some.url --rm resume
```

## Authors

**Aliaksei Saroka** - https://github.com/lehaSVV2009

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
