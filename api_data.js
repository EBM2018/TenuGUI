define({ "api": [
  {
    "type": "get",
    "url": "/fishtanks/:id",
    "title": "Show Fishtank",
    "name": "GetFishtank",
    "group": "Fishtanks",
    "description": "<p>Returns a JSON containing data on a given fishtank</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>id of a fishtank</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "id: 2",
          "type": "String"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"createdAt\": \"23/02/2019 00:06:40\",\n\"id\": 2,\n\"ownerId\": 2,\n\"shoalId\": 5,\n\"status\": {\n  \"name\": \"ONGOING\"\n}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/fishtanks/index.js",
    "groupTitle": "Fishtanks",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/fishtanks/:id"
      }
    ]
  },
  {
    "type": "patch",
    "url": "/fishtanks/:id",
    "title": "Update Fishtank data",
    "name": "PatchFishtank",
    "group": "Fishtanks",
    "description": "<p>Updates a fishtank's settings</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>id of a fishtank</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "type: 1",
          "type": "String"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/fishtanks/index.js",
    "groupTitle": "Fishtanks",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/fishtanks/:id"
      }
    ]
  },
  {
    "type": "post",
    "url": "/fishtanks",
    "title": "Create Fishtank",
    "name": "PostFishtanks",
    "group": "Fishtanks",
    "description": "<p>Creates a new fishtank and returns a JSON containing its id</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "fishtankId",
            "description": "<p>id of the new fishtank</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 OK\n{\n  \"fishtankId\": 3\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/fishtanks/index.js",
    "groupTitle": "Fishtanks",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/fishtanks"
      }
    ]
  }
] });
