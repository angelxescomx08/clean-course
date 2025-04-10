import axios from "axios";

export class HttpClient {
  // async get(url: string) {
  //   const { data } = await axios.get(url);
  //   return { data };
  // }

  async get(url: string) {
    const response = await fetch(url);
    const data = await response.json();
    return { data };
  }
}
