class Character {
  constructor(axios) {
      this.axios = axios
  }

  async list() {
      try {
          const response = await this.axios.get("characters");

          return response.data
      } catch (error) {
          throw error
      }
  }
  async getOne(name){
      try{
        const response = await this.axios.get(`characters/${name}`);

        return response.data
      } catch (error) {
          throw error
      }
  }
}

export default Character