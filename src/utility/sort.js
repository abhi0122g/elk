function sortData(data, key, order = 'asc') {
    return data.slice().sort((a, b) => {
      const valueA = typeof a[key] === 'string' ? a[key].toLowerCase() : a[key];
      const valueB = typeof b[key] === 'string' ? b[key].toLowerCase() : b[key];
      
      if (order === 'desc') {
        if (valueA < valueB) return 1;
        if (valueA > valueB) return -1;
        return 0;
      } else {
        if (valueA < valueB) return -1;
        if (valueA > valueB) return 1;
        return 0;
      }
    });
  }

export default sortData;