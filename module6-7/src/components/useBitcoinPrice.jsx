import { useEffect, useReducer } from 'react';

const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];

const initialState = {
  bitcoinPrice: null,
  loading: true,
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return {
        ...state,
        bitcoinPrice: action.payload,
        loading: false,
      };
    case 'FETCH_ERROR':
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

function useBitcoinPrice(currency) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    let isMounted = true;

    const fetchBitcoinPrice = async () => {
      try {
        const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`);
        const data = await response.json();
        if (isMounted) {
          dispatch({ type: 'FETCH_SUCCESS', payload: data.bitcoin[currency] });
        }
      } catch (error) {
        console.error('Error fetching Bitcoin price:', error);
        if (isMounted) {
          dispatch({ type: 'FETCH_ERROR', payload: error.message });
        }
      }
    };

    fetchBitcoinPrice();

    return () => {
      isMounted = false;
    };
  }, [currency]);

  return state;
}

export default useBitcoinPrice;
