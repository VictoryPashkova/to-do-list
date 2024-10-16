const getRandom = (): number => {
    const min = 20000;
    const max = 1000000;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  export const getUniqueId = (): string => {
    const ids = localStorage.getItem('ids');
    let id = getRandom();
    while (ids?.includes(String(id))) {
      id = getRandom();
    }
    if (ids) {
      localStorage.setItem('ids', ids + ',' + String(id));
    } else {
      localStorage.setItem('ids', String(id));
    }
    return String(id);
};
