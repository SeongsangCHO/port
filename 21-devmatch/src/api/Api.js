const END_POINT = `https://zl3m4qq0l9.execute-api.ap-northeast-2.amazonaws.com/dev/`;
const FILE_END_POINT = `https://fe-dev-matching-2021-03-serverlessdeploymentbuck-t3kpj3way537.s3.ap-northeast-2.amazonaws.com/public/`;

const request = async (url) => {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error("ERROR");
    } else {
      return res.json();
    }
  } catch (err) {
    console.error(err);
  }
};

export const api = {
  fetchContent: async () => {
    return await request(`${END_POINT}`);
  },
  fetchContentById: async (id) => {
    return await request(`${END_POINT}${id}`);
  },
  fetchFile: async (filePath) => {
    return await request(`${FILE_END_POINT}${filePath}`);
  }
};
