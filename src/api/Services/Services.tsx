import axios from 'axios'

class Services {
	private URL = 'https://ddragon.leagueoflegends.com/cdn/14.23.1/data/en_US/champion/'

	getChampion (name: string) {
		return axios.get(`${this.URL}${name}.json`)
	}
	getIcon (spell: string) {
		return axios
      .get(`https://ddragon.leagueoflegends.com/cdn/14.23.1/img/spell/${spell}.png`, { responseType: 'arraybuffer' })
      .then(response => {
        const base64Image = Buffer.from(response.data, 'binary').toString('base64')
        return `data:image/png;base64,${base64Image}` // Возвращаем base64 строку картинки
      })
	}
}

export const services =  new Services()