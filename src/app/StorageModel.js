const getDefaultConfig = () => ({
    name: 'some-store-name', // Used as DB name in IDB or WebSQL, and prefix in LocalStorage
    size: 4980736 // 4.75 MB, WebSQL only
  })
  
  export default class Storage {
    constructor(storage, config) {
      this.storage = storage
      this.config(config)
    }
  
    setItem(...args) {
      try {
        return this.storage.setItem(...args)
      } catch (e) {
        console.log('setItem - Executing on SSR')
      }
    }
  
    getItem(...args) {
      try {
        return this.storage.getItem(...args)
      } catch (e) {
        console.log('getItem - Executing on SSR')
      }
    }
  
    removeItem(...args) {
      try {
        return this.storage.removeItem(...args)
      } catch (e) {
        console.log('removeItem - Executing on SSR')
      }
    }
  
    length() {
      try {
        return this.storage.length()
      } catch (e) {
        console.log('length - Executing on SSR')
      }
    }
  
    async config({ ...restConfig }) {
      const { driver, ...localForageConfig } = {
        ...getDefaultConfig(),
        ...restConfig
      }
  
      this.storage.config(localForageConfig)
  
      if (driver !== undefined) {
        try {
          await this.storage.ready()
          this.storage.setDriver(driver)
        } catch (e) {
          console.log('Storage on SSR Mode')
        }
      }
    }
  
    keys() {
      try {
        return this.storage.keys()
      } catch (e) {
        console.log('Keys - Executing on SSR')
      }
    }
  
    clean() {
      try {
        return this.storage.clean()
      } catch (e) {
        console.log('Clean - Executing on SSR')
      }
    }
  }