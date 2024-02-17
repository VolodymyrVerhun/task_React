import axios from 'axios';
import React, { useState } from 'react';

import style from './Api.module.css';
import { fetchTeachersForCategory, postAvarage } from 'components/apiFunc/api';

export default function Api() {
  const [isLoading, setIsLoading] = useState(false);

  const getCategories = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        'https://test.teaching-me.org/categories/v1/open/categories',
        {
          headers: {
            'Accept-Language': 'en',
          },
        }
      );
      const categories = response.data;
      const categoryIds = categories.map(category => category.code);

      let teachers = [];

      let data = await fetchTeachersForCategory(categoryIds, 0);
      teachers = [...teachers, ...data.teachers];

      const pagesCount = Math.ceil(data.totalResults / data.pageSize);
      for (let i = 1; i <= pagesCount; i++) {
        let data = await fetchTeachersForCategory(categoryIds, i);
        teachers = [...teachers, ...data.teachers];
      }

      const result = categories.reduce((acc, item) => {
        const curentTeachers = teachers.filter(teacher =>
          teacher.categories.find(category => category.name === item.name)
        );

        const sumPrice = curentTeachers.reduce((acc, item) => {
          return item.pricePerHour + acc;
        }, 0);
        const averagePrice = (sumPrice / curentTeachers.length).toFixed(1);
        return [
          ...acc,
          { categoryName: item.name, averagePrice: averagePrice },
        ];
      }, []);

      result.map(async item => {
        await postAvarage(item);
      });
    } catch (error) {
      console.error('Error', error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className={style.block}>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <button className={style.btn} onClick={getCategories}>
            Calculate Average Price
          </button>
        </>
      )}
    </div>
  );
}
