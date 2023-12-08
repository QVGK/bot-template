import fs from "fs";

export default function () {
    const configFile = "src/config.json";

    const parsedConfig = JSON.parse(fs.readFileSync(configFile));
    return parsedConfig;
}
