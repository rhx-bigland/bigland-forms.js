/* raw collection */
const raw = {};
const raw_collection = Object.keys(raw).map(key => raw[key]);

export {
    raw as map,
    raw_collection as collection
};
