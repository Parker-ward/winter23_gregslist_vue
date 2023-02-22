import { AppState } from "../AppState.js";
import { api } from "./AxiosService.js";

class HousesService {

  async getHouses() {
    const res = await api.get('auth/api/houses')
    console.log('[getting houses...?]', res.data);
    AppState.houses = res.data
    console.log(AppState.houses);
  }

  async createHouse(houseData) {
    const res = await api.post('auth/api/houses', houseData)
    AppState.houses.push(res.data)
    return res.data
  }
}


export const housesService = new HousesService()