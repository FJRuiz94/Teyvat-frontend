class Artifact {
  constructor(axios) {
      this.axios = axios
  }

  async list() {
      try {
          const response = await this.axios.get("artifacts");

          return response.data
      } catch (error) {
          throw error
      }
  }
}

export default Artifact