import log4js from 'log4js'; // include log4js

log4js.configure({
  "appenders": {
    "console": { "type": "console" },
    "file": {
      "type": "file",
      "filename": "logs/app.log",
      "maxLogSize": 10485760, // 10MB
      "backups": 3,
      "compress": true
    }
  },
  "categories": {
    "default": { "appenders": ["console", "file"], "level": "ALL" }
  }
});

const logger = log4js.getLogger("Polestar-Automation-Framework");

export default logger;