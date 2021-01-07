# Beatiful React Material-UI Portfolio | Resume | CV

Feel free to change `resume.json` in `src` folder and use it as your own CV :smile:
P.S. [JSON Resume](https://jsonresume.org/schema/) is used here.

## Steps to use

1. `Fork` this repository.
2. Update `src/resume.json`
3. Create PDF CV file and set link in `REACT_APP_CV_URL_PDF` env var.
4. Sign up to https://formspree.io/ to get emails from `Contact` form. Set `REACT_APP_FORMSPREE_ID` env var.
5. Link `Dockerhub` with your repo to get autobuild docker image.
6. Deploy Docker image as you like.

## Installing

```
docker build -t resume .
docker run -it -p 3000:3000  -e REACT_APP_FORMSPREE_ID=test -e REACT_APP_CV_URL_PDF=https://some.url --rm resume
```

## Resume Example

```json
{
  "basics": {
    "name": "John Doe",
    "label": "Programmer",
    "picture": "https://pickaface.net/gallery/avatar/20120117_083743_291_Demo.png",
    "email": "john@gmail.com",
    "phone": "(912) 555-4321",
    "website": "http://johndoe.com",
    "summary": "A summary of John Doe...",
    "location": {
      "city": "San Francisco",
      "countryCode": "US",
      "region": "California"
    },
    "profiles": [
      {
        "network": "Twitter",
        "username": "john",
        "url": "http://twitter.com/john"
      }
    ]
  },
  "work": [
    {
      "company": "Company",
      "position": "President",
      "website": "http://company.com",
      "startDate": "2013-01-01",
      "endDate": "2019-01-01",
      "summary": "Description...",
      "highlights": ["Started the company", "And more"]
    }
  ],
  "education": [
    {
      "institution": "University",
      "area": "Software Development",
      "studyType": "Bachelor",
      "startDate": "2011-01-01",
      "endDate": "2013-01-01"
    }
  ],
  "awards": [
    {
      "title": "Award",
      "date": "2014-11-01",
      "awarder": "Company",
      "summary": "There is no spoon."
    }
  ],
  "publications": [
    {
      "name": "Publication",
      "publisher": "Company",
      "releaseDate": "2014-10-01",
      "website": "http://publication.com",
      "summary": "Description..."
    }
  ],
  "skills": [
    {
      "name": "Web Development",
      "keywords": ["Master"]
    }
  ],
  "languages": [
    {
      "language": "English",
      "fluency": "Native speaker"
    }
  ],
  "interests": [
    {
      "name": "Wildlife"
    },
    {
      "name": "Sports"
    }
  ]
}
```


## Authors

**Aliaksei Saroka** - https://github.com/lehaSVV2009

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
