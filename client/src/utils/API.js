import axios from "axios";

export default {
  // Gets all books
  getSubmissions: function() {
    return axios.get("/api/submissions");
  },
  // Deletes the book with the given id
  deleteSubmissions: function(id) {
    return axios.delete("/api/submssions/" + id);
  },
  // Saves a book to the database
  saveSubmissions: function(bookData) {
    return axios.post("/api/submissions", bookData);
  }
};
