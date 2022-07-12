import request from "../utils/requers";

// /captcha

export const CapLogin = () => {
  return request.get("/captcha");
};

export const LoginList = (data) => {
  return request({
    url: `/login?username=${data.username}&password=${data.password}&code=${data.code}&token=${data.token}`,
    method: "POST",
    data,
  });
};

// export const MenuList = (data) => {
//   return request({
//     url: "",
//     method: "GET",
//     data,
//   });
// };
