class Exercise {
  constructor(axios){
    this.axios = axios
  }

  async list() {
    try {
      const response = await this.axios.get("/exercises");

      return response.data
    }catch (error){
      throw error
    }
  }
}

export default Exercise