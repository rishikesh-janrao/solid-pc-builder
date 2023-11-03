import navigation from "../config/navigation.json";

// Add config json file imports in below object
const configs = { navigation };

export const getProperty = (config_name) => {
  return configs[config_name];
};
