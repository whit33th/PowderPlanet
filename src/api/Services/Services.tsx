import axios from 'axios'

class Services {
	private URL = 'https://ddragon.leagueoflegends.com/cdn/14.23.1/data/en_US/champion/'

	async getChampion (name: string) {
		return axios.get(`${this.URL}${name}.json`)
	}
	
}

export const services =  new Services()