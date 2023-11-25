import { authSlice } from "./authSlice/authSlice";
import { catalogosSlice } from "./catalogos/catalogosSlice";
import { configuracionTemaSlice } from "./configuracionTemaSlice/configuracionTemaSlice";
import { userSlice } from "./user/userSlice";

export const sliceRoot = {
  configuracionTema: configuracionTemaSlice.reducer,
  auth: authSlice.reducer,
  catalogos: catalogosSlice.reducer,
  user: userSlice.reducer,
};
