module.exports = function(app) {
  var express = require('express');
  var packageRouter = express.Router();
  var bodyParser = require('body-parser');

  packageRouter.get('/', function(req, res) {
    res.send({
      'packages': [
        {
          "id": 1,
          "name": "deis/postgres",
          "description": "Postgres using Governor and Etcd for HA",
          "readme": "# Postgres\n\t\tRun postgres in Kubernetes.\n\t\t",
          "author": "Jack, Rimus, and Matt",
          "creationDate": "2015-10-08T14:00:36.492882124-06:00",
          "lastUpdated": "2015-10-14T13:55:36.492882252-06:00",
          "rating": 5,
          "downloads": 28567,
          "releases": [
            {
              "id": 101,
              "version": "1.2.3",
              "description": "Fix all the things!",
              "author": "technosophos@github.com",
              "date": "2015-10-14T14:00:36.492882363-06:00",
              "rating": 4.7,
              "manifests": [],
              "packageId": 1
            },
            {
              "id": 201,
              "version": "1.2.4",
              "description": "Fix all the things!",
              "author": "technosophos@github.com",
              "date": "2015-10-14T14:00:36.492884866-06:00",
              "rating": 4.7,
              "manifests": [],
              "packageId": 1
            },
            {
              "id": 301,
              "version": "1.3.0",
              "description": "Fix all the things!",
              "author": "technosophos@github.com",
              "date": "2015-10-14T14:00:36.492884974-06:00",
              "rating": 4.7,
              "manifests": [],
              "packageId": 1
            }
          ]
        },
        {
          "id": 2,
          "name": "deis/riak",
          "description": "Postgres using Governor and Etcd for HA",
          "readme": "# Postgres\n\t\tRun postgres in Kubernetes.\n\t\t",
          "releases": [
            {
              "id": 102,
              "version": "1.2.3",
              "description": "Fix all the things!",
              "author": "technosophos@github.com",
              "date": "2015-10-14T14:00:36.492892946-06:00",
              "rating": 4.7,
              "manifests": [],
              "packageId": 2
            },
            {
              "id": 202,
              "version": "1.2.4",
              "description": "Fix all the things!",
              "author": "technosophos@github.com",
              "date": "2015-10-14T14:00:36.492893057-06:00",
              "rating": 4.7,
              "manifests": [],
              "packageId": 2
            },
            {
              "id": 301,
              "version": "1.3.0",
              "description": "Fix all the things!",
              "author": "technosophos@github.com",
              "date": "2015-10-14T14:00:36.492893172-06:00",
              "rating": 4.7,
              "manifests": [],
              "packageId": 2
            }
          ],
          "author": "Jack, Rimus, and Matt",
          "creationDate": "2015-10-08T14:00:36.492892891-06:00",
          "lastUpdated": "2015-10-14T13:55:36.492892925-06:00",
          "rating": 5,
          "downloads": 12333
        },
        {
          "id": 3,
          "name": "technosophos/blog",
          "description": "Postgres using Governor and Etcd for HA",
          "readme": "# Postgres\n\t\tRun postgres in Kubernetes.\n\t\t",
          "releases": [
            {
              "id": 103,
              "version": "1.2.3",
              "description": "Fix all the things!",
              "author": "technosophos@github.com",
              "date": "2015-10-14T14:00:36.492893464-06:00",
              "rating": 4.7,
              "manifests": [],
              "packageId": 3
            },
            {
              "id": 203,
              "version": "1.2.4",
              "description": "Fix all the things!",
              "author": "technosophos@github.com",
              "date": "2015-10-14T14:00:36.492893533-06:00",
              "rating": 4.7,
              "manifests": [],
              "packageId": 3
            },
            {
              "id": 301,
              "version": "1.3.0",
              "description": "Fix all the things!",
              "author": "technosophos@github.com",
              "date": "2015-10-14T14:00:36.492893644-06:00",
              "rating": 4.7,
              "manifests": [],
              "packageId": 3
            }
          ],
          "author": "Jack, Rimus, and Matt",
          "creationDate": "2015-10-08T14:00:36.492893424-06:00",
          "lastUpdated": "2015-10-14T13:55:36.492893442-06:00",
          "rating": 5,
          "downloads": 84
        },
        {
          "id": 4,
          "name": "deis/nagios",
          "description": "Postgres using Governor and Etcd for HA",
          "readme": "# Postgres\n\t\tRun postgres in Kubernetes.\n\t\t",
          "author": "Jack, Rimus, and Matt",
          "creationDate": "2015-10-08T14:00:36.492882124-06:00",
          "lastUpdated": "2015-10-14T13:55:36.492882252-06:00",
          "rating": 5,
          "downloads": 1244,
          "releases": [
            {
              "id": 101,
              "version": "1.2.3",
              "description": "Fix all the things!",
              "author": "technosophos@github.com",
              "date": "2015-10-14T14:00:36.492882363-06:00",
              "rating": 4.7,
              "manifests": [],
              "packageId": 1
            },
            {
              "id": 201,
              "version": "1.2.4",
              "description": "Fix all the things!",
              "author": "technosophos@github.com",
              "date": "2015-10-14T14:00:36.492884866-06:00",
              "rating": 4.7,
              "manifests": [],
              "packageId": 1
            },
            {
              "id": 301,
              "version": "1.3.0",
              "description": "Fix all the things!",
              "author": "technosophos@github.com",
              "date": "2015-10-14T14:00:36.492884974-06:00",
              "rating": 4.7,
              "manifests": [],
              "packageId": 1
            }
          ]
        },
        {
          "id": 5,
          "name": "deis/mongo",
          "description": "Postgres using Governor and Etcd for HA",
          "readme": "# Postgres\n\t\tRun postgres in Kubernetes.\n\t\t",
          "releases": [
            {
              "id": 102,
              "version": "1.2.3",
              "description": "Fix all the things!",
              "author": "technosophos@github.com",
              "date": "2015-10-14T14:00:36.492892946-06:00",
              "rating": 4.7,
              "manifests": [],
              "packageId": 2
            },
            {
              "id": 202,
              "version": "1.2.4",
              "description": "Fix all the things!",
              "author": "technosophos@github.com",
              "date": "2015-10-14T14:00:36.492893057-06:00",
              "rating": 4.7,
              "manifests": [],
              "packageId": 2
            },
            {
              "id": 301,
              "version": "1.3.0",
              "description": "Fix all the things!",
              "author": "technosophos@github.com",
              "date": "2015-10-14T14:00:36.492893172-06:00",
              "rating": 4.7,
              "manifests": [],
              "packageId": 2
            }
          ],
          "author": "Jack, Rimus, and Matt",
          "creationDate": "2015-10-08T14:00:36.492892891-06:00",
          "lastUpdated": "2015-10-14T13:55:36.492892925-06:00",
          "rating": 5
        },
        {
          "id": 6,
          "name": "jackfrancis/redis",
          "description": "Postgres using Governor and Etcd for HA",
          "readme": "# Postgres\n\t\tRun postgres in Kubernetes.\n\t\t",
          "releases": [
            {
              "id": 103,
              "version": "1.2.3",
              "description": "Fix all the things!",
              "author": "technosophos@github.com",
              "date": "2015-10-14T14:00:36.492893464-06:00",
              "rating": 4.7,
              "manifests": [],
              "packageId": 3
            },
            {
              "id": 203,
              "version": "1.2.4",
              "description": "Fix all the things!",
              "author": "technosophos@github.com",
              "date": "2015-10-14T14:00:36.492893533-06:00",
              "rating": 4.7,
              "manifests": [],
              "packageId": 3
            },
            {
              "id": 301,
              "version": "1.3.0",
              "description": "Fix all the things!",
              "author": "technosophos@github.com",
              "date": "2015-10-14T14:00:36.492893644-06:00",
              "rating": 4.7,
              "manifests": [],
              "packageId": 3
            }
          ],
          "author": "Jack, Rimus, and Matt",
          "creationDate": "2015-10-08T14:00:36.492893424-06:00",
          "lastUpdated": "2015-10-14T13:55:36.492893442-06:00",
          "rating": 5
        },
        {
          "id": 7,
          "name": "deis/redis",
          "description": "Postgres using Governor and Etcd for HA",
          "readme": "# Postgres\n\t\tRun postgres in Kubernetes.\n\t\t",
          "author": "Jack, Rimus, and Matt",
          "creationDate": "2015-10-08T14:00:36.492882124-06:00",
          "lastUpdated": "2015-10-14T13:55:36.492882252-06:00",
          "rating": 5,
          "releases": [
            {
              "id": 101,
              "version": "1.2.3",
              "description": "Fix all the things!",
              "author": "technosophos@github.com",
              "date": "2015-10-14T14:00:36.492882363-06:00",
              "rating": 4.7,
              "manifests": [],
              "packageId": 1
            },
            {
              "id": 201,
              "version": "1.2.4",
              "description": "Fix all the things!",
              "author": "technosophos@github.com",
              "date": "2015-10-14T14:00:36.492884866-06:00",
              "rating": 4.7,
              "manifests": [],
              "packageId": 1
            },
            {
              "id": 301,
              "version": "1.3.0",
              "description": "Fix all the things!",
              "author": "technosophos@github.com",
              "date": "2015-10-14T14:00:36.492884974-06:00",
              "rating": 4.7,
              "manifests": [],
              "packageId": 1
            }
          ]
        },
        {
          "id": 8,
          "name": "deis/clusterfs",
          "description": "Postgres using Governor and Etcd for HA",
          "readme": "# Postgres\n\t\tRun postgres in Kubernetes.\n\t\t",
          "releases": [
            {
              "id": 102,
              "version": "1.2.3",
              "description": "Fix all the things!",
              "author": "technosophos@github.com",
              "date": "2015-10-14T14:00:36.492892946-06:00",
              "rating": 4.7,
              "manifests": [],
              "packageId": 2
            },
            {
              "id": 202,
              "version": "1.2.4",
              "description": "Fix all the things!",
              "author": "technosophos@github.com",
              "date": "2015-10-14T14:00:36.492893057-06:00",
              "rating": 4.7,
              "manifests": [],
              "packageId": 2
            },
            {
              "id": 301,
              "version": "1.3.0",
              "description": "Fix all the things!",
              "author": "technosophos@github.com",
              "date": "2015-10-14T14:00:36.492893172-06:00",
              "rating": 4.7,
              "manifests": [],
              "packageId": 2
            }
          ],
          "author": "Jack, Rimus, and Matt",
          "creationDate": "2015-10-08T14:00:36.492892891-06:00",
          "lastUpdated": "2015-10-14T13:55:36.492892925-06:00",
          "rating": 5
        },
        {
          "id": 9,
          "name": "somedude/wordpress",
          "description": "Postgres using Governor and Etcd for HA",
          "readme": "# Postgres\n\t\tRun postgres in Kubernetes.\n\t\t",
          "releases": [
            {
              "id": 103,
              "version": "1.2.3",
              "description": "Fix all the things!",
              "author": "technosophos@github.com",
              "date": "2015-10-14T14:00:36.492893464-06:00",
              "rating": 4.7,
              "manifests": [],
              "packageId": 3
            },
            {
              "id": 203,
              "version": "1.2.4",
              "description": "Fix all the things!",
              "author": "technosophos@github.com",
              "date": "2015-10-14T14:00:36.492893533-06:00",
              "rating": 4.7,
              "manifests": [],
              "packageId": 3
            },
            {
              "id": 301,
              "version": "1.3.0",
              "description": "Fix all the things!",
              "author": "technosophos@github.com",
              "date": "2015-10-14T14:00:36.492893644-06:00",
              "rating": 4.7,
              "manifests": [],
              "packageId": 3
            }
          ],
          "author": "Jack, Rimus, and Matt",
          "creationDate": "2015-10-08T14:00:36.492893424-06:00",
          "lastUpdated": "2015-10-14T13:55:36.492893442-06:00",
          "rating": 5
        }
      ]
    });
  });

  packageRouter.post('/', function(req, res) {
    console.log(req.body);
    res.send({});
    //res.status(201).end();
  });

  packageRouter.get('/:id', function(req, res) {
    res.send({
      'packages': {
        id: req.params.id
      }
    });
  });

  packageRouter.put('/:id', function(req, res) {
    res.send({
      'packages': {
        id: req.params.id
      }
    });
  });

  packageRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/packages', bodyParser.json(), packageRouter);
};
