define({ "api": [
  {
    "type": "get",
    "url": "/fishtanks/interactions/types",
    "title": "Get fishtank interactions types",
    "name": "GetFishtankInteractionTypes",
    "group": "FishtankInteractions",
    "description": "<p>Returns a JSON containing a list of fishtank interaction types</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 OK\n  {\n    \"ACTIVITY_SUBMIT\": 1,\n    \"EMERGENCY_PRESS\": 2\n  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/fishtanks/fishtankInteractionTypes/index.js",
    "groupTitle": "FishtankInteractions",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/fishtanks/interactions/types"
      }
    ]
  },
  {
    "type": "get",
    "url": "/fishtanks/:fishtankId/interactions",
    "title": "Get fishtank's interactions",
    "name": "GetFishtankInteractions",
    "group": "FishtankInteractions",
    "description": "<p>Returns a JSON containing a description of the fishtank's interactions</p>",
    "parameter": {
      "fields": {
        "Param": [
          {
            "group": "Param",
            "type": "Integer",
            "optional": false,
            "field": "fishtankId",
            "description": "<p>id of a fishtank</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "id: 2",
          "type": "Integer"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "type",
            "description": "<p>type of fishtank interaction</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "payload",
            "description": "<p>payload of the fishtank interaction</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 OK\n  {\n    \"emergencyPresses\": 11\n  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/fishtanks/fishtankInteractions/index.js",
    "groupTitle": "FishtankInteractions",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/fishtanks/:fishtankId/interactions"
      }
    ]
  },
  {
    "type": "post",
    "url": "/fishtanks/:fishtankId/interactions",
    "title": "Create fishtank interaction",
    "name": "PostFishtankInteraction",
    "group": "FishtankInteractions",
    "description": "<p>Creates a fishtank interaction and ping relevant users through websockets</p>",
    "parameter": {
      "fields": {
        "Param": [
          {
            "group": "Param",
            "type": "Integer",
            "optional": false,
            "field": "fishtankId",
            "description": "<p>id of a fishtank</p>"
          }
        ],
        "Body": [
          {
            "group": "Body",
            "type": "Integer",
            "optional": false,
            "field": "type",
            "description": "<p>type of fishtank interaction</p>"
          },
          {
            "group": "Body",
            "type": "Object",
            "optional": false,
            "field": "payload",
            "description": "<p>payload of the fishtank interaction</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"id\": 2\n  \"type\": 2\n  \"payload\": {}\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/fishtanks/fishtankInteractions/index.js",
    "groupTitle": "FishtankInteractions",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/fishtanks/:fishtankId/interactions"
      }
    ]
  },
  {
    "type": "get",
    "url": "/fishtanks/:fishtankId",
    "title": "Show Fishtank",
    "name": "GetFishtank",
    "group": "Fishtanks",
    "description": "<p>Returns a JSON containing data on a given fishtank</p>",
    "parameter": {
      "fields": {
        "Param": [
          {
            "group": "Param",
            "type": "Integer",
            "optional": false,
            "field": "fishtankId",
            "description": "<p>id of a fishtank</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "id: 2",
          "type": "Integer"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>creation date of the fishtank</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>of the fishtank</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "ownerId",
            "description": "<p>id of the fishtank's owner</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "shoalId",
            "description": "<p>id of the shoal associated to the fishtank</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "status",
            "description": "<p>status of the fishtank</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status.name",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  {\n    \"createdAt\": \"23/02/2019 00:06:40\",\n    \"id\": 2,\n    \"ownerId\": 2,\n    \"shoalId\": 5,\n    \"status\": {\n      \"name\": \"ONGOING\"\n    }\n  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/fishtanks/index.js",
    "groupTitle": "Fishtanks",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/fishtanks/:fishtankId"
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
        "Param": [
          {
            "group": "Param",
            "type": "Integer",
            "optional": false,
            "field": "fishtankId",
            "description": "<p>id of a fishtank</p>"
          }
        ],
        "Body": [
          {
            "group": "Body",
            "type": "Integer",
            "optional": false,
            "field": "type",
            "description": "<p>type of patch request</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"id\": 1\n  \"type\": 1\n}",
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
          "content": "HTTP/1.1 201 OK\n  {\n    \"fishtankId\": 3\n  }",
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
  },
  {
    "type": "get",
    "url": "/",
    "title": "Show routes",
    "name": "GetRoutes",
    "group": "Routes",
    "description": "<p>Show the basic API routes</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "fishtanks",
            "description": "<p>URL to access fishtanks</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users",
            "description": "<p>URL to access users</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 OK\n  {\n    \"fishtanks\": \"/api/fishtanks\",\n    \"users\": \"/api/users\",\n  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/index.js",
    "groupTitle": "Routes",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/"
      }
    ]
  },
  {
    "type": "get",
    "url": "/shoals",
    "title": "",
    "name": "GetShoals",
    "group": "Shoals",
    "description": "<p>Returns a JSON containing the list of Teamy shoals</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n  {\n    id: 1,\n    name: 'EBM'\n  }, {\n    id: 2,\n    name: 'Maestro'\n  }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/shoals/index.js",
    "groupTitle": "Shoals",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/shoals"
      }
    ]
  },
  {
    "type": "get",
    "url": "/users",
    "title": "",
    "name": "GetUsers",
    "group": "Users",
    "description": "<p>Returns a JSON containing the list of Teamy users</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n  {\n    name: 'BDH',\n    id: 0,\n  }, {\n    name: 'Hamza',\n    id: 1,\n    shoalId: 5,\n  }, {\n    name: 'Batou',\n    id: 2,\n    shoalId: 99999,\n  }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/users/index.js",
    "groupTitle": "Users",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/users"
      }
    ]
  }
] });
