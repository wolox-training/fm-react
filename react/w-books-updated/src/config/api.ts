import { create } from 'apisauce';

const baseURL = 'https://books-training-rails.herokuapp.com/api/v1/';

if (baseURL === 'https://books-training-rails.herokuapp.com/api/v1/') {
  console.warn('API baseURL has not been properly initialized'); // eslint-disable-line no-console
}

const STATUS_CODES = {
  unauthorized: 401,
  success: 200
};

const api = create({
  /*
   * TODO Add this if you need it
   * baseURL: process.env.API_BASE_URL,
   */
  baseURL,
  timeout: 15000
});

// eslint-disable-next-line no-unused-vars prettier/prettier, @typescript-eslint/no-unused-vars
  api.addMonitor(response => {
    if (response.status === STATUS_CODES.unauthorized) {
      /*
       * TODO: These callbacks should only be called if no other callback was asigned for the response.
       * - dispatch(alertActions.error(i18next.t('apiErrors:expired')));
       */
    }
  });

  api.addResponseTransform(response => {
    if(response.status !== STATUS_CODES.success) {
      throw response.data;
    }
  });

export default api;