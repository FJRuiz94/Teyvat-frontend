class Build {
  constructor(axios) {
      this.axios = axios
  }

  async list() {
      try {
          const response = await this.axios.get("builds");

          return response.data
      } catch (error) {
          throw error
      }
  }
  async save(buildData){
    try {
        // const token = store.state.token
        // const config = {
        //     headers: {
        //       Authorization: `Bearer ${token}`,
        //     },
        // }

        const config = {}
    
        const response = await this.axios.post("builds/newBuild", buildData, config)
        
        return response.data
    }catch(error){
        throw error
    }        
}
  async getOne(title){
      try{
        const response = await this.axios.get(`builds/${title}`);

        return response.data
      } catch (error) {
          throw error
      }
  }
}

export default Build