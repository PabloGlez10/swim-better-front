class Level {
  constructor(axios){
    this.axios = axios
  }

  async list() {
    try {
      const response = await this.axios.get("/levels");

      return response.data
    }catch (error){
      throw error
    }
  }
}

export default Level