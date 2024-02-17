import axios from 'axios';
import Notiflix from 'notiflix';

export const fetchTeachersForCategory = async (categoryIds, page) => {
  try {
    const response = await axios.post(
      'https://test.teaching-me.org/categories/v1/open/search',
      {
        categories: categoryIds,
        page: page,
        pageSize: 10,
      },
      {
        headers: {
          'Accept-Language': 'en',
          'Content-Type': 'application/json',
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error('Error', error);
  }
};

export const postAvarage = async item => {
  try {
    const response = await axios.post(
      'https://test.teaching-me.org/categories/v1/open/average-price',

      item,

      {
        headers: {
          'Accept-Language': 'en',
          'Content-Type': 'application/json',
        },
      }
    );
    Notiflix.Notify.success(`Published!`);
    return response.data;
  } catch (error) {
    console.error('Error', error);
  }
};
