var APP_DATA = {
  "scenes": [
    {
      "id": "0-1",
      "name": "1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.01935134592428156,
        "pitch": 0.026499659755323535,
        "fov": 1.302560254729252
      },
      "linkHotspots": [
        {
          "yaw": 0.27694079615082856,
          "pitch": 0.0226293930126662,
          "rotation": 0,
          "target": "1-2"
        },
        {
          "yaw": -0.39771358282114555,
          "pitch": 0.010064935196222535,
          "rotation": 0,
          "target": "2-4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-2",
      "name": "2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.302560254729252
      },
      "linkHotspots": [
        {
          "yaw": -0.2282080012465144,
          "pitch": 0.04650621132158861,
          "rotation": 0,
          "target": "2-4"
        },
        {
          "yaw": -1.873382442699313,
          "pitch": 0.06511044885671424,
          "rotation": 0,
          "target": "0-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-4",
      "name": "4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.03372941645017846,
        "pitch": -0.029149625730855888,
        "fov": 1.302560254729252
      },
      "linkHotspots": [
        {
          "yaw": 0.3348286039323831,
          "pitch": -0.0869654381903473,
          "rotation": 0,
          "target": "1-2"
        },
        {
          "yaw": 1.507649121807419,
          "pitch": -0.05074083432368326,
          "rotation": 0,
          "target": "0-1"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
