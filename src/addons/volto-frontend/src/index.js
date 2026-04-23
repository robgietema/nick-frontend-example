import reducers from './reducers';
import Assistant from './components/Assistant/Assistant';
import VideoView from './components/View/VideoView';

const applyConfig = (config) => {
  config.addonReducers = { ...config.addonReducers, ...reducers };
  config.settings = {
    ...config.settings,
    appExtras: [
      ...config.settings.appExtras,
      {
        match: '',
        component: Assistant,
      },
    ],
  };
  config.views.contentTypesViews.Video = VideoView;
  return config;
};

export default applyConfig;
