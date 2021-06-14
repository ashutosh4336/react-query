import React from 'react';
import { useQuery } from 'react-query';

function App() {
  const {
    data,
    error,
    isLoading,
    isError,
    isSuccess,
    isFetched,
    isIdle,
    isStale,
  } = useQuery('hello-world', () => {
    return new Promise(function (resolve, reject) {
      // resolve('Stuff worked! 123');
      // resolve(null);
      reject("Reject - Stuff didn't work... !!! 123");
    });
  });

  console.log({ Data: data, error });

  console.log({
    isLoading: isLoading,
    isError: isError,
    isSuccess: isSuccess,
    isFetched: isFetched,
    isIdle: isIdle,
    isStale: isStale,
  });
  console.log('--------------------------');

  return (
    <div className='App'>
      <h1>Ashutosh</h1>
    </div>
  );
}

export default App;
