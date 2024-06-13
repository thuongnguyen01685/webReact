import { configureStore } from "@reduxjs/toolkit";
import systemReducer from "./reducers/system.reducer";

export default configureStore({
  reducer: {
    system: systemReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});
