import storage from "../services/storage";

export const initialAuth = {
  isFetched: false,
  isAuthenticated: false,
  data: {},
  token: storage.get("token"),
};

const authReducer = (set, get) =>{
  return {
    signIn:(action)=>{
      return set((state)=>{
        return {
          ...state,
          auth: {
          // ...state?.auth,
          isFetched: true,
          isAuthenticated:true,
          data:action?.data,
          token:action?.token,
          }
        }
      })
    }
  }
}

export default authReducer