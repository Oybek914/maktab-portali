import axios from "axios";

// Real loyihada backend URL ni .env orqali ulash mumkin
const apiClient = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 6000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const submitAdmissionForm = async (formData) => {
  // Axios orqali so'rov yuborish va lokal saqlash simulyatsiyasi
  const response = await apiClient.post("/posts", {
    school: "Qibray 13-maktab",
    submittedAt: new Date().toISOString(),
    ...formData,
  });

  const existing = JSON.parse(
    localStorage.getItem("qibray13_applications") || "[]",
  );
  localStorage.setItem(
    "qibray13_applications",
    JSON.stringify([{ id: Date.now(), ...formData }, ...existing]),
  );

  return response.data;
};

export const submitContactMessage = async (contactData) => {
  const response = await apiClient.post("/comments", {
    school: "Qibray 13-maktab",
    sentAt: new Date().toISOString(),
    ...contactData,
  });
  return response.data;
};

export default apiClient;
