const {
  createSlice,
  nanoid,
  current,
  createAsyncThunk,
} = require("@reduxjs/toolkit");

const initialState = {
  users: [],
  userApiData: [],
  //Below code to get the data from in local storeage after page refresh as well
  // users: JSON.parse(localStorage.getItem("users"))
  //   ? JSON.parse(localStorage.getItem("users"))
  //   : [],
};

const Slice = createSlice({
  name: "addUserSlice",
  initialState,
  reducers: {
    addUser: (state, action) => {
      console.log(action);
      const data = {
        id: nanoid(),
        name: action.payload,
      };
      state.users.push(data);
      //Below code to set reduex store data in local storeage
      let userData = JSON.stringify(current(state.users));
      localStorage.setItem("users", userData);
      //console.log(current(state.users));
    },
    removeUser: (state, action) => {
      console.log(action);
      const data = state.users.filter((item) => {
        return item.id !== action.payload;
      });
      state.users = data;

      //Below code to remove in local storeage
      let userData = JSON.stringify(data);
      localStorage.setItem("users", userData);
      //console.log(current(state.users));
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAPIUser.fulfilled, (state, action) => {
      console.log("builder", action);
      state.isLoading = false;
      state.userApiData = action.payload;
    });
  },
});

export const fetchAPIUser = createAsyncThunk("fetchApiUser", async () => {
  //console.log("action");
  const result = await fetch("https://jsonplaceholder.typicode.com/users");
  return result.json();
});

export const { addUser, removeUser } = Slice.actions;
export default Slice.reducer;
