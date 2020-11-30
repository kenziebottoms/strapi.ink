const { REACT_APP_API_URL } = process.env

export const art = {
  fetchAll() {
    return fetch(`${REACT_APP_API_URL}/art`)
      .then(response => response.json())
      .then(json => {
        if (!Array.isArray(json)) json = [json]
        return json
      })
  },
}