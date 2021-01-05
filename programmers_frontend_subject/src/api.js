const API_ENDPOINT =
  "https://oivhcpn8r9.execute-api.ap-northeast-2.amazonaws.com/dev";
// iyFN2mF8l

async function request(url) {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      const errorData = await response.json();
      throw errorData;
    }
  } catch (e) {
    throw {
      message : e.message,
      status : e.status,
    }
  }
}

const api = {
  fetchCats: async (keyword) => {
    try {
      const specifies = await request(
        `${API_ENDPOINT}/api/cats/search?q=${keyword}`
      );
      const requests = specifies.data.map(
        async (specify) =>{
          return await request(`${API_ENDPOINT}/api/cats/${specify.id}`)}
      );
      const result = await Promise.all(requests);
      return {
        data:result,
        isError: false,
      };
    } catch (e) {
      return {
        data: e,
        isError:true
      }
    }
  },
};
