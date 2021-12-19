import { createSlice } from '@reduxjs/toolkit';
import { ResourceItemType } from '@/Components/ResourceItem';

export type SinceType = 'daily' | 'weekly' | 'monthly';

export const ResourceSlice = createSlice({
  name: 'resource',
  initialState: {
    sourceData: [] as ResourceItemType[],
    language: 'global',
    since: 'daily',
  },
  reducers: {
    fetchResource: (state, action) => {
      const {
        sourceData,
        language = 'global',
        since = 'daily',
      } = action.payload;
      state.sourceData = sourceData;
      state.language = language;
      state.since = since;
    },
    deleteResourceItem: (state, action) => {
      const { resourceItem } = action.payload;
      const newResource = state.sourceData.filter(
        item => item.original_url !== resourceItem.original_url,
      );
      state.sourceData = newResource;
    },
  },
});

export const { fetchResource, deleteResourceItem } = ResourceSlice.actions;

export default ResourceSlice.reducer;
