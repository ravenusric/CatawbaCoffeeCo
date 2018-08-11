import axios from "axios";

export default {
  getSubmissions: function() {
    return axios.get("/api/submissions");
  },
  deleteSubmissions: function(id) {
    return axios.delete("/api/submssions/" + id);
  },
  saveSubmissions: function(submissionsData) {
    return axios.post("/api/submissions", submissionsData);
  }
};
