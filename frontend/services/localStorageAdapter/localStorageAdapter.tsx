import { AsyncStorage } from "@tanstack/react-query-persist-client";

const localStorageAdapter:AsyncStorage = {
    getItem:(key: string)=>Promise.resolve(window.localStorage.getItem(key)),
    setItem: (key: string, value: string) =>Promise.resolve(window.localStorage.setItem(key,value)),
    removeItem: (key: string) => Promise.resolve(window.localStorage.removeItem(key))
}

export default localStorageAdapter;