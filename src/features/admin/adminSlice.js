import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Salmaan",
  email: "salmaan@mail.com",
  avatar: "",
  role: "admin",
  token: "",
};

const authSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    setAdminData: (state, action) => {
      state.admin = action.payload;
    },
  },
});

export const { setAdminData } = authSlice.actions;

export default authSlice.reducer;
