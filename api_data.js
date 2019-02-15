define({ "api": [
  {
    "type": "get",
    "url": "/",
    "title": "Hello APIGUI",
    "name": "GetApiHome",
    "group": "Static_Pages",
    "description": "<p>This URL displays a simple Hello</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\nHello, je suis l'APIGUI!",
          "type": "html"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/index.js",
    "groupTitle": "Static_Pages",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/"
      }
    ]
  },
  {
    "type": "get",
    "url": "/fishtanks/:id",
    "title": "Gets fishtank data",
    "name": "GetFishtank",
    "group": "Static_Pages",
    "description": "<p>This URL displays data about a given fishtank</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Number identifying the fishtank</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "id: 1",
          "type": "String"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\nHello, 1!",
          "type": "html"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/fishtanks/index.js",
    "groupTitle": "Static_Pages",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/fishtanks/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/fishtanks/:id/interactions",
    "title": "Get fishtank interactions",
    "name": "GetFishtankInteractions",
    "group": "Static_Pages",
    "description": "<p>This URL displays data about a given fishtank interactions</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Number identifying the fishtank</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "id: 1",
          "type": "String"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\nFishtank 1 interactions :",
          "type": "html"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/fishtanks/fishtankInteractions/index.js",
    "groupTitle": "Static_Pages",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/fishtanks/:id/interactions"
      }
    ]
  },
  {
    "type": "get",
    "url": "/fishtanks",
    "title": "Get fishtanks",
    "name": "GetFishtanks",
    "group": "Static_Pages",
    "description": "<p>This URL displays the current list of fishtanks</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\nFishtanks list:",
          "type": "html"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/fishtanks/index.js",
    "groupTitle": "Static_Pages",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/fishtanks"
      }
    ]
  },
  {
    "type": "post",
    "url": "/fishtanks",
    "title": "Post fishtank",
    "name": "PostFishtanks",
    "description": "<p>This URL receives new fishtank declarations</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "html"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/fishtanks/index.js",
    "group": "_home_travis_build_EBM2018_TenuGUI_backend_src_api_fishtanks_index_js",
    "groupTitle": "_home_travis_build_EBM2018_TenuGUI_backend_src_api_fishtanks_index_js",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/fishtanks"
      }
    ]
  }
] });
