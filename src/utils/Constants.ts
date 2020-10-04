import { PersistConfig, Storage } from "redux-persist";

const Constants = {
  NAME_APP: 'React-Redux'
}

export function persistConfig(key:string, storage:Storage, whitelist?:string[], blaclist?:string[]) {
  const config:PersistConfig<any> = {
    key,
    storage,
    whitelist: whitelist || [''],
    blacklist: blaclist || [''],
  }
  return config;
}

export default Constants;