import axios from "axios";

const instance = axios.create({
  baseURL: "https://biz.nanosemantics.ru/api/2.1/json",
});

const chatAPI = {
  initChat(data) {
    return instance.post(`Chat.init`, {
      ...data,
    });
  },
  eventChat(data) {
    return instance.post(`Chat.event`, {
      ...data,
    });
  },
  requestChat(data) {
    return instance.post(`Chat.request`, {
      ...data,
    });
  },
};

export { chatAPI };
