class BuildFields {
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
}

export default BuildFields