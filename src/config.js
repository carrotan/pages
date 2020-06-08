// 通用接口部分

export const apiCfg = {
  cfg: 'http://13.67.115.173/',
};

export const requestCfg = {
  method: 'post',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: '',
};

export async function commFetch(router, token, payload) {
  const url = `${apiCfg.cfg}${router}`;
  const temp = payload;
  temp.token = token;
  const cfg = requestCfg;
  cfg.body = JSON.stringify(temp);
  const rst = await fetch(url, cfg).then(rsb => (rsb.json()));
  // console.info(23, rst);
  return rst;
}
