import { useState, useEffect } from 'react';
import axios from 'axios';

function useFetch() {
  const [data, setData] = useState([]);

  async function fetchUrl() {
    const response = await axios(
      'http://api-rest-taskmanager-dojo.herokuapp.com/api/v1/tasks',
      {
        Headers: {
          Authorization:
            'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1ODIzODEzMjQsImV4cCI6MTU4Mjk4NjEyNH0.IahnalAH6hN-mxsAGWyhIP661JQLvPMytIRKyl09Hug'
        }
      }
    );
    console.log(response.data);
    console.log(response.data.results);

    response.data.results ? setData(response.data.results) : setData([]);
  }

  useEffect(() => {
    fetchUrl();
  }, []);
  return [data];
}

export default useFetch;
