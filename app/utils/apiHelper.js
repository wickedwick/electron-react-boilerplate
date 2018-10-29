import token from './tokenHelper';

export const apiBaseUrl =
  'https://krakenreview.civicplus.com/api/apps/wickham1/';

export const getContentItemsByTypeAsync = async ({
  type,
  skip,
  top,
  search,
  orderBy
}) => {
  let oDataQueryString = '?';
  if (top) {
    oDataQueryString += `top=${top}`;
  }
  if (skip) {
    oDataQueryString += `skip=${skip}`;
  }
  if (search) {
    oDataQueryString += `search=%22${search}%22`;
  }
  if (orderBy) {
    oDataQueryString += `orderBy=${orderBy}`;
  }
  if (oDataQueryString === '?') oDataQueryString = '';
  const endpoint = `/api/content/${token.appName}/${type}${oDataQueryString}`;
  const reqHeaders = new Headers();
  reqHeaders.append('Content-Type', 'application/x-www-form-urlencoded');
  reqHeaders.append('Authorization', token.access_token);

  const reqInit = {
    method: 'GET',
    headers: reqHeaders,
    mode: 'cors',
    credentials: 'same-origin',
    cache: 'no-cache'
  };

  const url = `${this.apiBaseUrl}${endpoint}`;
  return fetch(url, reqInit);
};
