import http from "../http-commons";
class DataService {
  create(data) {
    return http.post("/user", data);
  }
  count(){
    return http.get('/user')
}
}
export default new DataService();