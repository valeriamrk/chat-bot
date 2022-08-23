import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { chatAPI } from "../services/api";
import { v4 as uuidv4 } from "uuid";


const chatConfig = {
  uuid: "772c9859-4dd3-4a0d-b87d-d76b9f43cfa4",
};

export const initChatAsync = createAsyncThunk(
  "bot/initChatAsync",
  async (params, { rejectWithValue }) => {
    try {
      const initResponse = await chatAPI.initChat({ uuid: chatConfig.uuid });
      const eventResponse = await chatAPI.eventChat({
        cuid: initResponse.data.result.cuid,
        euid: "00b2fcbe-f27f-437b-a0d5-91072d840ed3",
      });
      return eventResponse.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const requestChatAsync = createAsyncThunk(
  "bot/requestChatAsync",
  async (params, { rejectWithValue }) => {
    try {
      const response = await chatAPI.requestChat({
        cuid: params.cuid,
        text: params.message,
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const setError = (state, action) => {
  state.isLoading = false;
  state.hasError.status = "rejected";
  state.hasError.error = action.payload;
};

const initialState = {
  chatHistory: [],
  cuid: null,
  isLoading: false,
  hasError: null
};

export const messageDataSlice = createSlice({
  name: "messageData",
  initialState,
  reducers: {
    addHumanMessageToChatHistory(state, action) {
      state.chatHistory.push({ message: action.payload, isHuman: true, id: uuidv4() });
    },
    addBotMessageToChatHistory(state, action) {
      state.chatHistory.push({ message: action.payload, isHuman: false, id: uuidv4() });
    },
    clearChatData(state, action) {
      state.chatHistory = [];
      state.cuid = "";
    }
  },
  extraReducers: {
    [initChatAsync.pending]: (state, action) => {
      state.isLoading = true;
    },
    [initChatAsync.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.cuid = action.payload.result.cuid;
      state.chatHistory.push({
        message: action.payload.result.text.value,
        isHuman: false,
        id: uuidv4()
      });
    },
    [initChatAsync.rejected]: setError,
    [requestChatAsync.fulfilled]: (state, action) => {
      state.chatHistory.push({
        message: action.payload.result.text.value,
        isHuman: false,
        id: uuidv4()
      });
    },
    [requestChatAsync.rejected]: setError,
  },
});

export const { addHumanMessageToChatHistory, addBotMessageToChatHistory, clearChatData } =
  messageDataSlice.actions;

export default messageDataSlice.reducer;
